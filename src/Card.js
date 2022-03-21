import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img src="..public/katie.png" className="card--image" />
            <div className="card--stats">
                <img src="..public/star.png" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
                <p>Life Lessons</p>
                <p><span className="bold">From $130</span> per person</p>
            </div>

    )
}