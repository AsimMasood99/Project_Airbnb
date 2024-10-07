import Navbar from "./components/Navbar";
import ScrollList from "./components/ScrollList";
import Searchbar from "./components/Searchbar";
function App() {
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
		</>
	);
}

export default App;
