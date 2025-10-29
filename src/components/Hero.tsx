import { ArrowRight } from "lucide-react"
import heroImage from "../assets/Hero.jpg"

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.getElementById("projects")
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden bg-black"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImage} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover opacity-90"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/30"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000 relative z-10">
                <div className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance text-white">
                        Helping Brands Grow,{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            One Post at a Time
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto text-balance">
                        I'm a social media manager specializing in creating engaging content and building authentic communities for
                        brands across Instagram and TikTok.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button
                        onClick={scrollToProjects}
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        View My Work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero