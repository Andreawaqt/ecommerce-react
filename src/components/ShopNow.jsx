function ShopNow() {
    const handleClick = () => {
        window.location.href = "/Productos";
    }
    console.log ("Shop Now")

    return (
        <button onClick={handleClick}>
            Shop Now
        </button>
    );
}

export default ShopNow; 