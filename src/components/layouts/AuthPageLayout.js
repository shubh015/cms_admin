import React from "react";
import dotted from "../../asset/images/vector/dotted.png";
import circle from "../../asset/images/vector/half-circle.png";
const AuthLayout = ({children}) => {
	return (
		<div className="min-h-screen relative flex items-center justify-center select-none">
			<div className="flex absolute inset-0 font-roboto z-0">
				<div className="flex-1  relative bg-slate-900 ">
					<div className="">
						<div className="absolute right-1 top-1 flex  items-center gap-5">
							<img src={dotted} className="h-16" alt="" />
							<img src={dotted} className="h-16" alt="" />
						</div>
						<div className="">
							<img src={circle} className="absolute top-0 -left-16 transform rotate-180 h-60" alt="" />
							<img src={circle} className="absolute bottom-0 -right-16 transform  h-60 z-10" alt="" />
						</div>
					</div>
				</div>
				<div className="flex-1 w-full bg-white z-30 h-full"></div>
			</div>
			<div className="h-full w-full flex items-center justify-center relative z-10 pt-8 pb-12 ">{children}</div>
		</div>
	);
};

export default AuthLayout;
