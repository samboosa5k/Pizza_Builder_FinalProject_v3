<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Pizza;
use App\PizzaIngredient;
use App\PizzaOrderIngredient;
use Carbon\Carbon;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\EmailController;

class OrderController extends Controller
{
    public function index($status)
    {
        $orders = Order::where('status', 'in_progress')
            ->with('pizzas');   // GET orders with status in_progress

        $orders = $orders->get();
        $orderids = $orders->pluck('id'); //    Now we have all order ids, we need pizza-ids

        $pizza_ids = Pizza::whereIn('order_id', $orderids)->pluck('pizza_id');  //  Get ingredients only of in_progress pizzas

        $in_progress_ingredients = PizzaIngredient::leftJoin('pizza_order_ingredients', 'pizza_ingredients.id', '=', 'pizza_order_ingredients.ingredient_id')
            ->leftJoin('pizzas', 'pizza_order_ingredients.pizza_id', '=', 'pizzas.pizza_id')
            ->whereIn('pizzas.pizza_id', $pizza_ids)
            ->get(); //  Get ingredients only of in_progress pizzas

        return [
            'orders' => $orders,
            'items' => $in_progress_ingredients,
        ];
    }

    public function show($id)
    {
        /* $order = Order::where('id', $id)->with('pizzas')->get(); */

        $order = Order::where('id', $id);   // GET orders with status in_progress

        $order = $order->get();
        $orderids = $order->pluck('id'); //    Now we have all order ids, we need pizza-ids

        $pizza_ids = Pizza::whereIn('order_id', $orderids)->pluck('pizza_id');  //  Get ingredients only of in_progress pizzas

        $in_progress_ingredients = PizzaIngredient::leftJoin('pizza_order_ingredients', 'pizza_ingredients.id', '=', 'pizza_order_ingredients.ingredient_id')
            ->leftJoin('pizzas', 'pizza_order_ingredients.pizza_id', '=', 'pizzas.pizza_id')
            ->whereIn('pizzas.pizza_id', $pizza_ids)
            ->get(); //  Get ingredients only of in_progress pizzas

        return [
            'orders' => $order,
            'items' => $in_progress_ingredients,
        ];
    }

    public function store(Request $request)
    {
        $newPizza = new Pizza();
        $newOrder = new Order();
        $newPizzaId = $newPizza->max('pizza_id') + 1;
        $newOrderId = $newOrder->max('id') + 1;

        //  General
        $newPizza->pizza_id = $newPizzaId;
        $newPizza->user_id = 1;
        $newPizza->order_id = $newOrderId = $newOrder->max('id') + 1;

        $newPizza->save();

        //  General
        $newOrder->order_price = $request->input('order.item.price');
        $newOrder->created_at = Carbon::now('Europe/Amsterdam')->toDateTimeString();

        //  Customer contact details
        $newOrder->first_name = $request->input('first_name');
        $newOrder->last_name = $request->input('last_name');
        $newOrder->email = $request->input('email');
        $newOrder->phone_number = $request->input('phone_number');
        $newOrder->street_and_housenumber = $request->input('street_and_housenumber');
        $newOrder->postcode = $request->input('postcode');
        $newOrder->city = $request->input('city');

        $newOrder->save();

        //  Order ingredient details
        $ingredients_array = $request->input('order.item.ingredient_ids');
        $ingredients_insert = [];

        foreach ($ingredients_array as $key => $value) {
            $ingredients_insert[] = [
                'pizza_id' => $newPizzaId,
                'ingredient_id' => $value
            ];
        }

        PizzaOrderIngredient::insert($ingredients_insert);

        return ['order_id' => $newOrderId]; //  Return new order id
    }

    public function update(Request $request)
    {
        Order::where('id', $request->input('id'))->update(['status' => 'complete']);


        return ['operation' => $request->input('operation'), 'id' => $request->input('id')];
    }
}
