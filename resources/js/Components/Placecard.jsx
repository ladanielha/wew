const isPlacecard = (places) => {
    
    return places.places.map((data, i) => {
        console.log(places)
        return (
            <div key={i} className="card w-full card-compact lg:w-96 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <figure><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a8/ef/bc/kompleks-goa-peteng-salah.jpg?w=500&h=400&s=1" alt="WisataCirebon" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.namatempat}</h2>
                    <p>{data.alamat}</p>
                    <p>{data.desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        )
    })


}

const noPlaces = ( ) => {
    return(
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Placecard = ({places}) => {
    console.log(places)
    return !places ? noPlaces() : isPlacecard(places)
}

export default Placecard