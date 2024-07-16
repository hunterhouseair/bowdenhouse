const Video = ({ src, alt }) => {
  return (
    <div>
      <iframe
        className="w-full h-[250px] md:w-[530px] md:h-[550px]"
        src={src}
        title={alt}
      />
    </div>
  );
};

export default Video;
