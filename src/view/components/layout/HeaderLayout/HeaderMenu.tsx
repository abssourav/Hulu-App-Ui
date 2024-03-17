import { useMenuStore } from "../../../../stores/menu.store"


const HeaderMenu = () => {
    const { menu } = useMenuStore()
    return (
        <ul className="hidden md:flex items-center gap-8 ">
            {
                menu.map((item) => (
                    <li 
                    key={item.id}
                    className="px-3 py-1 cursor-pointer hover:bg-[#374151] rounded-lg">
                        {item.name}
                    </li>
                ))
            }
        </ul>
    )
}

export default HeaderMenu
