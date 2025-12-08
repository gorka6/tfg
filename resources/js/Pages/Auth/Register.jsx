import InputError from '@/Components/Framework/InputError';
import TextInput from '@/Components/Framework/TextInput';
import PrimaryButton from '@/Components/Framework/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import FondoSeamless from '@/Components/FondoSeamless';
import "../../../css/pages/register.css"
import { useContextoIdioma } from '@/Contexts/ContextoIdioma';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const { t } = useContextoIdioma();

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="reg-container">
                <FondoSeamless>
                    <div className="reg-form">
                        <form onSubmit={submit}>
                            <div className="reg-campo">
                                <label htmlFor="name" className="title-label">{t.edit.name}</label>

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.name} />
                            </div>

                            <div className="reg-campo">
                                <label htmlFor="email" className="title-label">Email</label>

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="reg-campo">
                                <label htmlFor="password" className="title-label">{t.login.password}</label>

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} />
                            </div>

                            <div className="reg-campo">
                                <label htmlFor="password_confirmation" className="title-label">{t.register.passwd_confirm}</label>

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    required
                                />

                                <InputError message={errors.password_confirmation} />
                            </div>

                            <div className="reg-campo">
                                <PrimaryButton disabled={processing} className="reg-button">
                                    {t.register.register} 
                                </PrimaryButton>
                                <Link href={route('login')}>
                                   {t.register.already}
                                </Link>
                            </div>
                        </form>
                    </div>
                </FondoSeamless>
            </div>
        </GuestLayout>
    );
}
