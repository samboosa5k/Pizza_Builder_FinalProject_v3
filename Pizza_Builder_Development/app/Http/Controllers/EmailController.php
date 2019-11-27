<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Mailable;

use App\Mail\OrderConfirmedEmail;
use App\Mail\OrderCompleteEmail;
use App\Mail\OrderCancelledEmail;
use App\Order;

class EmailController extends Controller
{
    public function index($id)
    {
        $order = Order::where('id', $id)->get();

        $name = $order->pluck('first_name');
        $time = $order->pluck('created_at');
        $email = $order->pluck('email');
        $status = $order->pluck('status');

        Mail::to($email)
            ->send(new OrderConfirmedEmail($name, $time, $id, $status));

        // Mail::to($email)
        //     ->send(new OrderConfirmedEmail());

        //return ['message' => 'Mail successfully sent!'];
    }

    public function complete(Request $request)
    {
        $order = Order::where('id', $request->input('id'))->get();

        $name = $order->pluck('first_name');
        $email = $order->pluck('email');


        Mail::to($email)
            ->send(new OrderCompleteEmail($name, $request->input('id')));
    }

    /*  public function cancelled($id)
    {
        $order = Order::where('id', $id)->get();

        $name = $order->pluck('first_name');
        $email = $order->pluck('email');

        Mail::to($email)
            ->send(new OrderCancelledEmail($name, $id));
    } */
}
