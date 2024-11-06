import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from "react-router";

const Cart = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const navigate = useNavigate();

    const handleOnChange = () => {
        return ;
    }

	return (
		<div className="container">
			<h1 className="text-2xl md:text-3xl font-bold text-center text-d_gray uppercase underline mb-4">
				Your shopping cart
			</h1>

			<div className="py-12">
                <div className="text-end mb-4 tracking-wide">
                    <button className="text-red-600 underline underline-offset-2 hover:tracking-widest transition-all duration-200 ease-linear">Clear Cart</button>
                </div>
				<div className="relative overflow-x-auto mb-8">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-d_gray/50">
							<tr>
								<th scope="col" className="px-6 py-3">
									Product name
								</th>
								<th scope="col" className="px-6 py-3">
									Product Code
								</th>
								<th scope="col" className="px-6 py-3 text-center">
									Quantity
								</th>
								<th scope="col" className="px-6 py-3 text-center">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									Total Price
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-d_gray/20">
							<tr className="bg-white">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									Apple MacBook Pro 17"
								</th>
								<td className="px-6 py-4">YGNITEM007</td>
								<td className="px-6 py-4 d-flex items-center justify-between space-x-2">
                                    <div className="d-flex items-center justify-start space-x-2">
                                    <button className="text-white bg-d_gray/40 px-3 py-1 hover:bg-d_gray/60">+</button>
                                    <input className="pl-4 w-12 text-center" type="number" value={quantity} onChange={() => handleOnChange()}/>
                                    <button className="text-white bg-d_gray/40 px-3 py-1 hover:bg-d_gray/60">-</button>
                                    </div>
                                    <BsTrash3 className="text-red-500 text-xl" />
                                </td>
								<td className="px-6 py-4 text-center">$199</td>
								<td className="px-6 py-4">$2999</td>
							</tr>
							<tr className="bg-white">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									Apple MacBook Pro 17"
								</th>
								<td className="px-6 py-4">YGNITEM007</td>
								<td className="px-6 py-4 d-flex items-center justify-between space-x-2">
                                    <div className="d-flex items-center justify-start space-x-2">
                                    <button className="text-white bg-d_gray/40 px-3 py-1 hover:bg-d_gray/60">+</button>
                                    <input className="pl-4 w-12 text-center" type="number" value={quantity} onChange={() => handleOnChange()}/>
                                    <button className="text-white bg-d_gray/40 px-3 py-1 hover:bg-d_gray/60">-</button>
                                    </div>
                                    <BsTrash3 className="text-red-500 text-xl" />
                                </td>
								<td className="px-6 py-4 text-center">$199</td>
								<td className="px-6 py-4">$2999</td>
							</tr>
							<tr className="bg-white">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									Apple MacBook Pro 17"
								</th>
								<td className="px-6 py-4">YGNITEM007</td>
								<td className="px-6 py-4 d-flex items-center justify-between space-x-2">
                                    <div className="d-flex items-center justify-start space-x-2">
                                    <button className="text-white bg-d_gray/40 px-3 py-1 hover:bg-d_gray/60">+</button>
                                    <input className="pl-4 w-12 text-center" type="number" value={quantity} onChange={() => handleOnChange()}/>
                                    <button className="text-white bg-d_gray/40 px-3 py-1 hover:bg-d_gray/60">-</button>
                                    </div>
                                    <BsTrash3 className="text-red-500 text-xl" />
                                </td>
								<td className="px-6 py-4 text-center">$199</td>
								<td className="px-6 py-4">$2999</td>
							</tr>
				
                            <tr className="bg-white">
                                <td colSpan={4} scope="col" className="px-6 py-3 text-end text-lg font-bold">Total</td>
                                <td className="px-6 py-4 border-s border-d_gray/20">$2999</td>
                            </tr>
						</tbody>
					</table>
				</div>
                <div className="d-flex justify-between">
                    <button className="text-white px-4 py-2 bg-red-500 rounded hover:bg-red-500/80" onClick={() => navigate('/products')}>Back to products </button>
                    <button className="text-white px-4 py-2 bg-orange-500 rounded hover:bg-orange-500/80" onClick={() => navigate('/checkout')}>Go to checkout</button>
                </div>
			</div>
		</div>
	);
};

export default Cart;
