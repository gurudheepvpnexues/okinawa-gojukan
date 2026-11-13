import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Closing, Masthead, SecHead } from "../sections/Primitives";
import { Posts, EnquirySection } from "../sections/Blocks";

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
					background="assets/img/banner/blog.jpg?v=20261112d"
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

				{/* 03 — Featured achievement */}
				<section className="sec sec--paper2">
					<div className="container">
						<div className="feature">
							<Link
								to="/blog-details/tenth-dan-red-belt"
								className="feature__figure"
							>
								<img
									src="assets/img/gallery/okinawa-red-belt.jpg"
									alt="Hanshi Dr. S. C. Durai with Grand Master Hanshi Dr. Tetsuhiro Hokama in Okinawa"
								/>
								<span className="feature__tag">Featured</span>
							</Link>
							<div>
								<p className="feature__kicker">Achievements — Okinawa</p>
								<h2 className="feature__title">
									Red Belt 10th Dan, awarded in Okinawa
								</h2>
								<p className="feature__text">
									Our Chief Instructor, Hanshi Dr. S. C. Durai, was awarded the
									Red Belt 10th Dan in Goju-Ryu by Grand Master Hanshi Dr.
									Tetsuhiro Hokama — the first Indian to receive the rank
									directly from the birthplace of karate. The full statement,
									with the pictures from the hall.
								</p>
								<div className="feature__stats">
									<div>
										<b>10th Dan</b>
										<span>Red belt, Goju-Ryu</span>
									</div>
									<div>
										<b>Okinawa</b>
										<span>Birthplace of karate</span>
									</div>
									<div>
										<b>1st Indian</b>
										<span>So awarded</span>
									</div>
								</div>
								<Link to="/blog-details/tenth-dan-red-belt" className="arrow-link">
									Read the announcement <i className="ph ph-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* 04 — Posts */}
				<section className="sec sec--paper2 sec--grid">
					<div className="container">
						<SecHead
							index="03"
							kicker="All posts"
							title="Everything we have written"
							lede="Nine pieces, in reverse order of publication. The archive grows every month."
						/>
					</div>
				</section>

				<Posts />

				<EnquirySection paper={false} title="Ask us" lede="Nine pieces, in reverse order of publication. The archive grows every month." />
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
