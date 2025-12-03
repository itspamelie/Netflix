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
        'fechaEstreno'=>'required|date',
        'duracion'=>'required|numeric',
        'portada'=>'nullable|image',
        'video' => 'required|file',
        'genero_id'=>'required',
        'clasificacion_id'=>'required'
    ]);

    // === GUARDAR PORTADA ===
    if ($request->hasFile('portada')) {
        $img = $request->file('portada');
        $imgName = uniqid() . '.' . $img->getClientOriginalExtension();

        $img->move(public_path('portadas/'), $imgName);

        $validated['portada'] = $imgName;
    }

    // === GUARDAR VIDEO ===
    if ($request->hasFile('video')) {
        $video = $request->file('video');
        $videoName = uniqid() . '.' . $video->getClientOriginalExtension();

        $video->move(public_path('contents/'), $videoName);

        // Agregar el nombre del video al array validado
        $validated['video'] = $videoName;
    }

    // Crear registro
    $data = Contenido::create($validated);

    return response()->json([
        "status" => "ok",
        "message" => "Contenido insertado correctamente.",
        "data" => $data
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
            'portada'=>'nullable|image|mimes: jpeg,png,jpg,gif,webp|max:5120',
            'video'=>'nullable|file',
            'genero_id'=>'required',
            'clasificacion_id'=>'required'
        ]);

         $data = Contenido::findOrFail($id);
       
if ($request->hasFile('portada')) {

        // Borrar portada anterior
        if ($data->portada && file_exists(public_path('portadas/' . $data->portada))) {
            unlink(public_path('portadas/' . $data->portada));
        }

        // Guardar nueva portada
        $img = $request->file('portada');
        $imgName = uniqid() . '.' . $img->getClientOriginalExtension();
        $img->move(public_path('portadas/'), $imgName);

        $validated['portada'] = $imgName;
    } else {
        unset($validated['portada']);
    }


    //Si viene nuevo archivo de video
    if ($request->hasFile('video')) {

        // Borrar el video anterior
        if ($data->video && file_exists(public_path('contents/' . $data->video))) {
            unlink(public_path('contents/' . $data->video));
        }
        // Guardar nuevo archivo
        $file = $request->file('video');
        $filename = uniqid() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('contents/'), $filename);

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
        "mesage" => "Contenido actualizado correctamente.",
        "data" => $data
    ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          $data = Contenido::find($id);
       

    if ($data) {

        // Borrar video
        if ($data->video && file_exists(public_path('contents/' . $data->video))) {
            unlink(public_path('contents/' . $data->video));
        }

        // Borrar portada
        if ($data->portada && file_exists(public_path('portadas/' . $data->portada))) {
            unlink(public_path('portadas/' . $data->portada));
        }

        $data->delete();
    }

        return response()->json([
            "status"=>"ok",
            "mesage"=>"Contenido eliminado correctamente."
        ]);
    }
}
