import { Terminal } from "lucide-react"

export default function VideoPromo() {
    return (
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

                            {/* App Content - Animated */}
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

                                    {/* Code Evaluation Animation */}
                                    <div className="relative mb-4 rounded border border-gray-800 bg-gray-950 p-3">
                                        <div className="mb-2 flex items-center">
                                            <div className="mr-2 h-4 w-4 rounded-full bg-emerald-500/20"></div>
                                            <div className="h-4 w-1/4 rounded bg-gray-800"></div>
                                        </div>

                                        {/* Animated Code Lines */}
                                        <div className="space-y-2">
                                            <div className="h-4 w-full rounded bg-gray-800 animation-code-line"></div>
                                            <div className="h-4 w-3/4 rounded bg-gray-800 animation-code-line"></div>
                                            <div className="h-4 w-5/6 rounded bg-gray-800 animation-code-line"></div>
                                            <div className="h-4 w-2/3 rounded bg-gray-800 animation-code-line"></div>
                                        </div>

                                        {/* Evaluation Result - Animated */}
                                        <div className="mt-3 rounded border border-emerald-500/20 bg-emerald-500/5 p-2">
                                            <div className="flex items-center">
                                                <div className="mr-2 h-4 w-4 rounded-full bg-emerald-500/20"></div>
                                                <div className="h-4 w-1/3 rounded bg-emerald-500/20 animation-result"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Section */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="rounded border border-gray-800 bg-gray-950 p-2">
                                            <div className="mb-2 h-4 w-1/2 rounded bg-gray-800"></div>
                                            <div className="h-8 w-full rounded bg-emerald-500/10 animation-stat"></div>
                                        </div>
                                        <div className="rounded border border-gray-800 bg-gray-950 p-2">
                                            <div className="mb-2 h-4 w-1/2 rounded bg-gray-800"></div>
                                            <div className="h-8 w-full rounded bg-emerald-500/10 animation-stat"></div>
                                        </div>
                                        <div className="rounded border border-gray-800 bg-gray-950 p-2">
                                            <div className="mb-2 h-4 w-1/2 rounded bg-gray-800"></div>
                                            <div className="h-8 w-full rounded bg-emerald-500/10 animation-stat"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm transition-opacity duration-300 hover:opacity-0">
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
    )
}

