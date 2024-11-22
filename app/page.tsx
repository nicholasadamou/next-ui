'use client'

import { COMPONENTS_LIST } from "@/data/component-list"
import { CardContainer } from "@/components/card-container"
import { motion } from "framer-motion"

const headerVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			when: "beforeChildren",
			staggerChildren: 0.2
		}
	}
}

const childVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 }
	}
}

const gridVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3
		}
	}
}

const gridItemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 }
	}
}

export default function Home() {
	return (
		<>
			<motion.section
				initial="hidden"
				animate="visible"
				variants={headerVariants}
			>
				<div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center">
					<motion.div variants={childVariants}>
						<motion.h1
							className="bg-gradient-to-br from-white to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
							variants={childVariants}
						>
							React + Tailwind components
						</motion.h1>
						<motion.p
							className="mt-6 text-center text-gray-500 [text-wrap:balance] md:text-xl"
							variants={childVariants}
						>
							A collection of copy-paste interactive components for your
							projects.
						</motion.p>
					</motion.div>
				</div>
			</motion.section>
			<motion.div
				className="mx-auto max-w-7xl py-10"
				variants={gridVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="grid grid-cols-1 gap-36 md:grid-cols-2 lg:grid-cols-3">
					{COMPONENTS_LIST.map((item, index) => (
						<motion.div key={index} variants={gridItemVariants}>
							<CardContainer
								slug={item.slug}
								name={item.name}
								description={item.description}
							>
								<item.component />
							</CardContainer>
						</motion.div>
					))}
				</div>
			</motion.div>
		</>
	)
}

