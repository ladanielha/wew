import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Placecard from "@/Components/Placecard";
import Paginator from "@/Components/Paginator";

export default function Home(props) {

    //console.log("cek props :",props)
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title="Wisata Halal Cirebon" />
            <Navbar user={props.auth.user} />
            <Hero />

            <section className='py-10 md:py-16 bg-primary'>
                <div className='container'>
                    <div className='text-center text-white'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4'>Objek Wisata Terbaru</h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                    </div>
                </div>
            </section>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 px-10 py-6">
                <Placecard places={props.places.data} />
            </div>
            <section className='py-8 md:py-16 bg-primary'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-white'>Tentang Cirebon</h2>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                    </div>
                </div>
            </section>

            <div className="py-16 " >
                <div className="container   text-gray-600 ">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:1/12 lg:w-1/12">
                        
                        </div>
                        <div className="md:4/12 lg:w-4/12">
                            <img src="gambarlogo/cirebon.png" alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div className="md:6/12 lg:w-5/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Cirebon Kota kaya Sejarah, Budaya, dan Pesona Alam</h2>
                            <p className="mt-6 text-gray-600">Kota Cirebon adalah sebuah kota yang terletak di provinsi Jawa Barat, Indonesia. Kota ini memiliki sejarah yang kaya, budaya yang beragam, dan pesona alam yang menakjubkan.</p>
                            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                        <div className="md:1/12 lg:w-1/12">
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );


}
