import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Closing, Masthead, SecHead } from "../sections/Primitives";
import { Mosaic } from "../sections/Blocks";

const GalleryPage = () => {
	return (
		<>
			<Header />
			<main id="main">

				<Masthead
					index="01"
					kicker="Archive"
					title="Twenty-three years of dojo photographs"
					lede="Training sessions, grading days and championship weekends, photographed at the Yelahanka hall and at tournaments across the country."
					background="assets/img/banner/gallery.jpg"
					crumbs={[{ label: "Gallery" }]}
				/>

				<section className="sec sec--grid">
					<div className="container">
						<SecHead
							index="02"
							kicker="The album"
							title="Tap any frame to open it"
							lede="Use the arrow keys to move through the album once a photograph is open."
						/>
						<Mosaic />
					</div>
				</section>

				<Closing
					kicker="Be in the next one"
					title="The best photograph of this school is still to be taken."
					text="Join a class and give us a reason to update this page."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "Read the story", to: "/about" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(GalleryPage);
