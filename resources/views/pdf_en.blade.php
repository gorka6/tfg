@php
$jsonPath = resource_path("views/lang/en.json");
$translations = file_exists($jsonPath) ? json_decode(file_get_contents($jsonPath), true) ?: [] : [];

function normTexto($name = '') {
    $s = mb_strtolower(trim((string) $name), 'UTF-8');
    return preg_replace(['/[\s\-]+/u', '/[^\p{L}\p{N}_]/u'], ['_', ''], $s);
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

$alignmentKey = $ficha->alignment?->value ?? (is_object($ficha->alignment) ? (string)$ficha->alignment : $ficha->alignment);
$alignmentKey = is_string($alignmentKey) ? trim($alignmentKey) : '';
@endphp

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>{{ $ficha->name }}</title>
  <style>
    body {
      font-family: DejaVu Sans, Arial, sans-serif;
      font-size: 12px;
      color: #111;
      padding: 20px;
      line-height: 1.4;
    }

    h1 {
      font-size: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
    }

    .section {
      margin-bottom: 12px;
      page-break-inside: avoid;
    }

    .atributos {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 15px;
    }

    .atributo {
      flex: 0 0 calc(33.333% - 10px);
      text-align: center;
      border: 1px solid #ddd;
      padding: 8px;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .atributo strong {
      display: block;
      font-size: 14px;
      margin-bottom: 5px;
      color: #333;
    }

    .atributo span {
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }

    .listado {
      padding-left: 1.2rem;
      margin: 8px 0;
    }

    .listado li {
      margin-bottom: 4px;
    }

    h3 {
      font-size: 14px;
      margin-bottom: 8px;
      color: #444;
      background-color: #f0f0f0;
      padding: 6px 10px;
      border-radius: 3px;
    }

    p {
      margin: 5px 0;
    }

    .result-title {
      font-weight: bold;
      font-size: 14px;
      color: #222;
      margin-bottom: 10px;
    }
  </style>
</head>

<body>
  <h1>{{ $ficha->name }}</h1>

  <div class="section">
    <p><strong>{{ translate_key('create.race', $translations) }}:</strong>
      {{ translate_key('races.' . normTexto($ficha->race->name), $translations, $ficha->race->name) }}
    </p>

    <p><strong>{{ translate_key('create.subrace', $translations) }}:</strong>
      @if($ficha->subrace)
      {{ translate_key('subraces.' . normTexto($ficha->subrace->name), $translations, $ficha->subrace->name) }}
      @else
      {{ translate_key('subraces.no_subrace', $translations, 'No subrace') }}
      @endif
    </p>

    <p><strong>{{ translate_key('create.class', $translations) }}:</strong>
      {{ translate_key('classes.' . normTexto($ficha->characterClass->name), $translations, $ficha->characterClass->name) }}
    </p>

    <p><strong>{{ translate_key('create.background', $translations) }}:</strong>
      {{ translate_key('backgrounds.' . normTexto($ficha->background->name), $translations, $ficha->background->name) }}
    </p>

    <p><strong>{{ translate_key('create.align', $translations, 'Alignment') }}:</strong>
      {{ translate_key('alignments.' . ($alignmentKey ?? ''), $translations, ($alignmentKey ?? '')) }}
    </p>
  </div>

  <div class="section atributos">
    @foreach(['str', 'dex', 'con', 'int', 'wis', 'cha'] as $attr)
    <div class="atributo">
      <strong>{{ translate_key("create.$attr", $translations) }}</strong>
      <span>{{ $ficha->$attr }}</span>
    </div>
    @endforeach
  </div>

  <div class="section">
    <h3>{{ translate_key('create.languages', $translations, 'Languages') }}</h3>
    <ul class="listado">
      @foreach($ficha->race->languages as $language)
      <li>{{ translate_key('languages.' . normTexto($language->name), $translations, $language->name) }}</li>
      @endforeach
    </ul>
  </div>

  <div class="section">
    <h3>{{ translate_key('create.skills', $translations) }}</h3>
    @if($ficha->skills && $ficha->skills->count() > 0)
    <ul class="listado">
      @foreach($ficha->skills as $skill)
      <li>{{ translate_key('skills.' . normTexto($skill->name), $translations, $skill->name) }}</li>
      @endforeach
    </ul>
    @endif
  </div>

  <div class="section">
    <h3>{{ translate_key('create.traits', $translations) }}</h3>
    @if($ficha->traits && $ficha->traits->count() > 0)
    <ul class="listado">
      @foreach($ficha->traits as $trait)
      <li>{{ translate_key('traits.' . normTexto($trait->name), $translations, $trait->name) }}</li>
      @endforeach
    </ul>
    @endif
  </div>
</body>
</html>