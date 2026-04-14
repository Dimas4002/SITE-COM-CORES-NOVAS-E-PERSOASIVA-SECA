import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Clock, Infinity, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "30 Receitas Selecionadas",
    description: "Cardápio estratégico para café da manhã, almoço, jantar e lanches que ajudam a reduzir o inchaço.",
    icon: Utensils,
    emoji: "🍽️",
  },
  {
    title: "Guia de Preparo Simplificado",
    description: "Passo a passo fácil para quem não tem tempo e não quer complicação.",
    icon: Clock,
    emoji: "📋",
  },
  {
    title: "Acesso Vitalício",
    description: "Você acessa quando quiser, quantas vezes quiser.",
    icon: Infinity,
    emoji: "📱",
  },
  {
    title: "Formato Digital (PDF)",
    description: "Feito para ler direto no celular.",
    icon: Smartphone,
    emoji: "📲",
  },
];

export default function WhatYouReceive() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-[#000000]">O que você vai receber</h2>
          <div className="w-20 h-1.5 bg-[#00C853] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Card key={index} className={cn(
              "h-full border-2 border-[#00A86B]/20 shadow-md hover:shadow-lg transition-shadow",
              index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
            )}>
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#00A86B]/10 rounded-2xl flex items-center justify-center text-[#00A86B] mb-6 relative">
                  <span className="absolute -top-2 -right-2 text-2xl">{item.emoji}</span>
                  <item.icon size={36} className="stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#000000]">{item.title}</h3>
                <p className="text-[#555555]">
                  {item.description.split(' ').map((word, i) => {
                    const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                    if (cleanWord === 'inchaço') return <span key={i} className="text-[#E53935] font-bold">{word} </span>;
                    if (cleanWord === 'leve') return <span key={i} className="text-[#00C853] font-bold">{word} </span>;
                    if (cleanWord === 'simples') return <span key={i} className="text-[#FB8C00] font-bold">{word} </span>;
                    return word + ' ';
                  })}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
