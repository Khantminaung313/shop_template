import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import Select from "react-select";

const User = () => {
	const [openModal, setOpenModal] = useState(false);
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setOpenModal(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.addEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleModel = () => {
		return setOpenModal((prev) => !prev);
	};

	const userData = [
		{ name: "Dean", role: "admin", email: "dean@gmail.com" },
		{ name: "Zoro", role: "manager", email: "zoro@gmail.com" },
		{ name: "Thormas Audi", role: "data-entry", email: "ta@gmail.com" },
		{ name: "Jame Cristein", role: "user", email: "jamec@gmail.com" },
		{ name: "Khant Min Aung", role: "user", email: "kma@gmail.com" },
	];
	const roleData = [
		{ label: "Admin", value: "admin" },
		{ label: "Manager", value: "manager" },
		{ label: "DataEntry", value: "data-entry" },
		{ label: "User", value: "user" },
	];

	function selectBadge(role) {
		switch (role) {
			case "admin":
				return "bg-green-500";
			case "manager":
				return "bg-blue-500";
			case "data-entry":
				return "bg-orange-400";
			default:
				return "bg-gray-500";
		}
	}

	function renderUsers(users) {
		return (
			<tbody>
				{users.map((user) => (
					<tr className="bg-white border-b" key={user.name}>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
						>
							{user.name}
						</th>
						<td className="px-6 py-4">{user.email}</td>
						<td className="px-6 py-4 capitalize">
							<span
								className={`px-2 py-1 rounded-md text-white ${selectBadge(
									user.role
								)}`}
							>
								{user.role}
							</span>
						</td>
						<td className="px-6 py-4 flex space-x-4 justify-center">
							<a
								href="#"
								className="font-medium text-blue-600 hover:underline"
							>
								Edit
							</a>
							<a
								href="#"
								className="font-medium text-red-600 hover:underline"
							>
								Delete
							</a>
						</td>
					</tr>
				))}
			</tbody>
		);
	}

	return (
		<div className="px-4 w-full">
			<div className=" flex justify-between">
				<h1 className="text-d_gray text-2xl font-bold">Users - Data</h1>
				<button
					className="px-4 py-2 rounded-md bg-green-400 text-white font-bold hover:bg-green-600 transition-colors duration-200"
					onClick={() => toggleModel()}
				>
					Create User
				</button>
			</div>

			<div
				className={`absolute left-0 top-0 h-full bg-d_gray/20 z-50 w-full p-4 flex justify-center items-center ${
					openModal ? "block" : "hidden"
				}`}
			>
				<div
					className="w-full h-auto relative max-w-[800px] mx-auto rounded-md bg-white shadow-md border border-d_gray/50 px-4 py-3"
					ref={ref}
				>
					<button
						className="absolute -top-4 -right-4 p-2 rounded-full bg-d_gray text-white"
						onClick={() => toggleModel()}
					>
						<CgClose />
					</button>
					<h3 className="text-xl text-center font-bold text-d_gray">
						User Create Form
					</h3>
					<div className="w-full h-full overflow-y-auto">
					<div className="py-4">
						<div className="grid grid-cols-1 lg:grid-cols-2 space-x-2">
							<div className="mb-3 lg:mb-4">
								<label
									htmlFor="name"
									className="text-d_gray font-bold mb-2"
								>
									First Name
								</label>
								<input
									className="w-full px-3 py-2 border border-d_gray/20 focus:outline-none rounded-md"
									type="text"
									placeholder="First_name"
								/>
							</div>
							<div className="mb-3 lg:mb-4">
								<label
									htmlFor="name"
									className="text-d_gray font-bold mb-2"
								>
									Last Name
								</label>
								<input
									className="w-full px-3 py-2 border border-d_gray/20 focus:outline-none rounded-md"
									type="text"
									placeholder="Last_name"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 space-x-2">
							<div className="mb-3 lg:mb-4">
								<label
									htmlFor="name"
									className="text-d_gray font-bold mb-2"
								>
									Username
								</label>
								<input
									className="w-full px-3 py-2 border border-d_gray/20 focus:outline-none rounded-md"
									type="text"
									placeholder="Username"
								/>
							</div>
							<div className="mb-3 lg:mb-4">
								<label
									htmlFor="email"
									className="text-d_gray font-bold mb-2"
								>
									Email
								</label>
								<input
									className="w-full px-3 py-2 border border-d_gray/20 focus:outline-none rounded-md"
									type="email"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="mb-3 lg:mb-4">
							<label
								htmlFor="password"
								className="text-d_gray font-bold mb-2"
							>
								Password
							</label>
							<input
								className="w-full px-3 py-2 border border-d_gray/20 focus:outline-none rounded-md"
								type="password"
								placeholder="Password"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="text-d_gray font-bold mb-2 block"
							>
								Role
							</label>
							<Select options={roleData}></Select>
						</div>
						<div className="text-center">
							<button className="px-4 py-2 text-white bg-green-500 font-semibold rounded-md shadow-sm">
								Create
							</button>
						</div>
					</div>
					</div>
				</div>
			</div>

			<div className="py-8 w-full">
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
							<tr>
								<th scope="col" className="px-6 py-3">
									Username
								</th>
								<th scope="col" className="px-6 py-3">
									Email
								</th>
								<th scope="col" className="px-6 py-3">
									Role
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-center"
								>
									Action
								</th>
							</tr>
						</thead>
						{renderUsers(userData)}
					</table>
				</div>
			</div>
		</div>
	);
};

export default User;
