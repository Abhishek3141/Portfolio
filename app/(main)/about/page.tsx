import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12 py-8">
            <section className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm Abhishek, a student at the American School of The Hague (Class of 2026).
                    I operate at the intersection of <strong>robotics, software engineering, and entrepreneurship</strong>.
                    My goal is to build tools that democratize access to education and solve complex technical challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Builder</Badge>
                    <Badge variant="secondary">Founder</Badge>
                    <Badge variant="secondary">Robotics Engineer</Badge>
                    <Badge variant="secondary">Sandwich Eater</Badge>
                </div>
            </section>

            <Separator />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">What I'm Doing Now</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">Co-Founding Cogent</h3>
                        <p className="text-muted-foreground">Building an AI tutoring platform to make personalized learning efficient and accessible.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Leading FTC Team 23014</h3>
                        <p className="text-muted-foreground">Programming autonomous routines and driving strategy. Current Benelux Regional Record Holder.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Hosting "The Innovator's Playbook"</h3>
                        <p className="text-muted-foreground">Interviewing leaders and builders about their journey.</p>
                    </div>
                </div>
            </section>

            <Separator />

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Values</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Curiosity over rigid paths.</li>
                    <li>Impact over impressions.</li>
                    <li>Building over just talking.</li>
                    <li>Always making time for a good sandwich.</li>
                </ul>
            </section>
        </div>
    )
}
