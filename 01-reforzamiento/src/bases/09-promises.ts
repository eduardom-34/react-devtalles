


const myPromise = new Promise<number>( ( resolve, reject ) => {

  setTimeout( () => {
    // !Yo quiero mi dinero de regreso
    resolve(100);
    // reject('Mi amigo se perdio');

  }, 2000 )

});


myPromise.then(
  (myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`)
  }).catch( reason => {
    console.warn(reason);
  })
  .finally( () => {
    console.log("Pues a seguir con mi vida")
  });
