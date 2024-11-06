import { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const MobileNav = ({ categories, navLinks }) => {
	const navigate = useNavigate();
	const [navOpen, setNavOpen] = useState(false);
	const [toggledCategories, setToggledCategories] = useState({});
	const [toggleHistory, setToggleHistory] = useState([]);
	const [activeMenu, setActiveMenu] = useState(null);
	const location = useLocation();

	const toggleSubCat = (key) => {
		setToggledCategories((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
		setToggleHistory((prev) => [...prev, key]);
		setActiveMenu(key);
	};

	const undoToggle = () => {
		setToggleHistory((prev) => {
			const lastToggle = prev[prev.length - 1];
			const newHistory = prev.slice(0, -1);

			setToggledCategories((prevToggled) => ({
				...prevToggled,
				[lastToggle]: !prevToggled[lastToggle],
			}));

			return newHistory;
		});
	};

	const toggleNav = () => {
		setNavOpen((prev) => !prev);
	};

	const closeNav = () => {
		setNavOpen((prev) => false);
	};

	const renderNavItem = (item, key) => (
		<li className={`pl-4 divide-y border-b border-d_gray/20`} key={key}>
			{item.subCats ? (
				<>
					<button
						className={`w-full py-2 block text-start ${
							activeMenu === key && "text-d_blue"
						}`}
						onClick={() => toggleSubCat(key)}
					>
						{item.name}
					</button>
					{toggledCategories[key] && (
						<ul>{renderSubCat(item.subCats, key)}</ul>
					)}
				</>
			) : (
				<Link
					className={`w-full py-2 block text-strt border-b border-d_gray/20 ${
						activeMenu === key && "text-d_blue"
					}`}
					to={item.link}
					onClick={() => closeNav()}
				>
					{item.name}
				</Link>
			)}
		</li>
	);

	const renderSubCat = (subCats, catIndex) =>
		subCats.map((cat, index) => renderNavItem(cat, `${catIndex}-${index}`));

	const renderNavs = (navLinks) =>
		navLinks.map((nav, index) =>
			nav.name === "Categories" ? (
				<ul key={index}>
					{categories.map((cat, catIndex) =>
						renderNavItem(cat, `cat-${catIndex}`)
					)}
				</ul>
			) : (
				<li
					className={`py-2 pl-4 border-b border-d_gray/20 ${location.pathname === nav.slug && "active"}`}
					key={index}
				>
					<Link
						className={`w-full block`}
						to={nav.slug}
						onClick={() => closeNav()}
					>
						{nav.name}
					</Link>
				</li>
			)
		);

	return (
		<>
			<div className="fixed lg:hidden bottom-0 left-[50%] translate-x-[-50%] w-full">
				<div className="w-full max-w-[650px] px-4 py-2 bg-d_white mx-auto flex items-center justify-between rounded-md shadow-sm border border-d_gray/3-">
					<button className="rounded-sm text-d_black font-bold text-[30px]">
						<AiOutlineProduct
							onClick={() => navigate("/setting")}
						/>
					</button>
					<button className="rounded-sm text-d_black font-bold text-[30px]">
						<CiHome onClick={() => navigate("/")} />
					</button>
					<button className="rounded-sm text-d_black font-bold text-[30px]">
						<FaBars onClick={() => toggleNav()} />
					</button>
				</div>
			</div>
			<div
				className="fixed left-0 top-0 max-w-[80%] sm:max-w-[450px] h-[100vh] bg-d_white z-50 shadow-lg py-1 transition-all duration-200 ease-linear overflow-x-hidden overflow-y-auto pb-[50px]"
				style={{ width: navOpen ? "100%" : "0%" }}
			>
				<div className="flex justify-between items-center px-2 py-2 border-b border-d_gray/20">
					<button
						className="w-[50px] h-[30px] flex justify-center items-center text-2xl font-bold border border-d_gray/20 hover:bg-d_gray"
						onClick={undoToggle}
						disabled={toggleHistory.length === 0}
					>
						&larr;
					</button>
					<button
						className="w-[50px] h-[30px] flex justify-center items-center text-d_white bg-d_gray font-bold border border-d_gray/20 hover:bg-d_gray"
						onClick={() => closeNav()}
					>
						&#10008;
					</button>
				</div>

				<div>
					<ul>{renderNavs(navLinks)}</ul>
				</div>
				<div className="d-flex justify-end px-3 items-center absolute bottom-0 left-0 w-full h-[50px] border-t border-d_gray/20">
					<div className="d-flex gap-3">
						<FaFacebook className="w-6 h-6 text-blue-700 hover:text-blue-500 cursor-pointer" />
						<FaInstagram className="w-6 h-6 text-orange-500 hover:text-orange-300 cursor-pointer" />
						<FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer" />
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileNav;