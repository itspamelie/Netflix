<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Temporada;
use Illuminate\Support\Facades\Auth;

class TemporadasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
         $data = Temporada::with(['contenido'])->get();
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
         $validated = $request->validate([
            'contenido_id'=>'required',
            'numero'=>'required|numeric',
            'titulo'=>'required|string|min:2'
        ]);
        $data = Temporada::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Temporada ingresada correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Temporada::find($id);
                              if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Temporada encontrada.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Temporada no encontrada."
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
         $validated = $request->validate([
            'contenido_id'=>'required',
            'numero'=>'required|numeric',
            'titulo'=>'required|string|min:2'
        ]);
          $data = Temporada::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Temporada actualizada correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Temporada::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Temporada eliminada exitosamente."
        ]);
    }
}
