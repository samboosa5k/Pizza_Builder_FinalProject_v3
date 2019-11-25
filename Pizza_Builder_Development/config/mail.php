<?php

//  THIS WORKS
/* return [
    "driver" => "smtp",
    "host" => "smtp.mailtrap.io",
    "port" => 2525,
    "from" => array(
        "address" => "from@example.com",
        "name" => "Example"
    ),
    "username" => "a09df583482b1a",
    "password" => "7a832cdb5825f0",
    "sendmail" => "/usr/sbin/sendmail -bs"
];
 */
//  THIS DOES NOT
// UPDATE: php artisan config:cache --> solved it
return [

    'driver' => env('MAIL_DRIVER', 'smtp'),
    'host' => env('MAIL_HOST', 'smtp.mailtrap.io'),
    'port' => env('MAIL_PORT', 2525),
    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'jasper.verbon@gmail.com'),
        'name' => env('MAIL_FROM_NAME', 'Pizza_Builder_Admin'),
    ],

    'username' => env('MAIL_USERNAME', 'a09df583482b1a'),
    'password' => env('MAIL_PASSWORD', '7a832cdb5825f0'),

    'sendmail' => '/usr/sbin/sendmail -bs'
];
