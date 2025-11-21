<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Lista;
use Illuminate\Support\Facades\Auth;

class ListasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Lista::with(['perfil','contenido'])->get();
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
            'contenido_id'=>'required']);
        $data = Lista::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Contenido agregado a tu lista.",
            "data"=>$data
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $data = Lista::with(['perfil', 'contenido'])
                             ->find($id);
                              if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Lista encontrada.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Lista no encontrada."
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
            'contenido_id'=>'required']);
              $validated['user_id']=Auth::user()->id;
         $data = Lista::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Lista actualizada correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          $data = Lista::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Lista eliminada correctamente."
        ]);
    }
}
