import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Preloader from "./layouts/Preloader";
import ScrollManager from "./layouts/ScrollManager";
import PageMeta from "./layouts/PageMeta";
import BackToTop from "./layouts/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProgramDetails from "./pages/ProgramDetails";
import BlogDetails from "./pages/BlogDetails";
import EventDetails from "./pages/EventDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound"; // Create this page for 404

// Root layout: rendered inside the router context so route-aware helpers
// (ScrollManager) can safely use hooks such as useLocation().
const RootLayout = () => (
	<>
		<ScrollManager />
		<PageMeta />
				<Outlet />
	</>
);

// Define router
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/programs", element: <Programs /> },
      { path: "/events", element: <Events /> },
      { path: "/blog", element: <Blog /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/program-details", element: <ProgramDetails /> },
      { path: "/blog-details", element: <BlogDetails /> },
      { path: "/event-details", element: <EventDetails /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/support", element: <Support /> },
      { path: "*", element: <NotFound /> }, // 404 page
    ],
  },
]);

const App = () => {
  return (
    <>
      <Preloader />
      <RouterProvider router={router} />
      <BackToTop />
    </>
  );
};

export default App;
