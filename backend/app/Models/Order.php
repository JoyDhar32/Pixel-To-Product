<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'total',
        'status',
        'product_name',
        'product_category',
        'quantity',
        'product_details',
    ];
    protected $casts = [
        'product_details' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shippings()
    {
        return $this->hasMany(Shipping::class);
    }

}
