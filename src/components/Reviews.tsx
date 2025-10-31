import { Star } from "lucide-react"
import NovlNest from "../assets/NovlNest.jpg"

const reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Olufowobi Tolu",
            role: "Founder, NovlNest",
            image: NovlNest,
            text: "Nifemi transformed NovlNest’s online presence with her creativity and strategic storytelling, making the brand feel authentic and engaging to both writers and readers. Her work boosted engagement, strengthened community trust, and gave the platform a distinct, relatable voice.",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "CEO, Tech Innovations",
            image: "/professional-man-portrait.png",
            text: "Exceptional strategy and execution. They understood our brand voice immediately and created content that resonated with our target audience.",
            rating: 5,
        }
    ]

    return (
        <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-2">Client Reviews</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#EAE0D5] via-[#CDE8E5] to-[#7AB2B2] rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground">What brands say about working together</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-muted-foreground mb-6 leading-relaxed italic">"{review.text}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <img
                                    src={review.image || "/placeholder.svg"}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-sm text-muted-foreground">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default reviews