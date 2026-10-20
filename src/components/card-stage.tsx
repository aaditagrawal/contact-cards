import { useRef, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

interface CardStageProps {
  children: ReactNode
  isLight: boolean
  className?: string
}

interface Tilt {
  rx: number
  ry: number
  mx: number
  my: number
  hot: boolean
}

const REST: Tilt = { rx: 0, ry: 0, mx: 50, my: 50, hot: false }

/**
 * 3D stage that tilts the card on pointer-move and renders cursor-following
 * sheen + contact shadow as siblings to the card. Sheen layers sit OUTSIDE
 * the cardRef in <CardPreview>, so the PNG export captures only the flat card.
 */
export function CardStage({ children, isLight, className = '' }: CardStageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState<Tilt>(REST)

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({
      rx: (0.5 - y) * 12,
      ry: (x - 0.5) * 16,
      mx: x * 100,
      my: y * 100,
      hot: true,
    })
  }, [])

  const onLeave = useCallback(() => setTilt(REST), [])

  const sheenStrength = isLight ? 0.45 : 0.32
  const edgeStrength = isLight ? 0.18 : 0.14

  return (
    <div
      className={`relative perspective-(--stage-perspective) ${className}`}
      style={{ '--stage-perspective': '1600px' }}
    >
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative w-full will-change-transform transform-(--tilt) transform-3d transition-var"
        style={{
          '--tilt': `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          '--transition': tilt.hot
            ? 'transform 80ms linear'
            : 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Contact shadow on the floor */}
        <div
          aria-hidden
          className="absolute left-1/2 -bottom-3 -z-10 -translate-x-1/2 rounded-full bg-black/60 blur-2xl w-[82%] h-[12%] transform-(--shadow-shift) opacity-(--shadow-opacity) transition-var"
          style={{
            '--shadow-shift': `translate3d(${tilt.ry * 0.6}px, ${24 - tilt.rx * 0.8}px, -60px)`,
            '--shadow-opacity': `${tilt.hot ? 0.75 : 0.55}`,
            '--transition': tilt.hot
              ? 'opacity 80ms linear'
              : 'opacity 600ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {/* The flat card (cardRef inside) — sheens are siblings, not descendants. */}
        {children}

        {/* Specular sheen — follows the cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 card-sheen mix-blend-overlay opacity-(--sheen-opacity) transition-var"
          style={{
            '--sheen-x': `${tilt.mx}%`,
            '--sheen-y': `${tilt.my}%`,
            '--sheen-strength': `${sheenStrength}`,
            '--sheen-opacity': `${tilt.hot ? 1 : 0.5}`,
            '--transition': 'opacity 240ms ease',
          }}
        />

        {/* Brushed-metal directional gradient — shifts with tilt */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 card-brush mix-blend-overlay"
          style={{
            '--brush-angle': `${135 + tilt.ry * 2}deg`,
            '--brush-strength': `${edgeStrength}`,
            '--brush-dark': `${edgeStrength * 1.2}`,
          }}
        />

        {/* Hairline edge highlight — gives the "metal lip" feel */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ${isLight ? 'card-edge-light' : 'card-edge-dark'}`}
        />
      </div>
    </div>
  )
}
