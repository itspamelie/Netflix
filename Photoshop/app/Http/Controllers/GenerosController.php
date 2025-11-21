<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Genero;
use Illuminate\Support\Facades\Auth;

class GenerosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $data = Genero::All();
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
            'nombre'=>'required|string|min:2'
        ]);
        $data = Genero::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Genero ingresado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
           $data = Genero::find($id);

        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Genero encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Genero no encontrado."
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
            'nombre'=>'required|string|min:2'
        ]);
          $data = Genero::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Genero actualizado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          $data = Genero::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Genero eliminado correctamente."
        ]);
    }
}
