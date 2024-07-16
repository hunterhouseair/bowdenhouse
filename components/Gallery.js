import Image from "next/image";

const Gallery = ({ images }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center m-3">
      {images.map((el) => (
        <Image
          className="p-2"
          width={300}
          height={150}
          alt={"alt"}
          src={`/aftercleaning/${el}`}
          key={el}
        />
      ))}
    </div>
  );
};
export default Gallery;
