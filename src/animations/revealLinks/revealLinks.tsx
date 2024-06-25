import { motion } from 'framer-motion'

import './revealLinks.scss'

interface RevealLinksProps {
    children: string
    href: string
}

export const RevealLink:React.FC<RevealLinksProps> = ({ children, href }) => {
    return (
        <motion.a 
            initial="initial"
            whileHover="active"
            className="reveal-link"
            href={href}>
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
            </motion.a>
    )
}