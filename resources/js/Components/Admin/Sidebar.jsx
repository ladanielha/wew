import { Link } from "@inertiajs/react"
import './sidebar.css';


const Sidebar = () => {

  return (
  
    <div className="sidebar bg-primary">
        <ul>
            <li><Link href={route("dashboard")}>Dashboard</Link></li>
            <li><Link href={route("admin.wisata")}>Wisata</Link></li>
            <li><Link href={route("admin.nilaialt")}>Bobot Alternatif</Link></li>
        </ul>
    </div>


  )
}

export default Sidebar