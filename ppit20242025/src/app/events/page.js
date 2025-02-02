"use client";

import Image from "next/image";
import Header from "../Components/Header"; // Import the Header component
import styles from "./Events.module.css";
import { useRef, useState, useEffect } from "react";

export default function Home() {
	const slides = [
		{
			src: "/images/image1.JPEG",
			title: "Internal Bonding",
			description:
				"BPH PPITSZ mengadakan acara internal bonding di Xiaomeisha Beach Shenzhen (小梅沙) untuk menguatkan relasi antara sesama anggota PPITSZ.",
		},
		{
			src: "/images/image2.jpg",
			title: "NANTARA",
			description:
				"NANTARA <Night at Nusantara> adalah festival meriah yang dipenuhi barang-barang preloved, pertunjukan bakat yang luar biasa, dan cita rasa asli Indonesia! Selain itu, ada juga permainan tradisional Indonesia dan arena permainan untuk memadukan kesenangan dan nostalgia.",
		},
		{
			src: "/images/image3.jpg",
			title: "Upcoming Events",
			description: "Stay tuned for upcoming events!",
		},
	];
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const [menuOpen, setMenuOpen] = useState(false); // Track the state of the menu

	const toggleMenu = () => {
		setMenuOpen(!menuOpen); // Toggle the menu visibility
	};

	const [isMobile, setIsMobile] = useState(false); // State for checking mobile screen

	useEffect(() => {
		// This code will run after the component has mounted, on the client side
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile(); // Check the screen size initially
		window.addEventListener("resize", checkMobile); // Listen for window resize events

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<div className={styles.container}>
			<Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

			<main className={styles.hero}>
				{/* Left Panel */}

				<div
					className={`${styles.leftPanel} ${
						isMobile ? styles.mobileLeftPanel : ""
					}`}
				>
					<div className={styles.textContainer}>
						<h3 style={{ color: "#b30000" }}>OUR EVENTS</h3>
						<h1>{slides[currentSlide].title}</h1>
						<p>{slides[currentSlide].description}</p>
					</div>
				</div>

				<button className={styles.prev} onClick={prevSlide}>
					&#8249;
				</button>

				{/* Right Panel (Carousel) */}
				<div className={styles.rightPanel}>
					<div className={styles.slides}>
						{slides.map((slide, index) => (
							<div
								key={index}
								className={`${styles.slide} ${
									index === currentSlide ? styles.active : ""
								}`}
							>
								<Image
									src={slide.src}
									alt={`Slide ${index + 1}`}
									fill
									style={{ objectFit: "cover" }}
									priority
								/>
							</div>
						))}
					</div>
					<button className={styles.next} onClick={nextSlide}>
						&#8250;
					</button>
				</div>

				<div className={styles.dots}>
					{slides.map((_, index) => (
						<span
							key={index}
							className={`${styles.dot} ${
								index === currentSlide ? styles.active : ""
							}`}
							onClick={() => setCurrentSlide(index)}
						></span>
					))}
				</div>
			</main>
		</div>
	);
}
