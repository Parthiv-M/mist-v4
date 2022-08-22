// import types
import { OriginalsProps } from "../types";

const OriginalsCard = (props: OriginalsProps) => {
    return (
        <div data-aos="fade-right" className="bg-neutral-300/10 md:p-3 p-4 flex flex-col items-center justify-center rounded-lg hover:border hover:border-neutral-700">
            <img src={props?.image} className="md:h-2/3 rounded-lg shadow-lg" />
            <h3 className="mt-4 text-xl font-bold tracking-wide">{props?.name}</h3>
            <div className="flex">
                <p className="text-neutral-400 mr-1">Hosted by</p>
                {
                    props?.hosts?.map((host: any, ind: number) => {
                        return <p className="text-neutral-400 mr-1">{host + (ind != props?.hosts?.length - 1 ? ", " : "")}</p>
                    })
                }
            </div>
            <a href={props?.link} className="bg-[#7bdcbd] hover:bg-[#0974b9] text-neutral-800 hover:text-neutral-300 shadow-lg mt-4 px-3 py-2 rounded-full">
                <span><i className="fa-solid fa-video text-sm mr-2"></i></span>
                Watch Now
            </a>
        </div>
    );
}

export default OriginalsCard;