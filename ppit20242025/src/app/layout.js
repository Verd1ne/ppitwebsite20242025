import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./Components/Header";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "PPIT Shenzhen",
	description: "© 2025 PPIT Shenzhen. All rights reserved.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full !scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<div className="FOOTER bg-gray-100 md:py-6 py-4 lg:px-16 md:px-12 sm:px-8 px-6">
					<div className="container mx-auto">
						{/* Main Content */}
						<div className="flex flex-col md:flex-row items-center md:justify-between">
							{/* Logo and Name */}
							<div className="flex flex-row items-center gap-2">
								<Image src="/PPITLOGO.webp" alt="logo" width={70} height={100} />
								<div className="text-left">
									<h2 className="md:text-2xl text-lg font-montserrat font-semibold text-gray-900 leading-tight">
										PPIT <br /> Shenzhen
									</h2>
								</div>
							</div>

							{/* Follow Us Section */}
							<div className="mt-2 md:mt-0 md:text-right">
								<div className="md:block hidden md:text-xl text-lg font-semibold font-montserrat text-center mb-2">
									Follow Us!
								</div>
								<div className="flex space-x-4 justify-center md:justify-end">
									<Link
										href="https://www.instagram.com/ppitshenzhen/"
										className="transition-transform transform hover:scale-110"
									>
										<Image
											src="/Instagram.svg"
											alt="Instagram"
											width={30}
											height={30}
										/>
									</Link>
									<Link
										href="https://www.tiktok.com/@ppitshenzhen"
										className="transition-transform transform hover:scale-110"
									>
										<Image
											src="/Tiktok.svg"
											alt="Tiktok"
											width={30}
											height={30}
										/>
									</Link>
									<Link
										href="https://www.linkedin.com/company/ppit-shenzhen/"
										className="transition-transform transform hover:scale-110"
									>
										<Image
											src="/Linkedin.svg"
											alt="Linkedin"
											width={30}
											height={30}
										/>
									</Link>
									<Link
										href="https://www.youtube.com/@ppitshenzhen8902"
										className="transition-transform transform hover:scale-110"
									>
										<Image
											src="/Youtube.svg"
											alt="Youtube"
											width={30}
											height={30}
										/>
									</Link>
								</div>
							</div>
						</div>

						{/* Footer Bottom */}
						<div className="border-t border-gray-300 md:mt-6 mt-4 md:pt-4 pt-2">
							<div className="text-center text-gray-600 text-sm">
								© 2025 PPIT Shenzhen. All rights reserved.
							</div>
						</div>
					</div>
				</div>
				<Analytics />
			</body>
		</html>
	);
}
