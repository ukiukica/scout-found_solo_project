import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import './SearchBar.css'


function SearchBar() {

    const filmLocations = useSelector(state => state.filmLocationsReducer)
    const filmLocationsArr = Object.values(filmLocations)

    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const onClick = () => {
        setShowSearch(false)
        setQuery("")
    }

    return (
        <div>
            <div className="nav-search-div">
                <input
                    id="nav-search"
                    placeholder="Search Locations..."
                    onChange={(e) => {
                        setShowSearch(true);
                        setQuery(e.target.value)}}
                    value={query}
                />
                <div className="results-div">
                {query && showSearch
                    ? filmLocationsArr
                        .filter((filmLocation) => {
                            if (filmLocation.title.toLowerCase().includes(query.toLowerCase())) {
                                return filmLocation;
                            } else if (filmLocation.title.toLowerCase().includes(query.toLowerCase())) {
                                return filmLocation;
                            }
                        })
                        .map((filmLocation) => (
                            <div className="camera-search-result" key={filmLocation.id}>
                                <NavLink to={`/filmLocations/${filmLocation.id}`} onClick={onClick} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <p className="camera-result">{filmLocation.title}</p>
                                </NavLink>
                            </div>
                        ))
                    : null}
                    </div>
            </div>
        </div>
    )
}

export default SearchBar;
