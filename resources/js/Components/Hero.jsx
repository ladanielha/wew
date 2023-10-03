import { Link } from "@inertiajs/react"

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/uploads/background.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Temukan Tempat Wisata Halal Di Cirebon Sesuai Pilihanmu</h1>
                        <p className="py-6">Rekomendasi Wisata Halal Cirebon</p>

                        <Link href={route("formreko.wisata")} className="btn btn-primary">Dapatkan Rekomendasi</Link>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/uploads/background.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-white">
                        <div className="max-w">
                            <h1 className="mb-5 text-5xl font-bold">Wisata Halal Cirebon</h1>
                            <p className="mb-5">Wisata Halal Cirebon</p>
                            <Link href={route("formreko.wisata")} className="btn btn-primary">Dapatkan Rekomendasi</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero