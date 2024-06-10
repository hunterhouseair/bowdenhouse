import Nav from "@/components/Nav";
import Heading from "@/components/Heading";
import Video from "@/components/Video";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] md:w-[550px] p-2">
        <Heading src="/key.svg" text="Key Collection and Drop off" />

        <p>
          Check in is from 3pm up until 11pm(Monday-Saturday) or until
          10pm(Sunday).
          <br />
          To access the flat, the key will need to be collected at a key
          nest(this is a third party service that we use to store the key and
          for key drop off on departure day).
          <br />
          The keynest / shop name is Costcutter (2 mins walk from Battersea
          Power Station underground)
          <br />
          178-180 Thessaly Rd, SW8 4ED
          <br />
          Mon - Sat: 08:00 - 23:00
          <br />
          Sun: 08:00 - 22:00
          <br />
        </p>
        <p>
          Please give a code(we will message you the code one day before arrival
          day) to the shopkeeper and he will give you the key.
        </p>
        <p>Tap / Click the map below to enlarge</p>
        <Link href="/map1.JPG" target="_blank">
          <Image
            src="/map1.JPG"
            width={1000}
            height={1000}
            alt="direction to key nest"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </Link>
        <br />
        <Video
          src="https://youtube.com/embed/JwILYVRUllQ"
          alt="direction to key nest"
        />
        <br />
        <Link href="/map2.JPG" target="_blank">
          <Image
            src="/map2.JPG"
            width={1000}
            height={1000}
            alt="direction from key nest to Bowden House"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </Link>
        <br />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <iframe
          className="w-full h-[250px] md:max-w-[850px] md:h-[550px]"
          src="https://www.youtube.com/embed/O8t1S_5mAEQ?si=IdnFkveSWpvxfy1r"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      {/* <div className="md:h-[400px] md:w-[800px]">
        <Image
          src="/keynest.jpg"
          width={1000}
          height={1000}
          alt="direction to key nest"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <Video
        src="https://youtube.com/shorts/JwILYVRUllQ"
        alt="direction to key nest"
      />
      <Video
        src="https://youtube.com/embed/ZxTRCv3uqhI"
        alt="Payless Food and Wine location"
      />
      <div className="w-[250px] md:w-[550px] p-2">
        <p>
          After you receive the key, please proceed to <br />
          <Link
            className="bg-sky-500/50"
            href="https://www.google.com/maps/dir/Payless+Food+%26+Wine,+Kennington+Lane,+London/Sky+Gardens+Nine+Elms,+Wandsworth+Road,+London/@51.4840013,-0.1285587,16z/data=!3m2!4b1!5s0x487604f04390fa09:0xfea93c11445f2e5e!4m14!4m13!1m5!1m1!1s0x487604ecfb0088b9:0x704b9ad64103429c!2m2!1d-0.1193419!2d51.4865151!1m5!1m1!1s0x487604f042ef6797:0xde35a1cb5e43aab9!2m2!1d-0.1270895!2d51.4817039!3e2?authuser=0&entry=ttu"
            target="_blank"
          >
            Flat 1008, Sky Gardens, 155 Wandsworth Road, London, SW8 2FW on the
            10th Floor.[click to open google map]
          </Link>
          <br />
          which is a 15 mins walk. On departure day, please return the key(you
          don't need to give a code) to: 24 hours Payless Food and Wine 322
          Kennington Ln, London SE11 5HY
        </p>
      </div>
      <div className="md:h-[500px] w-auto">
        <Image
          src="/skygarden.jpg"
          width={1000}
          height={1000}
          alt="direction to key nest"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <Video
        src="https://youtube.com/embed/hHy-XhfM-MU"
        alt="arriving at Sky Garden"
      />
      <Video
        src="https://youtube.com/embed/AahJOZgwg90"
        alt="entering into the flat"
      />
      <p className="mt-6">To exit the building</p>
      <Video
        src="https://youtube.com/embed/8NQJVan9OOU"
        alt="exit the building"
      />

      <div className="w-[250px] md:w-[550px] md:p-5">
        <p className="my-3">
          Below is the picture of the key. The{" "}
          <span className="text-red-600 font-bold">RED</span> fob is for entry
          into Sky Garden building. You can ignore the rest.
        </p>
        <Image
          src="/keypicture.jpg"
          width={800}
          height={500}
          alt="picture of key"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div> */}
    </section>
  );
}
