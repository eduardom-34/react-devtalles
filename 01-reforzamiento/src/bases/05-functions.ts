function greet(name: string): string {
  return `Hello, ${name}`;
}

const greet2 = (name: string): string => `Hello, ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: 'ABC123',
    username: 'El_Papi1502'
  };
}

const getUser2 = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});

const user = getUser();
const user2 = getUser2();
console.log(user2);


// Funcion de flecha, cuando usarlo, para hacer una callback por ejemplo
const myNumbers: number[] = [1, 2, 3, 4, 5];

//Aqui con funcion trandicional
// myNumbers.forEach(function (numero) {
//   console.log({ numero });
// });

// Aqui con funcion de flecha
myNumbers.forEach(numero => console.log({ numero }));





