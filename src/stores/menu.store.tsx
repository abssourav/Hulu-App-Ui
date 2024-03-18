import { create } from 'zustand'

type MenuItem = {
    id:number;
    name:string
}

interface MenuState {
    menu:MenuItem[]
}

//initialState
const initialMenu:MenuState = {
    menu : [
            {
                id: 1,
                name: "Home"
            },
            {
                id: 2,
                name: "Movies"
            },
            {
                id: 3,
                name: "TV"
            },
            {
                id: 4,
                name: "Sports"
            },
            {
                id: 5,
                name: "News"
            },
            {
                id: 6,
                name: "Hubs"
            }
    ]
}

export const useMenuStore = create<MenuState>(()=>({
    ...initialMenu,

}))