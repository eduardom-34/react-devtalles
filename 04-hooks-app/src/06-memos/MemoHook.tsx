import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle";

// const handleMyAPICall = (myValue: string) => {
//   console.log("Llamar a la API - ", myValue)
// }

export const MemoHook = () => {

  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mi Subtitulo");

  const handleMyAPICall = useCallback(() => {
    console.log("Llamar a la API - ", subtitle)
  }, [subtitle]);


  return (
    <div className="bg-gradient flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo App</h1>

      <MyTitle title={title} />
      <MySubTitle
        subtitle={subtitle}
        callMyAPI={handleMyAPICall}
      />


      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello, ' + new Date().getTime())}
      >Cambiar tittulo</button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubtitle('World, ' + new Date().getTime())}
        onClick={() => setSubtitle('World')}
      >Cambiar Subtittulo</button>
    </div>
  )
}
