import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

export default function RootLayout() {
  return (
    <div className="relative bg-linear-to-br from-bg-from via-bg-via to-bg-to min-h-screen flex justify-center">
      <div className="flex flex-col gap-40">
        <ScrollToHash />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
