import { Outlet } from "react-router";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";

const AdminLayout = () => {
	return (
		<>
			<AdminHeader />
			<div className="container">
				<div className="flex space-x-2 divide-x divide-slate-300 py-4">
					<div className="w-[300px]">
						<AdminNav />
					</div>
					<div className="w-full">
						<Outlet />
					</div>
				</div>
			</div>
			<AdminFooter />
		</>
	);
};

export default AdminLayout;
