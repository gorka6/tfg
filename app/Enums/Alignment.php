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
}
