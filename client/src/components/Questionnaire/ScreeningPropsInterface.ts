export interface ScreeningPropsInterface {
	nextStep?: () => void;
	prevStep?: () => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ScreeningStepsInterface {
	step: number;
	nextStep?: () => void;
	prevStep?: () => void;
}
