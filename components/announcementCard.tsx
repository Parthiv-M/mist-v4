// importing types
import { AnnouncementProps } from "../types";

const AnnouncementCard = (props: AnnouncementProps) => {
    const handleSetDetails = (subprops:any) => {
        let data:Object = {
            date: subprops?.date,
            heading: subprops?.heading,
            image: subprops?.image,
            link: subprops?.link,
            details: subprops?.details
        }
        props?.setModalDetails(data);
    }
    return (
        <div data-aos="fade-right" className="p-5 flex flex-col ann-card border rounded-md border-neutral-800 hover:border-neutral-600 hover:border-opacity-80">
            <div className="text-left text-lg font-light gradient-text">
                <p>{props.date}</p>
            </div>
            <h1 className="text-2xl text-left font-bold">
                {props.heading}
            </h1>
            <p className="text-sm text-left text-neutral-500 mb-6 mt-1">{props?.details?.slice(0, 150) + (props?.details?.length > 150 ? "..." : "")}</p>
            <div className="mt-auto text-left">
                <button
                    className="gradient-button hover:text-neutral-800 py-2 px-3 rounded-full text-sm text-left"
                    onClick={(e) => {
                        e.preventDefault(); 
                        props.setShowModal(true);
                        handleSetDetails(props);
                    }}
                >
                    See full announcement
                    <span><i className="fas fa fa-arrow-right ml-2"></i></span>
                </button>
            </div>
            <style jsx>{`
          .gradient-button:hover{
            background: linear-gradient(90deg, #7bdcbd, #0974b9 100%);
          }
          .ann-card {
            background: rgb(38,38,38);
            background: linear-gradient(142deg, rgba(38,38,38,1) 0%, rgba(23,23,23,1) 74%);
          }
        `}</style>
        </div>
    );
};

export default AnnouncementCard;