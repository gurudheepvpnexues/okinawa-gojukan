import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Band, Closing, Masthead, SecHead, Split } from "../sections/Primitives";
import { Facts, Timeline, Values, Voices } from "../sections/Blocks";
import { aboutStory, aboutVoices } from "../sections/data";

const AboutPage = () => {
	return (
		<>
			<Header />
			<main id="main">

				<Masthead
					index="01"
					kicker="About the school"
					title="Twenty-three years on the same mat"
					lede="Okinawa Gojukan Karate-Do has taught karate-do in Yelahanka since 2003. The building has changed twice; the method has not changed at all."
					background="assets/img/banner/about.jpg"
					crumbs={[{ label: "About" }]}
				/>

				{/* 02 — Story */}
				<section className="sec sec--grid">
					<div className="container">
						<SecHead
							index="02"
							kicker="Our story"
							title="It started with nine students and one rule"
							lede="The rule was simple and it still decides everything: train properly, or do not train at all."
						/>
						<Split
							image={aboutStory.image}
							alt="A karate practitioner performing kata inside the dojo"
							tag={aboutStory.tag}
							title={aboutStory.title}
							lead={aboutStory.lead}
							body={aboutStory.body}
							points={aboutStory.points}
							cta={{ label: "See what we teach", to: "/programs" }}
						/>
					</div>
				</section>

				{/* 03 — Timeline */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="03"
							kicker="The long version"
							title="How the school grew"
							lede="A short history of a slow, deliberate build. Every step below took longer than anyone expected."
						/>
						<Timeline />
					</div>
				</section>

				{/* 04 — Values */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="04"
							kicker="What we hold to"
							title="Four words on the wall of the dojo"
							lede="They are not decoration. Every one of them is written into how a class is run and how a student is graded."
						/>
						<Values />
					</div>
				</section>

				{/* 05 — Band */}
				<Band
					index="05"
					image="assets/img/bg/about.jpg"
					kicker="The instructors"
					title="Defence-service discipline, in a small Yelahanka hall"
					text="Our teaching staff have served in the Army, Navy, Airforce and the Para and NSG Commandos. What they bring to the mat is not tactics, but a standard of preparation, punctuality and personal accountability that a civilian dojo rarely insists on."
					stats={[
						{ value: "4", label: "Full-time instructors" },
						{ value: "2", label: "Visiting examiners" },
						{ value: "1", label: "Bow before striking" },
					]}
					action={{ label: "Train with us", to: "/contact" }}
				/>

				{/* 06 — Facts */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="06"
							kicker="At a glance"
							title="The school in numbers"
							lede="If you would rather read the facts than the story, they are here."
						/>
						<Facts />
					</div>
				</section>

				{/* 07 — Voices */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="07"
							kicker="Voices"
							title="What former students say"
							lede="Written for us by people who have already left the belt behind them."
						/>
						<Voices items={aboutVoices} />
					</div>
				</section>

				<Closing
					kicker="Come and see"
					title="The best way to judge a dojo is to stand on its mat."
					text="Trial classes are free for every new student. Turn up in comfortable clothes and we will take care of the rest."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "Visit the gallery", to: "/gallery" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(AboutPage);
