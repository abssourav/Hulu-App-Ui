
import Header from "../components/common/Header"
import { ReactNode } from "react"
import Hero from "../components/common/Hero";


interface  HomeState{
    movies:any[];
    getPopularMovies:()=>void;
}

const Home = (): ReactNode => {


    return (
        <div>
            <Header />
            <Hero />
        </div>
    )
}

export default Home
