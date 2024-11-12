import Navbar from "@/app/Components/Navbar"
import Hero from "./Components/Hero"
import Project from "./Components/Project";
import Extension from "./Components/Extension";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
      <Project />
      <Extension />
			<Work />
			<Footer />
		</div>
	);
}