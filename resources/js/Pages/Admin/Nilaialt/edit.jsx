import Sidebar from '@/Components/Admin/Sidebar';
import Navbaradmin from '@/Components/Navbaradmin';
import { router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { useState } from 'react';



export default function Edit(props, errors) {
    const [wisata_id, setNamatempat] = useState(props.places.namatempat);
    const [alamat, setAlamat] = useState(props.places.alamat);
    const [desc, setDesc] = useState(props.places.desc);


    //function "updatePost"
    const updatenilai = async (e) => {
        e.preventDefault();

        router.post(`/wisata/update`, {
            id: props.places.id,
            namatempat: namatempat,
            alamat: alamat,
            desc: desc,
        });
    }
    console.log("cekdarihaledit", props)
   
    return (
        <>
            <div className=" min-h-screen bg-slate-50">
                <Navbaradmin user={props.auth.user} />
                <Head title="Dashboard" />
                <Sidebar />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-44">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">

                                <div className="card-header">
                                    <span className="font-weight-bold">Edit Bobot Nilai Wisata</span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={updatenilai}>

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nama Wisata</label>
                                            <input type="text" className="form-control" defaultValue={props.places.namatempat} onChange={(e) => setNamatempat(e.target.value)} placeholder="Nama Wisata" />
                                        </div>
                                        {props.errors.namatempat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.namatempat}</span>
                                            </div>

                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Alamat</label>
                                            <textarea className="form-control" defaultValue={props.places.alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Jl, Asd no 1" rows={4}></textarea>
                                        </div>
                                        {props.errors.alamat && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.alamat}</span>
                                            </div>
                                        )}

                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Desc</label>
                                            <textarea className="form-control" defaultValue={props.places.desc} onChange={(e) => setDesc(e.target.value)} placeholder="Jl, Asd no 1" rows={4}></textarea>
                                        </div>
                                        {props.errors.desc && (
                                            <div className="alert alert-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{props.errors.desc}</span>
                                            </div>
                                        )}

                                        <div>
                                            <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Simpan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
