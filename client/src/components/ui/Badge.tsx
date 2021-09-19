import React from "react";

// eslint-disable-next-line react/require-default-props
const Badge: React.FC<{ className?: string }> = ({ className = "", children }) => (
	<span
		className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
			className || "bg-teal-100 text-teal-800"
		}`}
	>
		{children}
	</span>
);

export default Badge;
