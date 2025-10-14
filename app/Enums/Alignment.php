<?php

namespace App\Enums;

enum Alignment: string
{
    case LawfulGood = 'lg';
    case NeutralGood = 'ng';
    case ChaoticGood = 'cg';
    case LawfulNeutral = 'ln';
    case TrueNeutral = 'tn';
    case ChaoticNeutral = 'cn';
    case LawfulEvil = 'le';
    case NeutralEvil = 'ne';
    case ChaoticEvil = 'ce';

    public function label(string $lang = 'en'): string
    {
        $labels = [
            'lg' => ['en' => 'Lawful Good',     'es' => 'Legal Bueno'],
            'ng' => ['en' => 'Neutral Good',    'es' => 'Neutral Bueno'],
            'cg' => ['en' => 'Chaotic Good',    'es' => 'Caótico Bueno'],
            'ln' => ['en' => 'Lawful Neutral',  'es' => 'Legal Neutral'],
            'tn' => ['en' => 'True Neutral',    'es' => 'Neutral Verdadero'],
            'cn' => ['en' => 'Chaotic Neutral', 'es' => 'Caótico Neutral'],
            'le' => ['en' => 'Lawful Evil',     'es' => 'Legal Malvado'],
            'ne' => ['en' => 'Neutral Evil',    'es' => 'Neutral Malvado'],
            'ce' => ['en' => 'Chaotic Evil',    'es' => 'Caótico Malvado'],
        ];

        return $labels[$this->value][$lang] ?? $this->value;
    }
}
