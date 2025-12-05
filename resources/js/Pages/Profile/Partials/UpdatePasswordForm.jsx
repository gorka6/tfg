import InputError from '@/Components/Framework/InputError';
import InputLabel from '@/Components/Framework/InputLabel';
import PrimaryButton from '@/Components/Framework/PrimaryButton';
import TextInput from '@/Components/Framework/TextInput';
import { useContextoIdioma } from '@/Contexts/ContextoIdioma';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

        const { t } = useContextoIdioma();
    

    return (
        <section className={className}>

            <form onSubmit={updatePassword}  >
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value={t.edit.current}
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                         
                        autoComplete="current-password"
                    />

                    <InputError
                        message={errors.current_password}
                         
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value={t.edit.new} />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                         
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password}   />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                         
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                         
                    />
                </div>

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
