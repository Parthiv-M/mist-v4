// importing helper
import MakeIconBar from "../functions/makeIconBar";

// importing types
import { BoardMancommProps } from "../types";

const TeamCard = (props: BoardMancommProps) => {
    const imageSize: string =
        (props?.category === "board" ? "w-60 h-60 ring-[#0974b9]" : "h-40 w-40 ring-[#7bdcbd]")
        + " object-center mx-auto rounded-full hover:ring-4 ring-offset-4 hover:scale-95";
    return (
        <div data-aos="fade-up" className="max-w-sm rounded-lg overflow-hidden md:my-4 py-4 mx-auto">
            <img className={imageSize} src={props?.photo} alt={props?.name} />
            <div className="pt-4 pb-1 px-6">
                <p className={`text-${props?.category === "board" ? "2" : ""}xl font-semibold text-gray-200`}>{props?.name}</p>
                <p className="gradient-text font-bold hover:animate-pulse">
                    {props?.category === "board" ? props?.position : null}
                </p>
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
                <p className="py-1 text-md text-gray-400 w-3/4 mx-auto">
                    {props?.category === "board" || props?.category === "mancomm"
                        ? props?.about
                        : null}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;