import { Badge } from "@/components/ui/badge"

const skills = {
    "Languages & Frameworks": ["Python", "Java", "TypeScript", "Next.js", "HTML/CSS", "PostgreSQL"],
    "AI & Robotics": ["TensorFlow", "OpenCV", "Control Theory", "RAG", "LLMs"],
    "Tools & Platforms": ["Git", "Vercel", "Linux", "Figma"],
    "Spoken Languages": ["English (Native)", "Dutch (Intermediate)", "Spanish (Beginner)", "Tamil"],
}

export default function SkillsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
                <p className="text-muted-foreground">Technical toolkit and languages.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-lg font-semibold">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
