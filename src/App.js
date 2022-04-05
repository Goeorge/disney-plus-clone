import React from "react";
import Header from "./components/Header";
import Details from "./components/Detail";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/detail/:id">
						<Details />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
