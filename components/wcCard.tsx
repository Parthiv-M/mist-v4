// importing helper
import MakeIconBar from "../functions/makeIconBar";

// importing types
import { WCProps } from "../types";

const WCCard = (props: WCProps) => {
    return (
        <div data-aos="fade-up" className="py-4 w-full px-2 md:rounded-lg rounded-l-full flex items-center border border-neutral-800 hover:border-neutral-700">
            <img className="h-24 w-24 md:h-20 md:w-20 object-center mx-auto rounded-full" src={props?.photo} alt={props?.name} />
            <div className="w-full ml-2 flex flex-col items-start">
                <p className="text-xl text-left font-semibold text-gray-200 px-2">{props?.name}</p>
                <div className="ml-2">
                    <MakeIconBar
                        instagram={props?.social?.instagram}
                        facebook={props?.social?.facebook}
                        linkedin={props?.social?.linkedin}
                        youtube={props?.social?.youtube}
                        medium={props?.social?.medium}
                        blog={props?.social?.blog}
                        github={props?.social?.github}
                        webpage={props?.social?.webpage}
                        email={props?.social?.email}
                    />
                </div>
            </div>
        </div>
    );
};

export default WCCard;