import { useEffect, useState } from "react"
import { useApiStore } from "../../../../stores/api.store"
import { EnvConfig } from "../../../../config/env.config"

interface genresProps {
    genresId:number
}

const GenresCardLayout = (props:genresProps) => {

    const [movieList,setMovieList]= useState<any>([])
    const {getMoviesByGenres} =useApiStore()
    useEffect(()=>{
        getMovieList()
    },[])

    const getMovieList=async()=>{
        const genreList = await getMoviesByGenres(props.genresId)
        setMovieList(genreList)
        
    }
  return (
    <div className="w-full overflow-scroll overflow-y-auto scroll-smooth whitespace-nowrap scrollbar-hide">
      {movieList.map((item:any,index:number)=>(
        <div key={index}  className="inline-block m-3 cursor-pointer">
            <img src={EnvConfig.IMAGE_BASE_URL+item.backdrop_path}  className="w-[230px] md:w-[340px] hover:border-2 rounded-lg" />
            <div className="opacity-20">
                {index%2==0? "start watching" : "watched"}
            </div>
            <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default GenresCardLayout
