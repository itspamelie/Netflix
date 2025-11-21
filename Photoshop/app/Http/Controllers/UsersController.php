<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
           $data = User::with(['suscripcion'])->get();
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
            'name'=>'required|string|min:2',
            'email'=>'required|string|min:2',
            'password'=>'required|string|min:4',
            'phone'=>'required|string|min:10',
            'role'=>'required|boolean',
            'img'=>'required|string|min:2',
            'suscripcion_id'=>'required',
            'estatus_suscripcion'
        ]);
        $data = User::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Usuario creado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $data = User::find($id);
                              if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Usuario encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Usuario no encontrado."
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
            'name'=>'required|string|min:2',
            'email'=>'required|string|min:2',
            'password'=>'required|string|min:4',
            'phone'=>'required|string|min:10',
            'role'=>'required|boolean',
            'img'=>'required|string|min:2',
            'suscripcion_id'=>'required',
            'estatus_suscripcion'
        ]);
          $data = User::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Usuario actualizado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
            $data = User::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Usuario eliminado exitosamente."
        ]);
    }
}
