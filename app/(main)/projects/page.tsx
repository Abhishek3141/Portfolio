import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PROJECTS_DATA } from "@/lib/data"

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="text-muted-foreground">Top highlighted work. More coming soon.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS_DATA.map((project) => (
                    <Card key={project.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <Link href={`/projects/${project.slug}`}>Read More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
