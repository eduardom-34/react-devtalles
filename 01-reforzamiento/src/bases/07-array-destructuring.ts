
const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;

console.log({ trunks });


const returnArrayFn = () => {
  return ["ABC", 123] as const;
}


const [letras, numeros] = returnArrayFn();

console.log(letras, numeros);


const useState = (valor: string) => {

  return [
    valor,
    (nuevoValor: string) => { console.log(nuevoValor) },
  ] as const;

};


const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre('Vegeta');

