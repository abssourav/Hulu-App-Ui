import  {create} from 'zustand'
import { ApiServices } from '../services/api.service'
import { EnvConfig } from '../config/env.config'



interface State {
    movies:any[]
}
interface Action {
    getPopularMovies:() => void
}

//initial state
const initialState: State ={
    movies : []
}

export const useApiStore = create<State & Action>((set)=>({
    ...initialState,
    getPopularMovies: async()=> {
        try {
            const res = await ApiServices.get("/popular?api_key="+EnvConfig.API_KEY)
            set(()=>({movies:res.data.results}))
            console.log(res.data.results)
            
        } catch (error) {
            console.log('error in getPopularMovies', error)
            throw error
        }
    }

}))