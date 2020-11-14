import React from "react";
import "./App.css";
// import Layout from "./common/containers/Layout/Layout";
import PayRentContainer from "./pages/PayRent/PayRentContainer";

function App() {
	return (
		<div className="App">
			{/* <Layout> */}
			<div className="container-fluid">
				<PayRentContainer />
			</div>
			{/* </Layout> */}
		</div>
	);
}

export default App;
