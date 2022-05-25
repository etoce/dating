import * as React from 'react';
//import styles from 'styles.css';

export function TextBox(props: {default: string, important: boolean, isPassword: boolean, howToSave: (newValue: string) => void}) {
	const defaultValue = props.default;
	const [value, setValue] = React.useState(defaultValue);
	const input: any = React.useRef(null);

	React.useEffect(() => {
		if (props.important) {
			input.current.focus();
			input.current.select();
		}
	}, [props.important]);

	let onChange = (e: React.FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};

	let onLeave = (e: React.FormEvent<HTMLInputElement>) => {
		props.howToSave(value);
	}

	let handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			props.howToSave(value);
		}
	}

	let password = "isPassword" in props && props.isPassword;

	if (password) {
		return (
			<input type="password" spellCheck="false" ref={input} value={value} onChange={onChange} onKeyPress={handleKeyPress} onBlur={onLeave}/>
		);
	} else {
		return (
			<input type="text" spellCheck="false" ref={input} value={value} onChange={onChange} onKeyPress={handleKeyPress} onBlur={onLeave}/>
		);
	}
}
