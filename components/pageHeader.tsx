// import types
import { PageHeaderProps } from "../types";

const PageHeader = (props: PageHeaderProps) => {
    return (
        <div className="container mx-auto md:px-10 px-4">
            <div className={`h-24 flex flex-col justify-center items-center md:rounded-full ${props?.isCenter ? "text-center" : "text-left"} header-gradient`}>
                <h2 className="text-4xl font-extrabold text-neutral-200">
                    {props?.title}
                    <span className="gradient-text text-5xl">.</span>
                </h2>
                <p className="text-md text-neutral-400 tracking-wider">{props?.subtitle}</p>
                <style jsx>{`
                    
                `}</style>
            </div>
        </div>
    )
}

export default PageHeader