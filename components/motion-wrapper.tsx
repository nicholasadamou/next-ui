'use client'

import { motion } from "framer-motion"

export const MotionWrapper = ({ children, containerVariants, itemVariants }: any) => (
	<motion.div
		className="mt-6 w-full pb-32"
		variants={containerVariants}
		initial="hidden"
		animate="visible"
	>
		{children.map((child: any, index: number) => (
			<motion.div key={index} variants={itemVariants}>
				{child}
			</motion.div>
		))}
	</motion.div>
)
