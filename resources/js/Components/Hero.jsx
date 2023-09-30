const Hero = () => {
    return(
    <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://mytrip123.com/wp-content/uploads/2022/04/wisata-jogja.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Temukan Tempat Wisata Halal Di Cirebon Sesuai Pilihanmu</h1>
            <p className="py-6">Rekomendasi Wisata Halal Cirebon</p>
            <button className="btn btn-primary">Dapatkan Rekomendasi </button>
            </div>
        </div>
    </div>
)
}

export default Hero