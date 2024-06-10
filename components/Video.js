const Video = ({ src, alt }) => {
  return (
    <div>
      <iframe
        className="w-[230px] h-[250px] md:w-[530px] md:h-[550px]"
        src={src}
        title={alt}
      />
    </div>
  );
};

export default Video;
