import ItemCounter from "./shopping-cart/ItemCounter";


export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      <ItemCounter name="Nintendo Swtich 1" quantity={2} />
      <ItemCounter name="Nintendo Swtich 2" quantity={4} />
      <ItemCounter name="Nintendo Swtich 3" quantity={10} />

    </>
  )
}
