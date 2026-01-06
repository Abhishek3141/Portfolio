import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatWidget from "@/components/chatbot/ChatWidget";

export const metadata: Metadata = {
    title: "Abhishek Krishnan | Portfolio",
    description: "Personal portfolio of Abhishek Krishnan",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative min-h-screen flex flex-col bg-background">
            <SiteHeader />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {children}
            </main>
            <ChatWidget />
            <SiteFooter />
        </div>
    );
}
