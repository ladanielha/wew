<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\PlacesCollection;
use App\Models\Nilaialt;
use App\Models\Places;
use Inertia\Inertia;



class WisataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $places = new PlacesCollection(Places::paginate(20));
        return Inertia::render('Admin/Wisata/index',[ 
            'places'=> $places]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Wisata/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

       //set validation
       $request->validate([
        'namatempat' => 'required', 
        'jeniswisata' => 'required',
        'alamat' => 'required', 
        'harga' => 'required', 
        'jambuka' => 'required', 
        'jamtutup' => 'required',
        'desc'  => 'required',
        'gambar'  => 'required',
        'link' => 'required',
        ]);

        //create wisata
        $places = Places::create([
            'namatempat'     => $request->namatempat,
            'jeniswisata'     => $request->jeniswisata,
            'alamat'   => $request->alamat,
            'harga'   => $request->harga,
            'jambuka'   => $request->jambuka,
            'jamtutup'   => $request->jamtutup,
            'desc'   => $request->desc,
            'gambar'   => $request->gambar,
            'link'   => $request->link,
            
        ]);
        Nilaialt::create([
            'wisata_id' => $places->wisata_id, 
            'rate_fasilitas'=> "0.25",
            'rate_pelayanan'=> "0.25",
            'rate_ramahkeluarga'=> "0.25",
            'rate_akomodasi'=> "0.25",
            
        ]);

        //redirect
        return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Disimpan!');        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Places $places)
    {
        //
      
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Places $places, Request $request)
    {
        //dd($request);
        return Inertia::render('Admin/Wisata/edit',[ 
            'places'=> $places->find($request->wisata_id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        //$dataplaces = Places::find($request->id);
        $request->validate([
            'namatempat' => 'required', 
            'jeniswisata' => 'required',
            'alamat' => 'required', 
            'harga' => 'required', 
            'jambuka' => 'required', 
            'jamtutup' => 'required',
            'desc'  => 'required',
            'gambar'  => 'required',
            'link' => 'required',
            ]);
    
            //update post
            Places::where('wisata_id', $request->wisata_id)->update([
                'namatempat'     => $request->namatempat,
                'jeniswisata'     => $request->jeniswisata,
                'alamat'   => $request->alamat,
                'harga'   => $request->harga,
                'jambuka'   => $request->jambuka,
                'jamtutup'   => $request->jamtutup,
                'desc'   => $request->desc,
                'gambar'   => $request->gambar,
                'link'   => $request->link,
            ]);
    
            //redirect
            return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Diupdate!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $places = Places::find($request->wisata_id);
        $places->delete();
        return redirect()->route('admin.wisata')->with('message', 'Data Berhasil Dihapus!');
        
    }
}
