import InputError from '@/Components/Framework/InputError';
import InputLabel from '@/Components/Framework/InputLabel';
import PrimaryButton from '@/Components/Framework/PrimaryButton';
import TextInput from '@/Components/Framework/TextInput';
import { useContextoIdioma } from '@/Contexts/ContextoIdioma';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };
        const { t } = useContextoIdioma();
    

    return (
        <section className={className}>


            <form onSubmit={submit}  >
                <div>
                    <InputLabel htmlFor="name" value={t.edit.name} />

                    <TextInput
                        id="name"
                         
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError   message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                         
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError   message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p  >
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                 
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div  >
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div  >
                    <PrimaryButton disabled={processing}>{t.edit.save}</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p  >
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
