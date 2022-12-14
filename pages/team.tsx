import { SITE_DOMAIN } from "../utils/constants";
import { GetStaticProps } from "next";

// importing components
import TeamCard from "../components/teamCard";
import WCCard from "../components/wcCard";
import PageHeader from "../components/pageHeader";
import Meta from "../components/meta";

const Team = (props: any) => {

    const boardLength: number[] = new Array(props?.board?.data?.length).fill(null).map((_, i) => i + 1);
    const mancommLength: number[] = new Array(props?.mancomm?.data?.length).fill(null).map((_, i) => i + 1);
    const workcommLength: number[] = new Array(props?.workcomm?.data?.length).fill(null).map((_, i) => i + 1);

    return (
        <div className="text-center container mx-auto text-gray-50 py-20 md:px-8 min-h-screen">
            <Meta
                title="The Team | MIST"
                description="Get to know these amazing members who make the club what it is and what it stands for"
                extraKeywords="team, wearemist, our team, club"
            />
            <PageHeader title="Meet the Team" subtitle="Get to know these amazing members who make the club what it is." isCenter={true} />
            {/* Rendering Board section */}
            <div className="pt-20">
                <div data-aos="fade-down" className="md:w-3/4 mx-auto flex md:flex-row flex-col gap-2 justify-between items-center">
                    <div className="flex flex-col justify-center md:items-start items-center">
                        {boardLength.length > 0 && <p style={{ fontSize: "15px" }} className="gradient-text md:hidden block">{boardLength.length} Board members</p>}
                        <div className="flex items-center">
                            <div className="h-6 w-10 bg-neutral-100 reverse-gradient-block rounded-l-full"></div>
                            <h2 className="text-3xl text-neutral-300 uppercase tracking-widest font-extrabold">
                                The Board
                            </h2>
                            <div className="h-6 w-10 bg-neutral-100 gradient-block rounded-r-full"></div>
                        </div>
                        <p data-aos="fade-down" className="w-full md:px-0 px-4 md:w-3/4 mt-2 md:mx-0 mx-auto md:text-left text-neutral-500">
                            We represent, look over and manage the entire club. It's just a fancy
                            way of saying we do nothing important at all other than bossing people
                            around, and we love it because we have earned it after being badgered
                            by our seniors for two years. That's how it has always been, and
                            that's how it will always be.
                        </p>
                    </div>
                    {
                        boardLength.length > 0
                        && <div className="md:flex hidden gap-3 flex-wrap items-center">
                            {
                                boardLength.map((num: number) => {
                                    return <div key={num} className="h-2 w-2 rounded-full bg-blue-100"></div>
                                })
                            }
                            <p style={{ fontSize: "12px" }} className="gradient-text">{boardLength.length} Board members</p>
                        </div>
                    }
                </div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 mx-auto">
                    {props?.board.data.map((item: any) => (
                        <TeamCard
                            key={item._id}
                            name={item.name}
                            position={item.position}
                            about={item.about}
                            photo={item.photo}
                            social={item.social}
                            category="board"
                        />
                    ))}
                </div>
            </div>

            {/* Rendering ManComm section */}
            <div className="pt-20">
                <div data-aos="fade-down" className="md:w-full lg:w-3/4 mx-auto flex gap-2 justify-center items-center">
                    <div className="flex flex-col justify-center md:items-start items-center">
                        {mancommLength.length > 0 && <p style={{ fontSize: "15px" }} className="gradient-text md:hidden block">{mancommLength.length} ManComm members</p>}
                        <div className="flex items-center">
                            <div className="h-6 w-10 bg-neutral-100 reverse-gradient-block rounded-l-full"></div>
                            <h2 className="text-3xl text-neutral-300 uppercase tracking-widest font-extrabold">
                                The Management Committee
                            </h2>
                            <div className="h-6 w-10 bg-neutral-100 gradient-block rounded-r-full"></div>
                        </div>
                        <p data-aos="fade-down" className="w-full md:px-0 px-4 md:w-3/4 mt-2 md:mx-0 mx-auto md:text-left text-neutral-500">
                            Even the Board agrees that we do the most work in the club, but they
                            would never admit it publicly. We are the hardest working people in
                            the club. We slog through this hardship to qualify for the board seats
                            and to become the next epitome of laziness.
                        </p>
                    </div>
                    <div className="md:flex items-center hidden gap-3 flex-wrap">
                        {
                            mancommLength.map((num: number) => {
                                return <div key={num} className="h-2 w-2 rounded-full bg-blue-100"></div>
                            })
                        }
                        <p style={{ fontSize: "12px" }} className="gradient-text">{mancommLength.length} ManComm members</p>
                    </div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 mx-auto">
                    {props?.mancomm.data.map((item: any) => (
                        <TeamCard
                            key={item._id}
                            name={item.name}
                            photo={item.photo}
                            about={item.about}
                            position={""}
                            social={item.social}
                            category="mancomm"
                        />
                    ))}
                </div>
            </div>

            {/* Rendering WorkComm section */}
            <div className="pt-20">
                <div data-aos="fade-down" className="md:w-full lg:w-3/4 mx-auto flex gap-2 justify-center items-center">
                    <div className="flex flex-col justify-center md:items-start items-center">
                        {workcommLength.length > 0 && <p style={{ fontSize: "15px" }} className="gradient-text md:hidden block">{workcommLength.length} WorkComm members</p>}
                        <div className="flex items-center">
                            <div className="h-6 w-10 bg-neutral-100 reverse-gradient-block rounded-l-full"></div>
                            <h2 className="text-3xl text-neutral-300 uppercase tracking-widest font-extrabold">
                                The Working Committee
                            </h2>
                            <div className="h-6 w-10 bg-neutral-100 gradient-block rounded-r-full"></div>
                        </div>
                        <p data-aos="fade-down" className="w-full md:px-0 px-4 md:w-3/4 mt-2 md:mx-0 mx-auto md:text-left text-neutral-500">
                            We are college freshers, and joining more than one club is the strict
                            rule most of us follow. It is insurance for when things start getting
                            difficult in one club. We are the most volatile members of any club.
                            Maybe that's why the developer decided not to add an "about."
                            information for us, although it is a fact that we do more work than
                            the Board.
                        </p>
                    </div>
                    <div className="md:flex hidden gap-3 items-center flex-wrap">
                        {
                            workcommLength.map((num: number) => {
                                return <div key={num} className="h-2 w-2 rounded-full bg-blue-100"></div>
                            })
                        }
                        <p style={{ fontSize: "12px" }} className="gradient-text">{workcommLength.length} WorkComm members</p>
                    </div>
                </div>
                <div className="p-2 mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 mx-auto">
                    {props?.workcomm.data.map((item: any) => (
                        <WCCard
                            name={item.name}
                            photo={item.photo}
                            social={item.social}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
          .container {
            background-color: #121212;
          }
          .gradient-block {
            background: rgb(18,18,18);
            background: linear-gradient(90deg, rgba(18,18,18,0) 10%, rgba(9,116,185,1) 100%);
          }
          .reverse-gradient-block {
            background: rgb(18,18,18);
            background: linear-gradient(90deg, rgba(9,116,185,1) 10%, rgba(18,18,18,0) 100%);
          }
        `}</style>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const resBoard = await fetch(`${SITE_DOMAIN}/api/team/board`);
    const board = await resBoard.json();
    const resMancomm = await fetch(`${SITE_DOMAIN}/api/team/mancomm`);
    const mancomm = await resMancomm.json();
    const resWorkcomm = await fetch(`${SITE_DOMAIN}/api/team/workcomm`);
    const workcomm = await resWorkcomm.json();

    return {
        props: {
            board,
            mancomm,
            workcomm,
        },
        revalidate: 60,
    };
}

export default Team