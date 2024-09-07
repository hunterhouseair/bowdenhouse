const Ical = ({ propertyname, address, url1, url2, bgcolor }) => {
  return (
    <div
      className={`flex flex-col p-4 m-4 justify-center items-center ${bgcolor}`}
    >
      <h1 className="m-2">{propertyname}</h1>
      <p className="m-2">{address}</p>
      <div className="flex flex-row flex-wrap justify-center items-center w-[300px] md:w-[900px]">
        <iframe src={url1} className="w-[400px] h-[500px] m-2"></iframe>
        <iframe src={url2} className="w-[400px] h-[500px] m-2"></iframe>
      </div>
    </div>
  );
};

export default Ical;
