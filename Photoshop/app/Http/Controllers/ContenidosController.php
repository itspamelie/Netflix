<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Contenido;
use Illuminate\Support\Facades\Auth;

class ContenidosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Contenido::with(['genero','clasificacion'])->get();
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
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $validated = $request->validate([
            'titulo'=>'required|string|min:2',
            'descripcion'=>'required|string|min:2',
            'tipo'=>'required|string|min:2',
            'fechaEstreno'=>'required',
            'duracion'=>'required|numeric',
            'portada'=>'required|string',
            'video'=>'required|string',
            'genero_id'=>'required',
            'clasificacion_id'=>'required'
        ]);

        $data = Contenido::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Contenido insertado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
          $data = Contenido::find($id);
        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Contenido encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Contenido no encontrado."
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
            'descripcion'=>'required|string|min:2',
            'tipo'=>'required|string|min:2',
            'fechaEstreno'=>'required',
            'duracion'=>'required|numeric',
            'portada'=>'required|string',
            'video'=>'required|string',
            'genero_id'=>'required',
            'clasificacion_id'=>'required'
        ]);

         $data = Contenido::findOrFail($id);
         $data->update($validated);
         return response()->json([
            "status"=>"ok",
            "mesage"=>"Contenido actualizado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          $data = Contenido::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Contenido eliminado correctamente."
        ]);
    }
}
