"use client"

import { useEffect, useState } from 'react'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000) //3 seconds
        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="scene h-[220px] w-[220px] grid place-items-center relative z-[2]">
                <div className="cube-wrapper" style={{
                transformStyle: 'preserve-3d',
                animation: 'bouncing 2s infinite',
                }}>
                    <div className="cube" style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(45deg) rotateZ(45deg)',
                        animation: 'rotation 2s infinite',
                    }}>
                        <div className="cube-faces" style={{
                        transformStyle: 'preserve-3d',
                        height: '80px',
                        width: '80px',
                        position: 'relative',
                        transformOrigin: '0 0',
                        transform: 'translateX(0) translateY(0) translateZ(-40px)',
                        }}>
                            {['shadow', 'bottom', 'top', 'left', 'right', 'back', 'front'].map((face) => (
                                <div key={face} className={`cube-face ${face}`} style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'hsl(var(--primary) / 0.8)',
                                border: 'solid 1px hsl(var(--background))',
                                boxShadow: 'inset 0 0 0 1px hsl(var(--background))',
                                ...(face === 'shadow' && {
                                    transform: 'translateZ(-80px)',
                                    animation: 'bouncing-shadow 2s infinite',
                                }),
                                ...(face === 'top' && {
                                    transform: 'translateZ(80px)',
                                }),
                                ...(face === 'front' && {
                                    transformOrigin: '0 50%',
                                    transform: 'rotateY(-90deg)',
                                }),
                                ...(face === 'back' && {
                                    transformOrigin: '0 50%',
                                    transform: 'rotateY(-90deg) translateZ(-80px)',
                                }),
                                ...(face === 'right' && {
                                    transformOrigin: '50% 0',
                                    transform: 'rotateX(-90deg) translateY(-80px)',
                                }),
                                ...(face === 'left' && {
                                    transformOrigin: '50% 0',
                                    transform: 'rotateX(-90deg) translateY(-80px) translateZ(80px)',
                                }),
                                }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes rotation {
                0% {
                    transform: rotateX(45deg) rotateY(0) rotateZ(45deg);
                    animation-timing-function: cubic-bezier(0.17,0.84,0.44,1);
                }
                50% {
                    transform: rotateX(45deg) rotateY(0) rotateZ(225deg);
                    animation-timing-function: cubic-bezier(0.76,0.05,0.86,0.06);
                }
                100% {
                    transform: rotateX(45deg) rotateY(0) rotateZ(405deg);
                    animation-timing-function: cubic-bezier(0.17,0.84,0.44,1);
                }
                }

                @keyframes bouncing {
                0% {
                    transform: translateY(-40px);
                    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
                }
                45% {
                    transform: translateY(40px);
                    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
                }
                100% {
                    transform: translateY(-40px);
                    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
                }
                }

                @keyframes bouncing-shadow {
                0% {
                    transform: translateZ(-80px) scale(1.3);
                    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
                    opacity: .05;
                }
                45% {
                    transform: translateZ(0);
                    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
                    opacity: .3;
                }
                100% {
                    transform: translateZ(-80px) scale(1.3);
                    animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
                    opacity: .05;
                }
                }
            `}</style>
        </div>
    )
}