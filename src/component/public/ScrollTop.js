import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const ScrollButton = () => {

    // const [visible, setVisible] = useState(false)
    const [hide, setHide] = useState('')
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            // setVisible(true)
            setHide({ 
                opacity: [0,1],
                right: ['-5%','1%']
            })
        }
        else if (scrolled <= 300) {
            // setVisible(false)
            setHide({ opacity: [1,0]})

        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);


    return (
        <AnimatePresence>
            <motion.button
                animate={hide}
                className='btn btn-primary btn-scroll' onClick={scrollToTop} >
                <i class="fa-solid fa-angles-up"></i>
            </motion.button>
        </AnimatePresence>
    );
}

export default ScrollButton;
