<?php

namespace App\Http\Resources\land\v2;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryCollection extends ResourceCollection
{
    public $collects = CategoryResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'meta' => [
                'organization' => 'EsparzaGarzaMx',
                'authors' => [
                    'Title' => 'ISC',
                    'name' => 'Pedro Esparza',
                    'Role' => 'Sr. Web Developer'
                ],
                'type' => 'Categories',
            ]
        ];
    }
}
