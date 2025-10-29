import { useEffect, useMemo, useState } from "react"
import EunoiaGlow from "../assets/EUNOIAGLOW.jpg"
import EunoiaGlowCC from "../assets/EUNOIAGLOWCONTENTCALENDAR.jpg"
import velraWears from "../assets/VELRAWEARS.jpg"
import velraWearsCC from "../assets/VELRAWEARSCONTENTCALENDAR.png"
import LifeStyle from "../assets/LIFESTYLEBRAND.jpg"
import LifeStyleCC from "../assets/LIFESTYLECONTENTCALENDAR.png"

type MockupItem = {
  id: number
  image: string
}

const Mockups = () => {
  const items: MockupItem[] = useMemo(
    () => [
      { id: 1, image: EunoiaGlow },
      { id: 2, image: velraWears },
      { id: 3, image: LifeStyle },
      { id: 4, image: EunoiaGlowCC },
      { id: 5, image: velraWearsCC },
      { id: 6, image: LifeStyleCC },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [screenSize, setScreenSize] = useState<"small" | "medium" | "large">("large")
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize("small")
      else if (width >= 640 && width < 1024) setScreenSize("medium")
      else setScreenSize("large")
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimatingOut(true)
      setTimeout(() => {
        setIndex((prev) => {
          if (screenSize === "small") {
            return (prev + 1) % items.length
          } else if (screenSize === "medium") {
            // (1 & 4), (2 & 5), (3 & 6)
            return (prev + 1) % 3 // cycle through pairs
          } else {
            // large screen: toggle between first 3 and last 3
            return prev === 0 ? 3 : 0
          }
        })
        setIsAnimatingOut(false)
      }, 400)
    }, 4000)

    return () => clearInterval(interval)
  }, [screenSize, items.length])

  const visibleItems =
    screenSize === "small"
      ? [items[index]]
      : screenSize === "medium"
      ? [items[index], items[index + 3]] // pair (1&4), (2&5), (3&6)
      : items.slice(index, index + 3)

  return (
    <section id="mockups" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Mockups</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Design previews and concept visuals
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <div
            className={`grid ${
              screenSize === "small"
                ? "grid-cols-1"
                : screenSize === "medium"
                ? "grid-cols-2"
                : "grid-cols-3"
            } gap-2 justify-items-center transition-all duration-500 ${
              isAnimatingOut ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {visibleItems.map(
              (item) =>
                item && (
                  <div
                    key={item.id}
                    className="group overflow-hidden rounded-xl shadow-sm transition-all duration-500 w-full max-w-sm"
                  >
                    <div className="relative h-64 sm:h-80">
                      <img
                        src={item.image}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mockups
