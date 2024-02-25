import React from "react";
import Link from "next/link";

import "../../app/globals.css"
import Image from "next/image";
import Head from "next/head";

const ProxyScraperPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="Proxy Scraper" content="Created by Riley Halcomb and Dylan Davis"/>
                <title>Proxy Scraper</title>
            </Head>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div
                    className="relative flex place-items-center after:absolute">
                    <Image
                        className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                        src="/coderunnerspix.svg"
                        alt="CodeRunners Logo"
                        width={180}
                        height={37}
                        priority/>
                </div>

                <div className="mt-4"></div>

                <div style={{fontFamily: "minecraftmedium", fontSize: "2rem"}}>
                    <h1>PROXY SCRAPER</h1>
                </div>

                <p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
                    &nbsp;
                    <code className="font-mono font-bold" style={{fontFamily: "minecraftmedium"}}>by
                        DYLAN DAVIS</code>
                </p>

                <p style={{fontFamily: "minecraftmedium", textAlign: "center", paddingLeft: "100px", paddingRight: "100px"}}>
                    ProxyScraper is a python script that scrapes proxies from the ProxyScraper API based on the three
                    different protocols: HTTP, SOCKS4, and SOCKS5.
                </p>

                <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
                    <Link href="https://github.com/DylanDavis1/ProxyScraper" passHref
                          target="_blank" rel="noopener noreferrer"
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            GitHub Link{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default ProxyScraperPage;