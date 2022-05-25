import * as React from "react";
import "./styles.css";

type Button = {
	label: string,
	next: string
}

type ScreenData = {
	label: string
	buttons: Button[]
};



const screens: {[screenID: string]: ScreenData} = {
	"intro": {
		label: "Hi there! Tell us a little about yourself?",
		buttons: [
			{
				label: "Okay",
				next: ""
			}, {
				label: "No",
				next: "goodbye"
			}
		]
	},
	"name": {
		label: "What would you like to be called?",
		buttons: []
	},
	"goodbye": {
		label: "Aw, okay.",
		buttons: []
	}
};

const Screen = (props: {screenID: string, setScreen: (next: string) => void}) => {
	return (
		<div id="profile-screen">
			<div id="profile-screen-label">
				{screens[props.screenID].label}
			</div>
			<div id="profile-screen-buttons">
				{screens[props.screenID].buttons.map(b => {
					return (
						<div className="profile-screen-button" onClick={() => props.setScreen(b.next)}>
							{b.label}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export const Welcome = () => {
	const [screen, setScreen] = React.useState("intro");
	const [profile, setProfile] = React.useState({});

	return (
		<div id="profile">
			<Screen
				screenID={screen}
				setScreen={setScreen}
			/>
		</div>
	);
};