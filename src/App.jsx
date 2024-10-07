import Navbar from "./components/Navbar";
import ScrollList from "./components/ScrollList";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import { useEffect } from "react";

const cardData = [];

function App() {
	useEffect(() => {
		fetch("/data.json")
			.then((res) => {
				return res.json();
			})
			.then((resJson) => {
				resJson.forEach((item) => cardData.push(item));
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
			<div>
				{cardData.map((item, index) => {
					return (
						<Card
							key={index}
							cardInfo={{
								img: item.data,
								title: item.title,
								type: item.type,
								price: item.price,
								rating: item.rating,
							}}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
