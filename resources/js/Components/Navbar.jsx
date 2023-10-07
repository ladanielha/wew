import { Link } from "@inertiajs/react"
import g from '/public/uploads/keraton.jpg' // relative path to image 

const Navbar = ({ user }) => {

  return (
    <div className="navbar bg-primary ">

      <div className="flex-1 text-white">
        <a className="btn btn-ghost normal-case text-xl text-white" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
          Halalku
        </a>
      </div>
      <div className="flex">
        <a className="btn btn-ghost normal-case text-xl text-white" href={route("list.wisata")}>Wisata</a>
      </div>
      <div className="flex">
        <a className="btn btn-ghost normal-case text-xl text-white" href={route("formreko.wisata")}>Rekomendasi</a>
      </div>
      <div className="flex-none">

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img1.pngdownload.id/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {!user ?
              <>
                <li><Link href={route("login")} as="button">Login</Link></li>
                {/* <li><Link href={route("register")} as="button">Register</Link></li> */}
              </>
              :
              <>
                <li>
                  <Link href={route("dashboard")} className="justify-between">
                    Dashboard Admin
                  </Link>
                </li>
                {/* <li><Link href={route("profile.edit")} as="button" >Profile</Link></li> */}
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar