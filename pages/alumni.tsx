import Link from "next/link";
import { GetStaticProps } from 'next';

// importing constants
import { SITE_DOMAIN } from "../utils/constants";

// importing components
import AlumniCard from "../components/alumniCard";
import Meta from "../components/meta";
import PageHeader from "../components/pageHeader";

import { motion } from "framer-motion"

const transition: Object = { ease: [0.43, 0.13, 0.23, 0.96] }
const variants: any = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 1.5, ...transition }
    },
    exit: {
        opacity: 0,
        x: 100,
        y: 0,
        transition: { duration: 1.5, ...transition }
    }
}

const Network = (props: any) => {
    const alumniData = props.batches.data.map((batch: any, index: number) => {
        return (
            <div className="py-5 mt-4" key={batch} id={batch}>
                <div className="text-center">
                    <h2 data-aos="fade-down" className="text-3xl font-black gradient-text cabin font-semibold">
                        <Link href={"/alumni#" + batch}>
                            <a>
                                <i className="fas fa-link text-md"></i>
                            </a>
                        </Link>{" "}
                        Board of {batch}
                    </h2>
                </div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-3 gap-1 mx-auto">
                    {props.alumni.data.map((item: any) =>
                        item.year === batch ? (
                            <AlumniCard
                                key={item._id}
                                name={item.name}
                                position={item.position}
                                photo={item.photo}
                                whereabouts={item.whereabouts}
                                social={item.social}
                            />
                        ) : null
                    )}
                </div>
                {
                    index !== props.batches.data.length - 1 &&
                    <div
                        style={{ height: 1, background: "linear-gradient(90deg, #7bdcbd, #0974b9 100%)" }}
                        className={`w-3/4 opacity-30 ${index % 2 === 0 ? "ml-auto" : ""}`}
                    ></div>
                }
            </div>
        );
    });

    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants} 
            className="container mx-auto pt-20 min-h-screen text-center md:px-0 px-2"
        >
            <Meta
                title="The MIST Network | MIST"
                extraKeywords="mist network, alumni, previous board"
                description="Get in touch with our highly skilled alumni who are currently doing 
                            their best in a variety of fields, in some of the top places in the world."
            />
            <PageHeader title="The MIST Network" subtitle="Meet all the boards MIST ever had." isCenter={true} />
            {alumniData}
        </motion.div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const resAlumni = await fetch(`${SITE_DOMAIN}/api/alumni`);
    const alumni = await resAlumni.json();
    const resBatches = await fetch(`${SITE_DOMAIN}/api/alumni/boardyears`);
    const batches = await resBatches.json();
    return {
        props: {
            alumni,
            batches,
        },
        revalidate: 60,
    };
}

export default Network