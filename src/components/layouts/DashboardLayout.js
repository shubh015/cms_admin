import React, {useState} from "react";
import SideBar from "../navbar/SideBar";
import TopBar from "../navbar/TopBar";
const DashboardLayout = ({children}) => {
	const [hideSideBar, setHideSideBar] = useState(false);
	return (
		<div className="font-roboto select-none">
			<div className="flex items-start ">
				<SideBar hideSideBar={hideSideBar} />
				<TopBar hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
			</div>
			<div className={`h-20 w-full pr-6 pt-[50px] ${hideSideBar ? "pl-6" : "pl-[264px]"} duration-500`}>{children}</div>
		</div>
	);
};

export default DashboardLayout;
