import Navbar from "./components/Navbar";
import ScrollList from "./components/ScrollList";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
	const [cardData, setCardData] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => {
				return res.json();
			})
			.then((resJson) => {
				setCardData(resJson);
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
			<div className="flex justify-center mt-28">
				<div className="grid grid-cols-3 gap-10">
					{cardData.map((item, index) => {
						console.log(item);
						return (
							<Card
								key={index}
								cardInfo={{
									img: item.img,
									title: item.title,
									type: item.type,
									price: item.price,
									rating: item.rating,
								}}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
