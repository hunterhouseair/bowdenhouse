import Heading from "@/components/Heading";
import Video from "@/components/Video";

export default function Rubbish() {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] md:w-[550px] p-2">
        <Heading src="/bin.svg" text="Rubbish" />
        <p>
          If you need to take out rubbish during your stay, from the lift press
          "B". This will take you to the basement where the main bins are
          located along with recycle bins.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <iframe
          className="w-full h-[250px] md:max-w-[850px] md:h-[550px]"
          src="https://www.youtube.com/embed/u8ZUwurYT8Q?si=5XPJgXWPALbKkDLX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
