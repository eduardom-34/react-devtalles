

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string
}


const ironman: Person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: 'ABC-123',
    city: 'New York',
  }
};

const spiderman: Person = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 22,
  address: {
    postalCode: '456',
    city: 'New York',
  }
}

console.log(ironman);
console.log(spiderman);


// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'San Jose';

// console.log(ironman, spiderman);

