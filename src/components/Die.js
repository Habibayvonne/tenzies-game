// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Die(props){

    const styles = {
        backgroundColor:props.isHeld ? "#59E391":"white"
    }
    return(
        <div className="die-face" 
        style={styles}
        onClick={props.holdDice}>
            <h2 className="num">{props.value}</h2>
        </div>
    )
}