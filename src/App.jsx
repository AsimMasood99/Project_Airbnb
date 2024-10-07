import Navbar from "./components/Navbar";
import ScrollList from "./components/ScrollList";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import { useEffect } from "react";
// import "./data.json";

const cardData = [];

function App() {
	useEffect(() => {
		fetch("/data.json") // Fetching from the public folder
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then((resJson) => {
				console.log(resJson); // This should now log your JSON data
			})
			.catch((error) => {
				console.error("There was a problem with the fetch operation:", error);
			});
	}, []);
	return (
		<>
			<Navbar />
			<div className="flex justify-center">
				<Searchbar />
			</div>
			<div className="flex justify-center mt-16">
				<div className="w-[80%]">
					<ScrollList />
				</div>
			</div>
			<div></div>
		</>
	);
}

export default App;
