const Profile = () => {
	return (
		<div className="p-4 text-center max-w-lg mx-auto">
			<div className="w-20 h-20 rounded-full border-d_gray border-2 overflow-hidden mx-auto">
				<img
					className="w-full h-full object-center object-cover"
					src="/assets/slide1.jpg"
					alt="User profile"
				/>
			</div>
			<div>
				<label className="block text-start mb-2" htmlFor="name">
					Name
				</label>
				<input
					className="w-full px-2 py-2 border border-d_gray mb-3 focus:outline-none rounded"
					id="name"
					type="text"
					placeholder="Name"
          value={"Dean"}
					readOnly
				/>
			</div>
			<div>
				<label className="block text-start mb-2" htmlFor="email">
					Email
				</label>
				<input
					className="w-full px-2 py-2 border border-d_gray mb-3 focus:outline-none rounded"
					id="email"
					type="email"
					placeholder="Email"
          value={'dean@gmail.com'}
					readOnly
				/>
			</div>
			<div>
				<label className="block text-start mb-2" htmlFor="phone">
					Phone Number
				</label>
				<input
					className="w-full px-2 py-2 border border-d_gray mb-3 focus:outline-none rounded"
					id="phone"
					type="number"
					placeholder="Phone"
          value={"09780591018"}
					readOnly
				/>
			</div>

			<div className="d-flex justify-between space-x-2">
				<button className="text-white bg-blue-500 py-2 text-center w-full rounded hover:bg-blue-600 my-4 lg:my-8">
					Edit
				</button>
				<button className="text-white bg-red-500 py-2 text-center w-full rounded hover:bg-red-600 my-4 lg:my-8">
					Logout
				</button>
			</div>
		</div>
	);
};

export default Profile;
