<?php

namespace App\Http\Resources\land\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $screenshots = array();
        foreach ($this->screenshots as $arr) array_push($screenshots, $arr['image']);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'description' => $this->description,
            'linkTo' => $this->linkTo,
            'tags' => $this->tags,
            'image' => $this->image,
            'category' => [
                'id' => $this->category['id'],
                'name' => $this->category['name']
            ],
            'screenshots' => $screenshots
        ];
    }
}
