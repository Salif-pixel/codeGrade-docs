import type React from "react"
import Link from "next/link"
import { Terminal } from "lucide-react"

export default function Header({ headerRef }: { headerRef: React.RefObject<HTMLElement> }) {
    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-gray-950/80 px-4 py-4 backdrop-blur-lg"
        >
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
                    <Link href="/" className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400">
                        Site principal
                    </Link>
                </nav>
                <div>
                    <Link
                        href="/docs"
                        className="group relative overflow-hidden rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-2 text-sm font-medium text-black"
                    >
                        <span className="relative z-10">Explorer</span>
                        <span className="absolute inset-0 -translate-y-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

