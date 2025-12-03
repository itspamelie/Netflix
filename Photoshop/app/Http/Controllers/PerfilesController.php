<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//IMPORTAR MODELO y Auth
use App\Models\Perfil;
use Illuminate\Support\Facades\Auth;

class PerfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $data = Perfil::with(['user','img'])
                  ->get();
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
            'name'=>'required|string|min:2',
            'user_id'=>'required',
            'img_id'=>'required',
            'tipo_cuenta'=>'required|string|min:2'
        ]);

        
        $data = Perfil::create($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Perfil ingresado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
           $data = Perfil::with(['user','img'])
           ->where('user_id',$id)
           ->get();
           if($data){
            return response()->json([
            "status"=>"ok",
            "mesage"=>"Perfil encontrado.",
            "data"=>$data
        ]);
        }
        return response()->json([
            "status"=>"error",
            "mesage"=>"Perfil no encontrado."
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
            'user_id'=>'required',
            'img_id'=>'required',
            'tipo_cuenta'=>'required|string|min:2'
        ]);
        $data = Perfil::findOrFail($id);
        $data->update($validated);
          return response()->json([
            "status"=>"ok",
            "mesage"=>"Perfil actualizado correctamente.",
            "data"=>$data

        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Perfil::find($id);
        if($data){
            $data->delete();
        }
        return response()->json([
            "status"=>"ok",
            "mesage"=>"Perfil eliminado correctamente."
        ]);
    }
    


}
