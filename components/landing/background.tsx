export default function Background() {
    return (
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
    )
}
