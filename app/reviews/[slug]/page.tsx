"use client"
import { AnimatedBackground } from "@/components/animated-background"
import { ProductReviewDetail } from "@/components/product-review-detail"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const productReviews = {
	"mateminco-flashlight-outdoor-portable-emergency": {
		name: "MATEMINCO Flashlight Outdoor Portable Emergency",
		image: "https://m.media-amazon.com/images/I/41yO0URd9rL._AC_SX679_.jpg",
		rating: 4.5,
		reviewCount: 50,
		price: "$49.99",
		productUrl: "https://amzn.to/4hBy9T4",
		specs: {
			lumens: "Unknown",
			battery: "Rechargeable",
			runtime: "Unknown",
			material: "Aluminum Alloy",
			waterproof: "IPX6",
			weight: "Unknown",
		},
		pros: [
			"Powerful illumination for outdoor use",
			"Portable and lightweight design",
			"Rechargeable battery for convenience",
			"Durable aluminum alloy construction",
			"Ideal for emergency situations",
		],
		cons: [
			"Limited information on lumens and runtime",
			"May not be suitable for extreme conditions",
		],
		review:
			"The MATEMINCO Flashlight is a reliable choice for outdoor enthusiasts and emergency preparedness. Its aluminum alloy construction ensures durability, while the rechargeable battery adds convenience and eco-friendliness. The flashlight is designed for portability, making it easy to carry on hikes or store in an emergency kit. While specific details on lumens and runtime are not provided, its performance is well-suited for general outdoor activities. The IPX6 waterproof rating offers good protection against rain. At $49.99, it’s a solid option for those needing a dependable, portable light source.",
	},
	"workpro-rechargeable-flashlight-ultra-compact": {
		name: "WORKPRO Rechargeable Flashlight Ultra Compact Function",
		image: "https://m.media-amazon.com/images/I/71rkXO9wCRL._AC_SX679_.jpg",
		rating: 4.0,
		reviewCount: 200,
		price: "$19.99",
		productUrl: "https://amzn.to/3LpRlap",
		specs: {
			lumens: "500",
			battery: "Built-in Li-ion",
			runtime: "3-5 hours",
			material: "Aluminum Alloy",
			waterproof: "IPX4",
			weight: "80g",
		},
		pros: [
			"Ultra-compact and lightweight",
			"USB rechargeable for convenience",
			"Multiple lighting modes",
			"Affordable price point",
			"Durable aluminum alloy body",
		],
		cons: [
			"Moderate waterproof rating",
			"Runtime could be longer for extended use",
		],
		review:
			"The WORKPRO Rechargeable Flashlight is a fantastic choice for those seeking a compact, everyday carry light. With a 500-lumen output, it’s bright enough for most tasks, from navigating dark spaces to small repairs. The built-in Li-ion battery with USB charging eliminates the need for disposable batteries, and the 3-5 hour runtime is sufficient for short-term use. Its aluminum alloy construction is both lightweight at 80g and durable, while the IPX4 rating protects against splashes. At just $19.99, this flashlight offers great value for its versatility and portability.",
	},
	"trixhub-rechargeable-flashlights-linternas-emergencies": {
		name: "TrixHub Rechargeable Flashlights Linternas Emergencies",
		image: "https://m.media-amazon.com/images/I/91H2HARjx0L._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
		rating: 4.3,
		reviewCount: 30,
		price: "$25.99",
		productUrl: "https://amzn.to/4nAFgwz",
		specs: {
			lumens: "600",
			battery: "USB Rechargeable",
			runtime: "4-6 hours",
			material: "Aluminum Alloy",
			waterproof: "IPX5",
			weight: "100g",
		},
		pros: [
			"Bright 600-lumen output",
			"USB rechargeable for eco-friendliness",
			"Lightweight and portable",
			"Multiple modes for versatility",
			"Affordable for emergency kits",
		],
		cons: [
			"Limited review count for reliability data",
			"Moderate waterproof rating",
		],
		review:
			"The TrixHub Rechargeable Flashlight is a versatile and budget-friendly option for emergencies and outdoor activities. Its 600-lumen output provides ample brightness for most scenarios, and the USB rechargeable battery ensures convenience and cost savings. The aluminum alloy body is lightweight at 100g, making it easy to carry, while the IPX5 waterproof rating offers decent protection against rain. With a 4-6 hour runtime and multiple lighting modes, it’s a practical addition to any emergency kit or camping gear. Priced at $25.99, it’s a great value for casual users.",
	},
	"bushnell-headlamp-rubicon-battery-hunting": {
		name: "Bushnell Headlamp Rubicon Battery Hunting",
		image: "https://m.media-amazon.com/images/I/81M731kJ2wL._AC_SX679_.jpg",
		rating: 3.5,
		reviewCount: 44,
		price: "$29.99",
		productUrl: "https://amzn.to/3JeSu4b",
		specs: {
			lumens: "500",
			battery: "3x AAA",
			runtime: "6-10 hours",
			material: "ABS Plastic",
			waterproof: "IPX4",
			weight: "95g",
		},
		pros: [
			"Hands-free operation for hunting and hiking",
			"Long 6-10 hour runtime",
			"Lightweight and comfortable",
			"Red light mode for night vision",
			"Adjustable beam angle",
		],
		cons: [
			"Plastic construction less durable",
			"Lower rating suggests mixed performance",
		],
		review:
			"The Bushnell Rubicon Headlamp is a practical choice for outdoor activities like hunting, hiking, and camping. Its 500-lumen output is sufficient for trail navigation, and the adjustable beam angle enhances versatility. The 6-10 hour runtime is impressive for a battery-powered headlamp, and the red light mode helps preserve night vision. Weighing only 95g, it’s comfortable for extended wear, though the ABS plastic construction feels less premium than metal alternatives. The IPX4 rating offers splash resistance. At $29.99, it’s a decent option for hands-free illumination, though its 3.5-star rating suggests some variability in performance.",
	},
	"consciot-dimmable-water-resistant-flashlight-emergency": {
		name: "Consciot Dimmable Water Resistant Flashlight Emergency",
		image: "https://m.media-amazon.com/images/I/71MkWLsBUGL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
		rating: 4.5,
		reviewCount: 500,
		price: "$19.99",
		productUrl: "https://amzn.to/4qGx80b",
		specs: {
			lumens: "1000",
			battery: "3x D Batteries",
			runtime: "10-20 hours",
			material: "ABS Plastic",
			waterproof: "IPX4",
			weight: "400g",
		},
		pros: [
			"High 1000-lumen output",
			"Long runtime up to 20 hours",
			"4 lighting modes for versatility",
			"Ideal for camping and emergencies",
			"Affordable price",
		],
		cons: [
			"Heavier due to D batteries",
			"Plastic construction less durable",
		],
		review:
			"The Consciot Dimmable Camping Lantern is a powerful and reliable light source for camping and emergencies. With a 1000-lumen output and four lighting modes, it provides excellent 360-degree illumination for large areas. The 10-20 hour runtime, powered by three D batteries, ensures long-lasting performance during extended outages or camping trips. The IPX4 waterproof rating protects against splashes, and the ABS plastic construction keeps costs down, though it’s less durable than metal. At 400g, it’s heavier than compact options, but the hanging hook adds convenience. For $19.99, it’s a fantastic value for group camping or emergency preparedness.",
	},
	"darkbeam-rechargeable-ultraviolet-flashlights-fluorescent": {
		name: "DARKBEAM Rechargeable Ultraviolet Flashlights Fluorescent",
		image: "https://m.media-amazon.com/images/I/61GJ-cmsEEL._AC_SX679_.jpg",
		rating: 4.5,
		reviewCount: 2771,
		price: "$10.99",
		productUrl: "https://amzn.to/438ZeqV",
		specs: {
			lumens: "N/A (UV 1300mw)",
			battery: "Built-in Rechargeable",
			runtime: "1 hour",
			material: "Aluminum Alloy",
			waterproof: "IPX4",
			weight: "57g",
		},
		pros: [
			"Powerful 395nm UV light for detection",
			"USB-C rechargeable for convenience",
			"Ultra-compact and lightweight at 57g",
			"Great for pet stains and counterfeit checks",
			"Very affordable at $10.99",
		],
		cons: [
			"Short 1-hour runtime",
			"Not suitable as a regular flashlight",
		],
		review:
			"The DARKBEAM UV Flashlight is a compact and highly effective tool for specialized tasks like detecting pet stains, counterfeit currency, and curing UV resin. The 395nm UV light with 1300mw output is powerful for its size, and the USB-C rechargeable battery adds eco-friendly convenience. Weighing only 57g, it’s easy to carry in a pocket or attach via the included lanyard. The aluminum alloy body is durable, though the IPX4 rating limits it to splash resistance. The 1-hour runtime is short, but sufficient for quick tasks. At $10.99, it’s an unbeatable value for UV detection needs.",
	},
	"acebeam-flashlight-rechargeable-flashlights-searchlight": {
		name: "ACEBEAM Flashlight Rechargeable Flashlights Searchlight",
		image: "https://m.media-amazon.com/images/I/612xoX4IB4L._AC_SX679_.jpg",
		rating: 2.9,
		reviewCount: 4,
		price: "$149.90",
		productUrl: "https://amzn.to/49w96yL",
		specs: {
			lumens: "10000",
			battery: "2x 3000mAh Rechargeable",
			runtime: "50s-20 hours",
			material: "AL6061-T6 Aluminum Alloy",
			waterproof: "IPX8",
			weight: "293g",
		},
		pros: [
			"Extreme 10000-lumen output",
			"Long 440-meter beam distance",
			"USB-C rechargeable with battery indicator",
			"IPX8 waterproof for tough conditions",
			"Multiple modes including strobe and SOS",
		],
		cons: [
			"Low rating suggests reliability concerns",
			"High price point",
			"Heavy at 293g",
		],
		review:
			"The ACEBEAM X20-R is a powerhouse flashlight designed for professional use, boasting an incredible 10,000-lumen output and a 440-meter throw. Its dual 3000mAh batteries with USB-C charging ensure reliable power, and the IPX8 waterproof rating makes it suitable for extreme conditions. The AL6061-T6 aluminum alloy body is rugged, surviving 1.5-meter drops, and the tactical modes (including strobe and SOS) add versatility. However, the low 2.9-star rating from only four reviews raises concerns about reliability or consistency. At 293g, it’s heavy for everyday carry, and the $149.90 price is a significant investment. Ideal for search and rescue but may be overkill for casual users.",
	},
	"zewdov-aluminum-waterproof-rechargeable-headlight": {
		name: "Zewdov Aluminum Waterproof Rechargeable Headlight",
		image: "https://m.media-amazon.com/images/I/710+9c1lByL._AC_SX679_.jpg",
		rating: 4.0,
		reviewCount: 20,
		price: "$15.99",
		productUrl: "https://amzn.to/47wOQKY",
		specs: {
			lumens: "300",
			battery: "USB Rechargeable",
			runtime: "4-6 hours",
			material: "Aluminum Alloy",
			waterproof: "IPX5",
			weight: "85g",
		},
		pros: [
			"Affordable headlight at $15.99",
			"USB rechargeable for convenience",
			"Lightweight at 85g",
			"Durable aluminum alloy construction",
			"Suitable for outdoor activities",
		],
		cons: [
			"Moderate 300-lumen output",
			"Limited review count for reliability",
		],
		review:
			"The Zewdov Rechargeable Headlight is a budget-friendly option for outdoor activities like hiking or camping. Its 300-lumen output is adequate for close-range tasks, and the USB rechargeable battery adds convenience without the need for disposable batteries. The aluminum alloy construction is surprisingly durable for the price, and at 85g, it’s comfortable for extended wear. The IPX5 waterproof rating protects against rain, and the 4-6 hour runtime is decent for short outings. With only 20 reviews, long-term reliability is uncertain, but at $15.99, it’s a great value for casual outdoor enthusiasts.",
	},
	"victoper-flashlight-flashlights-waterproof-emergency": {
		name: "Victoper Flashlight Flashlights Waterproof Emergency",
		image: "https://m.media-amazon.com/images/I/71ePNhE72DL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
		rating: 4.5,
		reviewCount: 1000,
		price: "$12.99",
		productUrl: "https://amzn.to/47nTcW1",
		specs: {
			lumens: "800",
			battery: "3x AAA",
			runtime: "5-7 hours",
			material: "Aluminum Alloy",
			waterproof: "IPX6",
			weight: "120g",
		},
		pros: [
			"Bright 800-lumen output",
			"Zoomable focus for versatility",
			"Durable aluminum alloy construction",
			"Long runtime of 5-7 hours",
			"Very affordable at $12.99",
		],
		cons: [
			"Uses disposable AAA batteries",
			"Not fully submersible",
		],
		review:
			"The Victoper Flashlight is a standout budget option, delivering an impressive 800-lumen output for just $12.99. Its zoomable focus allows you to switch between a wide floodlight and a focused beam, making it versatile for hunting, camping, or emergencies. The aluminum alloy body is durable and lightweight at 120g, while the IPX6 waterproof rating ensures reliability in wet conditions. The 5-7 hour runtime, powered by three AAA batteries, is solid for the price. While it lacks a rechargeable battery, the performance and affordability make it a top choice for anyone needing a reliable, bright flashlight.",
	},
}

export default function ProductReviewPage() {

	const params = useParams();
	const slug = params.slug;
	const product = productReviews[params.slug as keyof typeof productReviews]

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.green === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"green=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<main className="relative min-h-screen bg-[#0A0A0A]">
			<AnimatedBackground />
			<div className="pt-32 pb-16">
				<ProductReviewDetail product={product} slug={params.slug} />
			</div>
		</main>
	)
}
