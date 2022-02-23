<?php

namespace App\Http\Resources\land\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    public $resources = CategoryResource::class;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        $inventory = array();
        foreach ($this->inventory as $arr) array_push($inventory, $this->childToArray($arr));

        return [
            'id' => $this->id,
            'name' => $this->name,
            'inventory' => $inventory,
        ];
    }

    public function childToArray(object $arr)
    {
        return [
            'id' => $arr['id'],
            'name' => $arr['name'],
            'description' => $arr['description'],
            'linkTo' => $arr['linkTo'],
            'price' => $arr['price'],
            'image' => $arr['image'],
            'tags' => $arr['tags'],
        ];
    }
}
