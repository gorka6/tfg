@php
    $locale = app()->getLocale() ?? 'en';

    $jsonPath = resource_path("views/lang/en.json");

    $translations = [];
    if (file_exists($jsonPath)) {
        $translations = json_decode(file_get_contents($jsonPath), true) ?: [];
    }

    function normTexto($name = '') {
        $s = mb_strtolower(trim((string) $name), 'UTF-8');
        // reemplaza espacios y guiones por guion bajo
        $s = preg_replace('/[\s\-]+/u', '_', $s);
        // elimina caracteres que no sean letra, número o guion bajo (soporta UTF-8)
        $s = preg_replace('/[^\p{L}\p{N}_]/u', '', $s);
        return $s;
    }

    function translate_key($key, $translations = [], $default = null) {
        $parts = explode('.', $key);
        $value = $translations;
        foreach ($parts as $p) {
            if (is_array($value) && array_key_exists($p, $value)) {
                $value = $value[$p];
            } else {
                return $default ?? $key;
            }
        }
        return is_string($value) ? $value : ($default ?? $key);
    }

    $alignmentKey = null;
    if (isset($ficha->alignment)) {
        // intenta ->value (Enum), sino string directo
        $alignmentKey = $ficha->alignment?->value ?? (is_object($ficha->alignment) ? (string)$ficha->alignment : $ficha->alignment);
        $alignmentKey = is_string($alignmentKey) ? trim($alignmentKey) : '';
    }
@endphp

<!doctype html>
<html lang="{{ $locale }}">
<head>
  <meta charset="utf-8" />
  <title>{{ $ficha->name }}</title>
  <link rel="stylesheet" href="{{ asset('css/ficha-pdf.css') }}">
  <style>
    /* Estilos mínimos por si no quieres archivo CSS separado */
    body { font-family: DejaVu Sans, Arial, sans-serif; font-size: 12px; color: #111; padding: 20px; }
    h1 { font-size: 20px; margin-bottom: 10px; }
    .section { margin-bottom: 12px; }
    .atributo { display:inline-block; width: 30%; margin-bottom:6px; }
    .atributo strong { display:block; }
    .listado { padding-left: 1.2rem; margin: 0; }
  </style>
</head>
<body>
  <h1>{{ $ficha->name }}</h1>

  <div class="section">
    <p>
      <strong>{{ translate_key('create.race', $translations, 'Raza') }}:</strong>
      {{ translate_key('races.' . normTexto($ficha->race->name), $translations, $ficha->race->name) }}
    </p>

    <p>
      <strong>{{ translate_key('create.subrace', $translations, 'Subraza') }}:</strong>
      @if($ficha->subrace)
        {{ translate_key('subraces.' . normTexto($ficha->subrace->name), $translations, $ficha->subrace->name) }}
      @else
        {{ translate_key('subraces.no_subrace', $translations, translate_key('create.no_subrace', $translations, 'Sin subraza')) }}
      @endif
    </p>

    <p>
      <strong>{{ translate_key('create.class', $translations) }}:</strong>
      {{ translate_key('classes.' . normTexto($ficha->characterClass->name), $translations, $ficha->characterClass->name) }}
    </p>

    <p>
      <strong>{{ translate_key('create.background', $translations) }}:</strong>
      {{ translate_key('backgrounds.' . normTexto($ficha->background->name), $translations, $ficha->background->name) }}
    </p>

    <p>
      <strong>{{ translate_key('create.align', $translations, 'Alineamiento') }}:</strong>
      {{ translate_key('alignments.' . ($alignmentKey ?? ''), $translations, ($alignmentKey ?? '')) }}
    </p>
  </div>

  <div class="section atributos">
    <div class="atributo">
      <strong>{{ translate_key('create.str', $translations) }}</strong>
      <span>{{ $ficha->str }}</span>
    </div>
    <div class="atributo">
      <strong>{{ translate_key('create.dex', $translations) }}</strong>
      <span>{{ $ficha->dex }}</span>
    </div>
    <div class="atributo">
      <strong>{{ translate_key('create.con', $translations) }}</strong>
      <span>{{ $ficha->con }}</span>
    </div>
    <div class="atributo">
      <strong>{{ translate_key('create.int', $translations) }}</strong>
      <span>{{ $ficha->int }}</span>
    </div>
    <div class="atributo">
      <strong>{{ translate_key('create.wis', $translations) }}</strong>
      <span>{{ $ficha->wis }}</span>
    </div>
    <div class="atributo">
      <strong>{{ translate_key('create.cha', $translations) }}</strong>
      <span>{{ $ficha->cha }}</span>
    </div>
  </div>

  <div class="section">
    <h3>{{ translate_key('create.skills', $translations) }}</h3>
    @if($ficha->skills && $ficha->skills->count() > 0)
      <ul class="listado">
        @foreach($ficha->skills as $skill)
          <li>{{ translate_key('skills.' . normTexto($skill->name), $translations, $skill->name) }}
              @if(isset($skill->description) && $skill->description)
                  - {{ $skill->description }}
              @endif
          </li>
        @endforeach
      </ul>
    @endif
  </div>

  <div class="section">
    <h3>{{ translate_key('create.traits', $translations) }}</h3>
    @if($ficha->traits && $ficha->traits->count() > 0)
      <ul class="listado">
        @foreach($ficha->traits as $trait)
          <li>{{ translate_key('traits.' . normTexto($trait->name), $translations, $trait->name) }}
              @if(isset($trait->description) && $trait->description)
                  - {{ $trait->description }}
              @endif
          </li>
        @endforeach
      </ul>
    @endif
  </div>
</body>
</html>
