
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/brand-logo-light.png";
// import {menDummyImg} from "../ECommercePageComponents";
import DropdownMenu from "./DropdownMenu";
import {navContent} from "./navContent";
const SideBar = ({hideSideBar}) => {
	return (
		<div
			className={` ${
				hideSideBar ? "-translate-x-64" : "-translate-x-0 "
			} fixed text-light text-sm z-50 w-60 duration-500 h-screen   bg-slate-900 flex-shrink-0 overflow-auto`}
		>
			<div className="h-full relative">
				<div className="h-[50px]  px-3 flex items-center gap-2">
					<img src={logo} className="h-9" alt="" />
					<h2 className="text-yellow-500 font-bold text-xl mt-3.5 uppercase">
						<span className="text-white">Ya</span>-Mart
					</h2>
				</div>
				<div className="pb-10">
					<div className="flex flex-col items-center mt-5 mb-5">
						{/* <img className="h-16 w-16 object-cover rounded-full" src={menDummyImg} alt="" /> */}
						<h4 className="text-xl font-semibold font-sans-pro mt-2">Brian Hughes</h4>
						<p className="text-sm text-gray-400">hughes.brain@company.com</p>
					</div>
					{/* <div className="font-sans-pro duration-500 text-base">
						{navContent.sidenav.map((each) =>
							each?.subMenu === undefined ? (
								<Link key={each.id} to={each.path} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-slate-700">
									<FontAwesomeIcon className="text-gray-400 w-5" icon={each.icon} />
									<span>{each.title}</span>
								</Link>
							) : (
								<DropdownMenu key={each.id} each={each} />
							),
						)}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
