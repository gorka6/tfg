import FondoSeamless from '@/Components/FondoSeamless';
import Checkbox from '@/Components/Framework/Checkbox';
import InputError from '@/Components/Framework/InputError';
import PrimaryButton from '@/Components/Framework/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/pages/login.css";
import { useContextoIdioma } from '@/Contexts/ContextoIdioma';

export default function Login({ status, canResetPassword }) {
    const { t } = useContextoIdioma();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="login-page">
                <FondoSeamless>
                    {status && (
                        <div className="login-status">
                            {status}
                        </div>
                    )}

                    <div className="login-tip">
                        <h2>{t.login.welcome}</h2>
                    </div>
                    <div className="login-flex-wrapper">
                        <img src="/images/web/login/login-1.webp " alt="Foto izquierda" className="login-side-image" />

                        <div className="login-wrapper">

                            <form onSubmit={submit}>
                                <div className="login-email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                        className="login-input"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="login-password">
                                    <label htmlFor="password">{t.login.password}</label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                        className="login-input"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="login-remember">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData('remember', e.target.checked)
                                        }
                                    />
                                    <span>{t.login.remember}</span>
                                </div>

                                <div className="login-actions">
                                    {canResetPassword && (
                                        <Link href={route('password.request')} className="login-forgot">
                                            {t.login.forgot}
                                        </Link>
                                    )}
                                    <PrimaryButton disabled={processing} className="login-button">
                                        {t.login.log}
                                    </PrimaryButton>
                                </div>

                                <div className='login-register'>
                                    <Link href={route('register')}>
                                        {t.login.register}
                                    </Link>
                                </div>
                            </form>
                        </div>

                        <img src="/images/web/login/login-2.webp" alt="Foto derecha" className="login-side-image" />
                    </div>
                </FondoSeamless>
            </div>
        </GuestLayout>
    );
}
