import { IconBarProps } from "../types";
import { IconProps } from "../types";

// icon to be displayed
const Icon = (props: IconProps) => {
    return (
        <a
            className="hover:text-neutral-300 hover:scale-105"
            href={props?.link}
            target="_blank"
            rel="noreferrer"
        >
            <i className={`${props?.isBrand ? "fa-brands" : "fa-solid"} fa-${props?.iconName}`}></i>
        </a>
    )
}

const MakeIconBar = (props: IconBarProps) => {
    return (
        <div className="text-neutral-500 flex justify-center items-center gap-2">
            {props?.facebook !== undefined && <Icon link={props?.facebook} iconName="facebook" isBrand={true} />}
            {props?.instagram !== undefined && <Icon link={props?.instagram} iconName="instagram" isBrand={true} />}
            {props?.email !== undefined && <Icon link={props?.email} iconName="envelope" isBrand={false} />}
            {props?.linkedin !== undefined && <Icon link={props?.linkedin} iconName="linkedin" isBrand={true} />}
            {props?.github !== undefined && <Icon link={props?.github} iconName="github" isBrand={true} />}
            {props?.medium !== undefined && <Icon link={props?.medium} iconName="medium" isBrand={true} />}
            {props?.blog !== undefined && <Icon link={props?.blog} iconName="blogger" isBrand={true} />}
            {props?.webpage !== undefined && <Icon link={props?.webpage} iconName="globe" isBrand={false} />}
            {props?.youtube !== undefined && <Icon link={props?.youtube} iconName="youtube" isBrand={true} />}
        </div>
    );
};

export default MakeIconBar