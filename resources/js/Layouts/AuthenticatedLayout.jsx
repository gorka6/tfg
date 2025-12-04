import { usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "../../css/base.css"

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div>
            <Header auth={auth} />
            <main className="app-main">{children}</main>
            <Footer auth={auth}/>
        </div>
    );
}
