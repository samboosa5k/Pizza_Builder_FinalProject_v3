<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderConfirmedEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $admin_email;
    public $subject;

    public $first_name;

    public $order_id;
    public $status;
    public $order_time;
    public $order_date;



    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $time, $id, $status)
    {
        $this->admin_email = 'jasper.verbon@gmail.com';
        $this->subject = 'Pizza Builder: Order #' . $id . ' Received :D';

        $this->first_name = $name;

        $this->order_id = $id;
        $this->status = $status;

        $time_and_date = explode(" ", $time);

        $this->order_time = $time_and_date[0];
        $this->order_date = $time_and_date[1];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->admin_email)
            ->view(
                'emails.order_confirmed',
                [
                    'email' => $this->admin_email,
                    'name' => $this->first_name,
                    'order_id' => $this->order_id,
                    'time' => $this->order_time,
                    'date' => $this->order_date,
                    'status' => $this->status,
                ]
            );
    }
}
