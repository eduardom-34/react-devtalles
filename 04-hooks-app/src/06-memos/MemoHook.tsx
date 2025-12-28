import { useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {

  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mi Subtitulo");


  return (
    <div className="bg-gradient flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo App</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subtitle} />


      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >Cambiar tittulo</button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >Cambiar Subtittulo</button>
    </div>
  )
}
