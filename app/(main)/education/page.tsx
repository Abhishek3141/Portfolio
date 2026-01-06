import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EDUCATION_DATA } from "@/lib/data"

export default function EducationPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Education</h1>
                <p className="text-muted-foreground">Academic background and specialized programs.</p>
            </div>

            <div className="grid gap-6">
                {EDUCATION_DATA.map((edu, index) => (
                    <Card key={index} className="flex flex-col md:flex-row gap-4 p-2">
                        <div className="flex-1">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl">{edu.institution}</CardTitle>
                                        <CardDescription className="text-lg font-medium text-primary mt-1">{edu.role}</CardDescription>
                                    </div>
                                    <Badge variant="outline">{edu.period}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
