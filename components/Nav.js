"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="m-2 p-2 font-bold">Bowden House</h1>
      <h2 className="font-bold"> Flat 43 Floor 5</h2>
      <h2 className="font-bold">9 Palmer Road, London, SW11 4FW.</h2>

      <div className="w-[300px] h-[400px] md:w-[700px] md:h-[800px]">
        <Image
          src="/outer.jpg"
          width={1000}
          height={100}
          style={{ objectFit: "cover", height: "100%" }}
          alt="Sky garden building"
        />
      </div>
      <div className="m-3 flex flex-wrap">
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/" ? "text-white bg-indigo-800" : "bg-sky-500/50"
          }`}
          href="/"
        >
          Arrival
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/departure"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/departure"
          scroll={false}
        >
          Departure
        </Link>

        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/contact"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/contact"
          scroll={false}
        >
          Contact
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/heating"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/heating"
          scroll={false}
        >
          Heating
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/sofabed"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/sofabed"
          scroll={false}
        >
          Sofabed
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/wifi" ? "text-white bg-indigo-800" : "bg-sky-500/50"
          }`}
          href="/wifi"
          scroll={false}
        >
          WIFI
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/rubbish"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/rubbish"
          scroll={false}
        >
          Rubbish
        </Link>
      </div>
    </section>
  );
}
