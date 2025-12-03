import './bootstrap';
import '../css/app.css';
import '../css/base.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ContextoIdiomaProvider } from './Contexts/ContextoIdioma';
import { ContextoTemaProvider } from './Contexts/ContextoTema';

const appName = import.meta.env.VITE_APP_NAME || 'Hero Forge';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ContextoTemaProvider>
                <ContextoIdiomaProvider>
                    <App {...props} />
                </ContextoIdiomaProvider>
            </ContextoTemaProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
