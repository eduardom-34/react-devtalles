
interface Props {
  name: string;
  quantity?: number;
}


const ItemCounter = (props: Props) => {

  const handleClick = () => {
    console.log(`Click en ${name}`)
  }

  const { name, quantity } = props;
  // console.log(name);

  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10,
    }}>
      <span
        style={{
          width: 150
        }}
      >{name}</span>
      <button
        onClick={handleClick}
      >+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  )
}

export default ItemCounter