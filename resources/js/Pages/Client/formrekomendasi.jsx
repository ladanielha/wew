import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Formbobot from "@/Components/Formbobot";
import Tutorial from "@/Components/Tutorial";

export default function Hitungbobot(props) {

    console.log("cekdrrekomendasi :", props)

    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Halalku" />
            <Navbar />
            
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-40 py-6">
                
            </div>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4  py-6">
                <Formbobot />
            </div>
            <Footer />
        </div>
    );


}
