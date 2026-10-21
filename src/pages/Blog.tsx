import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Closing, Masthead, SecHead } from "../sections/Primitives";
import { Posts } from "../sections/Blocks";

const BlogPage = () => {
	return (
		<>
			<Header />
			<main id="main">

				<Masthead
					index="01"
					kicker="Journal"
					title="Notes from the mat"
					lede="Technique write-ups, grading advice and the occasional opinion about shoes. Written by the instructors and the students who train here."
					background="assets/img/banner/blog.jpg"
					crumbs={[{ label: "Journal" }]}
				/>

				{/* 02 — Editor's note */}
				<section className="sec sec--tight">
					<div className="container">
						<div className="note">
							<span className="note__label">From the editors</span>
							<p className="note__text">
								We write about what happens in the room, not about karate in
								the abstract. Every piece here has been tested on the mat first
								and then written up, which is why they occasionally disagree
								with each other.
							</p>
							<Link to="/blog-details" className="arrow-link">
								Start reading <i className="ph ph-arrow-right"></i>
							</Link>
						</div>
					</div>
				</section>

				{/* 02 — Posts */}
				<section className="sec sec--paper2 sec--grid">
					<div className="container">
						<SecHead
							index="02"
							kicker="All posts"
							title="Everything we have written"
							lede="Six pieces, in reverse order of publication. The archive grows every month."
						/>
					</div>
				</section>

				<Posts />

				<Closing
					kicker="Keep reading"
					title="Practice is the only article that actually teaches."
					text="Come and try a class. We will show you the technique properly, and you can decide for yourself whether our writing matches our teaching."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "Browse the gallery", to: "/gallery" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(BlogPage);
