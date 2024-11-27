import "../assets/style/Style.css"
import Navigation from "./Navigation"
import MainContent from "./MainContent"

function NavPlusMain() {
    return (
    <div className="navPlusMain">
        <Navigation/>
        <MainContent/>
    </div>
    )
}

export default NavPlusMain