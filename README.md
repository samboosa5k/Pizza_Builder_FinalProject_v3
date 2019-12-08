# Pizza_Builder_FinalProject_v3

- Install notes:
This project has gone through a lot of changes and as such, the depencies are sometimes missing/not up to date :/
From a fresh clone, I still managed to get it working like this:

1. Type this in command line:

npm install

...then...

composer install --ignore-platform-reqs


2. As public folder is git-ignored, copy this into '/public/index.php' (if that file doesn't exist, create it)

// START OF CODE

    <?php

    define('LARAVEL_START', microtime(true));

    require __DIR__.'/../vendor/autoload.php';

    $app = require_once __DIR__.'/../bootstrap/app.php';

    $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

    $response = $kernel->handle(
        $request = Illuminate\Http\Request::capture()
    );

    $response->send();

    $kernel->terminate($request, $response);

//  END OF CODE

3. (Optional) Change in file 'vendor/laravel/framework/src/Illuminate/Foundation/Console/ServeCommand.php'

Line 43: 

    chdir(public_path());

...to...

    chdir('/');
