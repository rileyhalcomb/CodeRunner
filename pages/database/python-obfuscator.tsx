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
                    className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
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


                <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
                    <Link href="" passHref
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