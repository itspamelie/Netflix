<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Clasificacion;
use Illuminate\Support\Facades\Auth;

class ClasificacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          $data = Clasificacion::all();
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
         $validated = $request->validate([
            'nombre'=>'required|string|min:1',
            'descripcion'=>'required|string|min:2',
        ]);

        $data = Clasificacion::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Clasificacion insertada correctamente.",
            "data"=>$data
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $data = Clasificacion::find($id);
        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Clasificacion encontrada.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Clasificacion no encontrada."
        ],400);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
         
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $validated = $request->validate([
            'nombre'=>'required|string|min:1',
            'descripcion'=>'required|string|min:2',
        ]);
          $data = Clasificacion::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Clasificacion actualizada correctamente.",
            "data"=>$data
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Clasificacion::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Clasificacion eliminada correctamente."
        ]);
    }
}
