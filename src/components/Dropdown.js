import React from 'react'
import { Link } from 'gatsby'

export default function Dropdown({ items }) {
    return (
        <div className="dropdown">
            {items.map((item, index) => <Link key={index} to={item.link} style={{ color: "white", margin: "0.5rem 0" }}>{item.name}</Link>)}
        </div>
    )
}