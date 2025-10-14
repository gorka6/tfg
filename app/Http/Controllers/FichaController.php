<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ficha;
use Illuminate\Validation\Rules\Enum;
use App\Enums\Alignment;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class FichaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $fichas = Auth::user()->fichas()->orderBy('created_at', 'desc')->get();

        return Inertia::render('Fichas/Index', ['fichas'=>$fichas]);
    }


    public function create()
    {
        return Inertia::render('Fichas/Create');
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:255',
            'ataque' => 'required|integer|min:1',
            'alignment' => ['required', new Enum(Alignment::class)],
        ]);

        $data['user_id'] = Auth::id();

        Ficha::create($data);

        return Redirect::route('fichas.index')->with('success', 'Ficha creada');
    }


    public function show(Ficha $ficha)
    {
        $this->authorize('view', $ficha);

        return Inertia::render('Fichas/Show', [
            'ficha' => $ficha,
        ]);
    }


    public function edit(Ficha $ficha)
    {
        $this->authorize('update', $ficha);

        return Inertia::render('Fichas/Edit', ['ficha' => $ficha,]);
    }


    public function update(Request $request, Ficha $ficha)
    {
        $this->authorize('update', $ficha);

        $data = $request->validate([
        'nombre' => 'required|string|max:255',
        'ataque' => 'required|integer|min:1',
        'alignment' => ['required', new Enum(Alignment::class)],
        ]);

        $ficha->update($data);

        return Redirect::route('fichas.index')->with('success', 'Ficha actualizada');
    }


    public function destroy(Ficha $ficha)
    {
        $this->authorize('delete', $ficha);

        $ficha->delete();

        return Redirect::route('fichas.index')->with('success', 'Ficha eliminada');
    }
}
