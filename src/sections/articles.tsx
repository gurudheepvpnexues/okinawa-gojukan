import type { ReactNode } from "react";

/* --------------------------------------------------------------- ARTICLES */

export type Article = {
	slug: string;
	title: string;
	/** short line used on the page masthead and in listings */
	standfirst: string;
	date: string;
	read: string;
	author: string;
	avatar: string;
	category: string;
	hero: { img: string; alt: string; caption: string };
	/** the article body, built at render time so it follows the language */
	body: () => ReactNode;
};

export const articles: Record<string, Article> = {
	/* ------------------------------------------------------------ default */
	discipline: {
		slug: "discipline",
		title: "Martial Arts: A Journey of Discipline and Self-Discovery",
		standfirst:
			"Karate teaches far more than kicks and punches. How steady training shapes focus, patience and self-belief.",
		date: "18 August, 2026",
		read: "8 min read",
		author: "Dojo Admin",
		avatar: "assets/img/blog/avator/6.jpg",
		category: "Martial Arts Philosophy",
		hero: {
			img: "assets/img/blog/blog-details.jpg",
			alt: "Karate students training conditioning drills in the dojo",
			caption: "Strength work before every technique session",
		},
		body: () => (
			<>
				<p>
					Karate teaches far more than kicks and punches. A strong body is only
					the first part of it — the second is a mind that can hold a single
					point of attention through a long, unglamorous afternoon. At our dojo
					every class opens with a bow, a warm-up and simple strength work —
					squats, lunges, push-ups and balance drills — that prepares the body
					for safe, effective training and for the hour that follows it.
				</p>
				<p>
					Progress matters more than intensity. Beginners should start with two
					or three short sessions each week, gradually adding repetitions as
					fitness improves. Planks and hip bridges build the core power needed
					for crisp techniques, while stretching after every session keeps
					muscles long and flexible. Good nutrition, hydration and proper sleep
					complete the picture and help young athletes recover faster.
				</p>

				<blockquote>
					A black belt is simply a white belt who never stopped showing up —
					steady, patient practice is the real secret to strength.
				</blockquote>

				<p>
					Track your small wins: hold your stance a little longer, complete one
					more set, keep your guard up through the final round. Over weeks these
					efforts add up to visible progress in class, on the mat and in everyday
					life. Train consistently, train safely, and let strength grow one
					session at a time.
				</p>
			</>
		),
	},

	/* ------------------------------------------------- world championship */
	"world-championship-2026": {
		slug: "world-championship-2026",
		title: "Three golds in Bengaluru: inside the XVI WKC World Championship",
		standfirst:
			"A week of kata, kumite and kobudo at the world championship — and the months of preparation that put the squad on the podium.",
		date: "02 November, 2026",
		read: "9 min read",
		author: "Chief Instructor",
		avatar: "assets/img/blog/avator/5.jpg",
		category: "Achievements",
		hero: {
			img: "assets/img/New images/image 2.jpeg",
			alt: "Two medalists holding the Indian flag after the XVI WKC World Championship",
			caption: "Double gold in front of the national flag — XVI WKC, Bengaluru",
		},
		body: () => (
			<>
				<p>
					A world championship is decided over one weekend and won over the
					months before it. Our squad travelled to Bengaluru for the XVI World
					Karate Confederation Championship entered across kata, kumite and
					kobudo, and came home with three golds, two silvers and a spread of
					bronze medals that kept the dojo on the podium in almost every
					division it entered.
				</p>
				<p>
					The hall was loud from the first elimination round. Several tatami ran
					at once, the scoreboards reset every few minutes, and between them our
					coaches moved mat to mat with the draw sheets folded into their jacket
					pockets. What looks from the stands like a single performance is
					really a day of small decisions — when to attack, when to wait, and
					when to breathe.
				</p>

				<blockquote>
					The medal is only the receipt. The training was the purchase.
				</blockquote>

				<h3>The week before</h3>
				<p>
					The final preparation block began with the ordinary things: longer
					warm-ups, sharper kihon, and kumite rounds run at competition pace
					rather than class pace. Kata was repeated until the sequence stopped
					needing to be remembered, and the kobudo team drilled the same three
					transition until the staff moved without a conscious count.
				</p>
				<p>
					Nothing about that last week was dramatic. There were no secret drills
					and no last-minute changes. We simply reduced the volume, kept the
					intensity and let the students recover — which is usually the hardest
					instruction for a competitor to follow.
				</p>

				<figure className="article__figure">
					<img
						src="assets/img/New images/image 75.jpeg"
						alt="The full squad with medals and certificates at the XVI WKC World Championship"
						loading="lazy"
					/>
					<figcaption>
						The full squad with medals and certificates on the final day
					</figcaption>
				</figure>

				<h3>What the tatami gave back</h3>
				<p>
					Across the weekend the results came in waves. Some were expected, some
					were a genuine surprise to everyone except the student who earned
					them. The podium list, as it finished:
				</p>
				<ul>
					<li>
						<i className="ph ph-trophy"></i>
						Gold — senior female kumite, after three straight wins
					</li>
					<li>
						<i className="ph ph-trophy"></i>
						Gold — junior boys' kata, with the highest flag score of the round
					</li>
					<li>
						<i className="ph ph-trophy"></i>
						Gold — cadet girls' kumite, decided in extra time
					</li>
					<li>
						<i className="ph ph-medal"></i>
						Silver — senior male kumite and junior female kata
					</li>
					<li>
						<i className="ph ph-medal"></i>
						Bronze — kobudo bo staff and the team kata division
					</li>
				</ul>

				<h3>Juniors, kobudo and the next generation</h3>
				<p>
					The loudest corner of the hall was ours. Our cadet and junior
					competitors made up more than half of the entries, and several were
					standing on a world podium for the first time. The younger students
					did not treat the championship as an exception — they lined up, bowed
					and performed exactly as they do on a Tuesday evening.
				</p>
				<figure className="article__figure">
					<img
						src="assets/img/New images/image 63.jpeg"
						alt="Two kobudo medalists holding bo staffs and certificates at the championship"
						loading="lazy"
					/>
					<figcaption>
						Kobudo on the world stage — bo staff medals and certificates
					</figcaption>
				</figure>
				<p>
					The kobudo result deserves its own line. The weapons division is often
					the quiet part of a karate championship, and our team had never taken
					a world medal in it before. Two bronze medals on the same afternoon
					changed that, and made the case for keeping weapons training in the
					syllabus exactly where it is.
				</p>

				<h3>What we bring home</h3>
				<p>
					The medals will go into the cabinet by the dojo entrance, and the
					certificates will be framed beside the Okinawa set. What matters more
					is what the squad brings back into the class: sharper timing, a
					clearer idea of what competition pace really feels like, and a group
					of juniors who now know that the podium is a place they are allowed
					to aim for.
				</p>
				<p>
					Training resumes on the usual schedule this week. If you have been
					thinking about the competition squad, the next selection session is
					open to every student from green belt upward — come and watch first,
					then decide.
				</p>
			</>
		),
	},

	/* --------------------------------------------------------- red belt 10 */
	"tenth-dan-red-belt": {
		slug: "tenth-dan-red-belt",
		title: "Red Belt 10th Dan: awarded in Okinawa",
		standfirst:
			"Our Chief Instructor returns from Okinawa with the Red Belt 10th Dan in Goju-Ryu, conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama.",
		date: "09 November, 2026",
		read: "6 min read",
		author: "Hanshi Dr. S. C. Durai",
		avatar: "assets/img/blog/avator/5.jpg",
		category: "Achievements",
		hero: {
			img: "assets/img/gallery/okinawa-red-belt.jpg",
			alt: "Hanshi Dr. S. C. Durai with Grand Master Hanshi Dr. Tetsuhiro Hokama after the 10th Dan award in Okinawa",
			caption:
				"With Grand Master Hanshi Dr. Tetsuhiro Hokama after the award, Okinawa",
		},
		body: () => (
			<>
				<p>
					I am deeply humbled and proud to share a major milestone in my martial
					arts journey. I have recently returned from Okinawa, Japan, where I
					was officially awarded the Red Belt 10th Dan in Goju-Ryu Karate by
					Grand Master Hanshi Dr. Tetsuhiro Hokama, 10th Dan — and I am the first
					Indian to receive this rank directly from the birthplace of karate.
				</p>
				<p>
					It was a profound experience demonstrating a lifetime of training in
					front of elite practitioners and participants from all over the world.
					From across the globe, practitioners unite: here boundaries fade where
					the spirit strikes, and the beauty of motion connects us all. Receiving
					the highest credits and praise from Grand Master Hokama himself is a
					moment I will cherish forever.
				</p>

				<blockquote>
					Though he is no longer with us, this milestone is a testament to his
					timeless guidance, profound wisdom and the enduring legacy he left
					behind.
				</blockquote>

				<h3>The award</h3>
				<ul>
					<li>
						<i className="ph ph-award"></i>
						Rank — Red Belt, 10th Dan, Goju-Ryu Karate
					</li>
					<li>
						<i className="ph ph-map-pin"></i>
						Conferred in Okinawa, Japan — the birthplace of karate
					</li>
					<li>
						<i className="ph ph-seal-check"></i>
						By Grand Master Hanshi Dr. Tetsuhiro Hokama, 10th Dan
					</li>
					<li>
						<i className="ph ph-flag"></i>
						First Indian to receive the rank directly from Okinawa
					</li>
					<li>
						<i className="ph ph-heart"></i>
						Dedicated to the memory of Renshi Dr. R. V. T. Mani
					</li>
				</ul>

				<figure className="article__figure">
					<img
						src="assets/img/gallery/okinawa-belt-presentation.jpg"
						alt="The Red Belt presented by the senior master in Okinawa"
						loading="lazy"
					/>
					<figcaption>
						The Red Belt presented by the senior master at the Okinawa dojo
					</figcaption>
				</figure>

				<h3>A rank with a lineage</h3>
				<p>
					Goju-Ryu is the style we have taught in Yelahanka since 2003, and it
					carries its own standard: hard training, close contact, and a refusal
					to separate the character from the technique. A tenth dan is not a
					prize for a season's results. It is a marker for the whole of a
					teaching life, and it carries the names of the teachers who came
					before.
				</p>
				<p>
					That is why I dedicate this Red Belt to my revered guru, the late
					Renshi Dr. R. V. T. Mani. He is no longer with us, but his teaching is
					still on the mat every evening — in the way a student stands, the way
					a class is opened and closed, and the way a promise to a beginner is
					kept. I am forever grateful for the path he carved.
				</p>

				<h3>What it means for the dojo</h3>
				<p>
					A rank of this kind changes nothing about the standard we hold, and
					that is the point of it. The syllabus stays the same, the grading
					stays the same, and the students who arrive at five o'clock on a
					Wednesday are owed exactly the same attention as the ones who arrive
					for a tournament. What the rank gives me is not authority over the
					dojo; it is the duty to keep it worthy.
				</p>
				<p>
					Thank you all for standing by me and keeping his teachings alive.
				</p>
				<p>
					<b>Best regards,</b>
					<br />
					<b>Hanshi Dr. S. C. Durai</b>
					<br />
					10th Dan, Goju-Ryu Karate
				</p>
			</>
		),
	},

	/* --------------------------------------------------------------- kobudo */
	"kobudo-world-stage": {
		slug: "kobudo-world-stage",
		title: "Bo staff and bronze: kobudo on the world stage",
		standfirst:
			"The weapons division travelled with the kumite squad this year. What the bo staff team learned from a first world championship.",
		date: "24 October, 2026",
		read: "5 min read",
		author: "Kobudo Instructor",
		avatar: "assets/img/blog/avator/4.jpg",
		category: "Achievements",
		hero: {
			img: "assets/img/New images/image 63.jpeg",
			alt: "Two kobudo medalists holding bo staffs and certificates at the championship",
			caption: "Kobudo on the world stage — bo staff medals and certificates",
		},
		body: () => (
			<>
				<p>
					Kobudo is the quiet half of our syllabus: the bo staff, the sai, the
					rogu and the nunchaku, taught as a continuation of the empty hand
					techniques rather than as a separate sport. At the XVI World Karate
					Confederation Championship the weapons team travelled with the kumite
					squad for the first time as a full division entry.
				</p>
				<p>
					The scoring is unforgiving. Two judges score distance, timing and the
					angle of the strike, and a single rushed transition costs more than it
					does in kumite. Our competitors had trained the same three sequences
					for months and were still surprised by how quickly the tatami moved
					once the opening whistle went.
				</p>

				<blockquote>
					The staff does not protect you. It only shows you where your timing
					already was.
				</blockquote>

				<figure className="article__figure">
					<img
						src="assets/img/New images/image 41.jpeg"
						alt="Kobudo podium with bo staffs, medals and certificates at the championship"
						loading="lazy"
					/>
					<figcaption>
						Kobudo podium with bo staffs, medals and certificates
					</figcaption>
				</figure>

				<h3>What the mat taught us</h3>
				<ul>
					<li>
						<i className="ph ph-check-circle"></i>
						Distance is trained, not assumed — the staff must meet the target
						at full extension
					</li>
					<li>
						<i className="ph ph-check-circle"></i>
						Transitions need an anchor: a fixed count keeps the feet honest
					</li>
					<li>
						<i className="ph ph-check-circle"></i>
						Kata first, weapons second — the empty-hand rhythm carries the
						technique
					</li>
				</ul>

				<p>
					Two bronze medals were the result, and both were won on the last
					exchange of the final round. More importantly, the weapons squad
					now has a benchmark: a real world championship mat, scored by judges
					who had never seen our dojo before. Next season we begin again from
					that line.
				</p>
			</>
		),
	},
};
