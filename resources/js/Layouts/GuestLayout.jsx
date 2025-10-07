import Header from "@/Components/Header";
import { usePage } from "@inertiajs/react";

export default function GuestLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div>
      <Header auth={auth} />
      <main>{children}</main>
    </div>
  );
}
