import { BookOpen, Terminal } from 'lucide-react'

export default function DocsPreview({ docsPreviewRef }: { docsPreviewRef: React.RefObject<HTMLDivElement> }) {
    return (
        <div
            ref={docsPreviewRef}
            className="relative mx-auto mt-16 h-[500px] w-full max-w-5xl overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 shadow-2xl backdrop-blur-sm"
        >
            <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"></div>

            {/* Docs mockup */}
            <div className="absolute inset-0 flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-gray-800 bg-gray-950 p-4">
                    <div className="mb-6 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                            <Terminal className="h-3 w-3 text-emerald-400"/>
                        </div>
                        <span className="text-sm font-medium text-white">CodeGrade Docs</span>
                    </div>

                    <div className="mb-4">
                        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Introduction
                        </div>
                        <div className="rounded bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-400">
                            Démarrage
                        </div>
                    </div>

                    <div className="mb-4">
                        <div
                            className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Fonctionnalités
                        </div>
                        <div className="mb-1 px-3 py-2 text-sm text-gray-400">Évaluation de Code</div>
                        <div className="mb-1 px-3 py-2 text-sm text-gray-400">QCM Intelligents</div>
                        <div className="mb-1 px-3 py-2 text-sm text-gray-400">Analyse de Documents</div>
                    </div>

                    <div className="mb-4">
                        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">Technologies
                        </div>
                        <div className="mb-1 px-3 py-2 text-sm text-gray-400">OpenRouter</div>
                        <div className="mb-1 px-3 py-2 text-sm text-gray-400">Ollama</div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="prose prose-invert max-w-none">
                        <div className="mb-6 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                                <BookOpen className="h-4 w-4 text-emerald-400"/>
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
                            CodeGrade est une plateforme intelligente d'évaluation de code et de travaux académiques.
                            Notre
                            système utilise des technologies d'IA avancées pour automatiser l'évaluation, fournir des
                            retours
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
                                <div
                                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400">
                                    1
                                </div>
                                <div className="text-gray-300">Créez un compte sur la plateforme CodeGrade</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div
                                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400">
                                    2
                                </div>
                                <div className="text-gray-300">Configurez votre premier projet d'évaluation</div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div
                                    className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-medium text-emerald-400">
                                    3
                                </div>
                                <div className="text-gray-300">Importez vos critères d'évaluation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
