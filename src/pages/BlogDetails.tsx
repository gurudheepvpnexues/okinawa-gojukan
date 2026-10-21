import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import BlogDetails from "../components/BlogDetails";
import { Closing, Masthead } from "../sections/Primitives";

const BlogDetailsPage = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker="Journal"
					title="A Journey of Discipline and Self-Discovery"
					lede="Karate teaches far more than kicks and punches. How steady training shapes focus, patience and self-belief."
					background="assets/img/banner/blog-details.jpg"
					crumbs={[{ label: "Journal" }, { label: "Article" }]}
				/>
				<BlogDetails />
				<Closing
					kicker="Read, then train"
					title="Reading about it is not the same as doing it."
					text="If the practice described here sounds like work, come and try a class. The trial session is free and you do not need any kit."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "More articles", to: "/blog" }}
				/>
			</main>
			<Footer />
		</>
	);
};

export default memo(BlogDetailsPage);
