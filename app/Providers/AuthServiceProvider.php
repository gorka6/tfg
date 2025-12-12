<?php

namespace App\Providers;

use App\Models\Ficha;
use App\Policies\FichaPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{

    protected $policies = [
        Ficha::class => FichaPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}
