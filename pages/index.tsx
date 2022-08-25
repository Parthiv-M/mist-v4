import type { NextPage } from 'next'

// importing components
import FlagShipCard from '../components/flagshipCard';

const Home: NextPage = () => {

  const tagList: string[] = ["Cryptography", "Web Development", "Research", "Cyber Awareness", "Networking"];
  const WhatWeDoTag = (props: { tagText: string }) => {
    return (
      <div className="text-[#0974b9] hover:text-neutral-600 text-sm font-bold border border-neutral-700 rounded-full 
                  border-[#0974b9] hover:border-neutral-600 px-2 py-1"
      >{props?.tagText}</div>
    )
  }

  return (
    <div className="mx-auto min-h-screen pt-20">
      <div className="bg-neutral-900/80 backdrop-filter backdrop-blur-lg min-h-screen w-screen">
        <div className="gradient-back flex flex-col items-center justify-center md:px-16 py-20 min-h-screen w-screen">
          <div className="w-2/3 flex justify-center items-center gap-2 hover:gap-4 mx-auto trasition ease-in-out duration-500">
            <div data-aos="fade-left" className="text-right text-neutral-600/25 md:block hidden">
              <h1 className="md:text-6xl font-extrabold hover:text-neutral-600/40 hover:mr-3 ease-in-out duration-500">CTF</h1>
              <h2 className="md:text-6xl font-extrabold hover:text-neutral-600/40 hover:mr-3 ease-in-out duration-500">NETSEC</h2>
              <h1 className="md:text-6xl font-extrabold hover:text-neutral-600/40 hover:mr-3 ease-in-out duration-500">PENTESTING</h1>
              <h1 className="md:text-6xl font-extrabold hover:text-neutral-600/40 hover:mr-3 ease-in-out duration-500">DEV</h1>
            </div>
            <div data-aos="fade-right">
              <h1 className="text-neutral-200 md:text-6xl text-4xl font-extrabold hover:ml-3 ease-in-out duration-500">MANIPAL</h1>
              <h1 className="text-neutral-200 md:text-6xl text-4xl font-extrabold hover:ml-3 ease-in-out duration-500">INFORMATION</h1>
              <h2 className="text-neutral-200 md:text-6xl text-4xl font-extrabold hover:ml-3 ease-in-out duration-500">SECURITY</h2>
              <h1 className="text-neutral-200 md:text-6xl text-4xl font-extrabold hover:ml-3 ease-in-out duration-500">TEAM</h1>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h6 className="hashtag-wearemist text-5xl font-extrabold text-blue-100">#wearemist</h6>
            <div
              data-aos="fade-up"
              className="flex md:w-2/3 w-3/4 mx-auto justify-center mt-4 px-3 py-2 text-neutral-200 
              bg-neutral-800 rounded-full shadow-xl hover:shadow-sm cursor-pointer hover:gap-1 hover:translate-y-1 duration-500"
            >
              Know More
              <span><i className="fas fa-arrow-right ml-2"></i></span>
            </div>
            <img src="/images/logoLight.png" className="h-5 mt-4 mx-auto" />
          </div>
        </div>
        <div className="min-h-screen w-screen pb-20 bg-[#121212]">
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
              <a href="/team" className="mt-4 w-fit px-3 py-1 bg-neutral-600 text-neutral-300 rounded-full shadow-xl hover:text-white hover:shadow-sm hover:translate-y-1 duration-500">
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
              <div data-aos="slide-right" className="bg-neutral-900 h-1/2 rounded-r-full"></div>
            </div>
            <div className="col-span-1 bg-neutral-300/60 opacity-50 hover:opacity-100 h-full md:rotate-6 p-3 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-900">Capture the Flag</h3>
              <img className="mt-2 rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"></img>
              <p className="text-neutral-900 mt-2">
                A cyber security Capture The Flag(CTF) event is a competition between security
                professionals and/or students learning about cyber security. This competition is used
                as a learning tool for everyone who is interested in cyber security and can help sharpen
                the tools they have learned during their training.
              </p>
            </div>
            <div className="col-span-1 bg-neutral-300/40 opacity-50 hover:opacity-100 h-full md:rotate-6 p-3 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-900">Capture the Flag</h3>
              <img className="mt-2 rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"></img>
              <p className="text-neutral-900 mt-2">
                A cyber security Capture The Flag(CTF) event is a competition between security
                professionals and/or students learning about cyber security. This competition is used
                as a learning tool for everyone who is interested in cyber security and can help sharpen
                the tools they have learned during their training.
              </p>
            </div>
            <div className="col-span-1 bg-neutral-300/20 opacity-50 hover:opacity-100 h-full md:rotate-6 rounded-lg p-3">
              <h3 className="text-xl font-bold text-neutral-400">Cybersecurity for everyone</h3>
              <img className="mt-2 rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"></img>
              <p className="text-neutral-400 mt-2">
                Cyber security awareness is knowledge combined with attitudes and behaviors that serve to protect
                our information assets. Being cybersecurity aware means you understand what the threats are and you
                take the right steps to prevent them.
              </p>
            </div>
            <div className="col-span-1 pl-10 h-full flex flex-col justify-end">
              <div data-aos="slide-left" className="bg-neutral-100/10 h-1/4 rounded-l-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-1 md:gap-1 gap-3 md:py-10 md:px-0 px-4">
            <div className="col-span-1 pr-10 h-full flex flex-col justify-end">
              <div data-aos="slide-right" className="bg-neutral-800 h-1/6 rounded-r-full"></div>
            </div>
            <div className="col-span-1 bg-neutral-400/20 opacity-50 hover:opacity-100 h-full md:-rotate-6 p-3 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-300">Capture the Flag</h3>
              <img className="mt-2 rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"></img>
              <p className="text-neutral-300 text-md mt-2">
                A cyber security Capture The Flag(CTF) event is a competition between security
                professionals and/or students learning about cyber security. This competition is used
                as a learning tool for everyone who is interested in cyber security and can help sharpen
                the tools they have learned during their training.
              </p>
            </div>
            <div className="col-span-1 bg-neutral-400/10 opacity-50 hover:opacity-100 h-full md:-rotate-6 rounded-lg p-3">
              <h3 className="text-xl font-bold text-neutral-300">Cybersecurity for everyone</h3>
              <img className="mt-2 rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"></img>
              <p className="text-neutral-300 mt-2">
                Cyber security awareness is knowledge combined with attitudes and behaviors that serve to protect
                our information assets. Being cybersecurity aware means you understand what the threats are and you
                take the right steps to prevent them.
              </p>
            </div>
            <div className="col-span-1 bg-neutral-400/5 opacity-50 hover:opacity-100 h-full md:-rotate-6 rounded-lg p-3">
              <h3 className="text-xl font-bold text-neutral-300">Cybersecurity for everyone</h3>
              <img className="mt-2 rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigheartsoutdoors.org%2Fwp-content%2Fuploads%2F2019%2F10%2FRectangle-1920x1080-Placeholder.png&f=1&nofb=1"></img>
              <p className="text-neutral-300 mt-2">
                Cyber security awareness is knowledge combined with attitudes and behaviors that serve to protect
                our information assets. Being cybersecurity aware means you understand what the threats are and you
                take the right steps to prevent them.
              </p>
            </div>
            <div className="col-span-1 pl-10 h-full flex flex-col justify-center">
              <div data-aos="slide-left" className="bg-neutral-600/10 h-1/3 rounded-l-full"></div>
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
