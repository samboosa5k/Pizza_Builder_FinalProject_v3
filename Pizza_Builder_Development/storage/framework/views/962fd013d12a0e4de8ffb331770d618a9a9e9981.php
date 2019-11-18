<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>
    <link rel="stylesheet" href="<?php echo e(asset('css/app.css')); ?>">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>Pizza Builder Login</title>
</head>

<body>
    <?php echo csrf_field(); ?>
    <div id="app"></div>
</body>

</html>
<?php /**PATH C:\web\Pizza_Builder_FinalProject_v2\Pizza_Builder_Development\resources\views/index.blade.php ENDPATH**/ ?>