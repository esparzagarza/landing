<?php

namespace App\Http\Controllers\Api\cms\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\cms\v1\ScreenshotResource;
use App\Models\Screenshot;
use Illuminate\Http\Request;

class ScreenshotController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['image' => 'required', 'item_id' => 'required']);

        $data =  new Screenshot();

        $data->image = $request->input('image');
        $data->item_id = $request->input('item_id');
        $data->order = $request->input('order');

        $data->save();

        return response()->json(["message" => "Success", 'data' => new ScreenshotResource($data)], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Screenshot  $screenshot
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Screenshot $screenshot)
    {
        $request->validate(['image' => 'required', 'item_id' => 'required']);

        foreach ($request->all() as $key => $value) $screenshot->$key = $value;

        $screenshot->update();

        return response()->json(["message" => "Success"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Screenshot  $screenshot
     * @return \Illuminate\Http\Response
     */
    public function destroy(Screenshot $screenshot)
    {
        $screenshot->delete();
        return response()->json(["message" => "Success"], 204);
    }
}
