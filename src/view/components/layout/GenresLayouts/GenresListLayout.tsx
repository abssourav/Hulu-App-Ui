import { IoIosArrowForward } from "react-icons/io";

import { genere } from '../../../../config/constant/genresList.constant'
import GenresCardLayout from "./GenresCardLayout";

const GenresListLayout = () => {
  return (
    <div>
      {genere.map((item, index) => index < 5 && (
        <div key={index} className="m-5 md:mx-20">
          <div className="flex justify-between ">
            <h2 className="font-bold text-2xl">{item.name}</h2>
            <button className="flex items-center cursor-pointer">
              <p>VIEW ALL</p>
              <IoIosArrowForward />
            </button>
          </div>
          {/* Scrollbar card layout */}
          <GenresCardLayout genresId={item.id}/>
        </div>
      ))}
    </div>
  )
}

export default GenresListLayout