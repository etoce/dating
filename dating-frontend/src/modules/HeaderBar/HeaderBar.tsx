import * as React from "react";
import "./styles.css";
import { User } from "../../types";
import { EditableField } from "../../EditableField";




export const HeaderBar = (props: {user: User, setAlias: (newAlias: string) => void}) => {
	return (
		<div id="headerbar">
			<div id="titletext">
				ChatZoo
			</div>
			<div id="middle">

			</div>
			<div id="account">
				<EditableField
					default={props.user.alias}
					howToSave={(newValue: string) => { props.setAlias(newValue) }}
				/>
			</div>
		</div>
	);
};