// import Link from "next/link";
// import Image from "next/image";
import Heading from "@/components/Heading";
// import Video from "@/components/Video";

export default function Departure() {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] md:w-[550px] p-2">
        <Heading src="/depart.svg" text="Departure" />
        <p>
          On departure day by 10am, please : <br />
          1. Dirty towels are placed in the bathroom.
          <br />
          2. Keys:* Return the keys to Costcutter 178-180 Thessaly Rd, SW8 4ED
          <br />
          Opening hours: Mon - Sat: 08:00 - 23:00
          <br /> Sun: 08:00 - 22:00 <br />
          Please say to the shopkeeper you want to return the key. No need to
          give a code, no need to pay, simply handover the keys.
          <br />
          {/* <Link
            className="bg-sky-500/50"
            target="_blank"
            href="https://www.google.com/maps/dir/Sky+Gardens+Nine+Elms,+Wandsworth+Road,+London/Payless+Food+%26+Wine,+Kennington+Lane,+London/@51.4840013,-0.1285587,16z/data=!3m2!4b1!5s0x487604f04390fa09:0xfea93c11445f2e5e!4m14!4m13!1m5!1m1!1s0x487604f042ef6797:0xde35a1cb5e43aab9!2m2!1d-0.1270895!2d51.4817039!1m5!1m1!1s0x487604ecfb0088b9:0x704b9ad64103429c!2m2!1d-0.1193419!2d51.4865151!3e2?authuser=0&entry=ttu"
          >
            24 hours Payless Food and Wine 322 Kennington Ln, London SE11 5HY
            [click to open google map]
          </Link> */}
        </p>
      </div>
      {/* <div className="md:h-[500px]">
        <Image
          src="/skytokeynest.jpg"
          width={1000}
          height={1000}
          alt="direction to key nest"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <Video src="https://youtube.com/embed/fPSPudjT02I" alt="returning key" /> */}
    </section>
  );
}
