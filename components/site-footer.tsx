import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
                <div className="flex items-center space-x-6">
                    <Link href="https://github.com/Abhishek3141" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/abhishek-krishnan3141" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.instagram.com/abhishek_kgr/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="mailto:agopal@ash.nl" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
