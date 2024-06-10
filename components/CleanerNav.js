"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="m-2 p-2 font-bold">Sky Garden Flat 1008</h1>

      <div className="m-3 flex flex-wrap">
        {/* <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/cleaner"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/cleaner"
        >
          Getting Here
        </Link> */}
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/cleaner/induction"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/cleaner/induction"
          scroll={false}
        >
          Induction
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/cleaner/checklist"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/cleaner/checklist"
          scroll={false}
        >
          Checklist
        </Link>
        <Link
          className={`m-2 p-2 rounded hover:bg-sky-700 cursor-pointer ${
            pathname == "/cleaner/picturesaftercleaning"
              ? "text-white bg-indigo-800"
              : "bg-sky-500/50"
          }`}
          href="/cleaner/picturesaftercleaning"
          scroll={false}
        >
          Pictures After Cleaning
        </Link>
      </div>
    </section>
  );
}
