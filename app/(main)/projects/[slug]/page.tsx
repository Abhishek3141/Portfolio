import { notFound } from "next/navigation"
import { PROJECTS_DATA } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ProjectCarousel } from "@/components/ui/project-carousel"
import { MediaCarousel } from "@/components/ui/media-carousel"

interface PageProps {
    params: { slug: string }
}

// Next.js (App Router) - Page Props
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = PROJECTS_DATA.find(p => p.slug === slug)

    if (!project) {
        return notFound()
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back</Link>
                </Button>
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight">{project.title}</h1>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {project.fullDescription}
                </p>
            </div>

            {project.highlights && (
                <div className="grid gap-4 sm:grid-cols-3">
                    {project.highlights.map((h, i) => (
                        <div key={i} className="p-4 rounded-xl bg-card border shadow-sm">
                            <p className="font-medium text-center">{h}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Media Carousel */}
            {(project as any).media && (
                <div className="mt-8">
                    <MediaCarousel items={(project as any).media} />
                </div>
            )}

            {project.embedUrl && (
                <div className="rounded-xl border border-muted bg-muted/50 overflow-hidden shadow-inner mt-8">
                    <div className="p-2 border-b bg-muted/30 text-xs text-muted-foreground text-center">
                        Live Preview: {project.embedUrl}
                    </div>
                    <div className="relative aspect-video w-full">
                        <iframe
                            src={project.embedUrl}
                            className="absolute inset-0 w-full h-full"
                            title={`${project.title} Preview`}
                            loading="lazy"
                        />
                    </div>
                </div>
            )}

            {/* Sub-projects / Features Section - Now using Carousel */}
            {(project as any).features && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 mt-12">
                    <div className="space-y-1 text-center sm:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Technologies I Architected & Built</h2>
                        <p className="text-muted-foreground">Detailed breakdown of the systems I personally developed.</p>
                    </div>

                    <ProjectCarousel items={(project as any).features} />
                </div>
            )}

            {/* Product Hunt Badges */}
            {(project as any).badges && (
                <div className="flex flex-wrap gap-4 mt-6">
                    {(project as any).badges.map((badge: any, index: number) => (
                        <Link key={index} href={badge.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} />
                        </Link>
                    ))}
                </div>
            )}

            <div className="flex gap-4">
                {project.link && (
                    <Button asChild>
                        <Link href={project.link} target="_blank">
                            Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                )}
            </div>

        </div>
    )
}
