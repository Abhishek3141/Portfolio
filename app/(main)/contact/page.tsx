"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Phone, Github, Instagram } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
    const [showPhone, setShowPhone] = useState(false)

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
                <p className="text-muted-foreground">Get in touch for collaborations or just to say hi.</p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> Email</CardTitle>
                        <CardDescription>Best way to reach me.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="mailto:agopal@ash.nl" className="text-lg hover:underline text-primary font-medium">
                            agopal@ash.nl
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Linkedin className="h-5 w-5" /> LinkedIn</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://www.linkedin.com/in/abhishek-krishnan3141" target="_blank" className="text-primary hover:underline">
                            Connect on LinkedIn
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Github className="h-5 w-5" /> GitHub</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://github.com/Abhishek3141" target="_blank" className="text-primary hover:underline">
                            View my code on GitHub
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Instagram className="h-5 w-5" /> Instagram</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://www.instagram.com/abhishek_kgr/" target="_blank" className="text-primary hover:underline">
                            Follow on Instagram
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Phone className="h-5 w-5" /> Phone</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {showPhone ? (
                            <span className="text-lg font-medium">+31 6 21477566</span>
                        ) : (
                            <Button variant="outline" onClick={() => setShowPhone(true)}>
                                Reveal Phone Number
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
