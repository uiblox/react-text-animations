import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface RevealProps {
    children: JSX.Element
    width?: "fit-content" | "100%"
}

export const Reveal: React.FC<RevealProps> = ({children, width = "fit-content" }) => {
    const ref = useRef(null)

    const isInView = useInView(ref, { once: false })

    const visibilityControl = useAnimation()
    const slideControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            visibilityControl.start("visible")
                slideControl.start("visible")
        } else {
            visibilityControl.start("hidden")
            slideControl.start("hidden")
        }
    },[isInView])

    return (
        <div ref={ref} style={{position: 'relative', width, overflow: 'hidden'}}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 200 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={visibilityControl}
                transition={{ duration: 0.5, delay: 0.40 }}
                >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControl}
                transition={{ duration: 0.5, delay: 0.20 , ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--brand)",
                    zIndex: 20
                }}
                />         
        </div>
    )
}