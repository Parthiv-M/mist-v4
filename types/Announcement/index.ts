import { Dispatch } from "react"

interface AnnouncementProps {
    date: string,
    heading: string,
    image: string,
    link: string,
    details: any,
    setModalDetails: Dispatch<any>,
    setShowModal: Dispatch<boolean>
}

export default AnnouncementProps