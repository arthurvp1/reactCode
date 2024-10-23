import Navbar from "../components/Navbar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Final() {
  const {timeTorcida} = useContext(GlobalContext);
  return (
    <div>
        <Navbar />
      <h1>Você torce para o time: {timeTorcida} HAHHAHAHA </h1>
      <p>🟥⬛🚩🚩🟥⬛🚩🚩🟥⬛🚩🚩🟥⬛🚩🚩🟥⬛🟥⬛🚩🚩🟥⬛🚩🚩🟥⬛🚩🚩🟥⬛🚩🚩🟥⬛</p>
    </div>
  )
}

export default Final
