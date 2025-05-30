"use client"

import { useEffect, useState } from "react";
import HeartPulsing from "./components/HeartPulsing";
import { Heart, Sparkles } from "lucide-react";

export default function App() {
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

  const [selectedSemanal, setSelectedSemanal] = useState<string>("")
  const [isVisible, setIsVisible] = useState(false)
  
  const getRandomItem = (items: string[]): string => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  const generateNewVitamin = () => {
    setIsVisible(false)
    setTimeout(() => {
      const randomSemanal = getRandomItem(semanalItems)
      setSelectedSemanal(randomSemanal)
      setIsVisible(true)
    }, 300)
  }

  useEffect(() => {
    const randomSemanal = getRandomItem(semanalItems)
    setSelectedSemanal(randomSemanal)
    setTimeout(() => setIsVisible(true), 500)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
      <HeartPulsing />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl blur-xl opacity-20 scale-110"></div>
          <div className="relative backdrop-blur-sm bg-white/80 border border-white/50 shadow-2xl rounded-3xl p-8 w-full max-w-md mx-auto">
              <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="text-rose-500 fill-rose-500" size={32} />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Vitaminas
                </h1>
                <Heart className="text-rose-500 fill-rose-500" size={32} />
              </div>
            </div>

            {/* Result section */}
            <div className="text-center">
              <h2 className="text-lg font-semibold text-rose-700 mb-4">Sua Vitamina Semanal</h2>

              <div
                className={`transition-all duration-500 transform ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <Sparkles className="text-rose-400 mr-2" size={20} />
                    <span className="text-2xl">💕</span>
                    <Sparkles className="text-rose-400 ml-2" size={20} />
                  </div>
                  <p className="text-xl font-bold text-rose-800 leading-relaxed">{selectedSemanal}</p>
                </div>
              </div>

              {/* Generate button */}
              <button
                onClick={generateNewVitamin}
                className="group relative bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <Heart size={18} className="group-hover:fill-white transition-all duration-300" />
                  Nova Vitamina
                  <Sparkles size={18} className="group-hover:rotate-12 transition-all duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}