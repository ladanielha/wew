import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Formbobot from "@/Components/Formbobot";
import Tutorial from "@/Components/Tutorial";

export default function Rekomendasi(props) {

    //console.log("iniform :", props)
    
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Halalku" />
            <Navbar />
            <section className='py-10 md:py-16'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Panduan Penggunaan </h2>
                    </div>
{/*                    
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 '>
                    
                    </div> */}
                </div>
            </section>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-40 py-6">
                
            <Tutorial />
            </div>
            <section className='py-10 md:py-16'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Pilih Nilai Kepentingan </h2>
                    </div>
{/*                    
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 '>
                    
                    </div> */}
                </div>
            </section>
            <div className="mx-auto flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4  py-6">
                <Formbobot props={props}/>
            </div>
            <Footer />
        </div>
    );


}
