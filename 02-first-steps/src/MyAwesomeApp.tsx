import type { CSSProperties } from "react";

const firstName = 'Cesar!!';
const lastName = 'Casco';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
  zipCode: 'ABC-123',
  country: 'Canada'
}

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export const MyAwesomeApp = () => {



  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

      <p
        style={myStyles}
      >

        {JSON.stringify(address)}
      </p>
    </>
  )

}
