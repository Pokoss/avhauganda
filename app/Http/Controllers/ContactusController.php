<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactusController extends Controller
{
    public function submitForm(Request $request)
    {
        Mail::to('info@avhauganda.org')->send(new ContactUsMail($request->all()));
    }
}
