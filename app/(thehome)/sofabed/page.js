import Image from "next/image";
import Heading from "@/components/Heading";
import Link from "next/link";

const Sofabed = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] md:w-[550px] p-2">
        <Heading src="/sofabed.svg" text="Sofabed" />
        <p>
          Pull out sofabed is available in the living room. Simply pull it out
          and the linens are inside.
        </p>
        <Link href="/sofabed.jpeg" target="_blank">
          <Image
            src="/sofabed.jpeg"
            width={1000}
            height={1000}
            alt="direction to key nest"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Sofabed;
