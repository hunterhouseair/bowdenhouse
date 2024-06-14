import Image from "next/image";

export default function Heading({ src, text }) {
  return (
    <div className="flex flex-row mb-2">
      <Image className="font-bold" src={src} height={25} width={25} alt="key" />
      <h3 className="text-xl font-bold ml-2">{text}</h3>
    </div>
  );
}
