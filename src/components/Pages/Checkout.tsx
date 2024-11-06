import { ChangeEvent, useState } from "react";

const Checkout = () => {
    const [isSame, setIsSame] = useState(false);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const isCheck = event.target.checked;
        setIsSame(isCheck);
    }

	return (
		<div className="py-4 container">
			<h1 className="text-2xl lg:text-2xl font-bold text-d_gray uppercase text-center mb-4">Please Fill Your Information</h1>

			<form className="max-w-xl mx-auto">
				<div className="mb-5">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Your Name
					</label>
					<input
						type="text"
						id="name"
						className="formInput"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="phone"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Your Phone Number
					</label>
					<input
						type="number"
						id="phone"
						className="formInput"
						placeholder="09 **********"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Your email
					</label>
					<input
						type="email"
						id="email"
						className="formInput"
						placeholder="name@flowbite.com"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Your password
					</label>
					<input
						type="password"
						id="password"
						className="formInput"
						required
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="address"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Billing Address
					</label>
					<textarea className="formInput" id="address"></textarea>
				</div>

                <div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="addAreSame"
							type="checkbox"
                            checked={isSame}
                            onChange={handleOnChange}
							className="w-4 h-4 border border-gray-300 rounded focus:outline-none bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
							required
						/>
					</div>
					<label
						htmlFor="addAreSame"
						className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Billing address and delivery address are same
					</label>
				</div>
    
				<div
                className={`mb-5 transition-all duration-300 ease-linear overflow-hidden ${isSame ? 'max-h-0' : 'max-h-96'}`}>
					<label
						htmlFor="delivery-address"
						className="block mb-2 text-sm font-medium text-gray-900"
					>
						Delivery Address
					</label>
					<textarea className="formInput" id="delivery-address"></textarea>
				</div>
                
				<div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							value=""
							className="w-4 h-4 border border-gray-300 rounded focus:outline-none bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
							required
						/>
					</div>
					<label
						htmlFor="remember"
						className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Remember me
					</label>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default Checkout;
