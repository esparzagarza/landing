<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => rand(1, 6),
            'name' => $this->faker->name,
            'description' => $this->faker->sentence,
            'linkTo' => $this->faker->url,
            'price' => $this->faker->randomFloat($nbMaxDecimals = 0, $min = 25, $max = 200),
            'image' => $this->faker->url,
            'tags' => $this->faker->sentence
        ];
    }
}
