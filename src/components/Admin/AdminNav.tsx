import { useLocation, useNavigate } from "react-router";

const navData = [
  {'name': 'Dashboard', 'slug': '/admin'},
  {'name': 'User', 'slug': '/admin/users'},
  {'name': 'Roles', 'slug': '/admin/roles'},
  {'name': 'Permissions', 'slug': '/admin/permissions'},
  {'name': 'Categories', 'slug': '/admin/categories'},
  {'name': 'Products', 'slug': '/admin/products'},
  {'name': 'Colors', 'slug': '/admin/colors'},
  {'name': 'Sizes', 'slug': '/admin/sizes'},
  {'name': 'Testimonials', 'slug': '/admin/testimonials'},
  {'name': 'Promotions', 'slug': '/admin/promotions'},
  {'name': 'Discount', 'slug': '/admin/discount'},
  {'name': 'Orders', 'slug': '/admin/orders'},
  {'name': 'Settings', 'slug': '/admin/settings'},
]

const AdminNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <ul className="text-xl tracking-wider font-semibold text-slate-500 pl-4 divide-y divide-slate-200">
        {navData.map(nav => (
          <li key={nav.slug} className={`py-2 cursor-pointer hover:bg-d_blue/20 hover:text-d_black pl-4 transition-colors duration-200 ease-linear ${location.pathname === nav.slug ? 'bg-d_blue text-white' : ''}`} onClick={() => navigate(nav.slug)}>{nav.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdminNav