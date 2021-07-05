<?php

namespace App\Http\Controllers;

use App\Events\PlayerJoined;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function index(): void
    {
        event(new PlayerJoined());
    }
}
