import React from 'react'
import '../Explore/Card.css'
export default function Card(props) {
    return (
        <>
            <a className="img-card" href="state.html">
                <img src={props.StateImage} className="states-img" />
                <h2 className="states-name">{props.StateName}</h2>
            </a>
        </>
    )
}
