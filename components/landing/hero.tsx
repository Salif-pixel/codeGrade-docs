import type React from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function Hero({
                                 heroTextRef,
                                 heroButtonsRef,
                             }: {
    heroTextRef: React.RefObject<HTMLDivElement>
    heroButtonsRef: React.RefObject<HTMLDivElement>
}) {
    return (
        <div className="container mx-auto max-w-6xl px-4 pt-20">
            <div ref={heroTextRef} className="text-center">
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

            <div ref={heroButtonsRef} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        </div>
    )
}

