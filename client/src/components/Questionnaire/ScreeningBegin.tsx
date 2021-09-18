import React from "react";
import { ScreeningPropsInterface } from "./ScreeningPropsInterface";

const ScreeningBegin = (props: ScreeningPropsInterface) => {
	const { nextStep, onChange } = props;
	return (
		<div>
			<p>adsad</p>
			<button type="button" onClick={nextStep}>
				Next
			</button>
		</div>
	);
};

export default ScreeningBegin;
