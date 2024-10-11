import Heading from "@/components/Heading";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] h-[350px] md:w-[550px] p-2">
        <Heading src="/call.svg" text="Contact" />
        <p>For emergency, please contact Frank at +44 (0) 7468 528068</p>
      </div>
    </section>
  );
}
