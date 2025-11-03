"use client"

import { motion } from "framer-motion"
import { Star, ArrowLeft, Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductReviewDetailProps {
	product: {
		name: string
		image: string
		rating: number
		reviewCount: number
		price: string
		productUrl: string
		specs: {
			lumens: string
			battery: string
			runtime: string
			material: string
			waterproof: string
			weight: string
		}
		pros: string[]
		cons: string[]
		review: string
	}
	slug: string
}

export function ProductReviewDetail({ product, slug }: ProductReviewDetailProps) {
	return (
		<div className="max-w-6xl mx-auto px-4">
			{/* Back button */}
			<Link href="/reviews">
				<Button variant="ghost" className="mb-8 text-gray-400 hover:text-[#00C2FF]">
					<ArrowLeft className="w-4 h-4 mr-2" />
					Back to Reviews
				</Button>
			</Link>

			<div className="grid lg:grid-cols-2 gap-12 mb-16">
				{/* Product Image */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className="relative aspect-square rounded-lg overflow-hidden bg-[#1E1E1E] border border-gray-800"
				>
					<Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
				</motion.div>

				{/* Product Info */}
				<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

					{/* Rating */}
					<div className="flex items-center gap-3 mb-6">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`w-6 h-6 ${i < Math.floor(product.rating)
											? "fill-[#FFD600] text-[#FFD600]"
											: i < product.rating
												? "fill-[#FFD600]/50 text-[#FFD600]"
												: "fill-none text-gray-600"
										}`}
								/>
							))}
						</div>
						<span className="text-lg text-gray-400">
							{product.rating} ({product.reviewCount} reviews)
						</span>
					</div>

					{/* Specifications */}
					<div className="bg-[#1E1E1E] rounded-lg p-6 border border-gray-800 mb-6">
						<h3 className="text-xl font-bold mb-4 text-[#00C2FF]">Specifications</h3>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-gray-400 text-sm">Lumens</p>
								<p className="font-semibold">{product.specs.lumens}</p>
							</div>
							<div>
								<p className="text-gray-400 text-sm">Battery</p>
								<p className="font-semibold">{product.specs.battery}</p>
							</div>
							<div>
								<p className="text-gray-400 text-sm">Runtime</p>
								<p className="font-semibold">{product.specs.runtime}</p>
							</div>
							<div>
								<p className="text-gray-400 text-sm">Material</p>
								<p className="font-semibold">{product.specs.material}</p>
							</div>
							<div>
								<p className="text-gray-400 text-sm">Waterproof</p>
								<p className="font-semibold">{product.specs.waterproof}</p>
							</div>
							<div>
								<p className="text-gray-400 text-sm">Weight</p>
								<p className="font-semibold">{product.specs.weight}</p>
							</div>
						</div>
					</div>

					{/* CTA Button */}
					<Button asChild className="w-full bg-[#00C2FF] hover:bg-[#00A8E0] text-black font-bold text-lg py-6">
						<a href={product.productUrl} data-auto>
							Buy Now
						</a>
					</Button>
				</motion.div>
			</div>

			{/* Pros and Cons */}
			<div className="grid md:grid-cols-2 gap-8 mb-16">
				{/* Pros */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="bg-[#1E1E1E] rounded-lg p-6 border border-gray-800"
				>
					<h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
						<Check className="w-6 h-6 text-green-500" />
						Pros
					</h3>
					<ul className="space-y-3">
						{product.pros.map((pro, index) => (
							<li key={index} className="flex items-start gap-3">
								<Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
								<span className="text-gray-300">{pro}</span>
							</li>
						))}
					</ul>
				</motion.div>

				{/* Cons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="bg-[#1E1E1E] rounded-lg p-6 border border-gray-800"
				>
					<h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
						<X className="w-6 h-6 text-red-500" />
						Cons
					</h3>
					<ul className="space-y-3">
						{product.cons.map((con, index) => (
							<li key={index} className="flex items-start gap-3">
								<X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
								<span className="text-gray-300">{con}</span>
							</li>
						))}
					</ul>
				</motion.div>
			</div>

			{/* Full Review */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="bg-[#1E1E1E] rounded-lg p-8 border border-gray-800"
			>
				<h3 className="text-3xl font-bold mb-6 text-[#00C2FF]">Full Review</h3>
				<p className="text-gray-300 leading-relaxed text-lg">{product.review}</p>
			</motion.div>
		</div>
	)
}
