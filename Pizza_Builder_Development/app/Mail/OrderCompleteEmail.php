<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderCompleteEmail extends Mailable
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
    public function __construct($name, $id)
    {
        $this->admin_email = 'jasper.verbon@gmail.com';
        $this->subject = 'Pizza Builder: Order #' . $id . ' Complete !';

        $this->first_name = $name;

        $this->order_id = $id;
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
                'emails.order_complete',
                [
                    'email' => $this->admin_email,
                    'name' => $this->first_name,
                    'order_id' => $this->order_id,
                ]
            );
    }
}
