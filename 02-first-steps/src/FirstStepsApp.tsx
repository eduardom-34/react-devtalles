import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro controller', quantity: 2 },
  { productName: 'Super Smash', quantity: 5 },
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter key={productName} name={productName} quantity={quantity}></ItemCounter>
        ))
      }

      {/* <ItemCounter name="Nintendo Swtich 1" quantity={2} />
      <ItemCounter name="Nintendo Swtich 2" quantity={4} />
      <ItemCounter name="Nintendo Swtich 3" quantity={10} /> */}

    </>
  )
}
