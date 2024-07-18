import { promises as fs } from "fs";
import path from "path";
import Gallery from "@/components/Gallery";

const Picturesaftercleaning = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/aftercleaning");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="text-center m-3">Pictures After Cleaning</h1>

        <Gallery images={imageFilenames} folderName={"aftercleaning"} />
      </div>
    </div>
  );
};

export default Picturesaftercleaning;
