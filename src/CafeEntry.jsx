import MenuDisplay from "./menudisplay/MenuDisplay";
import SearchFilter from "./searchfilter/SearchFilter";
import Navigation from "./navigation/Navigation";
import { useState } from "react";

function CafeEntry() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="app-page">
            {/* display search bar and results */}
            {/* slide-in search bar */}
            <div className={`search-display ${showSearch ? "visible" : ""}`}>
                <SearchFilter />
            </div>

            {/* display menu items */}
            <div className="menu-display">
                <MenuDisplay />
            </div>

            {/* display navigation menu*/}
            <div className="navigation-display">
                <Navigation onSearchClick={() => setShowSearch(prev => !prev)} />
            </div>
        </div>
    );
}

export default CafeEntry;
