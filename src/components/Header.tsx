import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#mockups", label: "Mockups", id: "mockups" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#reviews", label: "Reviews", id: "reviews" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id)
      const scrollPosition = window.scrollY + 100 // Offset for sticky header

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-[#EAE0D5] via-[#CDE8E5] to-[#7AB2B2] bg-clip-text text-transparent"
        >
          Nifemi
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all relative group ${activeSection === link.id
                ? "text-[#7AB2B2] font-semibold" 
                : "text-gray hover:text-[#7AB2B2]"
                }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#7AB2B2] transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base border-2 border-[#7AB2B2] text-[#7AB2B2] rounded-lg font-semibold hover:bg-[#7AB2B2]/10 transition-colors"
          >
            <span className="hidden sm:inline">Get in Touch</span>
            <span className="sm:hidden inline">Contact</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-2 ${activeSection === link.id
                    ? "text-[#7AB2B2] font-semibold"
                    : "text-foreground hover:text-[#7AB2B2]"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7AB2B2]"></span>
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header