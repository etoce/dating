import * as React from "react";
import "./styles.css";
import { TextBox } from "./TextBox";





export const EditableField = (props: {default: string, howToSave: (newValue: string) => void}) => {
	const [value, setValue] = React.useState(props.default);
	const [isEditing, setIsEditing] = React.useState(false);

	if (!isEditing) {
		return (
			<div className="editable-field" onClick={() => { setIsEditing(true); }}>
				{value}
			</div>
		);
	} else {
		let onSubmit = (newValue: string) => {
			setValue(newValue);
			setIsEditing(false);
			props.howToSave(newValue);
		};
		return (
			<TextBox 
				default={props.default}
				howToSave={onSubmit}
				important={true}
				isPassword={false}
			/>
		);
	}
};

/*export function EditableField(props) {
	const [value, setValue] = useState(props.default);
	const [isEditing, setIsEditing] = useState(false);
	const input = useRef(null);

	let displayJSX = [];
	if (!isEditing) {
		displayJSX = (
			<div className={styles.editable_field} onClick={() => { setIsEditing(true); }}>
				{props.default}
			</div>
		);
	} else {
		let onSubmit = (newValue) => {
			setValue(newValue);
			setIsEditing(false);
			props.onSubmit(newValue);
		}
		displayJSX = (
			<TextBox 
				default={props.default}
				onLeave={onSubmit}
				onPressEnter={onSubmit}
				important={true}
			/>
		)
	}


	return displayJSX;
}
*/