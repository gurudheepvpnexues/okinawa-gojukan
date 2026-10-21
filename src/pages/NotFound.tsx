import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const NotFound = () => {
	return (
		<>
			<Header />
			<main id="main">
				<section
					className="nf"
					style={{
						backgroundImage: "url(assets/img/banner/404.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="container">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							<div className="nf__code">404</div>
							<h1>Nothing on this mat</h1>
							<p>
								The page you asked for has moved, been renamed, or never existed.
								Head back to the dojo and keep training.
							</p>
							<div className="nf__actions">
								<Link to="/" className="btn-solid">
									Back to home <i className="ph ph-arrow-right"></i>
								</Link>
								<Link to="/programs" className="btn-ghost btn-ghost--light">
									See the syllabus
								</Link>
								<Link to="/contact" className="btn-ghost btn-ghost--light">
									Contact the dojo
								</Link>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default memo(NotFound);
