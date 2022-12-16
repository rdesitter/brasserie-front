import About from "../../components/About";
import Carte from "../../components/Carte";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Photos from "../../components/Photos";

function Home() {
    return (
        <div>
            <Header />
            <Intro />
            <About />
            <Carte />
            <Photos />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;
