import './MenuDisplay.scss';
import menuItems from './products.json'; 

function MenuDisplay() {
    return (
        <div className="app-page">
            {/* product menu grid */}
            <div className="product-menu">
                {/* menu items */}
                {menuItems.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="product-img">
                             <img src={item.img} alt={item.name} />
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuDisplay;
