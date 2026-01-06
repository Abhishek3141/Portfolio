import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LEADERSHIP_DATA } from "@/lib/data"

export default function LeadershipPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Leadership</h1>
                <p className="text-muted-foreground">Volunteering, community service, and organizational roles.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {LEADERSHIP_DATA.map((role, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start gap-2">
                                <CardTitle className="text-xl">{role.organization}</CardTitle>
                                <Badge variant="secondary">{role.period}</Badge>
                            </div>
                            <CardDescription className="text-base font-medium text-primary">{role.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {role.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
