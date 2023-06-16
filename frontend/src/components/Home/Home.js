import HomeContent from "./HomeContent";
import CurrentPageContext from "../../store/CurrentPage-Context";
import { useContext, useEffect } from "react";

const Home = () => {
    const PageCTX = useContext(CurrentPageContext);

    useEffect(() => {
        PageCTX.setCurrentPage("home");
    }, [PageCTX])
    
    return (
        <div className="ps-5 pe-5 pt-5">
            <HomeContent/>
        </div>
    );
};

export default Home;