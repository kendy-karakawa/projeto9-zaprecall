import { useState } from "react";
import Start from "./components/Start";
import ZapRecall from "./components/ZapRecall";


export default function App() {
  const [renderizarZap, setRenderizarZap] = useState(false)
  const [renderizarStart, setRenderizarStart] = useState(true)

  return(
    <>
    {renderizarZap && <ZapRecall/>}
    
    {renderizarStart && 
    <Start 
    setRenderizarZap={setRenderizarZap} 
    setRenderizarStart={setRenderizarStart} />}
    
    </>
  )
}


