export interface ScreeningPropsInterface {
	nextStep: () => void;
	prevStep?: () => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
