import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useState } from "react";
import { genere } from "../../../../config/constant/genresList.constant";
import GenresCardLayout from "./GenresCardLayout";

const GenresListLayout = () => {
  const [element, setElement] = useState<any>([]);

  const onChildElement = (elem: any, index: number) => {
    setElement((prevElement) => {
      console.log(prevElement);

      const updatedElement = [...prevElement];
      updatedElement[index] = elem;
      return updatedElement;
    });
  };

  const handleLeftButton = (index: number) => {
    if (element[index]) element[index].scrollLeft -= 500;
  };
  const handleRightButton = (index: number) => {
    if (element[index]) element[index].scrollLeft += 500;
  };

  return (
    <div>
      {genere.map(
        (item, index) =>
          index < 5 && (
            <div key={index} className="m-6 md:mx-20 ">
              <div className="flex justify-between ">
                <h2 className="font-bold text-2xl">{item.name}</h2>
                <button className="flex items-center cursor-pointer">
                  <p>VIEW ALL</p>
                  <IoIosArrowForward />
                </button>
              </div>
              <div className="flex items-center">
                <IoIosArrowBack
                  onClick={() => {
                    handleLeftButton(index);
                  }}
                  className="bg-black p-2 box-content text-xl text-white mr-[-30px] mb-9 z-10 rounded-full cursor-pointer hover:bg-white hover:text-black"
                />

                <GenresCardLayout
                  genresId={item.id}
                  onChildElement={(elem: any) => onChildElement(elem, index)}
                />

                <IoIosArrowForward
                  onClick={() => {
                    handleRightButton(index);
                  }}
                  className="bg-black p-2 box-content text-xl text-white ml-[-20px] mb-9 z-10 rounded-full cursor-pointer hover:bg-white hover:text-black"
                />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GenresListLayout;
