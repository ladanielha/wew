import { router } from '@inertiajs/react';
import React, { useState } from 'react';



const Formbobot = ({ props }) => {


    const [fasilitas_pelayanan, setBobotfp] = useState(null);
    const [fasilitas_ramah, setBobotfr] = useState(null);
    const [fasilitas_akomodasi, setBobotfa] = useState(null);
    const [pelayanan_ramah, setBobotpr] = useState(null);
    const [pelayanan_akomodasi, setBobotpa] = useState(null);
    const [ramah_akomodasi, setBobotra] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();


        router.post('/hitungbobot', {
            fasilitas_pelayanan: fasilitas_pelayanan,
            fasilitas_ramah: fasilitas_ramah,
            fasilitas_akomodasi: fasilitas_akomodasi,
            pelayanan_ramah: pelayanan_ramah,
            pelayanan_akomodasi: pelayanan_akomodasi,
            ramah_akomodasi: ramah_akomodasi,
        });
        // Kirim  nilai ke laravel
        // Kirim  nilai ke laravel
        //Inertia.post("/your-backend", { bobotawal });
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col space-y-2 p-2">
                    <div className="flex items-center justify-between text-center text-gray-600 ">
                        <span className="flex-1">Lebih Penting Fasilitas</span>
                        <span className="flex-1">Lebih Penting Pelayanan</span>
                    </div>

                    <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotfp(e.target.value)} />
                    <ul className="flex justify-between w-full px-[10px]">
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">1</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    </ul>
                    
                    {props.errors.fasilitas_pelayanan && (
                        <div className="alert alert-error py-3">
                        <span className="bg-danger-100">{props.errors.fasilitas_pelayanan}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col space-y-2 p-2 ">
                    <div className="flex items-center justify-between text-center text-gray-600">
                        <span className="flex-1">Lebih Penting Fasilitas</span>

                        <span className="flex-1">Lebih Penting Ramah Keluarga</span>
                    </div>

                    <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotfr(e.target.value)} />
                    <ul className="flex justify-between w-full px-[10px]">
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">1</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    </ul>
                                     {props.errors.fasilitas_ramah && (
                        <div className="alert alert-error py-3">
                        <span className="bg-danger-100">{props.errors.fasilitas_ramah}</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col space-y-2 p-2 ">
                    <div className="flex items-center justify-between text-center text-gray-600 mb-3">
                        <span className="flex-1">Lebih Penting Fasilitas</span>

                        <span className="flex-1">Lebih Penting Akomodasi</span>
                    </div>
                    <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotfa(e.target.value)} />
                    <ul className="flex justify-between w-full px-[10px]">
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">1</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    </ul>
                    
                    {props.errors.fasilitas_akomodasi && (
                        <div className="alert alert-error py-3">
                        <span className="bg-danger-100">{props.errors.fasilitas_akomodasi}</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col space-y-2 p-2 ">
                    <div className="flex items-center justify-between text-center text-gray-600 mb-3">
                        <span className="flex-1">Lebih Penting Pelayanan</span>

                        <span className="flex-1">Lebih Penting RamahKeluarga</span>
                    </div>
                    <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotpr(e.target.value)} />
                    <ul className="flex justify-between w-full px-[10px]">
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">1</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    </ul>
                                     {props.errors.pelayanan_ramah && (
                        <div className="alert alert-error py-3">
                        <span className="bg-danger-100">{props.errors.pelayanan_ramah}</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col space-y-2 p-2 ">
                    <div className="flex items-center justify-between text-center text-gray-600 mb-3">
                        <span className="flex-1">Lebih Penting Pelayanan</span>

                        <span className="flex-1">Lebih Penting Akomodasi</span>
                    </div>

                    <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotpa(e.target.value)} />
                    <ul className="flex justify-between w-full px-[10px]">
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">1</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    </ul>
                    
                    {props.errors.pelayanan_akomodasi && (
                        <div className="alert alert-error py-3">
                        <span className="bg-danger-100">{props.errors.pelayanan_akomodasi}</span>
                        </div>
                    )}
                </div>


                <div className="flex flex-col space-y-2 p-2 ">
                    <div className="flex items-center justify-between text-center text-gray-600 mb-3">
                        <span className="flex-1">Lebih Penting Ramah Keluarga</span>
                        <span className="flex-1 text-white">------------------------------------------------------------------</span>
                        <span className="flex-1">Lebih Penting Akomodasi</span>

                    </div>

                    <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotra(e.target.value)} />
                    <ul className="flex justify-between w-full px-[10px]">
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">1</span></li>
                        <li className="flex justify-center relative"><span className="absolute">2</span></li>
                        <li className="flex justify-center relative"><span className="absolute">3</span></li>
                        <li className="flex justify-center relative"><span className="absolute">4</span></li>
                        <li className="flex justify-center relative"><span className="absolute">5</span></li>
                        <li className="flex justify-center relative"><span className="absolute">6</span></li>
                        <li className="flex justify-center relative"><span className="absolute">7</span></li>
                        <li className="flex justify-center relative"><span className="absolute">8</span></li>
                        <li className="flex justify-center relative"><span className="absolute">9</span></li>
                    </ul>
                                     {props.errors.ramah_akomodasi && (
                        <div className="alert alert-error py-3">
                        <span className="bg-danger-100">{props.errors.ramah_akomodasi}</span>
                        </div>
                    )}
                </div>

                <div className="py-6 w-full flex justify-center">
                    <button type="submit" className="btn btn-md btn-success "><i className="fa fa-save"></i> Simpan</button>
                </div>
            </form>

        </>
    )
}
export default Formbobot
