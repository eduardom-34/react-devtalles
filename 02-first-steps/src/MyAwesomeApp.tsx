import { CSSProperties } from "react";

const firstName = 'Cesar';
const lastName = 'Casco';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'Canada'
}


const myStyle: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: '20',
  padding: '10',
  marginTop: '30',
  color: 'red'

}


const MyAwesomeApp = () => {


  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'activo' : 'no activo'}</h1>

      <p
        style={myStyle}
      >
        {JSON.stringify(address)}
      </p>
    </>
  )
}

export default MyAwesomeApp