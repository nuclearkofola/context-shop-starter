
export const Product = ({id, name, description, price, image}) => {

	const handleBuy = () => {
		console.log(`Product ${id} added to cart`)
	}

	return (
		<div style={{border: '5px solid green', margin: '1em', padding: '1em'}}>
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p><strong>{price}</strong></p>
			{ /* chceme jen pro prihlasene */
				<button onClick={handleBuy}>Buy</button>
			}
		</div>
	);
}

export default Product;