import React from "react";
import Link from "next/link";

import "../../app/globals.css"
import Image from "next/image";
import Head from "next/head";

const PythonObfuscatorPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="Python Obfuscator" content="Created by Riley Halcomb and Dylan Davis"/>
                <title>Python Obfuscator</title>
            </Head>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div
                    className="relative flex place-items-center after:absolute animate-none">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/coderunnerspix.svg"
                        alt="CodeRunners Logo"
                        width={180}
                        height={37}
                        priority/>
                </div>

                <div className="mt-4"></div>

                <div style={{fontFamily: "minecraftmedium", fontSize: "2rem"}}>
                    <h1>PYTHON OBFUSCATOR</h1>
                </div>

                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-6 px-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
                    &nbsp;
                    <code className="font-mono font-bold" style={{fontFamily: "minecraftmedium"}}>by
                        DYLAN DAVIS</code>
                </p>

                <div className="mt-4"></div>

                <p style={{fontFamily: "minecraftmedium"}}>This python</p>

                <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
                    <Link href="https://github.com/DylanDavis1/python-obfuscator" passHref
                          target="_blank" rel="noopener noreferrer"
                          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium"}}>
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

export default PythonObfuscatorPage;