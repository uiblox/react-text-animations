import { motion } from 'framer-motion'

import './revealLinks.scss'

interface RevealLinksProps {
    children: string
    href: string
    staggered: boolean
}

const durationTime = 0.25
const delayTime = 0.025

export const RevealLink:React.FC<RevealLinksProps> = ({ children, href, staggered }) => {
    return (
        <motion.a 
            initial="initial"
            whileHover="active"
            className="reveal-link"
            href={href}>
                {staggered ? (
                    <>
                        <div>
                            {children.split('').map((l, i) => (
                                <motion.div
                                    key={i}
                                    className='reveal-link-staggered'
                                    transition={{
                                        duration: durationTime,
                                        ease: "easeInOut",
                                        delay: delayTime * i
                                    }}
                                    variants={{
                                        initial: {
                                            y: 0,
                                        },
                                        active: {
                                            y: '-100%'
                                        }
                                    }}
                                    >{l}
                                </motion.div>
                            ))}
                        </div>
                        <div className='reveal-link-mirror'>
                            {children.split('').map((l, i) => (
                                <motion.div
                                    key={i}
                                    className='reveal-link-staggered'
                                    transition={{
                                        duration: durationTime,
                                        ease: "easeInOut",
                                        delay: delayTime * i
                                    }}
                                    variants={{
                                        initial: {
                                            y: '100%',
                                        },
                                        active: {
                                            y: 0
                                        }
                                    }}
                                    >{l}</motion.div>
                            ))}
                        </div>
                    </>
                ): (
                    <>
                    <motion.div
                        variants={{
                            initial: { y: 0 },
                            active: { y: "-100%" }
                        }}
                    >
                        {children}
                    </motion.div>
                    <motion.div
                        className='reveal-link-mirror'
                        variants={{
                            initial: { y: '100%' },
                            active: { y: 0 }
                            }}
                        >
                        {children}
                    </motion.div>
                </>
                )}
            </motion.a>
    )
}