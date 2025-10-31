import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

const contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")
    
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          })
    
          const result = await response.json()
    
          if (result.success) {
            setSubmitStatus("success")
            setFormData({ name: "", email: "", message: "" })
            setTimeout(() => setSubmitStatus("idle"), 5000)
          } else {
            setSubmitStatus("error")
          }
        } catch (error) {
          setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
      }

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#EAE0D5] via-[#CDE8E5] to-[#7AB2B2] rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-muted-foreground">Ready to grow your brand? Get in touch!</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#7AB2B2] transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#7AB2B2] transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-[#7AB2B2] transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 bg-[#7AB2B2] text-[#7AB2B2]-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7AB2B2]/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Success Message */}
                        {submitStatus === "success" && (
                            <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center">
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus === "error" && (
                            <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
                                ✗ Something went wrong. Please try again or email me directly.
                            </div>
                        )}
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-muted-foreground mb-8">
                                Have a project in mind? I'd love to hear about it. Reach out through the form or connect with me on
                                social media.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-[#7AB2B2]/10 rounded-lg">
                                <Mail className="text-[#7AB2B2]" size={24} />
                            </div>
                            <div>
                                <p className="font-semibold">Email</p>
                                <a
                                    href="mailto:nifemiakinyemi247@gmail.com"
                                    className="text-muted-foreground hover:text-[#7AB2B2] transition-colors"
                                >
                                    nifemiakinyemi247@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-accent/10 rounded-lg">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <div>
                                <p className="font-semibold">Location</p>
                                <p className="text-muted-foreground">Lagos, Nigeria</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/nifesocials/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted hover:bg-[#7AB2B2] hover:text-[#7AB2B2]-foreground rounded-lg transition-all"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={20} />
                                </a>
                                <a
                                    href="mailto:nifemiakinyemi247@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted hover:bg-[#7AB2B2] hover:text-[#7AB2B2]-foreground rounded-lg transition-all"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact