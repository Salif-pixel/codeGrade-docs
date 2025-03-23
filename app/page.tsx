"use client"

import { useState } from "react"
import Link from "next/link"
import {
    ArrowRight,
    FileText,
    CheckSquare,
    BookOpen,
    ChevronRight,
    Cpu,
    Database,
    Terminal,
    Code,
    X,
} from "lucide-react"

export default function HomePage() {
    const [videoModalOpen, setVideoModalOpen] = useState(false)

    // Ouvrir la modale vidéo
    const openVideoModal = () => {
        setVideoModalOpen(true)
        document.body.style.overflow = "hidden" // Empêche le défilement du body
    }

    // Fermer la modale vidéo
    const closeVideoModal = () => {
        setVideoModalOpen(false)
        document.body.style.overflow = "auto" // Réactive le défilement du body
    }

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
                    <nav className="hidden  md:flex space-x-8">
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

            {/* Hero Section */}
            <main className="relative z-10 flex flex-1 flex-col items-center justify-center pt-24">
                <div className="container mx-auto max-w-6xl px-4 pt-20">
                    <div className="text-center">
                        <div className="mb-6 inline-block rounded-full bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                            Documentation Interactive
                        </div>
                        <h1 className="bg-gradient-to-r from-white via-emerald-300 to-emerald-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                            Bienvenue dans <br className="hidden md:block" />
                            CodeGrade Docs
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
                            Découvrez comment utiliser notre plateforme d'évaluation intelligente pour automatiser vos corrections et
                            offrir des retours personnalisés.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/docs"
                            className="group relative overflow-hidden rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 px-8 py-3 font-medium text-black shadow-lg shadow-emerald-500/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Consulter la documentation
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                        </Link>
                        <Link
                            href="/docs/getting-started"
                            className="group flex items-center gap-2 rounded-md border border-gray-700 bg-gray-900/50 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-gray-800/50"
                        >
                            Guide de démarrage
                            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Video Promo Section */}
                    <div className="relative mx-auto mt-20 w-full max-w-5xl overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 shadow-2xl backdrop-blur-sm">
                        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
                        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>

                        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                            {/* Video Mockup */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full max-w-4xl">
                                    {/* Browser Chrome */}
                                    <div className="rounded-t-lg bg-gray-800 px-4 py-2">
                                        <div className="flex items-center">
                                            <div className="mr-2 flex space-x-1">
                                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <div className="flex-1 rounded bg-gray-700 px-4 py-1 text-center text-xs text-gray-300">
                                                codegrade.app - Plateforme d'évaluation intelligente
                                            </div>
                                        </div>
                                    </div>

                                    {/* App Interface */}
                                    <div className="relative h-[400px] bg-gray-950 p-4">
                                        {/* App Header */}
                                        <div className="mb-4 flex items-center justify-between border-b border-gray-800 pb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                                                    <Terminal className="h-4 w-4 text-emerald-400" />
                                                </div>
                                                <span className="text-lg font-bold text-white">CodeGrade</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                                                <div className="h-4 w-20 rounded bg-gray-800"></div>
                                            </div>
                                        </div>

                                        {/* App Content */}
                                        <div className="grid grid-cols-12 gap-4">
                                            {/* Sidebar */}
                                            <div className="col-span-3 rounded border border-gray-800 bg-gray-900 p-3">
                                                <div className="mb-3 h-6 w-3/4 rounded bg-gray-800"></div>
                                                <div className="space-y-2">
                                                    <div className="h-5 w-full rounded bg-emerald-500/20"></div>
                                                    <div className="h-5 w-full rounded bg-gray-800"></div>
                                                    <div className="h-5 w-full rounded bg-gray-800"></div>
                                                    <div className="h-5 w-full rounded bg-gray-800"></div>
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="col-span-9 rounded border border-gray-800 bg-gray-900 p-4">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <div className="h-6 w-1/3 rounded bg-gray-800"></div>
                                                    <div className="h-8 w-32 rounded bg-emerald-500/20"></div>
                                                </div>

                                                {/* Code Evaluation */}
                                                <div className="relative mb-4 rounded border border-gray-800 bg-gray-950 p-3">
                                                    <div className="mb-2 flex items-center">
                                                        <div className="mr-2 h-4 w-4 rounded-full bg-emerald-500/20"></div>
                                                        <div className="h-4 w-1/4 rounded bg-gray-800"></div>
                                                    </div>

                                                    {/* Code Lines */}
                                                    <div className="space-y-2">
                                                        <div className="h-4 w-full rounded bg-gray-800"></div>
                                                        <div className="h-4 w-3/4 rounded bg-gray-800"></div>
                                                        <div className="h-4 w-5/6 rounded bg-gray-800"></div>
                                                        <div className="h-4 w-2/3 rounded bg-gray-800"></div>
                                                    </div>

                                                    {/* Evaluation Result */}
                                                    <div className="mt-3 rounded border border-emerald-500/20 bg-emerald-500/5 p-2">
                                                        <div className="flex items-center">
                                                            <div className="mr-2 h-4 w-4 rounded-full bg-emerald-500/20"></div>
                                                            <div className="h-4 w-1/3 rounded bg-emerald-500/20"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Stats Section */}
                                                <div className="grid grid-cols-3 gap-3">
                                                    <div className="rounded border border-gray-800 bg-gray-950 p-2">
                                                        <div className="mb-2 h-4 w-1/2 rounded bg-gray-800"></div>
                                                        <div className="h-8 w-full rounded bg-emerald-500/10"></div>
                                                    </div>
                                                    <div className="rounded border border-gray-800 bg-gray-950 p-2">
                                                        <div className="mb-2 h-4 w-1/2 rounded bg-gray-800"></div>
                                                        <div className="h-8 w-full rounded bg-emerald-500/10"></div>
                                                    </div>
                                                    <div className="rounded border border-gray-800 bg-gray-950 p-2">
                                                        <div className="mb-2 h-4 w-1/2 rounded bg-gray-800"></div>
                                                        <div className="h-8 w-full rounded bg-emerald-500/10"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div
                                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-gray-950/50 backdrop-blur-sm transition-opacity duration-300 hover:opacity-80"
                                onClick={openVideoModal}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 backdrop-blur-md transition-transform duration-300 hover:scale-110">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 translate-x-0.5 text-white"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Voir CodeGrade en action</h3>
                                    <p className="text-sm text-gray-300">
                                        Découvrez comment notre plateforme révolutionne l'évaluation de code
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Docs preview */}
                    <div className=" hidden md:block relative mx-auto mt-16 h-[500px] w-full max-w-5xl overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 shadow-2xl backdrop-blur-sm">
                        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
                        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>

                        {/* Docs mockup */}
                        <div className="absolute inset-0 flex">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-gray-800 bg-gray-950 p-4">
                                <div className="mb-6 flex items-center gap-2">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                                        <Terminal className="h-3 w-3 text-emerald-400" />
                                    </div>
                                    <span className="text-sm font-medium text-white">CodeGrade Docs</span>
                                </div>

                                <div className="mb-4">
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Introduction</div>
                                    <div className="rounded bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-400">
                                        Démarrage
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Fonctionnalités</div>
                                    <div className="mb-1 px-3 py-2 text-sm text-gray-400">Évaluation de Code</div>
                                    <div className="mb-1 px-3 py-2 text-sm text-gray-400">QCM Intelligents</div>
                                    <div className="mb-1 px-3 py-2 text-sm text-gray-400">Analyse de Documents</div>
                                </div>

                                <div className="mb-4">
                                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Technologies</div>
                                    <div className="mb-1 px-3 py-2 text-sm text-gray-400">OpenRouter</div>
                                    <div className="mb-1 px-3 py-2 text-sm text-gray-400">Ollama</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-8">
                                <div className="prose prose-invert max-w-none">
                                    <div className="mb-6 flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                                            <BookOpen className="h-4 w-4 text-emerald-400" />
                                        </div>
                                        <h1 className="text-2xl font-bold">Guide de démarrage</h1>
                                    </div>

                                    <div className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                                        <div className="flex items-center gap-2 text-sm text-emerald-400">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                                            <span>Bienvenue dans la documentation de CodeGrade !</span>
                                        </div>
                                    </div>

                                    <p className="mb-4 text-gray-300">
                                        CodeGrade est une plateforme intelligente d'évaluation de code et de travaux académiques. Notre
                                        système utilise des technologies d'IA avancées pour automatiser l'évaluation, fournir des retours
                                        détaillés et améliorer l'expérience d'apprentissage.
                                    </p>

                                    <h2 className="mb-3 text-xl font-bold">Installation</h2>

                                    <div className="mb-4 rounded bg-gray-800 p-3">
                                        <code className="text-sm text-emerald-300">npm install codegrade-client</code>
                                    </div>

                                    <h2 className="mb-3 text-xl font-bold">Configuration rapide</h2>

                                    <p className="mb-4 text-gray-300">
                                        Suivez ces étapes pour configurer votre première évaluation en quelques minutes.
                                    </p>

                                    <div className="mb-4 space-y-2">
                                        <div className="flex items-start gap-2">
                                            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400">
                                                1
                                            </div>
                                            <div className="text-gray-300">Créez un compte sur la plateforme CodeGrade</div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400">
                                                2
                                            </div>
                                            <div className="text-gray-300">Configurez votre premier projet d'évaluation</div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400">
                                                3
                                            </div>
                                            <div className="text-gray-300">Importez vos critères d'évaluation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="container mx-auto mt-32 px-4">
                    <div className="text-center">
                        <div className="mb-2 inline-block rounded-full bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                            Documentation complète
                        </div>
                        <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                            Tout ce dont vous avez besoin
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                            Notre documentation couvre tous les aspects de la plateforme CodeGrade.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        <Link href="/docs/Fonctionnalites/evaluation-code" className="group">
                            <div className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/70 p-6 backdrop-blur-sm transition-all duration-300">
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500/20">
                                    <Terminal className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">Évaluation de Code</h3>
                                <p className="text-gray-400">
                                    Analyse automatique du code avec détection des erreurs et suggestions d'amélioration en temps réel.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
                                    <span>Lire la documentation</span>
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/docs/Fonctionnalites/evaluation-qcm" className="group">
                            <div className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/70 p-6 backdrop-blur-sm transition-all duration-300">
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500/20">
                                    <CheckSquare className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">QCM Intelligents</h3>
                                <p className="text-gray-400">
                                    Création et notation automatique de QCM avec rapports détaillés et analyses de performance.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
                                    <span>Lire la documentation</span>
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/docs/Fonctionnalites/evaluation-document" className="group">
                            <div className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/70 p-6 backdrop-blur-sm transition-all duration-300">
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500/20">
                                    <FileText className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">Analyse de Documents</h3>
                                <p className="text-gray-400">
                                    Évaluation intelligente de documents textuels, rapports et projets avec feedback détaillé.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
                                    <span>Lire la documentation</span>
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                        <Link href="/docs/TechnologiesIa/openrouter" className="group">
                            <div className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/70 p-6 backdrop-blur-sm transition-all duration-300">
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500/20">
                                    <Cpu className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">Technologies d'IA</h3>
                                <p className="text-gray-400">
                                    Découvrez les modèles d'IA utilisés par CodeGrade pour l'évaluation automatique.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
                                    <span>Lire la documentation</span>
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>

                        <Link href="/docs/Architecture/diagramme-uml" className="group">
                            <div className="relative h-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900/70 p-6 backdrop-blur-sm transition-all duration-300">
                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500/20">
                                    <Database className="h-7 w-7 text-emerald-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">Architecture</h3>
                                <p className="text-gray-400">
                                    Explorez l'architecture technique et la structure de la base de données de CodeGrade.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
                                    <span>Lire la documentation</span>
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Languages Section */}
                <div className="container mx-auto mt-32 mb-20 px-4">
                    <div className="text-center">
                        <div className="mb-2 inline-block rounded-full bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                            Support complet
                        </div>
                        <h2 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                            Langages & Langues
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                            CodeGrade prend en charge de nombreux langages de programmation et langues pour une expérience globale.
                        </p>
                    </div>

                    <div className="relative mt-16 overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 p-8 shadow-xl">
                        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
                        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                {/* Programming Languages */}
                                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                                            <Terminal className="h-5 w-5 text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Langages de programmation</h3>
                                    </div>

                                    <div className="mb-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-300">SQL</span>
                                            <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-800">
                                                <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-300">JavaScript</span>
                                            <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-800">
                                                <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-300">Python</span>
                                            <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-800">
                                                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-300">Java</span>
                                            <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-800">
                                                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-400">Et bien d'autres : C++, PHP, Ruby, Go, Rust, Swift...</p>
                                </div>

                                {/* Natural Languages */}
                                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                                            <Code className="h-5 w-5 text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Langues supportées</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-md border border-gray-800 bg-gray-900/70 p-3 text-center">
                                            <span className="text-sm font-medium text-gray-300">Français</span>
                                        </div>
                                        <div className="rounded-md border border-gray-800 bg-gray-900/70 p-3 text-center">
                                            <span className="text-sm font-medium text-gray-300">English</span>
                                        </div>
                                        <div className="rounded-md border border-gray-800 bg-gray-900/70 p-3 text-center">
                                            <span className="text-sm font-medium text-gray-300">Español</span>
                                        </div>
                                        <div className="rounded-md border border-gray-800 bg-gray-900/70 p-3 text-center">
                                            <span className="text-sm font-medium text-gray-300">العربية</span>
                                        </div>
                                        <div className="rounded-md border border-gray-800 bg-gray-900/70 p-3 text-center">
                                            <span className="text-sm font-medium text-gray-300">Deutsch</span>
                                        </div>
                                        <div className="rounded-md border border-gray-800 bg-gray-900/70 p-3 text-center">
                                            <span className="text-sm font-medium text-gray-300">Italiano</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Link
                                    href="/docs/support"
                                    className="group relative inline-flex overflow-hidden rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 px-8 py-3 font-medium text-black shadow-lg shadow-emerald-500/20"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Voir tous les langages supportés
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800/50 bg-gray-950 px-4 py-8 text-gray-400">
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

            {/* Video Modal */}
            {videoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-5xl rounded-lg bg-gray-900 p-1">
                        <button
                            onClick={closeVideoModal}
                            className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="aspect-video w-full overflow-hidden rounded-lg">
                            <iframe
                                className="h-full w-full"
                                src="/videos/i18nfinal.mp4"
                                title="CodeGrade Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}