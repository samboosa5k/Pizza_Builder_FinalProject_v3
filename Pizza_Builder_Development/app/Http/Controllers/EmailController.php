<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

use App\Mail\OrderConfirmedEmail;
use App\Order;
use App\Mail\TestEmail;

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
}
