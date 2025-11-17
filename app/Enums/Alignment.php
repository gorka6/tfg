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
}
