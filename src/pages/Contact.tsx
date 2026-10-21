import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Closing, Masthead, SecHead } from "../sections/Primitives";
import { Inquiry } from "../sections/Blocks";
import { dojo } from "../sections/data";

const ContactPage = () => {
	return (
		<>
			<Header />
			<main id="main">

				<Masthead
					index="01"
					kicker="Contact"
					title="Come and train with us"
					lede="Call the dojo, send a message, or simply turn up for a free trial class. We are on Maruthi Nagar in Yelahanka, seven days a week."
					background="assets/img/banner/contact.jpg"
					crumbs={[{ label: "Contact" }]}
				/>

				{/* 02 — Inquiry */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="02"
							kicker="Write to us"
							title="Tell us who is coming and we will save a mat"
							lede="Your message goes to the dojo WhatsApp inbox and is read by an instructor, not a call centre. We usually reply the same working day."
						/>
						<Inquiry />
					</div>
				</section>

				{/* 03 — Map */}
				<section className="sec sec--paper2 sec--tight">
					<div className="container">
						<SecHead
							index="03"
							kicker="Find us"
							title="The dojo in Yelahanka"
							lede={dojo.address}
						/>
						<div className="map-frame">
							<iframe
								title="Okinawa Gojukan Karate-Do dojo location on Google Maps"
								src={dojo.maps}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</section>

				<Closing
					kicker="No forms needed"
					title="Or simply call the dojo."
					text={`Ring ${dojo.phone} between 6 AM and 8 PM and ask for a trial class. We will tell you honestly which session suits the student.`}
					primary={{ label: `Call ${dojo.phone}`, to: "/contact" }}
					secondary={{ label: "See class times", to: "/programs" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(ContactPage);
