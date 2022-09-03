import { NextPage } from "next";

// importing components
import Meta from "../components/meta";

const ChangeLog: NextPage = () => {
    const StackTag = (props: { tagText: string }) => {
        return (
            <div className="bg-neutral-800 text-neutral-300 text-sm font-light rounded-full px-2 py-[1px]"
            >{props?.tagText}</div>
        )
    }
    const VersionSection = (props: {
        versionNumber: number,
        description: string,
        tags: string[],
        meetTheDev: string[],
        devLink: string[],
        githubLink: string,
    }) => {
        return (
            <div data-aos="fade-up" className="mt-4">
                <Meta 
                    title="Changelog | wearemist.in"
                    extraKeywords="changelog, versions, developers"
                    description="Take a look at all the versions of the MIST website and discover the developers behind each of them"
                />
                <h4 className="font-bold underline">Version {props?.versionNumber}</h4>
                <div className="mt-1 flex gap-1 flex-wrap">
                    {
                        props?.tags.map((tag: string) => {
                            return <StackTag tagText={tag} />
                        })
                    }
                </div>
                <p className="mt-1 text-neutral-600">{props?.description}</p>
                <p className="text-neutral-500 mb-1">
                    Meet the developer
                    {props?.meetTheDev.length > 1 ? "(s)" : ""}:
                    <span className="ml-1">
                        {
                            props?.meetTheDev.map((dev: string, ind: number) => {
                                return (
                                    <a
                                        className={`${(props?.devLink.length > 0 && props?.devLink[ind] !== "") ? "underline hover:text-black" : ""}`}
                                        href={props?.devLink[ind]}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {dev + (ind != props?.meetTheDev.length - 1 ? ", " : "")}
                                    </a>
                                )
                            })
                        }
                    </span>
                </p>
                {props?.githubLink !== "" && <a
                    href={props?.githubLink}
                    className="text-neutral-100 bg-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 hover:shadow-lg text-sm px-3 py-1 rounded-md"
                    target="_blank"
                    rel="noreferrer"
                >
                    Browse on GitHub
                    <span className="ml-1"><i className="fa-brands fa-github"></i></span>
                </a>}
            </div>
        )
    }
    return (
        <div className="pt-20 w-screen mx-auto bg-neutral-200">
            <Meta
                title="Website Changelog | MIST"
                extraKeywords="changelog, website changelog, developers, versions"
                description="Find details and specifics about the developers, versions, 
                    and the tech behind every MIST website ever"
            />
            <div className="md:w-3/4 mx-auto px-5 pb-10 z-20">
                <h1 className="text-4xl pb-5 pt-10 text-neutral-800">
                    Website Changelog
                </h1>
                <VersionSection
                    versionNumber={1}
                    description="The very first website that MIST ever got, built with the most basic of
                    tools and a lot of love"
                    tags={["HTML", "CSS", "JavaScript"]}
                    meetTheDev={["To Be Identified"]}
                    devLink={[]}
                    githubLink={""}
                />
                <VersionSection
                    versionNumber={2}
                    description="The second version of the MIST website was the first proper full-stack website. Based on the
                    MERN stack, it utilised reusable components on the frontend, a backend NodeJS server, and a database to store all website related data.
                    Adding a unique touch to it was the geek and non-geek modes. The geek mode gave a terminal interface access to the 
                    website's data while the non-geek mode was for, well, non-geeks."
                    tags={["ReactJS", "Vanilla CSS", "Node JS", "MongoDB"]}
                    meetTheDev={["Yash Aryan"]}
                    devLink={["https://yasharyan.com"]}
                    githubLink={""}
                />
                <VersionSection
                    versionNumber={3}
                    description="Keeping in tune with the industry, the third version was built on NextJS and as a result was faster and snappier. 
                    A dark themed, yet brightly coloured website with a separate alumni section was the highlight of this version. Even though the 
                    geek mode was discontinued, this version had a redesgined and organised Cybermanipal section which catered to cyber news from 
                    around the world."
                    tags={["NextJS", "TailwindCSS", "Vercel", "MongoDB"]}
                    meetTheDev={["Yash Aryan"]}
                    devLink={["https://yasharyan.com"]}
                    githubLink={"https://github.com/canaryGrapher/mist-v3"}
                />
                <VersionSection
                    versionNumber={4}
                    description="The fourth version (the current deployment) saw the codebase being shifted to typescript, utilising the newer and 
                    better NextJS version—and its corresponding components—getting a sleeker desgin, lots more content about the club, and a general 
                    revamp. As the website grew in size and number of hits, animations were added for the first time on the MIST website, for 
                    better aesthetic, even as a major part of the serverless functions was retained from the previous version."
                    tags={["NextJS", "Typescript", "TailwindCSS", "Framer Motion", "MongoDB"]}
                    meetTheDev={["Parthiv Menon"]}
                    devLink={["https://parthivmenon.com"]}
                    githubLink={"https://github.com/parthiv-m/mist-v4"}
                />
            </div>
            <div className="pt-20 min-h-screen w-fit absolute inset-0 md:flex hidden items-center z-10">
                <h1 className="-rotate-90 -ml-56 absolute left-0 font-extrabold md:text-neutral-400/30 text-8xl">wearemist.in</h1>
            </div>
        </div>
    )
}

export default ChangeLog;