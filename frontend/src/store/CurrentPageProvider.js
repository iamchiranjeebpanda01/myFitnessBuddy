import PageCTX from "./CurrentPage-Context";
import { useState } from "react";


const CurrentPageProvider = (props) => {
    const [page, setPage] = useState("home");

    const pageChangeHandler = (name) => {
            setPage(name);
    }

    const pageStatus = {
        currentPage: page,
        setCurrentPage: pageChangeHandler
    }

    return <PageCTX.Provider value={pageStatus}>{props.children}</PageCTX.Provider>
};

export default CurrentPageProvider;