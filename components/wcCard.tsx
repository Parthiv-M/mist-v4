// importing helper
import MakeIconBar from "../functions/makeIconBar";

// importing types
import { WCProps } from "../types";

const WCCard = (props: WCProps) => {
    return (
        <div className="h-36 w-full px-2 rounded-lg flex items-center border border-neutral-800 hover:border-neutral-700">
            <img className="h-32 w-32 md:h-30 md:w-30 object-center mx-auto rounded-lg" src={props?.photo} alt={props?.name} />
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