@php
    $locale = app()->getLocale();
    $jsonPath = resource_path("views/lang/en.json");
    $translations = [];

    if (file_exists($jsonPath)) {
        $translations = json_decode(file_get_contents($jsonPath), true);
    }

    function t($key, $translations, $default = null) {
        $keys = explode('.', $key);
        $value = $translations;
        foreach ($keys as $segment) {
            if (is_array($value) && array_key_exists($segment, $value)) {
                $value = $value[$segment];
            } else {
                return $default ?? $key;
            }
        }
        return is_string($value) ? $value : ($default ?? $key);
    }
@endphp

<h1>{{ $ficha->name }}</h1>

<div class="section">
    <p><strong>{{ t('create.race', $translations) }}:</strong> {{ t('races.' . $ficha->race->name, $translations, $ficha->race->name) }}</p>
    <p><strong>{{ t('create.subrace', $translations) }}:</strong> 
        @if($ficha->subrace)
            {{ t('subraces.' . $ficha->subrace->name, $translations, $ficha->subrace->name) }}
        @else
            {{ t('create.no_subrace', $translations) }}
        @endif
    </p>
    <p><strong>{{ t('create.class', $translations) }}:</strong> {{ t('classes.' . $ficha->characterClass->name, $translations, $ficha->characterClass->name) }}</p>
    <p><strong>{{ t('create.background', $translations) }}:</strong> {{ t('backgrounds.' . $ficha->background->name, $translations, $ficha->background->name) }}</p>
    <p><strong>{{ t('create.align', $translations) }}:</strong> {{ t('alignments.' . $ficha->alignment->value, $translations, $ficha->alignment->value) }}</p>
</div>

<div class="section atributos">
    <div class="atributo">
        <strong>{{ t('create.str', $translations) }}</strong>
        <span>{{ $ficha->str }}</span>
    </div>
    <div class="atributo">
        <strong>{{ t('create.dex', $translations) }}</strong>
        <span>{{ $ficha->dex }}</span>
    </div>
    <div class="atributo">
        <strong>{{ t('create.con', $translations) }}</strong>
        <span>{{ $ficha->con }}</span>
    </div>
    <div class="atributo">
        <strong>{{ t('create.int', $translations) }}</strong>
        <span>{{ $ficha->int }}</span>
    </div>
    <div class="atributo">
        <strong>{{ t('create.wis', $translations) }}</strong>
        <span>{{ $ficha->wis }}</span>
    </div>
    <div class="atributo">
        <strong>{{ t('create.cha', $translations) }}</strong>
        <span>{{ $ficha->cha }}</span>
    </div>
</div>

<div class="section">
    <h3>Skills</h3>
    @if($ficha->skills && $ficha->skills->count() > 0)
        <ul class="listado">
            @foreach($ficha->skills as $skill)
                <li>{{ t('skills.' . $skill->name, $translations, $skill->name) }}</li>
            @endforeach
        </ul>
    @endif
</div>

<div class="section">
    <h3>Traits</h3>
    @if($ficha->traits && $ficha->traits->count() > 0)
        <ul class="listado">
            @foreach($ficha->traits as $trait)
                <li>{{ t('traits.' . $trait->name, $translations, $trait->name) }}</li>
            @endforeach
        </ul>
    @endif
</div>
