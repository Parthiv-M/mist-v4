import { GetStaticProps } from "next"
import Meta from "../components/meta"

// importing components
import OriginalsCard from "../components/originalsCard"
import PageHeader from "../components/pageHeader"
import { SITE_DOMAIN } from "../utils/constants"

const MISTOriginals = (props: any) => {
    return (
        <div className="text-center container mx-auto text-gray-50 py-20 min-h-screen">
            <PageHeader title="MIST Originals" subtitle="Podcasts and short stories created at MIST." isCenter={true} />
            <Meta 
                title="MIST Originals | MIST"
                description="Catch all the videos, podcasts, and other amazing content from the best creative minds at MIST."
                extraKeywords="originals, mist originals, podcast, videos"
            />
            <div className="mx-auto lg:p-10 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
                {
                    props?.originals?.data?.map((data: any) => {
                        return <OriginalsCard {...data} />
                    })
                }
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const resOriginals = await fetch(`${SITE_DOMAIN}/api/originals`);
    const originals = await resOriginals.json();
    return {
        props: {
            originals
        },
        revalidate: 60,
    };
}

export default MISTOriginals