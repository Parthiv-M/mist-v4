// importing types
import { AnnouncementProps } from "../types"

import { motion } from "framer-motion"

const AnnouncementModal = (props: AnnouncementProps) => {
    const transition: Object = { ease: [0.43, 0.13, 0.23, 0.96] }
    const variants: any = {
        hidden: { opacity: 0, x: 100, y: 0 },
        enter: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { duration: 1, ...transition }
        },
        exit: {
            opacity: 0,
            x: 100,
            y: 0,
            transition: { duration: 1, ...transition }
        }
    }

    return (
        <div
            className="fixed flex lg:justify-end lg:items-end justify-center items-center lg:p-6 p-3 inset-0 bg-neutral-900 bg-opacity-80 overflow-hidden h-full w-full z-20"
            id="announcement-modal"
        >
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants} className="md:w-2/3 lg:w-1/3 py-6 px-4 flex flex-col items-start bg-neutral-800 rounded-lg shadow-xl"
            >
                <div className="w-full flex justify-between items-center">
                    <h6 className="text-sm gradient-text">{props?.date}</h6>
                    <p
                        className="hover:cursor-pointer"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                props.setShowModal(false);
                            }
                        }>
                        <i className="fa-solid fa-x text-sm text-neutral-600"></i>
                    </p>
                </div>
                <h3 className="text-xl font-bold">{props?.heading}</h3>
                <img src={props?.image} alt={props?.heading} className="my-2 h-96 w-96"></img>
                <a
                    href={props?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-neutral-700 px-3 py-1 rounded-full text-sm hover:scale-105"
                >
                    See related post
                    <span><i className="fa-solid fa-arrow-up-right-from-square ml-2"></i></span>
                </a>
                <p className="text-sm text-left text-neutral-400 my-2">{props?.details}</p>
            </motion.div>
        </div>
    )
}

export default AnnouncementModal