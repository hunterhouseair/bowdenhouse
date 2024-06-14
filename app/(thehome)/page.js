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
          <br />
          To access the flat, the key will need to be collected at a key
          nest(this is a third party service that we use to store the key and
          for key drop off on departure day).
          <br />
          <br />
          The keynest / shop name is: <br />
          <Link
            className="bg-sky-500/50"
            href="https://www.google.com/maps/place/Costcutter/@51.4789903,-0.1433427,17z/data=!3m2!4b1!5s0x4876050209da4345:0xe75fa658df2f96e1!4m6!3m5!1s0x487604fdf9fa441f:0x67ac225feb2f3ff6!8m2!3d51.478987!4d-0.1407678!16s%2Fg%2F1tjz2vhk?authuser=0&entry=ttu"
            target="_blank"
          >
            Costcutter (2 mins walk from Battersea Power Station
            underground)[tap/click to open Google Map]
          </Link>
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
      <div className="w-[250px] md:w-[550px] p-2 mt-4">
        <Heading src="/carb.svg" text="Arriving With Car" />
        <p>Please see the map below if you are coming by a taxi</p>
        <Link href="/cardropoffpoint1.png" target="_blank">
          <Image
            src="/cardropoffpoint1.png"
            width={1000}
            height={1000}
            alt="car drop off point map"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </Link>
        <Link href="/cardropoffpoint2.png" target="_blank">
          <Image
            src="/cardropoffpoint2.png"
            width={1000}
            height={1000}
            alt="car drop off point location"
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
              marginTop: "10px",
            }}
          />
        </Link>
      </div>
    </section>
  );
}
