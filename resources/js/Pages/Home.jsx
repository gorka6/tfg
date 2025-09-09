import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import '../../css/pages/home.css'

export default function Home({ auth }) {

    return (
        <>
            <Head title="Holaa" />
            <div className="container">
                <header className="header">
                    <h1>Mi App</h1>
                    <nav>
                        {auth.user ? (
                            <Link href={route('dashboard')}>
                                <PrimaryButton>Perfil</PrimaryButton>
                            </Link>
                        ) : (
                            <>
                                <Link href={route('register')}>
                                    <PrimaryButton>Registrate</PrimaryButton>
                                </Link>
                                <Link href={route('login')}>
                                    <PrimaryButton>Entrar</PrimaryButton>
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <section className="home-hero">
                    <h2 className="home-title">Hola, bienvenido 👋</h2>
                    <p className="home-sub">Estoy en el coche sudando mogollón</p>

                    <div className="home-actions">
                        <Link href={route('register')}>
                            <PrimaryButton>Registrate</PrimaryButton>
                        </Link>
                        <Link href={route('login')}>
                            <PrimaryButton>Entrar</PrimaryButton>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
