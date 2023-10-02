import { Inertia } from '@inertiajs/inertia';
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


        Inertia.post('/hitungbobot', {
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

        <form onSubmit={handleSubmit} >
            <div className="flex flex-col space-y-2 p-2 ">
                <div>Fasilitas ----------------------------------------------------------------------- Pelayanan</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotfp(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
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
                </ul>
                <h1>{fasilitas_pelayanan}</h1>
                {props.errors.fasilitas_pelayanan && (
                    <span className="bg-danger-100">{props.errors.fasilitas_pelayanan}</span>
                )}
            </div>

            <div className="flex flex-col space-y-2 p-2 ">
                <div>Fasilitas ------------------------------------------------------------------ Ramah keluarga</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotfr(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                </ul>
                <h1>{fasilitas_ramah}</h1>
            </div>
            <div className="flex flex-col space-y-2 p-2 ">
                <div>Fasilitas ------------------------------------------------------------------------Akomodasi</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotfa(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                </ul>
                <h1>{fasilitas_akomodasi}</h1>
            </div>
            <div className="flex flex-col space-y-2 p-2 ">
                <div>Pelayanan ----------------------------------------------------------------- Ramah Keluarga</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotpr(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                </ul>
                <h1>{pelayanan_ramah}</h1>
            </div>
            <div className="flex flex-col space-y-2 p-2 ">
                <div>Pelayanan --------------------------------------------------------------------- Akomodasi</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotpa(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                </ul>
                <h1>{pelayanan_akomodasi}</h1>
            </div>


            <div className="flex flex-col space-y-2 p-2 ">
                <div>Ramah Keluarga --------------------------------------------------------------- Akomodasi</div>
                <input type="range" className="w-full" min="-8" max="8" step="1" defaultValue={0} onChange={e => setBobotra(e.target.value)} />
                <ul className="flex justify-between w-full px-[10px]">
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">1</span></li>
                    <li className="flex justify-center relative"><span className="absolute">2</span></li>
                    <li className="flex justify-center relative"><span className="absolute">3</span></li>
                    <li className="flex justify-center relative"><span className="absolute">4</span></li>
                    <li className="flex justify-center relative"><span className="absolute">5</span></li>
                </ul>
                <h1>{ramah_akomodasi}</h1>
            </div>

            <div className="py-6 w-full justify-center">
                <button type="submit" className="btn btn-md btn-success "><i className="fa fa-save"></i> Simpan</button>
            </div>
        </form>

    )
}
export default Formbobot
