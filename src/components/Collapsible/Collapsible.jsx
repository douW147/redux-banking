import React from "react";


function Collapsible(props){
    return(
        <>
            {props.isOpen === true && props.children}
        </>
    )
}

export default Collapsible