const Footer = () => {
    return (
        <footer className="footer md:px-32 md:pt-32 md:pb-16 px-10 pt-10 pb-8 bg-neutral-900 backdrop-filter backdrop-blur-none" style={{zIndex: 1000}}>
            <div className="min-h-52 text-gray-300 grid md:grid-cols-4 grid-cols-2 md:gap-2 gap-8">
                <div className="flex flex-col items-start gap-2 text-sm">
                    <h5 className="text-neutral-600 font-bold">More from MIST</h5>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="https://wtfctf.wearemist.in" target="_blank" rel="noreferrer">
                            CTF Stats
                        </a>
                    </p>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="https://cybermanipal.wearemist.in" target="_blank" rel="noreferrer">
                            Cybermanipal
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-start gap-2 text-sm">
                    <h5 className="text-neutral-600 font-bold">Get in Touch</h5>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="mailto:sudo@wearemist.in" target="_blank" rel="noreferrer">
                            Contact us
                        </a>
                    </p>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="mailto:sudo@wearemist.in?subject=Partner with MIST" target="_blank" rel="noreferrer">
                            Partner with us
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-start gap-2 text-sm">
                    <h5 className="text-neutral-600 font-bold">Legal</h5>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="/editorialpolicy">
                            Editorial Policy
                        </a>
                    </p>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="/privacypolicy">
                            Privacy Policy
                        </a>
                    </p>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="/changelog">
                            Website Changelog
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-start gap-2 text-sm">
                    <h5 className="text-neutral-600 font-bold">Fun and Frolic</h5>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="https://events.wearemist.in" target="_blank" rel="noreferrer">
                            MIST Events
                        </a>
                    </p>
                    <p className="text-neutral-400 hover:text-neutral-300">
                        <a href="/originals">
                            MIST Originals
                        </a>
                    </p>
                </div>
            </div>
            <div className="w-full mt-12 flex items-center">
                <img
                  className="my-auto"
                  src="/images/logoLight.png"
                  height={100}
                  width={100}
                />
                <div className="flex flex-col md:items-start ml-2 text-neutral-200 font-medium">
                    <h3 className="md:text-lg text-md uppercase">Manipal Information</h3>
                    <h4 className="md:text-lg text-md uppercase">Security Team</h4>
                </div>
            </div>
            <p className="mt-2 text-neutral-400 text-sm">Copyright © 2022 MIST. All rights reserved.</p>
        </footer>
    )
}

export default Footer;