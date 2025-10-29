import { Heart, Eye, Users } from "lucide-react"
import reel1 from "../assets/Project1.jpg"
import reel2 from "../assets/Project2.jpg"
import reel3 from "../assets/Project3.jpg"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Viral Reel Campaign",
            description: "Created engaging reel content that reached 109K+ views with 99% non-follower reach.",
            image: reel3,
            stats: [
                { label: "Views", value: "109K", icon: Eye },
                { label: "Followers", value: "1.0%", icon: Users },
                { label: "Non-followers", value: "99.0%", icon: Heart },
            ],
        },
        {
            id: 2,
            title: "Brand Awareness Reel",
            description: "Strategic content that generated 51K views with strong non-follower engagement.",
            image: reel2,
            stats: [
                { label: "Views", value: "51K", icon: Eye },
                { label: "Followers", value: "2.3%", icon: Users },
                { label: "Non-followers", value: "97.7%", icon: Heart },
            ],
        },
        {
            id: 3,
            title: "Growth Focused Content",
            description: "Engaging reel that achieved 16K+ views with excellent organic reach.",
            image: reel1,
            stats: [
                { label: "Views", value: "16K", icon: Eye },
                { label: "Followers", value: "0.9%", icon: Users },
                { label: "Non-followers", value: "99.1%", icon: Heart },
            ],
        },
    ]

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-2">Past Projects</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground">Showcasing successful campaigns and brand growth stories</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Project Image */}
                            <div className="relative h-96 overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                                    {project.stats.map((stat, index) => {
                                        const Icon = stat.icon
                                        return (
                                            <div key={index} className="text-center">
                                                <Icon className="text-primary mx-auto mb-1" size={18} />
                                                <p className="font-bold text-sm">{stat.value}</p>
                                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects