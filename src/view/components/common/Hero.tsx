import { useEffect } from "react"
import { useApiStore } from "../../../stores/api.store"
import { EnvConfig } from "../../../config/env.config"



const Hero = () => {

  const { movies, getPopularMovies,getMoviesByGenres } = useApiStore()

  useEffect(() => {
    getPopularMovies()
    getMoviesByGenres(28)

  }, [getPopularMovies])

  return (
    <div className="relative ">
      <div className="absolute bottom-0 p-10 md:p-20  bg-gradient-to-t from-[#1e2126] via-transparent w-full">
        <h2 className="text-white text-[19px] lg:text-[27px]">Watch only on HULU</h2>
        <h2 className="text-white text-[36px]
            lg:text-[47px] font-bold">{movies[14]?.title}</h2>
        <div className="flex gap-4 mt-3">
          <button className="bg-[#1A1A1A] py-1 px-3 rounded-lg text-lg uppercase font-semibold hover:bg-gray-900">Play</button>
          <button className="box-border py-1 px-3 rounded-lg text-lg uppercase font-semibold border-white border-2 hover:border-gray-500">Details</button>
        </div>
      </div>
      
      <img src={EnvConfig.IMAGE_BASE_URL + movies[15]?.backdrop_path} alt="something wrong" className="object-cover w-full h-[90vh] md:h-[100vh]"/>
    </div>
  )
}

export default Hero
