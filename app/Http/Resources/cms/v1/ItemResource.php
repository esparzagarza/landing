<?php

namespace App\Http\Resources\cms\v1;

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
        foreach ($this->screenshots as $arr) array_push($screenshots, $this->childToArray($arr));

        return [
            'id' => $this->id,
            'category_name' => $this->category->name,
            'name' => $this->name,
            'description' => $this->description,
            'linkTo' => $this->linkTo,
            'price' => $this->price,
            'image' => $this->image,
            'tags'  => $this->tags,
            'screenshots' => $screenshots
        ];
    }

    public function childToArray(object $arr)
    {
        return [
            'id' => $arr['id'],
            'image' => $arr['image'],
            'order' => $arr['order'],
        ];
    }
}
