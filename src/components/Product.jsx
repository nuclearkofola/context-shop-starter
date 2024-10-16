
export const Product = ({id, name, description, price}) => {

	const handleBuy = () => {
		console.log(`Product ${id} added to cart`)
	}

	return (
		<div style={{border: '5px solid green', margin: '1em', padding: '1em'}}>
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