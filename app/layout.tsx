import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
        <head>
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.webmanifest" />

            {/* OpenGraph Meta Tags */}
            <meta property="og:title" content="CodeGrade Docs" />
            <meta
                property="og:description"
                content="Documentation complète pour la plateforme CodeGrade. Découvrez comment utiliser notre système d'évaluation intelligente."
            />
            <meta property="og:image" content="https://https://code-grade-docs-eight.vercel.app/landing-docs.png" />
            <meta property="og:url" content="https://https://code-grade-docs-eight.vercel.app/" />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags (optionnel) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="CodeGrade Docs" />
            <meta
                name="twitter:description"
                content="Documentation complète pour la plateforme CodeGrade. Découvrez comment utiliser notre système d'évaluation intelligente."
            />
            <meta name="twitter:image" content="https://https://code-grade-docs-eight.vercel.app/landing-docs.png" />
        </head>
        <body className="dark-mode">
        <RootProvider>{children}</RootProvider>
        </body>
        </html>
    );
}