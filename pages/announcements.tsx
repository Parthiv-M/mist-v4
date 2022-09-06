import { SITE_DOMAIN } from "../utils/constants";
import { useState } from 'react'
import { GetStaticProps } from "next";

// importing components
import AnnouncementCard from "../components/announcementCard";
import AnnouncementModal from "../components/announcementModal";
import PageHeader from "../components/pageHeader";
import Meta from "../components/meta";

const Announcements = (props: any) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<any>();

    return (
        <div className="text-center container mx-auto text-gray-50 py-20 min-h-screen">
            <PageHeader title="Announcements" subtitle="Club updates from MIST." isCenter={false} />
            <Meta
                title="Announcements | MIST"
                description="Stay abreast of what is happening in the club by keeping track of the club announcements"
                extraKeywords="announcements, club news, activities"
            />
            {showModal && <AnnouncementModal
                heading={modalDetails.heading}
                date={modalDetails.date}
                details={modalDetails.details}
                image={modalDetails.image}
                link={modalDetails.link}
                setModalDetails={() => null}
                setShowModal={setShowModal}
            />}
            <div className="mx-auto lg:p-10 p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                {
                    props.announcements.data.map((data: any) => {
                        return <AnnouncementCard
                            key={data._id}
                            heading={data.heading}
                            date={data.dateString}
                            details={data.details}
                            image={data.image}
                            link={data.link}
                            setShowModal={setShowModal}
                            setModalDetails={setModalDetails}
                        />
                    })
                }
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const resAnn = await fetch(`${SITE_DOMAIN}/api/announcements`);
    const announcements = await resAnn.json();
    return {
        props: {
            announcements
        },
        revalidate: 60,
    };
}

export default Announcements;