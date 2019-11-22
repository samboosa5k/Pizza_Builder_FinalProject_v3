<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PizzaOrderIngredient extends Model
{
    protected $table = 'pizza_order_ingredients';

    protected $fillable = ['pizza_id', 'ingredient_id'];

    public $timestamps = false;

    public function pizza()
    {
        return $this->belongsTo('App\Pizza');
    }

    public function order()
    {
        return $this->belongsTo('App\Order');
    }
}
