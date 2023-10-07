import { Link } from "@inertiajs/react"


const isTablenilaialt = (nilaialts) => {
            console.log("nihnilai",nilaialts)
        return (
            <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Wisata</th>
                                        <th>Fasilitas</th>
                                        <th>Pelatanan</th>
                                        <th>Ramah Keluarga</th>
                                        <th>Akomodasi</th>
                                        <th>Aksi</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nilaialts.map((data, i) =>
                                        <tr key={i}>
                                            <td>
                                                {++i}
                                            </td>
                                            <td>
                                                {data.namatempat}
                                            </td>
                                            <td>{data.rate_fasilitas}</td>
                                            <td>{data.rate_pelayanan}</td>
                                            <td>{data.rate_ramahkeluarga}</td>
                                            <td>{data.rate_akomodasi}</td>
                                            <th>
                                                <Link href={route('edit.nilaialt')} method="get" data={{ nilaialt_id: data.nilaialt_id }} className="btn btn-outline btn-xs btn-warning">Edit</Link>
                                                <Link href={route('delete.nilaialt')} method="post" data={{ nilaialt_id: data.nilaialt_id }} className="btn btn-outline btn-xs btn-error">Hapus</Link>
                                            </th>
                                        </tr>)}
                                </tbody>

                            </table>
                        </div>
        )
    
}
const noTablenilaialt = () => {
    return (
        <div>Data nilaialt Belum Tersedia </div>
    )
}

const Tablenilaialt = ( {nilaialts} ) => {

    return !nilaialts ? noTablenilaialt() : isTablenilaialt(nilaialts)
}

export default Tablenilaialt