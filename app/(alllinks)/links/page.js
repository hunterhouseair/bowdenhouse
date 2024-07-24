import Link from "next/link";

export default function Allproperties() {
  const guests = [
    {
      title: "Sky Garden",
      link: "https://skygardenflat1008.vercel.app",
    },
    {
      title: "Hunter House",
      link: "https://hunterhouseflat8.vercel.app",
    },
    {
      title: "Princes Square",
      link: "https://princessquare.vercel.app",
    },
    {
      title: "Bowden House",
      link: "https://bowdenhouse.vercel.app",
    },
    {
      title: "Grafton Way",
      link: "https://graftonway.vercel.app",
    },
  ];

  const staffs = [
    {
      title: "Sky Garden",
      link: "https://skygardenflat1008.vercel.app/cleaner",
    },
    {
      title: "Hunter House",
      link: "https://hunterhouseflat8.vercel.app/cleaner",
    },
    {
      title: "Princes Square",
      link: "https://princessquare.vercel.app/cleaner",
    },
    {
      title: "Bowden House",
      link: "https://bowdenhouse.vercel.app/cleaner",
    },
    {
      title: "Grafton Way",
      link: "https://graftonway.vercel.app/cleaner",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center my-3 mb-3 p-2">
      <div className="w-[250px] h-[350px] md:w-[550px] p-2">
        <h1>All Properties Links</h1>
        <h2>For Staff</h2>
        {staffs.map((item, index) => {
          return (
            <Link key={index} href={item.link} target="_blank">
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
      <hr />
      <div className="w-[250px] h-[350px] md:w-[550px] my-5 p-2">
        <h2>For Guest</h2>
        {guests.map((item, index) => {
          return (
            <Link key={index} href={item.link} target="_blank">
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
