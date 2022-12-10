import React from "react"

export default function Main(props) {
    return (
        <div>
        <div className="main">
            <img className="main--img" src={props.item.imageUrl} />
            <div className="main--text">
                <div className="main--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.item.location}</p>
                    <a target="_blank" href={props.item.googleMapsUrl} >View on google</a>
                </div>
                <h1 className="main--title">{props.item.title}</h1>
                <h4 className="main--date">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="main--description">{props.item.description}</p>
            </div>
        </div>
        <hr />
        </div> 
    )
}