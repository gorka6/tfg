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
use Illuminate\Support\Facades\DB;


class FichaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $fichas = Auth::user()
            ->fichas()
            ->with(['race', 'subrace', 'characterClass', 'background'])
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Fichas/Index', ['fichas' => $fichas]);
    }


    public function create()
    {
        $races = \App\Models\Race::all();
        $subraces = \App\Models\Subrace::all();
        $classes = \App\Models\CharacterClass::all();
        $backgrounds = \App\Models\Background::all();
        $skills = \App\Models\Skill::all();
        $classesSkills = \App\Models\ClassSkill::with('skill')->get();

        return Inertia::render('Fichas/Create', [
            'races' => $races,
            'subraces' => $subraces,
            'classes' => $classes,
            'backgrounds' => $backgrounds,
            'skills' => $skills,
            'classesSkills' => $classesSkills,
        ]);
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'alignment' => ['required', new Enum(Alignment::class)],
            'background_id' => 'required|integer|exists:backgrounds,id',
            'race_id' => 'required|integer|exists:races,id',
            'subrace_id' => 'nullable|integer|exists:subraces,id',
            'class_id' => 'required|integer|exists:classes,id',
            'exp' => 'required|integer|min:0',
            'str' => 'required|integer|min:3|max:18',
            'dex' => 'required|integer|min:3|max:18',
            'con' => 'required|integer|min:3|max:18',
            'int' => 'required|integer|min:3|max:18',
            'wis' => 'required|integer|min:3|max:18',
            'cha' => 'required|integer|min:3|max:18',
            'skills'        => 'array|max:4',
            'skills.*'      => 'integer|exists:skills,id',
        ]);

        $data['user_id'] = Auth::id();

        $ficha = Ficha::create($data);

        if ($request->has('skills')) {
            $ficha->skills()->sync($request->skills);
        }

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
            'name' => 'required|string|max:255',
            'alignment' => ['required', new Enum(Alignment::class)],
            'background_id' => 'required|integer|exists:backgrounds,id',
            'race_id' => 'required|integer|exists:races,id',
            'subrace_id' => 'nullable|integer|exists:subraces,id',
            'class_id' => 'required|integer|exists:classes,id',
            'exp' => 'required|integer|min:0',
            'str' => 'required|integer|min:3|max:18',
            'dex' => 'required|integer|min:3|max:18',
            'con' => 'required|integer|min:3|max:18',
            'int' => 'required|integer|min:3|max:18',
            'wis' => 'required|integer|min:3|max:18',
            'cha' => 'required|integer|min:3|max:18',
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
