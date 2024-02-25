import React from "react";
import Head from "next/head";
import Image from "next/image";

import '../app/globals.css';
import Link from "next/link";

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="About the Creators" content="Created by Riley Halcomb and Dylan Davis"/>
                <title>About the Creators</title>
            </Head>


            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div
                    className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] animate-pulse">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/coderunnerspix.svg"
                        alt="CodeRunners Logo"
                        width={180}
                        height={37}
                        priority/>
                </div>
                <div className="mt-6"></div>

                <div style={{fontFamily: "minecraftmedium", fontSize: "2rem"}}>
                    <h1>ABOUT US</h1>
                </div>

                <div className="mt-6"></div>

                <div>
                    <h1 style={{fontFamily: "minecraftmedium"}}>Both Riley Halcomb and Dylan Davis attend the University
                        of Texas at San Antonio and plan to graduate in 2025.
                        They met in High School during their Sophomore year in a Computer Science class. Ever since,
                        they have both planned to have a career in Cybersecurity and
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        support each other in each other's business ventures. They attended the RowdyHacks Hackathon in
                        2023 and participated in the events hosted there.
                        Although they did not submit a project, it was a great learning experience and challenged them
                        to prepare an idea for RowdyHacks 2024.
                    </h1>
                </div>

                <div className="mt-3"></div>

                <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
                    <Link href="https://www.linkedin.com/in/rileyhalcomb/" passHref
                          target="_blank" rel="noopener noreferrer"
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium"}}>
                            RILEY HALCOMB - LINKEDIN{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            LinkedIn for Riley Halcomb.
                        </p>
                    </Link>

                    <Link href="https://www.linkedin.com/in/dylan-davis--/" passHref
                          target="_blank" rel="noopener noreferrer"
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium"}}>
                            DYLAN DAVIS - LINKEDIN{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                            LinkedIn for Dylan Davis.
                        </p>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default AboutPage;