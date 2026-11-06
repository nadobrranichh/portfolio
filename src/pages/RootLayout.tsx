import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="relative bg-linear-to-br from-bg-from via-bg-via to-bg-to min-h-screen flex justify-center">
      <div className="flex flex-col gap-40">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
