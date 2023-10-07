import { Link } from "@inertiajs/react"

const Navbar = ({ user }) => {

  return (
    <div className="navbar bg-primary sticky top-0">
      
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white" href="/">Logo Halalku</a>
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
                  <li><Link href={route("register")} as="button">Register</Link></li>
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