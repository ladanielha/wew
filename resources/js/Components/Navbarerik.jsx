const Navbar = () => {
    return(
      <div className="navbar  bg-green z-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white">Halalku</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <details>
              <summary>
                Menu
              </summary>
              <ul className="p-2 bg-base-100 text-green z-10">
                <li><a>Profile</a></li>
                <li><a>Logout</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    )
}
export default Navbar