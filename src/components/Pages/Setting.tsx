import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Setting = () => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className='container'>
        <Link to="/setting" className="text-xl sm:text-2xl lg:text-3xl font-semibold lg:font-bold text-d_gray my-4 underline underline-offset-[10px]">Settings</Link>
        <div className='grid grid-cols-3 ld:grid-cols-4 xl:grid-cols-5'>
            <div className="py-4 px-2 border-r border-d_gray/20">
                <ul className="text-lg tracking-wider">
                    <li onClick={() => navigate("/setting/profile")} className={`py-2 border-b border-d_gray/20 hover:bg-d_blue hover:text-white px-4 cursor-pointer transition-all duration-100 ease-linear ${(location.pathname === "/setting/profile" || location.pathname === "/setting")? "bg-d_blue text-white": ""}`}>Profile</li>
                    <li onClick={() => navigate("/setting/apperance")} className={`py-2 border-b border-d_gray/20 hover:bg-d_blue hover:text-white px-4 cursor-pointer transition-all duration-100 ease-linear ${location.pathname === "/setting/apperance" && "bg-d_blue text-white"}`}>Apperance</li>
                </ul>
            </div>
            <div className="col-span-2 lg:col-span-3 xl:col-span-4">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Setting