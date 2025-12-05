import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import FondoSeamless from '@/Components/FondoSeamless';
import "../../../css/pages/edit.css"
import { useContextoIdioma } from '@/Contexts/ContextoIdioma';

export default function Edit({ mustVerifyEmail, status }) {

    const { t } = useContextoIdioma();


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="edit-container">
                <FondoSeamless>
                    <div className="edit-title">
                        <h2>{t.edit.title}</h2>
                    </div>

                    <div className="edit-form">

                        <div className="edit-section">
                            <div className="edit-section-inner">
                                <h2 className="edit-subtitle">{t.edit.modify}</h2>
                                <div className="edit-partial">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="edit-section">
                            <div className="edit-section-inner">
                                <h2 className="edit-subtitle">{t.edit.password}</h2>
                                <div className="edit-partial">
                                    <UpdatePasswordForm />
                                </div>
                            </div>
                        </div>

                        <div className="edit-section">
                            <div className="edit-section-inner">
                                <h2 className="edit-subtitle">{t.edit.delete}</h2>
                                <div className="edit-partial">
                                    <DeleteUserForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </FondoSeamless>
            </div>
        </AuthenticatedLayout>
    );
}
