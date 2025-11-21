<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Suscripcion;
use Illuminate\Support\Facades\Auth;

class SuscripcionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //'nombre',
        //'descripcion',
        //'cantidad_perfiles',
        //'costo_mensual',
        //'fecha_pagos',
        $data = Suscripcion::All();
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
            'nombre'=>'required|string|min:2',
            'descripcion'=>'required|string|min:2',
            'user_id'=>'required',
            'cantidad_perfiles'=>'required|numeric',
            'costo_mensual'=>'required|numeric',
            'fecha_pagos'=>'required'
            ]);
        $data = Suscripcion::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Suscripcion creada correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
          $data = Suscripcion::find($id);
                              if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Suscripcion encontrada.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Suscripcion no encontrada."
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
            'descripcion'=>'required|string|min:2',
            'user_id'=>'required',
            'cantidad_perfiles'=>'required|numeric',
            'costo_mensual'=>'required|numeric',
            'fecha_pagos'=>'required'
            ]);
             $data = Suscripcion::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Suscripcion actualizada correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Suscripcion::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Suscripcion eliminada exitosamente."
        ]);
    }
}
