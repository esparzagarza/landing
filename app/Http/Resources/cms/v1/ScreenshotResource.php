<?php

namespace App\Http\Resources\cms\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class ScreenshotResource extends JsonResource
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
            'image' => $this->image,
            'order' => $this->order,
        ];
    }
}
