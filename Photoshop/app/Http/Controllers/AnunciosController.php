<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Anuncio;
use Illuminate\Support\Facades\Auth;

class AnunciosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Mostrar a todos los registros
        $data = Anuncio::all();
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
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $validated = $request->validate([
            'nombre'=>'required|string|min:2',
            'archivo'=>'required|string|min:2',
            'tipo'=>'required',
        ]);

        $data = Anuncio::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Anuncio insertado correctamente.",
            "data"=>$data

        ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Anuncio::find($id);
        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Anuncio encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Anuncio no encontrado."
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
            'nombre'=>'required|string|min:2',
            'archivo'=>'required|string|min:2',
            'tipo'=>'required',
        ]);
        $data = Anuncio::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Anuncio actualizado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Anuncio::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Anuncio eliminado correctamente."
        ]);
    }
}
