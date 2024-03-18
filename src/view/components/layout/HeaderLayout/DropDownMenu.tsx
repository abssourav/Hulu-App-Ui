import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { useMenuStore } from "../../../../stores/menu.store"
import { useState } from "react";


const DropDownMenu = () => {

    const [toggle, setToggle] = useState(false)

    const { menu } = useMenuStore()

    return (
        <div className="md:hidden ">
            <div
            onClick={()=> setToggle(!toggle)}
             className="flex items-center px-3 py-1 cursor-pointer bg-[#374151] rounded-lg">
                <h2 className="font-semibold select-none">Home</h2>
                {!toggle ?
                    <FaAngleDown /> :
                    <FaAngleUp />
                }
            </div>
            {toggle && <ul className="md:hidden z-50 absolute p-4 bg-[#374151] rounded-lg left-0 right-0 ml-auto mr-auto w-[200px] mt-1">
                {
                    menu.map((item) => (
                        <li
                            key={item.id}
                            className=" cursor-pointer px-10 py-2 hover:bg-[#586477] rounded-lg text-center select-none">
                            {item.name}
                        </li>
                    ))
                }
            </ul>}
        </div>
    )
}

export default DropDownMenu
