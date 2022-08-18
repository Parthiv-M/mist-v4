import { SITE_DOMAIN } from "../utils/constants";
import { Fragment, useState } from 'react'
import { GetStaticProps } from "next";

// importing components
import AnnouncementCard from "../components/announcementCard";
import AnnouncementModal from "../components/announcementModal";
import PageHeader from "../components/pageHeader";

const Announcements = (props: any) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalDetails, setModalDetails] = useState<any>();

    return (
        <div className="text-center container mx-auto text-gray-50 py-20 min-h-screen">
            {/* Logo section */}
            {/* <div className="text-left w-100 pl-0 md:pl-10">
                <h1 className=" text-4xl emphasis-heading pl-5">Announcements.</h1>
                <p className="text-sm font-thin emphasis-heading text-gray-600 pl-6">
                    Club activity from MIST
                </p>
            </div> */}
            <PageHeader title="Announcements" subtitle="Club updates from MIST." isCenter={false}/>
            {showModal && <AnnouncementModal
                heading={modalDetails.heading}
                date={modalDetails.date}
                details={modalDetails.details}
                image={modalDetails.image}
                link={modalDetails.link}
                setModalDetails={() => null}
                setShowModal={setShowModal}
            />}
            <div className="mx-auto lg:p-10 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2">
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