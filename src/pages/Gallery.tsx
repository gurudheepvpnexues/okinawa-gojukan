import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Closing, Masthead, SecHead } from "../sections/Primitives";
import { Mosaic, EnquirySection } from "../sections/Blocks";
import { galleryGroups, galleryVideo } from "../sections/data";

/** "01", "02", … for the section index bars */
const pad = (n: number) => String(n).padStart(2, "0");

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
					background="assets/img/banner/gallery.jpg?v=20261112d"
					crumbs={[{ label: "Gallery" }]}
				/>

				{/* Video — first section, player on the right */}
				<section className="sec sec--tight sec--grid">
					<div className="container">
						<div className="gallery-video">
							<SecHead
								index="02"
								kicker={galleryVideo.kicker}
								title={galleryVideo.title}
								lede={galleryVideo.lede}
								align="left"
							/>
							<div className="gallery-video__media">
								<video
									className="gallery-video__player"
									src={galleryVideo.src}
									controls
									preload="metadata"
									playsInline
									aria-label={galleryVideo.title}
								/>
								<span className="split__tag">{galleryVideo.tag}</span>
							</div>
						</div>
					</div>
				</section>

				<section className="sec sec--grid">
					<div className="container">
						<SecHead
							index="03"
							kicker="The album"
							title="The archive, section by section"
							lede="Every photograph sits under the section it belongs to. Tap any frame to open it, then use the arrow keys to move through that album."
						/>
					</div>
				</section>

				{galleryGroups.map((group, i) => (
					<section
						key={group.id}
						className={`sec sec--grid${i % 2 ? " sec--paper2" : ""}`}
					>
						<div className="container">
							<SecHead
								index={pad(i + 4)}
								kicker={`${group.kicker} · ${group.items.length} photographs`}
								title={group.title}
								lede={group.note}
							/>
							<Mosaic items={group.items} />
						</div>
					</section>
				))}

				<EnquirySection paper={false} title="Ask us" lede="Join a class and give us a reason to update this page." />
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
