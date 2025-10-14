<?php

namespace App\Enums;

enum Alignment: string
{
    case LawfulGood = 'Lawful Good';
    case NeutralGood = 'Neutral Good';
    case ChaoticGood = 'Chaotic Good';
    case LawfulNeutral = 'Lawful Neutral';
    case TrueNeutral = 'True Neutral';
    case ChaoticNeutral = 'Chaotic Neutral';
    case LawfulEvil = 'Lawful Evil';
    case NeutralEvil = 'Neutral Evil';
    case ChaoticEvil = 'Chaotic Evil';

    public function label(string $lang = 'en'): string
    {
        $translations = [
            'Lawful Good' => ['en' => 'Lawful Good', 'es' => 'Legal Bueno'],
            'Neutral Good' => ['en' => 'Neutral Good', 'es' => 'Neutral Bueno'],
            'Chaotic Good' => ['en' => 'Chaotic Good', 'es' => 'Caótico Bueno'],
            'Lawful Neutral' => ['en' => 'Lawful Neutral', 'es' => 'Legal Neutral'],
            'True Neutral' => ['en' => 'True Neutral', 'es' => 'Neutral Verdadero'],
            'Chaotic Neutral' => ['en' => 'Chaotic Neutral', 'es' => 'Caótico Neutral'],
            'Lawful Evil' => ['en' => 'Lawful Evil', 'es' => 'Legal Malvado'],
            'Neutral Evil' => ['en' => 'Neutral Evil', 'es' => 'Neutral Malvado'],
            'Chaotic Evil' => ['en' => 'Chaotic Evil', 'es' => 'Caótico Malvado'],
        ];

        return $translations[$this->value][$lang] ?? $this->value;
    }
}
