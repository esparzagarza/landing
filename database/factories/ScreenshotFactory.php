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
            'image' => $this->faker->url,
            'order' => rand(1, 3),

        ];
    }
}
