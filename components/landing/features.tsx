import Link from "next/link"
import { ArrowRight, Terminal, CheckSquare, FileText, Cpu, Database } from 'lucide-react'

export default function Features({ featuresRef, featureCardsRef }: {
    featuresRef: React.RefObject<HTMLDivElement>,
    featureCardsRef: React.RefObject<HTMLDivElement>
}) {
    return (
        <div className="container mx-auto mt-32 px-4">
            <div ref={featuresRef} className="text-center">
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

            <div ref={featureCardsRef} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
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
                <Link href="/docs/TechnologiesIa" className="group">
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

                <Link href="/docs/Architecture" className="group">
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
    )
}
