import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Services from "../components/Services"
import Quality from "../components/Quality"
import Catalogue from "../components/Catalogue"
import Testimony from "../components/Testimony"
import Mobile from "../components/Mobile"
import Footer from "../components/Footer"

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Services />
            <Quality />
            <Catalogue />
            <Testimony />
            <Mobile />
            <Footer />
        </div>
    )
}

export default LandingPage