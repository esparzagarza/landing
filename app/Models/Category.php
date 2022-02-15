<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function getPublishedAtAttribute()
    {
        return $this->updated_at->format('d/m/y');
    }

    public function inventory()
    {
        return $this->hasMany(Item::class);
    }
}
