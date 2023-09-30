import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Placecard from "@/Components/Placecard"; 
import Paginator from "@/Components/Paginator"; 

export default function Wisata(props) {
   
    //console.log("cek props :",props)
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />
            
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <Placecard places={props.places.data}/>
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.places.meta}/>
            </div>
            <Footer />
        </div>
    );


}
