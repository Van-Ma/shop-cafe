import "./Navigation.scss";
import { FaSearch, FaPhone, FaShoppingCart, FaClipboardList } from "react-icons/fa";

// navigation icons 
const navItems = [
    { type: "icon", icon: FaSearch, title: "Search" },
    { type: "icon", icon: FaShoppingCart, title: "Cart" },
    { type: "image", src: "shop/home.png", title: "Home" },
    { type: "icon", icon: FaClipboardList, title: "History" },
    { type: "icon", icon: FaPhone, title: "Contact" },
];

function Navigation({ onSearchClick }) {
    return (
        <div className="app-page">
            <header><img src="shop/home.png" alt="Home" /></header>
            <nav className="navbar">
                {navItems.map(({ type, icon: Icon, src, title }) => (
                    // display icons
                    <button
                        key={title}
                        className="nav-btn"
                        onClick={title === "Search" ? onSearchClick : undefined}
                    >
                        <div className="icon-wrapper">
                            {type === "image" ? (
                                // home image
                                <img src={src} alt={title} className="icon-img" />
                            ) : (
                                <Icon className="icon" />
                            )}
                            <span className="icon-title">{title}</span>
                        </div>
                    </button>
                ))}
            </nav>
        </div>
    );
}


export default Navigation;
