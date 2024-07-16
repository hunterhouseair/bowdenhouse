import Link from "next/link";
import Video from "@/components/Video";

const Cleaner = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <div className="w-[300px] md:w-[600px]">
        <h1 className="m-5 text-center">
          Key Collection and Way To Sky Garden
        </h1>
        <div>
          <ol className="list-decimal m-3">
            <li>
              Collect Key from
              <Link
                className="bg-sky-500/50"
                href="https://www.google.com/maps/dir/Vauxhall,+London/Payless+Food+%26+Wine,+Kennington+Lane,+London/@51.4861834,-0.1240349,17z/data=!3m2!4b1!5s0x487604f04390fa09:0xfea93c11445f2e5e!4m14!4m13!1m5!1m1!1s0x487604ee638e80f1:0x8a1d863e70b19d4!2m2!1d-0.1235781!2d51.4862901!1m5!1m1!1s0x487604ecfb0088b9:0x704b9ad64103429c!2m2!1d-0.1193419!2d51.4865151!3e2?authuser=0&entry=ttu"
                target="_blank"
              >
                {" "}
                Payless Food and Wine [click to open google map]
              </Link>
              <br />
              322 Kennington Ln, London SE11 5HY. Please give a code to the
              shopkeeper and he will give you the key.
              <br />
              <Video
                src="https://youtube.com/embed/I3K5uUBWpFc"
                alt="direction to key nest"
              />
              <Video
                src="https://youtube.com/embed/ZxTRCv3uqhI"
                alt="Payless Food and Wine location"
              />
              <br />
            </li>
            <li>
              Head to{" "}
              <Link
                className="bg-sky-500/50"
                href="https://www.google.com/maps/dir/Payless+Food+%26+Wine,+Kennington+Lane,+London/Sky+Gardens+Nine+Elms,+Wandsworth+Road,+London/@51.4840013,-0.1285587,16z/data=!3m2!4b1!5s0x487604f04390fa09:0xfea93c11445f2e5e!4m14!4m13!1m5!1m1!1s0x487604ecfb0088b9:0x704b9ad64103429c!2m2!1d-0.1193419!2d51.4865151!1m5!1m1!1s0x487604f042ef6797:0xde35a1cb5e43aab9!2m2!1d-0.1270895!2d51.4817039!3e2?authuser=0&entry=ttu"
                target="_blank"
              >
                Flat 1008, Sky Gardens, 155 Wandsworth Road, London, SW8 2FW on
                the 10th Floor.[click to open google map]
              </Link>{" "}
              <br />
              it is a 10 mins walk.
              <br />
              <Video
                src="https://youtube.com/embed/hHy-XhfM-MU"
                alt="arriving at Sky Garden"
              />
              <Video
                src="https://youtube.com/embed/AahJOZgwg90"
                alt="entering into the flat"
              />
            </li>
          </ol>
        </div>
      </div> */}
    </div>
  );
};

export default Cleaner;
