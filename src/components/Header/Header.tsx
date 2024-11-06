import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartCheck, BsHeart } from "react-icons/bs";
import { LuUserCircle2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
	const [whitelist, setWhitelist] = useState(0);
	const [setting, setSetting] = useState(0);
	const [cart, setCart] = useState(1);
	return (
		<>
			<div className="d_container py-3 shadow-sm">
				<div className="d-flex justify-between items-center gap-4">
					<Link to={'/'}><h1 className="text-2xl font-bold cursor-pointer">Dshop</h1></Link>
					<div className="relative w-full max-w-[800px]">
						<input
							type="text"
							className="w-full pl-4 pr-10 py-1 border border-d_gray rounded-md focus:border-d_gray outline-none"
						/>
						<div className="absolute right-0 top-[50%] translate-y-[-50%] px-2 sm:px-3 border-l border-d_gray/30 group cursor-pointer">
							<AiOutlineSearch className="w-5 h-5 cursor-pointer group-hover:text-d_blue" />
						</div>
					</div>
					<div className="d-flex gap-3">
						<Link to="/cart" className="w-6 h-6 relative">
							<BsCartCheck className="w-full h-full text-d_black" />
							<span className={`text-white bg-d_blue px-1 rounded-full absolute -top-[10px] -right-1 text-xs ${cart <= 0 ? "hidden" : "inline"}`} >
								{cart}
							</span>
						</Link>
						<Link to="/whitelist" className="w-6 h-6 relative">
							<BsHeart className="w-full h-full text-d_black" />
							<span className={`text-white bg-red-500 px-1 rounded-full absolute -top-[10px] -right-1 text-xs ${whitelist <= 0 ? "hidden" : "inline"}`} >
								{whitelist}
							</span>
						</Link>
						<Link to="/setting" className="w-6 h-6 relative">
							<LuUserCircle2 className="w-full h-full text-d_black" />
							<span className={`text-white bg-red-500 px-1 rounded-full absolute -top-[10px] -right-1 text-xs ${setting <= 0 ? "hidden" : "inline"}`} >
								{setting}
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
