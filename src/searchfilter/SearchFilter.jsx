import "./SearchFilter.scss";
import menuItems from "../products.json";
import { FaSearch } from "react-icons/fa";
import { useState, useMemo, useEffect } from "react";

function SearchFilter({ onClose }) {
    const [searchTerm, setSearchTerm] = useState('');

    // clear search
    const clearSearch = () => setSearchTerm('');

    // memoized filtered items
    const filteredItems = useMemo(() => {
        if (!searchTerm) return [];
        const term = searchTerm.toLowerCase();

        // separate priority results (startsWith) from secondary (includes)
        const primary = [];
        const secondary = [];

        for (const item of menuItems) {
            const name = item.name.toLowerCase();
            const type = item.type.toLowerCase();
            const desc = item.description?.toLowerCase() || "";

            if (name.startsWith(term)) {
                primary.push(item);
            } else if (name.includes(term) || type.includes(term) || desc.includes(term)) {
                secondary.push(item);
            }
        }

        // sort alphabetically by name
        primary.sort((a, b) => a.name.localeCompare(b.name));
        secondary.sort((a, b) => a.name.localeCompare(b.name));

        return [...primary, ...secondary];
    }, [searchTerm]);

    // close menu when click anywhere else 
    useEffect(() => {
        const handleKey = (e) => e.key === "Escape" && onClose?.();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div className="app-page">
            {/* search bar */}
            <div className="search-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button className="clear-btn" onClick={clearSearch}>×</button>
                    )}
                    {/* search button*/}
                    <button className="search-btn">
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* search results */}
            {filteredItems.length > 0 && (
                <div className="results-container">
                    {filteredItems.map(item => (
                        // show menu item in results
                        <div key={item.id} className="product-card">
                            <div className="product-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default SearchFilter;
