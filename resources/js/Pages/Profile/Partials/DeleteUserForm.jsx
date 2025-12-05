import DangerButton from '@/Components/Framework/DangerButton';
import InputError from '@/Components/Framework/InputError';
import InputLabel from '@/Components/Framework/InputLabel';
import Modal from '@/Components/Framework/Modal';
import SecondaryButton from '@/Components/Framework/SecondaryButton';
import TextInput from '@/Components/Framework/TextInput';
import { useContextoIdioma } from '@/Contexts/ContextoIdioma';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    const { t } = useContextoIdioma();


    return (
        <section className={`space-y-6 ${className}`}>


            <DangerButton onClick={confirmUserDeletion}>
                {t.edit.delete}
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser}  >


                    <div  >
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                             
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                             
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                             
                        />
                    </div>

                    <div  >
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton   disabled={processing}>
                            {t.edit.delete}
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
