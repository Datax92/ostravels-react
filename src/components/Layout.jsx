import { Suspense, lazy, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const FloatingButtons = lazy(() => import("./FloatingButtons"));

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingButtons />
      </Suspense>
    </>
  );
}