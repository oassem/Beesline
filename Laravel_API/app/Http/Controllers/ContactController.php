<?php

namespace App\Http\Controllers;

use App\Http\Resources\ContactResource;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        Contact::Create($request->all());
    }

    public function index()
    {
        $contacts = Contact::all();
        return ContactResource::collection($contacts);
    }

    public function show($id)
    {
        $contact = Contact::find($id);
        if ($contact) {
            return new ContactResource($contact);
        } else {
            return null;
        }
    }

    public function update($id, Request $request)
    {
        Contact::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        Contact::find($id)->delete();
    }
}
