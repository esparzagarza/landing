<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ScreenshotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'item_id' => rand(1, 20),
            'image' => $this->faker->imageUrl(800,600),
            'order' => rand(1, 5),

        ];
    }
}
