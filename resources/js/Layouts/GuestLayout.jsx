import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import "../../css/base.css"

export default function GuestLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div>
      <Header auth={auth} />
      <main className="app-main">{children}</main>
      <Footer auth={auth}></Footer>
    </div>
  );
}
