import { memo } from "react";
import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import BlogDetails from "../components/BlogDetails";
import { Closing, Masthead } from "../sections/Primitives";
import { EnquirySection } from "../sections/Blocks";
import { articles } from "../sections/articles";

const BlogDetailsPage = () => {
	const { post } = useParams();
	const article = articles[post ?? ""] ?? articles.discipline;

	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker={article.category}
					title={article.title}
					lede={article.standfirst}
					background="assets/img/banner/blog-details.jpg?v=20261112d"
					crumbs={[{ label: "Journal" }, { label: article.category }]}
				/>
				<BlogDetails />
				<EnquirySection paper={false} title="Ask us" lede="Reading about it is not the same as doing it." />
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
