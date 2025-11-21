<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\DatosPago;
use Illuminate\Support\Facades\Auth;

class DatosPagosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          $data = DatosPago::with(['user'])->get();
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
            'propietariotarjeta'=>'required|string|min:2',
            'numerotarjeta'=>'required|string|min:16',
            'cvv'=>'required|numeric',
            'fechavencimiento'=>'required']);
        $validated['user_id']=Auth::user()->id;
        $data = DatosPago::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Datos de pago insertados correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
           $data = DatosPago::find($id);
        if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Datos de Pago encontrados.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Datos de Pago no encontrados."
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
            'propietariotarjeta'=>'required|string|min:2',
            'numerotarjeta'=>'required|string|min:16',
            'cvv'=>'required|numeric',
            'fechavencimiento'=>'required',
        ]);
        $validated['user_id']=Auth::user()->id;
         $data = DatosPago::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Datos de Pago actualizados correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = DatosPago::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Datos de Pago eliminados correctamente."
        ]);
    }
}
