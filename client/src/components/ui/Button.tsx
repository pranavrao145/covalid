import React from "react";

// eslint-disable-next-line react/require-default-props
const Button: React.FC<{ className?: string }> = ({ className = "", children }) => (
	<button
		type="button"
		className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md shadow-sm text-white ${
			className || "bg-teal-600 hover:bg-teal-700"
		}`}
	>
		{children}
	</button>
);

export default Button;
