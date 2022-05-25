import React from 'react';
import './App.css';
import { HeaderBar } from "./modules/HeaderBar/HeaderBar";
import { MainArea } from "./MainArea";
import { User } from "./types"

const dummyUserRin: User = {
	id: "1",
	alias: "Rin",
	email: "rin@kagamine.net",
	password: "mikunee"
}

function App() {
	return (
		<div id="App">
			<HeaderBar
				user={dummyUserRin}
				setAlias={
					(newAlias) => {dummyUserRin.alias = newAlias; console.log(newAlias);}
				}
			/>
			<MainArea/>
		</div>
	);
}

export default App;
