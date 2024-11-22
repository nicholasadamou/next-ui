'use client'

import { Icons } from "@/icons"
import Link from "next/link"
import { motion } from "framer-motion"

const navbarVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.2
		}
	}
}

const childVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" }
	}
}

export function Navbar() {
	return (
		<motion.header
			className="flex items-center justify-between py-8"
			initial="hidden"
			animate="visible"
			variants={navbarVariants}
		>
			<motion.div variants={childVariants}>
				<Link href="/">
					<div className="text-xl font-bold text-white">UI</div>
				</Link>
			</motion.div>
			<motion.nav className="flex gap-6" variants={childVariants}>
				<motion.a
					href="https://github.com/nicholasadamou/ui"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<Icons.github className="size-6 text-slate-400 transition-colors hover:text-white" />
				</motion.a>
			</motion.nav>
		</motion.header>
	)
}
