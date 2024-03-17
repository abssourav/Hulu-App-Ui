import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const HeaderRight = () => {
  return (
    <div className="flex items-center gap-5 md:gap-10">
      <IoSearch className="text-2xl cursor-pointer"/>
      <CgProfile className="text-2xl cursor-pointer"/>
    </div>
  )
}

export default HeaderRight
