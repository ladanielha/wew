import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Formbobot from "@/Components/Formbobot";
import Tutorial from "@/Components/Tutorial";

export default function Rekomendasi(props) {

    //console.log("iniform :", props)
    
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Halalku" />
            <Navbar />

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-40 py-6">
                <Tutorial />
            </div>
            <div className="mx-auto flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4  py-6">
                <Formbobot props={props}/>
            </div>



            <Footer />
        </div>
    );


}
