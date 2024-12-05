import { useEffect, useState } from "react";
import HeartPulsing from "./components/HeartPulsing";

const App = () => {
  const semanalItems: string[] = [
    "Mais carinho",
    "Mais sexo",
    "Palavras de afirmação",
    "Mais perdão",
    "Mais oração",
    "Mais elogios",
    "Mais beijos",
    "Café da manhã na cama",
    "Gentileza",
    "Mais paciência",
    "Tomar banho juntos",
    "Cinema juntos",
    "Jantar especial",
    "Presente",
    "Surpreenda",
    "Rosas com bilhete",
  ];


 /*  const mensalItems: string[]  = [
    "Cinema juntos",
    "Jantar especial",
    "Presente",
    "Surpreenda",
    "Rosas com bilhete",
  ]; */

  const [selectedSemanal, setSelectedSemanal] = useState<string>("");
  //const [selectedMensal, setSelectedMensal] = useState<string>("");

  const getRandomItem = (items: string[]): string => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  useEffect(() => {
    const randomSemanal = getRandomItem(semanalItems);
    //const randomMensal = getRandomItem(mensalItems);

    setSelectedSemanal(randomSemanal);
    //setSelectedMensal(randomMensal);
  }, []);

  return (
    <>
      <HeartPulsing />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center items-center p-8 w-[30rem] h-[25rem] text-[#] rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold">Vitaminas</h1>

          {/* VITAMINAS SEMANAL */}
          {/* Resultado da roleta semanal */}
          <div className="my-4 text-lg font-bold">
          <div>Resultado Semanal: {selectedSemanal}</div>
          </div>

          {/* VITAMINAS MENSAL */}
          {/* Resultado da roleta mensal */}
          {/* <div className="my-4 text-lg font-bold">
          <div>Resultado Mensal: {selectedMensal}</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default App;
