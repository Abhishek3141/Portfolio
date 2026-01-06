"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Package2 } from "lucide-react"
import { useState } from "react"

import Image from "next/image"

const routes = [
    { href: "/home", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/achievements", label: "Achievements" },
    { href: "/media", label: "Media" },
    { href: "/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Image src="/ak-logo-white.png" alt="Logo" width={32} height={32} className="h-8 w-8 object-contain" />
                        <span className="hidden font-bold sm:inline-block text-lg tracking-tight">
                            Abhishek Krishnan
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    pathname === route.href ? "text-primary" : "text-foreground/60"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu Placeholder - waiting for Shadcn Sheet */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or extra items */}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Nav Overlay (Temporary simple implementation until Sheet is ready) */}
            {isOpen && (
                <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b p-4 flex flex-col space-y-4 shadow-lg">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === route.href ? "text-primary" : "text-foreground/60"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}
