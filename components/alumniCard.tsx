// importing helper
import MakeIconBar from "../functions/makeIconBar";

// importing types
import { AlumniProps } from "../types";

const AlumniCard = (props: AlumniProps) => {
  return (
    <div
      data-aos="fade-up" 
      className="max-w-sm overflow-hidden md:my-2 py-5 mx-auto hover:scale-105"
    >
      <img
        className="w-60 h-60 object-center mx-auto rounded-md"
        src={props.photo}
        alt={props.name}
      />
      <div className="pt-4 pb-2 px-6 text-center">
        <p className="text-2xl font-semibold text-gray-200">{props.name}</p>
        <p className="text-gray-500">{props.position}</p>
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
        {props.whereabouts ? (
          <div className="py-1 mt-1 mx-auto bg-neutral-900 border border-neutral-700 border-0 rounded-full">
            <p className="gradient-text text-sm font-bold">Works at</p>
            <p className="text-center text-base text-gray-100">{props.whereabouts}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AlumniCard;