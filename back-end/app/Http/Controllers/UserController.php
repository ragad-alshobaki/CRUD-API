<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users =User::all();

        return response()->json([
            'result'=> $users
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserStoreRequest $request)
    {
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password
            ]);
            return response()->json([
                'msg' => 'User created succefully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'msg'=> 'Somthing went wrong!'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json([
                'msg' =>'User Not Found'
            ], 404);
        }
        //return Json res.
        return response()->json([
            'users'=> $users
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserStoreRequest $request, string $id)
    {
        try {
            $users = User::find($id);
            if (!$users) {
                return response()->json([
                    'msg' =>'User Not Found'
                ], 404);
            }
            $users->name = $request->name;
            $users->email = $request->email;
            $users->password = $request->password;

            $users->save();
            return response()->json([
                'msg'=> 'User succfully updated'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'msg'=> 'Somthing went wrong!'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json([
                'msg' =>'User Not Found'
            ], 404);
        }

        $users->delete();

        return response()->json([
            'msg'=> 'User Successfully deleted'
        ], 200);
    }
}
