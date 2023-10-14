import { Link } from "@inertiajs/react"


const isTablewisata = (places) => {
            
        return (
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <th>Nama Tempat</th>
                            <th>Alamat</th>
                            <th>Harga</th>
                            <th>Desc</th>
                            <th>Aksi</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { places.places.map((data, i) =>
                        <tr key = {i}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.gambar} alt="Wisata Cirebon" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            {data.namatempat}
                                <br />
                                <span className="badge badge-sm">{data.jambuka} AM -{data.jamtutup} PM</span>
                            </td>
                            
                            <td>{data.alamat}</td>
                            <td>{data.harga}</td>
                            <td>{data.desc}</td>
                            <th>
                                <Link href={route('edit.wisata')} method="get" data={{wisata_id: data.wisata_id}}className="btn btn-outline btn-xs btn-warning">Edit</Link>
                                <Link href={route('delete.wisata')} method="post" data={{wisata_id: data.wisata_id}}className="btn btn-outline btn-xs btn-error">Hapus</Link>                               
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        )
    
}
const noTablewisata = () => {
    return (
        <div>Data Wisata Belum Tersedia </div>
    )
}

const Tablewisata = ({ places }) => {

    return !places ? noTablewisata() : isTablewisata(places)
}

export default Tablewisata