import type { NextPage } from 'next'
import { useEffect, useState } from 'react';

// importing components
import FlagShipCard from '../components/flagshipCard';
import Footer from '../components/footer';

const Home: NextPage = () => {

  const [blur, setBlur] = useState<any>(0);

  useEffect(() => {
    const handleScroll = () => {
      setBlur(window.scrollY / 30);
    }
    window.addEventListener('scroll', handleScroll);
  }, [])

  const tagList: string[] = ["Cryptography", "Web Development", "Research", "Cyber Awareness", "Networking"];
  const WhatWeDoTag = (props: { tagText: string }) => {
    return (
      <div className="text-[#0974b9] hover:text-[#0974b9]/70 text-sm font-bold border border-neutral-700 rounded-full 
                  border-[#0974b9] hover:border-[#0974b9]/75 px-2 py-1"
      >{props?.tagText}</div>
    )
  }

  const SlantCard = (props: {
    title: string,
    description: string,
    rotate: string,
    image: string
  }) => {
    return (
      <div className={`col-span-1 md:border-r md:border-t md:rounded-tr-lg md:border-0 border-b pb-5 border-neutral-700 md:opacity-50 
          hover:opacity-100 h-full md:${props?.rotate} p-3`}>
        <h3 className="text-xl font-bold text-neutral-200">{props?.title}</h3>
        <img className="mt-2 rounded-lg" alt={props?.title} src={props?.image}></img>
        <p className="text-neutral-300 mt-2">
          {props?.description}
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto min-h-screen pt-20">
      <div style={{ zIndex: 0 }} className="gradient-back fixed top-0 flex flex-col items-center justify-center md:px-16 py-20 min-h-screen w-screen">
        <div className="w-2/3 flex md:flex-row flex-col justify-center items-center gap-2 hover:gap-4 mx-auto trasition ease-in-out duration-500">
          <div data-aos="fade-left" className="text-right text-neutral-600/25 md:block hidden">
            <h1 className="md:text-6xl text-4xl font-extrabold">CTF</h1>
            <h2 className="md:text-6xl text-4xl font-extrabold">NETSEC</h2>
            <h1 className="md:text-6xl text-4xl font-extrabold">PENTESTING</h1>
            <h1 className="md:text-6xl text-4xl font-extrabold">DEV</h1>
          </div>
          <div>
            <h1 data-aos="fade-right" className="text-neutral-200 md:text-6xl text-4xl font-extrabold hover:ml-3">MANIPAL</h1>
            <div data-aos="fade-left" className="flex gap-3 md:hidden block">
              <h1 className="text-neutral-600/25 md:text-6xl text-4xl font-extrabold">CTF</h1>
              <h1 className="text-neutral-600/25 md:text-6xl text-4xl font-extrabold">NETSEC</h1>
            </div>
            <h1 data-aos="fade-right" className="text-neutral-200 md:text-6xl text-4xl font-extrabold">INFORMATION</h1>
            <h2 data-aos="fade-right" className="text-neutral-200 md:text-6xl text-4xl font-extrabold">SECURITY</h2>
            <h1 data-aos="fade-right" className="md:hidden block text-neutral-600/25 md:text-6xl text-4xl font-extrabold">PENTESTING</h1>
            <div className="flex gap-3">
              <h1 data-aos="fade-right" className="text-neutral-200 md:text-6xl text-4xl font-extrabold">TEAM</h1>
              <h1 data-aos="fade-left" className="md:hidden block text-neutral-600/25 md:text-6xl text-4xl font-extrabold">DEV</h1>
            </div>
          </div>
        </div>
        <h6 className="hashtag-wearemist mt-12 text-5xl font-extrabold text-blue-100">#wearemist</h6>
      </div>
      <div style={{ backdropFilter: `blur(${blur}px)`, zIndex: 2 }} className={`h-screen w-screen flex flex-col items-center justify-end py-24`}>
        <img src="/images/logoLight.png" className="h-10 mx-auto" />
        <p className="font-extrabold -ml-2 text-white">wearemist.in</p>
      </div>
      <div className="backdrop-filter backdrop-blur-none min-h-screen w-screen pb-20 z-20 bg-[#121212]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:p-16 p-4 gap-5">
          <div data-aos="fade-up" className="flex flex-col">
            <h3 className="text-3xl text-3d font-bold text-neutral-300">WHAT IS MIST</h3>
            <p className="text-neutral-400">
              We are a team of Information and Network Security enthusiasts who aim to spread the knowledge to other students with an
              interest in this ever-growing field of Computer Science. Our goal is to ensure that students approach this field the
              right way by providing them with a platform to enhance and practice their skills. Lastly, we'd like to say, we are not
              hackers. So if you are here with the intention of hacking into your friend's Facebook account, we are afraid we can't
              assist you.
            </p>
          </div>
          <div data-aos="fade-up" className="flex flex-col">
            <h3 className="text-3xl text-3d font-bold text-neutral-300">WHAT WE DO</h3>
            <div className="flex mt-2 gap-2 flex-wrap">
              {tagList?.map((tag: string) => {
                return <WhatWeDoTag tagText={tag} />
              })}
            </div>
            <p className="text-neutral-400 mt-1">
              We are primarily focused on cybersecurity, but we also sail uncharted waters from time to time. We make awesome websites,
              organize awesome events, and even host awesome game nights within the club. In all, we are an awesome club of an awesome university.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:p-16 p-4 gap-5 mb-10">
          <div data-aos="fade" className="mx-auto flex flex-col justify-center md:order-1 order-2 border-l border-neutral-700 pl-10">
            <h3 className="text-3xl font-bold gradient-text">LEARN AND GROW</h3>
            <p className="text-neutral-400">
              We are fun—be it giving our best at CTFs as a team, coming together to organise technical and non-technical events on a grand
              scale, or going out to party. We are proud to have an interdisciplinary team that consists of talented, skilled and hard-working
              students, united by cybersecurity.
            </p>
            <a href="/team" className="mt-4 w-fit py-1 gradient-text rounded-full shadow-xl hover:text-white hover:shadow-sm hover:translate-y-1 duration-500">
              Meet our team
              <span><i className="fas fa-arrow-right ml-2"></i></span>
            </a>
          </div>
          <div className="flex flex-col items-center md:order-2 order-1">
            <div className="image-wrapper px-2">
              <img src="/images/mist22.jpg" className="rounded-lg shadow-xl hover:scale-95" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-1 md:gap-1 gap-3 md:py-10 md:px-0 px-4">
          <div className="col-span-1 pr-10 h-full">
            <div data-aos="slide-right" className="gradient-background h-1/2 rounded-r-full"></div>
          </div>
          <SlantCard
            title="Capture the Flag"
            description="A cyber security Capture The Flag(CTF) event is a competition between security
                professionals and/or students learning about cyber security. This competition is used
                as a learning tool for everyone who is interested in cyber security and can help sharpen
                the tools they have learned during their training."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"
            rotate="rotate-6"
          />
          <SlantCard
            title="Cybersecurity for Everyone"
            description="Being cyber aware implies that you understand what the cybersecurity threats are 
            and you take informed decisions against them. We organise Cybersecurity for Everyone as a means 
            to spread this very awareness. It deals with and elucidates the threats that the internet poses, 
            the various ways in which the internet can spoof you, and informs attendees of the safeguard measures."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"
            rotate="rotate-6"
          />
          <SlantCard
            title="Live Workshops"
            description="At MIST, we believe in hands-on learning. We organise a range of workshops, free of cost 
            and accessible to the student community that deal with the basics of cybersecurity, networking, as well 
            as scripting, development and deployment practices. We also conduct several internal workshops for the 
            benefit of our team members."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"
            rotate="rotate-6"
          />
          <div className="col-span-1 pl-10 h-full flex flex-col justify-end">
            <div data-aos="slide-left" className="gradient-background h-1/4 rounded-l-full"></div>
          </div>
          <div className="col-span-1 pr-10 h-full flex flex-col justify-end">
            <div data-aos="slide-right" className="gradient-background h-1/6 rounded-r-full"></div>
          </div>
          <SlantCard
            title="Web Development"
            description="Web development is the creation and subsequent maintenance of websites. 
            We involve ourselves in making a website look great, respond fast and perform well 
            with a seamless user experience. It is the work that goes on behind the scenes of every 
            awesome website and project that we take up at MIST."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"
            rotate="-rotate-6"
          />
          <SlantCard
            title="Networking"
            description="Computer networking refers to connected computing devices (such as laptops, desktops, 
              servers, smartphones, and tablets) and an ever-expanding array of IoT devices (such as cameras, 
                door locks and sensors) that communicate with one another. Networking is the backbone 
                of the internet itself."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"
            rotate="-rotate-6"
          />
          <SlantCard
            title="Game Nights"
            description="MIST organizes gaming nights every once in a while, which serve as a bonding experience 
            between the club members. It involves various games for every type of enthusiast. From combats in 
            Valorant to screwing up drawings in scribble. Whatever you feel like playing, you will always find company."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"
            rotate="-rotate-6"
          />
          <div className="col-span-1 pl-10 h-full flex flex-col justify-center">
            <div data-aos="slide-left" className="gradient-background h-1/3 rounded-l-full"></div>
          </div>
        </div>
        <div className="container mx-auto md:h-96 md:w-2/3 my-20 bg-white ctf-photo">
          <div className="h-full w-full flex md:flex-row flex-col items-center bg-black/75 hover:bg-black/80 p-6">
            <img data-aos="fade-right" src="/images/ctftime.png" className="p-4 md:self-center self-end" />
            <div data-aos="fade-left" className="flex flex-col py-4">
              <h3 className="text-3xl gradient-text font-extrabold">Ranked #44 in India</h3>
              <a className="text-neutral-400 underline hover:text-neutral-300" href="https://ctftime.org/" rel="noreferrer" target="_blank">[according to ctftime]</a>
              <p className="text-neutral-300">
                Our CTF team, Pwnst4rs, is ranked 44th in the country and pariticipates in multiple CTF competitions throughout the
                course of the year. We love solving challenges from multiple fields including, but not limited to, cryptography,
                web exploitation, pwning, and reverse engineering. Join us at MIST for hands-on experience in tackling  vulnerabilities
                and being a team player at Pwnst4rs!
              </p>
              <img src="/images/pwnst4rs.png" className="h-16 w-52" />
            </div>
          </div>
        </div>
        <div className="container md:px-16 px-2 text-center">
          <p data-aos="fade-down" className="text-3d text-neutral-100 uppercase tracking-wide text-3xl">
            Our Flagship Events
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-4 gap-1">
            <FlagShipCard
              title='Faceless'
              description='A one-of-a-kind event that will put your investigative abilities and reasoning to the test. You will get the first-hand experience in using open source intelligence as a way to dox online identities.'
              image='faceless.png'
            />
            <FlagShipCard
              title='Smoked'
              description="One of the most loved events of MIST- where you search deep in the websites to solve mind-boggling puzzles while racking your brains and tracking the clues to get to the top of the leaderboard."
              image="smoked.png"
            />
            <FlagShipCard
              title='wtfCTF'
              description='With challenges spread out over multiple domains including web exploitation, pwning, reverse engineering, and cryptography, this event has garnered participation from over 7 countries in previous years.'
              image="wtfctf.png"
            />
          </div>
        </div>
        <div
          data-aos="slide-right"
          className="gradient-background md:w-3/4 text-neutral-200 rounded-r-full flex justify-end 
                pr-10 pl-8 items-center mt-3 py-6"
        >
          <p className="font-bold text-xl">
            For more events, stay tuned to our
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://events.wearemist.in"
                className="ml-1 px-2 py-1 rounded-xl font-extrabold text-neutral-900 hover:underline"
              >
                Events Portal
              </a>
            </span>
          </p>
          <a target="_blank"
            rel="noreferrer"
            href="https://events.wearemist.in"
          ><i className="fas fa-chevron-right text-2xl ml-4 hover:bg-neutral-200/30 px-4 py-2 rounded-full"></i></a>
        </div>
      </div>
      <style jsx>{`
        .gradient-back {
          background: linear-gradient(180deg, #121212 0%, #191f22ab 30%, #191f22ab 70%, #121212 100%);
        }
        .hashtag-wearemist {
          background: linear-gradient(325deg, #7bdcbd, #0974b9);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation: gradient-scroll 3s ease infinite;
          -moz-animation: gradient-scroll 3s ease infinite;
          animation: gradient-scroll 3s ease infinite;
        }
        @-webkit-keyframes gradient-scroll {
            0%{background-position:0% 13%}
            50%{background-position:100% 88%}
            100%{background-position:0% 13%}
        }
        @-moz-keyframes gradient-scroll {
            0%{background-position:0% 13%}
            50%{background-position:100% 88%}
            100%{background-position:0% 13%}
        }
        @keyframes gradient-scroll {
            0%{background-position:0% 13%}
            50%{background-position:100% 88%}
            100%{background-position:0% 13%}
        }
        .ctf-photo {
          background: url("/images/mistlab.jpg");
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
        }        
      `}</style>
    </div>
  )
}

export default Home
