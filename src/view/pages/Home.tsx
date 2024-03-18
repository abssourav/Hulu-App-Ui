
import Header from "../components/common/Header"
import { ReactNode } from "react"
import Hero from "../components/common/Hero";
import GenreMovieList from "../components/common/GenreMovieList";
import Footer from "../components/common/Footer";


const Home = (): ReactNode => {


    return (
        <div>
            <Header />
            <Hero />
            <GenreMovieList />
            <Footer />
        </div>
    )
}

export default Home
