function ShopNow() {
    const handleClick = () => {
        window.location.href = "/Productos";
    }
    console.log ("Shop Now")

    return (
        <div className="shopnow-container">
            <button className="shop-now" onClick={handleClick}>
            Shop Now
            </button>
        </div>
    );
}

export default ShopNow; 