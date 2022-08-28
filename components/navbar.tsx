import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", match: "", href: "/" },
  { name: "Team", match: "team", href: "/team" },
  { name: "Announcements", match: "announcements", href: "/announcements" },
  { name: "Alumni", match: "alumni", href: "/alumni" },
  { name: "Originals", match: "originals", href: "/originals" },
  {
    name: "Events",
    match: "na",
    href: "https://events.wearemist.in/",
  },
  {
    name: "News",
    match: "na",
    href: "https://cybermanipal.wearemist.in"
  },
  {
    name: "Blogs",
    match: "na",
    href: "https://blogs.wearemist.in/",
  }
];

const Navbar = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>(router.pathname.split("/")[1]);

  useEffect(() => {
    // Update the document title using the browser API
    const pageName = router.pathname.split("/")[1];
    setCurrentPage(pageName);
  });

  const closeNavbar = () => {
    (document?.getElementsByClassName("burger")[0] as HTMLFormElement).click();
  };

  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <Fragment>
      {/* <EventSnackbar />  */}
      <Disclosure
        as="nav"
        className={`w-full backdrop-filter backdrop-blur-lg bg-[#121212]/90 fixed z-10 trasition ease-in-out duration-500 
          ${animateHeader && "shadow-xl"}`}
        id="nav"
        style={{ zIndex: "1000" }}
      >
        {({ open }) => (
          <>
            <nav className={`max-w-7xl mx-auto ${
            !animateHeader && "md:py-5"} px-2 sm:px-6 lg:px-8 trasition ease-in-out duration-500`}>
              <div className="relative flex items-center justify-center h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="burger inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <i className="fas fa-times text-lg"></i>
                    ) : (
                      <i className="fas fa-bars text-lg"></i>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="w-screen md:w-20 text-center flex flex-col items-center justify-center">
                    <Image
                      src="/images/hackerWhite.png"
                      height="30"
                      width="40"
                      layout="fixed"
                      alt="MIST logo"
                      className="block lg:hidden mx-auto"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item: any) => {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <a
                              className={
                                currentPage === item.match
                                  ? "text-blue-300 font-medium hover:text-[#7bdcbd]"
                                  : "text-gray-300 font-light hover:text-white"
                              }
                            >
                              {item.name}
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="md:hidden h-screen flex flex-col justify-center">
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={closeNavbar}
                        className={
                          currentPage === item.match
                            ? "text-green-300 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium"
                            : "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
                        }
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <style jsx>{`
                  a {
                    padding: 10px 20px;
                    cursor: pointer;
                  }

                  a:hover {
                    color: #fafafa;
                    transform: scale(1.02);
                  }
                `}</style>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </Fragment>
  );
};

export default Navbar;