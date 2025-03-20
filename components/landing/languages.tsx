import type React from "react"
import Link from "next/link"
import { ArrowRight, Terminal, Code } from "lucide-react"

export default function Languages({ languagesRef }: { languagesRef: React.RefObject<HTMLDivElement> }) {
    return (
        <div ref={languagesRef} className="container mx-auto mt-32 mb-20 px-4">
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
                            href="/docs/languages"
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
    )
}

