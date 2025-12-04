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
        'video' => 'required|file',
        'temporada_id'=>'required',
        'contenido_id'=>'required'
    ]);

    // Guarda el video
    $file = $request->file('video');
    $filename = uniqid() . '.' . $file->getClientOriginalExtension();
    $file->move(public_path('episodes/'), $filename);

    // Guardamos el nombre del archivo en validated
    $validated['video'] = $filename;

    // Crear episodio
    $data = Episodio::create($validated);

    return response()->json([
        "status" => "ok",
        "mesage" => "Episodio insertado correctamente.",
        "data" => $data
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
            'video'=>'nullable|file']);
         $data = Episodio::findOrFail($id);
   //Si viene nuevo archivo de video
    if ($request->hasFile('video')) {

        // Borrar el video anterior
        if ($data->video && file_exists(public_path('episodes/' . $data->video))) {
            unlink(public_path('episodes/' . $data->video));
        }
        // Guardar nuevo archivo
        $file = $request->file('video');
        $filename = uniqid() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('episodes/'), $filename);

        // Reemplazar en BD
        $validated['video'] = $filename;
    }

    // Si no se mandó video, no se sobreescribe el campo
    else {
        unset($validated['video']);
    }

    $data->update($validated);

    return response()->json([
        "status" => "ok",
        "mesage" => "Episodio actualizado correctamente.",
        "data" => $data
    ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $data = Episodio::find($id);
        if ($data) {

        // Borrar video del servidor
        if ($data->video && file_exists(public_path('episodes/' . $data->video))) {
            unlink(public_path('episodes/' . $data->video));
        }

        $data->delete();
    }

        return response()->json([
            "status"=>"ok",
            "mesage"=>"Episodio eliminado correctamente."
        ]);
    }
}
