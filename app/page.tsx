import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
                    &nbsp;
                    <code className="font-mono font-bold" style={{fontFamily: "minecraftmedium"}}>NODE.JS is not
                        fun.</code>
                </p>

                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <Link href="https://www.rowdyhacks.org" passHref
                          target="_blank" rel="noopener noreferrer"
                          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                          style={{fontFamily: "minecraftmedium", fontSize: "1.2rem"}}>
                        RowdyHacks{' '}
                        <Image
                            src="/dinonew.png"
                            alt="Dino Logo"
                            width={70}
                            height={24}
                            style={{marginLeft: "10px"}}
                            priority
                        />
                    </Link>
                </div>
            </div>

            <div className="mt-4"></div>

            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1] animate-pulse">
                <Image
                    className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                    src="/coderunnerspix.svg"
                    alt="CodeRunners Logo"
                    width={360}
                    height={74}
                    priority
                />
            </div>

            <div className="mt-6"></div>

            <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-center">
                <Link href="/database" passHref
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium"}}>
                        Cyber Database{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 text-sm opacity-50" style={{textAlign: "center"}}>
                        Our database of Cybersecurity Tools and Techniques.
                    </p>
                </Link>

                <Link href="/about" passHref
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
                    <h2 className="mb-3 text-2xl font-semibold" style={{fontFamily: "minecraftmedium"}}>
                        About{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 text-sm opacity-50 text-balance">
                        Learn about the team and our background.
                    </p>
                </Link>
            </div>

            <div className="mt-4"></div>

            <div>
                <h1 style={{fontFamily: "minecraftmedium"}}>Programmed from scratch by Riley Halcomb, Designed by Riley Halcomb and Dylan Davis.</h1>
            </div>
        </main>
    );
}
