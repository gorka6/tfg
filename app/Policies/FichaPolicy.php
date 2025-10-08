<?php

namespace App\Policies;

use App\Models\Ficha;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FichaPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }


    public function view(User $user, Ficha $ficha): bool
    {
        return $user->id === $ficha->user_id;
    }


    public function create(User $user): bool
    {
        return true;
    }


    public function update(User $user, Ficha $ficha): bool
    {
        return $user->id === $ficha->user_id;
    }


    public function delete(User $user, Ficha $ficha): bool
    {
        return $user->id === $ficha->user_id;
    }


    public function restore(User $user, Ficha $ficha): bool
    {
        return false;
    }


    public function forceDelete(User $user, Ficha $ficha): bool
    {
        return false;
    }
}
