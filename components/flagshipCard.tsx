import { FlagShipType } from "../types"

const FlagShipCard = (props: FlagShipType) => {
    return (
        <div className="p-4 border border-neutral-800/60 flex flex-col justify-center items-start rounded-xl hover:shadow-3xl hover:border-transparent">
            <div className="flex items-center gap-3">
                <img src={`/images/${props?.image}`} className="h-10 rounded-lg border border-neutral-800/60" />
                <h3 className="text-neutral-200 text-xl font-extrabold uppercase tracking-wide gradient-text">{props?.title}</h3>
            </div>
            <p className="text-neutral-400 hover:text-neutral-300 text-left mt-2">{props?.description}</p>
        </div>
    )
}

export default FlagShipCard