"use client"

import Link from "next/link"
import { ArrowRight, Home, Search, Terminal, BookOpen, ChevronRight } from "lucide-react"

export default function NotFoundPage() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-gray-950 to-black text-white">
            {/* Background code effect */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
                <div className="absolute left-10 top-20 flex flex-col gap-3">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="code-line h-3 rounded bg-emerald-500/30"
                            style={{
                                width: `${Math.random() * 150 + 50}px`,
                                opacity: Math.random() * 0.5 + 0.5,
                            }}
                        ></div>
                    ))}
                </div>
                <div className="absolute right-20 top-40 flex flex-col gap-3">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="code-line h-3 rounded bg-emerald-500/30"
                            style={{
                                width: `${Math.random() * 120 + 80}px`,
                                opacity: Math.random() * 0.5 + 0.5,
                            }}
                        ></div>
                    ))}
                </div>
                <div className="absolute bottom-40 left-30 flex flex-col gap-3">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="code-line h-3 rounded bg-emerald-500/30"
                            style={{
                                width: `${Math.random() * 180 + 40}px`,
                                opacity: Math.random() * 0.5 + 0.5,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-gray-950/80 px-4 py-4 backdrop-blur-lg">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-70 blur-sm"></div>
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-950">
                                <Terminal className="h-4 w-4 text-emerald-400" />
                            </div>
                        </div>
                        <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
                            CodeGrade Docs
                        </span>
                    </div>
                    <nav className="flex space-x-8">
                        <Link href="/docs" className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400">
                            Documentation
                        </Link>
                        <Link href="https://code-grade.vercel.app/fr" className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400">
                            Site principal
                        </Link>
                    </nav>
                    <div>
                        <Link
                            href="/docs"
                            className="group relative overflow-hidden rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-2 text-sm font-medium text-black"
                        >
                            <span className="relative z-10">Explorer</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-1 flex-col items-center justify-center pt-24">
                <div className="container mx-auto max-w-6xl px-4 pt-20">
                    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
                        {/* Text Content */}
                        <div className="max-w-xl text-center lg:text-left">
                            <div className="mb-6 inline-block rounded-full bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                                Erreur 404
                            </div>
                            <h1 className="bg-gradient-to-r from-white via-emerald-300 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
                                Page non trouvée
                            </h1>
                            <p className="mt-6 text-lg text-gray-300 sm:text-xl">
                                La page que vous recherchez semble avoir disparu dans le code source. Vérifiez l'URL ou explorez notre
                                documentation.
                            </p>

                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                <Link
                                    href="/"
                                    className="group relative overflow-hidden rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 px-8 py-3 font-medium text-black shadow-lg shadow-emerald-500/20"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Home className="h-4 w-4" />
                                        Page d'accueil
                                    </span>
                                    <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                                </Link>
                                <Link
                                    href="/docs"
                                    className="group flex items-center gap-2 rounded-md border border-gray-700 bg-gray-900/50 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-gray-800/50"
                                >
                                    <BookOpen className="h-4 w-4" />
                                    Documentation
                                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="mt-12 lg:mt-0">
                            <div className="relative">
                                <div className="absolute -inset-10 rounded-full bg-emerald-500/20 blur-3xl"></div>
                                <div className="relative">
                                    {/* 404 Illustration */}
                                    <div className="flex items-center justify-center">
                                        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gray-900/80 backdrop-blur-sm sm:h-56 sm:w-56 md:h-64 md:w-64">
                                            <div className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-500/30 opacity-60"></div>
                                            <div className="absolute inset-3 rounded-full border-2 border-emerald-400/20"></div>
                                            <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 backdrop-blur-sm sm:h-16 sm:w-16">
                                                <Search className="h-6 w-6 text-emerald-400 sm:h-8 sm:w-8" />
                                            </div>
                                            <div className="absolute -bottom-6 -left-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 backdrop-blur-sm sm:h-20 sm:w-20">
                                                <Terminal className="h-7 w-7 text-emerald-400 sm:h-10 sm:w-10" />
                                            </div>
                                            <div className="text-center">
                                                <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-6xl font-bold text-transparent sm:text-8xl">
                                                    404
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Suggestions Section */}
                    <div className="mt-20 rounded-xl border border-gray-800 bg-gray-900/30 p-8 backdrop-blur-sm">
                        <h2 className="mb-6 text-2xl font-bold text-white">Vous pourriez être intéressé par</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Link href="/docs" className="group">
                                <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-5 transition-all duration-300 hover:border-emerald-500/50">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                                        <BookOpen className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-white">Documentation</h3>
                                    <p className="text-sm text-gray-400">Explorez notre documentation complète</p>
                                </div>
                            </Link>
                            <Link href="/docs/Demarrage/onboarding" className="group">
                                <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-5 transition-all duration-300 hover:border-emerald-500/50">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                                        <ArrowRight className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-white">Guide de démarrage</h3>
                                    <p className="text-sm text-gray-400">Commencez avec CodeGrade en quelques minutes</p>
                                </div>
                            </Link>
                            <Link href="/docs/Fonctionnalites/evaluation-code" className="group">
                                <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-5 transition-all duration-300 hover:border-emerald-500/50">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                                        <Terminal className="h-5 w-5 text-emerald-400" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-white">Évaluation de code</h3>
                                    <p className="text-sm text-gray-400">Découvrez notre système d'évaluation automatique</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 bg-gray-950 mt-10 px-4 py-8 text-gray-400">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-30 blur-sm"></div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-950">
                                    <Terminal className="h-4 w-4 text-emerald-400" />
                                </div>
                            </div>
                            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-lg font-bold text-transparent">
                                CodeGrade Docs
                            </span>
                        </div>

                        <div className="text-sm">© {new Date().getFullYear()} CodeGrade. Tous droits réservés.</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}