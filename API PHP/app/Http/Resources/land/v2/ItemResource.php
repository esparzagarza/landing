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
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'linkTo' => $this->linkTo,
            'price' => $this->price,
            'image' => $this->image,
            'tags' => $this->tags,
            'category' => $this->category,
            'screenshots' => $this->screenshots

        ];
    }
}
