"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-white text-black p-8 font-serif">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start border-b-2 border-black pb-4">
                    <div>
                        <h1 className="text-4xl font-bold uppercase tracking-wider">Abhishek Krishnan</h1>
                        <div className="text-sm mt-2 flex gap-4">
                            <span>Wassenaar, Netherlands</span>
                            <span>|</span>
                            <span>agopal@ash.nl</span>
                            <span>|</span>
                            <span>+31 6 21477566</span>
                        </div>
                    </div>
                    <div className="print:hidden">
                        <Button onClick={() => window.print()} variant="outline" className="flex items-center gap-2">
                            <Printer className="h-4 w-4" /> Print / Save PDF
                        </Button>
                    </div>
                </div>

                {/* Education */}
                <section>
                    <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Education</h2>
                    <div className="flex justify-between font-bold">
                        <span>American School of The Hague</span>
                        <span>Class of 2026</span>
                    </div>
                    <p className="text-sm italic">OIB Year 2 GPA: 4.2</p>
                    <ul className="list-disc ml-5 text-sm mt-2">
                        <li>IB Courses: Math AA HL, Physics HL, Economics HL, Computer Science HL</li>
                        <li>EE: "Do Structural Changes in Transformer Architecture Influence Output Bias?"</li>
                        <li>AP Statistics (5.0), AP CS Principles (5.0)</li>
                    </ul>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Experience</h2>

                    <div className="mb-4">
                        <div className="flex justify-between font-bold">
                            <span>Co-Founder & CTO | Cogent</span>
                            <span>June 2024 – Present</span>
                        </div>
                        <ul className="list-disc ml-5 text-sm mt-1">
                            <li>Launched an AI startup making personalized learning accessible.</li>
                            <li>Built platform using Next.js, PostgreSQL, and LLM APIs.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between font-bold">
                            <span>Programmer | FTC Robotics 23014</span>
                            <span>Aug 2023 – Present</span>
                        </div>
                        <ul className="list-disc ml-5 text-sm mt-1">
                            <li>Benelux regional record holder (current season).</li>
                            <li>Top 3% in International Qualifiers.</li>
                        </ul>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Skills</h2>
                    <p className="text-sm">
                        <strong>Languages:</strong> Python, Java, TypeScript, Next.js, HTML/CSS <br />
                        <strong>AI/ML:</strong> TensorFlow, RAG, Control Theory, Computer Vision <br />
                        <strong>Languages Spoken:</strong> English, Dutch, Spanish, Tamil
                    </p>
                </section>
            </div>
        </div>
    )
}
