import { promises as fs } from "fs";
import path from "path";
import Gallery from "@/components/Gallery";

const Checklist = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/checklist");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-[600px] p-3 m-3">
        <h1 className="text-center m-3">Checklist</h1>

        <h2>In addition to regular cleaning tasks. Please do the following:</h2>
        <ol className="m-3 p-5 list-decimal text-xl">
          <li>Aircon switch off. </li>
          <li>Bedroom window handle down position.</li>
          <li>Living room window handle down position.</li>
          <li>2 small chair in living room between sofa. </li>
          <li>
            Extra 1 toilet roll behind the bathroom mirror ( for two bathroom ).
          </li>
          <li>Do not use small bin UNDER sink ( already typed ).</li>
          <li>Under sink 5 dish washing tablet , 5 washing machine tablet. </li>
          <li>Under sink - extra bin bags, raise Ad , salt. </li>
          <li>8 wines glass , 8 coffe mag , 8 water glass on the shelf.</li>
          <li>
            {" "}
            Important ! Cleaner storage in the washing machine area . (1 big box
            , 2 small box ).
          </li>
          <li>
            {" "}
            Big box for cleaning stuff and tissues. Normally cleaner open this
            box and use cleaning products. When finished spray she can get new
            spray from the small bottom box.
          </li>

          <li>
            {" "}
            Top small box for coffee, tea, sugar, spare wine glasses and
            emergency shampoo and body soap And light blub and Window key in the
            small black paper box.
          </li>
          <li>
            {" "}
            Bottom small box storage for cleaning spray, hand soap and washing
            liquid stocks.
          </li>
          <li>Empty 2 Hoovers.</li>
          <li>
            If there are letters. Open them and take pictures please.
            {/* <Image
              className="my-3 h-[300px] md:h-[600px]"
              src="/chklist/cleaner-key.jpg"
              width={1000}
              height={1000}
              alt="cleaner key"
            /> */}
          </li>
          <li className="pb-5">Thank you.</li>
        </ol>
      </div>
      <Gallery images={imageFilenames} folderName={"checklist"} />
    </div>
  );
};

export default Checklist;
