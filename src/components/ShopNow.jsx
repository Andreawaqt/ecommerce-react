function ShopNow() {
    const handleClick = () => {
        window.location.href = "/productos";
    }
    console.log ("Shop Now")

    return (
        <button onClick={handleClick}>
            Shop Now
        </button>
    );
}

export default ShopNow; 