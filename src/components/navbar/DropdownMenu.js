// import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {useState} from "react";
// import {Link} from "react-router-dom";

// const DropdownMenu = ({each}) => {
// 	const [expanded, setExpanded] = useState(true);
// 	return (
// 		<div className="relative z-20 overflow-hidden">
// 			<div
// 				onClick={() => setExpanded(!expanded)}
// 				className="flex items-center gap-3 px-3 py-2 bg-slate-900 cursor-pointer relative z-10 w-full hover:bg-slate-700 duration-300"
// 			>
// 				<FontAwesomeIcon className="text-gray-400 w-5" icon={each.icon} />
// 				<span>{each.title}</span>
// 				<FontAwesomeIcon
// 					icon={faAngleDown}
// 					className={`absolute right-3 top-3 transform duration-300 ${expanded ? "-rotate-180" : ""}`}
// 				/>
// 			</div>
// 			{/* <div
// 				className={`bg-gray-800 ${
// 					expanded ? "top-0 relative" : "-top-80 absolute"
// 				} overflow-hidden transition-all ease-in-out duration-300  z-0 left-0`}
// 			>
// 				{each?.subMenu?.map((menuItem) => (
// 					<Link
// 						key={menuItem.id}
// 						to={menuItem.path}
// 						className="pl-11 block py-2 cursor-pointer relative w-full duration-300 hover:bg-slate-700"
// 					>
// 						{menuItem.title}
// 					</Link>
// 				))}
// 			</div> */}
// 		</div>
// 	);
// };

// export default DropdownMenu;
import React from 'react'

const DropdownMenu = () => {
  return (
	<div>DropdownMenu</div>
  )
}

export default DropdownMenu