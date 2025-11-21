<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Historial;
use Illuminate\Support\Facades\Auth;

class HistorialesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $data = Historial::with(['perfil','contenido','episodio'])->get();
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
            'perfil_id'=>'required',
            'contenido_id'=>'required',
            'episodio_id'=>'required',
            'progreso_segundos'=>'required|integer',
            'completado'=>'required|boolean']);
        $data = Historial::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Historial creado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $data = Historial::with(['perfil', 'contenido', 'episodio'])
                             ->find($id);
        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Historial encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Historial no encontrado."
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
            'perfil_id'=>'required',
            'contenido_id'=>'required',
            'episodio_id'=>'required',
            'progreso_segundos'=>'required|integer',
            'completado'=>'required|boolean']);
                $validated['user_id']=Auth::user()->id;
         $data = Historial::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Historial actualizado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Historial::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Historial eliminado correctamente."
        ]);
    }
}
