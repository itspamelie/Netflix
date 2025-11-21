<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Episodio;
use Illuminate\Support\Facades\Auth;

class EpisodiosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          $data = Episodio::with(['temporada','contenido'])->get();
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
            'titulo'=>'required|string|min:2',
            'numero'=>'required|numeric',
            'duracion'=>'required|numeric',
            'sinopsis'=>'required|string|min:2',
            'video'=>'required|string|min:2',
            'temporada_id'=>'required',
            'contenido_id'=>'required']);
        $data = Episodio::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Episodio ingresado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $data = Episodio::with(['temporada', 'contenido'])->find($id);

        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Episodio encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Episodio no encontrado."
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
            'titulo'=>'required|string|min:2',
            'numero'=>'required|numeric',
            'duracion'=>'required|numeric',
            'sinopsis'=>'required|string|min:2',
            'video'=>'required|string|min:2',
            'temporada_id'=>'required',
            'contenido_id'=>'required']);
         $data = Episodio::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Datos de Episodio actualizados correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Episodio::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Episodio eliminado correctamente."
        ]);
    }
}
