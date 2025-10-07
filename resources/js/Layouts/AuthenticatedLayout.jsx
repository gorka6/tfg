import { usePage } from "@inertiajs/react";
import Header from "@/Components/Header";

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div>
            <Header auth={auth} />

            <main className="p-6">{children}</main>
        </div>
    );
}
