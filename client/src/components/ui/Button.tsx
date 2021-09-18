import React, { MouseEventHandler } from "react";

// eslint-disable-next-line react/require-default-props
const Button: React.FC<{ className?: string; onClick?: MouseEventHandler<HTMLButtonElement> }> = ({
	className = "",
	onClick,
	children,
}) => (
	<button
		type="button"
		className={`inline-flex items-center text-center justify-center w-full h-full lg:w-auto lg:h-auto px-3 py-2 border border-transparent text-xs lg:text-sm leading-4 rounded-md shadow-sm text-white ${
			className || "bg-teal-600 hover:bg-teal-700"
		}`}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
