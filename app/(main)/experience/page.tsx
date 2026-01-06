import { Badge } from "@/components/ui/badge"

const experience = [
    {
        role: "Co-Founder & CTO",
        org: "Cogent",
        date: "June 2024 – Present",
        type: "Leadership",
        points: [
            "Launched an AI startup making learning more accessible.",
            "Built core platform using Next.js and PostgreSQL.",
        ]
    },
    {
        role: "Programmer & Build Team",
        org: "FTC Robotics 23014",
        date: "Aug 2023 – Present",
        type: "Engineering",
        points: [
            "Benelux regional record holder.",
            "Top 3% in International Qualifiers.",
        ]
    },
    {
        role: "Student Senate Co-President",
        org: "American School of The Hague",
        date: "Sep 2023 – Present",
        type: "Leadership",
        points: [
            "Student Ambassador Coordinator.",
        ]
    },
    {
        role: "Volunteer",
        org: "Sanjeewani School, Nepal",
        date: "Sep 2023 – Present",
        type: "Volunteering",
        points: [
            "Dedicated to education access.",
        ]
    },
]

export default function ExperiencePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
                <p className="text-muted-foreground">My professional and academic journey.</p>
            </div>

            <div className="relative border-l border-muted ml-4 space-y-12 pb-12">
                {experience.map((item, index) => (
                    <div key={index} className="pl-8 relative">
                        <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary border border-background" />
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold">{item.role}</h3>
                            <span className="text-sm font-medium text-muted-foreground">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-medium text-foreground">{item.org}</span>
                            <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                        </div>
                        <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1">
                            {item.points.map((pt, i) => (
                                <li key={i}>{pt}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
