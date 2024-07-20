<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    //
    public function index(): Response
    {
//        $users = User::all(); // menampilkan semua data
        $users = User::paginate(10);

        return Inertia::render('User/Index', [
            'users' => $users,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('User/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'password_confirmation' => 'required|same:password',
        ]);

        User::create($request->all());

        return redirect()->route('users');
    }
}
