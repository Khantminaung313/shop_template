import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Select from "react-select";

const options = [
	{ label: "Light", value: "light" },
	{ label: "Dark", value: "dark" },
];

const AdminHeader = () => {
	return (
		<div className="bg-white shadow-md">
			<div className="container ">
				<div className="flex justify-between items-center py-4">
					<div className="flex space-x-2 items-baseline">
						<h1 className="text-2xl font-bold text-d_blue">
							DShop
						</h1>
						<strong className="text-slate-500 text-xs">
							The best shop in the world.
						</strong>
					</div>
					<div className="flex space-x-4">
						<div>
							<Select
								options={options}
								defaultValue={options[0]}
							></Select>
						</div>
						<ul className="flex space-x-4 items-center">
							<FaFacebook className="w-6 h-6 text-blue-700 hover:text-blue-500 cursor-pointer" />
							<FaInstagram className="w-6 h-6 text-orange-500 hover:text-orange-300 cursor-pointer" />
							<FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer" />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHeader;
