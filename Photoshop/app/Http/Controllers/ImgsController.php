<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Img;
use Illuminate\Support\Facades\Auth;

class ImgsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $data = Img::All();
        //Siempre que hagamos una api enviamos un JSON
        return response()->json([
            "status"=>"ok",
            "data"=>$data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //nombre img
        $validated = $request->validate([
            'nombre'=>'required|string|min:2',
            'img'=>'required|string|min:2'
        ]);
        $data = Img::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Imagen insertada correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
           $data = Img::find($id);
        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Imagen encontrada.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Imagen no encontrada."
        ],400);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         //nombre img
        $validated = $request->validate([
            'nombre'=>'required|string|min:2',
            'img'=>'required|string|min:2'
        ]);
          $data = Img::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Imagen actualizada correctamente.",
            "data"=>$data
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Img::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Imagen eliminada correctamente."
        ]);
    }
}
