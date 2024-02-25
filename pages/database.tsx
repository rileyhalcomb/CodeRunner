import React from "react";
import Link from "next/link";

import "../app/globals.css"
import Image from "next/image";
import Head from "next/head";

const DatabasesPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="CR Database" content="Created by Riley Halcomb and Dylan Davis"/>
                <title>CR Database</title>
            </Head>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div
                    className="relative flex place-items-center after:absolute animate-bounce">
                    <Image
                        className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                        src="/coderunnerspix.svg"
                        alt="CodeRunners Logo"
                        width={180}
                        height={37}
                        priority/>
                </div>
                <div className="mt-6"></div>

                <div style={{fontFamily: "minecraftmedium", fontSize: "2rem"}}>
                    <h1>DATABASE</h1>
                </div>

                <div className="mt-6"></div>

                <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
                    <Link href="/database/keylogger" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Keylogger{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Python-based Key Logger.
                        </p>
                    </Link>

                    <Link href="/database/windows-login-vulnerability" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Windows 10/11 Login Vulnerability{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Discover an extremely vulnerable Windows login.
                        </p>
                    </Link>

                    <Link href="/database/site-scanner" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Website Scanner{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Make sure sites are not malicious before visiting using the Website Scanner.
                        </p>
                    </Link>

                    <Link href="/database/python-obfuscator" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Python Obfuscator{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use the Python Obfuscator to change Python source code into unreadable characters.
                        </p>
                    </Link>

                    <Link href="/pages/database" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Hash Buster{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use the Hash Buster to crack small bit hashes.
                        </p>
                    </Link>

                    <Link href="/pages/database" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Text Encryption{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use Text Encryption to protect your documents.
                        </p>
                    </Link>

                    <Link href="/pages/database" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Image Encryption{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use Image Encryption to protect your photos.
                        </p>
                    </Link>

                    <Link href="/database/proxy-scraper" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Proxy Scraper{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use Proxy Scrape to scrape proxies from the ProxyScraper API based on HTTP, SOCKS4, and SOCKS5.
                        </p>
                    </Link>

                    <Link href="/pages/database" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Password Manager{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use Password Manager to keep your passwords safe and organized.
                        </p>
                    </Link>

                    <Link href="/pages/database" passHref
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium", textAlign: "center"}}>
                            Cipher Text{' '}
                            <span
                                className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                            Use this to create Cipher Text using basic cipher algorithms.
                        </p>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default DatabasesPage;