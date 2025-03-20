import { Terminal } from 'lucide-react'

export default function Footer() {
    return (
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
    )
}
