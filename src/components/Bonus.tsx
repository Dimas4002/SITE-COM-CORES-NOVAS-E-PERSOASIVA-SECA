import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Calendar, Coffee } from "lucide-react";

const bonuses = [
  {
    id: "01",
    title: "Lista de Compras Inteligente",
    description: "Vá ao mercado sabendo exatamente o que comprar.",
    value: "R$ 17,00",
    icon: ShoppingCart,
  },
  {
    id: "02",
    title: "Planner Semanal Seca & Desincha",
    description: "Organize sua alimentação sem esforço.",
    value: "R$ 27,00",
    icon: Calendar,
  },
  {
    id: "03",
    title: "Guia de Chás e Sucos",
    description: "Bebidas simples que ajudam a complementar o processo.",
    value: "R$ 19,00",
    icon: Coffee,
  },
];

export default function Bonus() {
  return (
    <section className="py-24 bg-[#FFF8E1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-[#FB8C00] border-[#FB8C00]/20 bg-white rounded-full font-bold uppercase tracking-wider">
            GRATUITO PARA VOCÊ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center justify-center gap-1 text-[#000000]">
            🎁 <span className="text-[#FB8C00]">BÔNUS</span> EXCLUSIVOS (GRÁTIS)
          </h2>
          <p className="text-[#333333] font-bold text-sm max-w-lg mx-auto uppercase leading-relaxed">
            LEVANDO HOJE VOCÊ RECEBE:
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-1.5 sm:gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2 p-2 sm:p-4 rounded-2xl bg-white border border-yellow-100 hover:shadow-lg transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FB8C00] rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <bonus.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-[10px] min-[375px]:text-[12px] sm:text-sm font-black text-[#000000] uppercase tracking-tight mb-1 leading-tight">
                  BÔNUS {bonus.id}:<br/>{bonus.title}
                </h3>
                <div className="flex flex-col items-center gap-1 mb-1">
                  <span className="text-[8px] min-[375px]:text-[10px] text-slate-400 line-through leading-none">{bonus.value}</span>
                  <Badge className="bg-[#00C853] hover:bg-[#00A846] text-white font-bold text-[7px] min-[375px]:text-[9px] px-1 sm:px-2 py-0 h-3.5 sm:h-4 border-none">GRÁTIS HOJE</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
