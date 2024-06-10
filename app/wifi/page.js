import Heading from "@/components/Heading";

export default function Wifi() {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] h-[350px] md:w-[550px] p-2">
        <Heading src="/wifi.svg" text="Wifi" />
        <p>SSID: BDE0 Hyperoptic 1Gb Fibre 2.4Gz</p>
        <p>Password: EPY6g4SgxHKc</p>
      </div>
    </section>
  );
}
