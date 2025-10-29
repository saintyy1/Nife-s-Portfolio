import { CheckCircle2 } from "lucide-react"
import profileImage from "../assets/Nife.jpg"

const About = () => {
    const highlights = [
        "3+ years managing brands across Instagram, TikTok, and Twitter",
        "Specialized in content strategy and community building",
        "Experienced with tools like Canva and CapCut",
        "Proven ability to increase engagement, visibility and audience trust",
        "Strong eye for aesthetics and trending adaptation across industries"
    ]

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">Akinyemi Nifemi</h3>
                            <p className="text-muted-foreground">Social Media Manager</p>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-2">About Me</h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I’m a creative and strategic Social Media Manager with 3 years of experience helping brands grow through thoughtful storytelling and authentic online presence. 
                            I’m passionate about creating strategies that not only looks beautiful but also connects deeply with the audience. From crafting engaging captions to planning structured content calendars.
                            I believe every brand has a story and my job is to help them tell it in the most impactful way.

                        </p>

                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold">Experience Highlights</h3>
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                    <p className="text-muted-foreground">{highlight}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                            >
                                Let's Collaborate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About