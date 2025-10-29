import { FaInstagram } from "react-icons/fa"
import { Mail } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Nifemi
              </h3>
              <p className="text-sm text-muted-foreground">
                Helping brands grow, one post at a time through authentic social media strategies.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#home" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-primary transition-colors">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/nifesocials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="mailto:nifemiakinyemi247@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; {currentYear} Akinyemi Nifemi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer