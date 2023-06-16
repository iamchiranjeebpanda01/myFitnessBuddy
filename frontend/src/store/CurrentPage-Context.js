import React from "react";

const CurrentPageContext = React.createContext(
    {
        currentPage: "home",
        setCurrentPage: (name) => {}
    }
);

export default CurrentPageContext;