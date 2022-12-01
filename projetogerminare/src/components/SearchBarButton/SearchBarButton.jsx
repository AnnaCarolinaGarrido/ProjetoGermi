import React, { useState } from "react"
import './Index.css';

export function SearchBarButton(props) {

    const [isActive, setIsActive] = useState(false);

    function handleSearchButton() {
        setIsActive(current => !current)
    }

    return (
        <button {...props}>
            <div className={isActive ? 'search-button active center-position' : 'search-button center-position'} onClick={handleSearchButton}>
                <div class="search-icon">
                </div>
            </div>
        </button>
    )
}