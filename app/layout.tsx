import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"

const orbitron = Orbitron({
	variable: "--font-orbitron",
	subsets: ["latin"],
	weight: ["400", "700", "900"],
})

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "FlashProX - Premium Tactical Flashlights",
	description: "Illuminate the darkness. Master the light. Premium tactical and multifunctional flashlights.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru" className={`${orbitron.variable} ${inter.variable}`}>
			<body className="font-sans antialiased">
				<SiteHeader />
				{children}
			</body>
		</html>
	)
}
