import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Check, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Offer() {
  const checkoutUrl = "https://pay.cakto.com.br/zsuo6ok_812793";

  return (
    <section className="py-24 bg-[#FFF8E1]" id="offer">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#FB8C00] overflow-hidden">
            <div className="bg-[#E53935] text-white p-6 text-center">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">OFERTA ESPECIAL</h3>
              <p className="text-sm font-bold opacity-90">Acesso imediato ao material completo + Bônus</p>
            </div>
            
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-black text-[#000000] mb-8">Você terá acesso a:</h2>
              
              <ul className="space-y-4 mb-12">
                {[
                  "30 Receitas Estratégicas (PDF)",
                  "Lista de Compras Pronta",
                  "Guia Prático do Dia a Dia",
                  "Acesso Vitalício",
                  "Atualizações Gratuitas",
                  "+ 3 BÔNUS EXCLUSIVOS",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-[#00C853] stroke-[3]" />
                    </div>
                    <span className={cn(
                      "font-medium text-slate-700",
                      item.includes("BÔNUS") && "text-[#00C853] font-bold"
                    )}>
                      {item.split(' ').map((word, idx) => {
                        const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                        if (cleanWord === 'inchaço') return <span key={idx} className="text-[#E53935] font-bold">{word} </span>;
                        if (cleanWord === 'leve') return <span key={idx} className="text-[#00C853] font-bold">{word} </span>;
                        if (cleanWord === 'simples') return <span key={idx} className="text-[#FB8C00] font-bold">{word} </span>;
                        return word + ' ';
                      })}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-center space-y-4">
                <p className="text-slate-400 font-bold line-through text-lg">De R$ 97,90</p>
                
                <p className="text-[#00C853] font-black text-2xl tracking-tight">POR APENAS</p>
                
                <div className="flex items-start justify-center gap-1">
                  <span className="text-[#FB8C00] font-black text-2xl mt-2">R$</span>
                  <span className="text-8xl font-black text-[#FB8C00] tracking-tighter">19</span>
                  <span className="text-4xl font-black text-[#FB8C00] mt-2">,90</span>
                </div>

                <div className="inline-block bg-slate-100 px-4 py-1 rounded-full">
                  <p className="text-slate-500 font-bold text-sm flex items-center gap-2">
                    Menos que um lanche 🍕
                  </p>
                </div>

                <div className="pt-4 px-2">
                  <div className="flex flex-col items-center justify-center gap-1 mb-4 bg-[#E8F5E9] p-4 rounded-2xl border border-[#00C853]/10">
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#00C853]/20">
                      <Check size={12} className="text-[#00C853]" />
                      <span className="text-[10px] font-bold text-[#00C853] uppercase">Garantia de 7 dias</span>
                    </div>
                    <p className="text-[11px] font-bold text-[#00C853] uppercase tracking-tight">
                      Sua satisfação ou seu dinheiro de volta.
                    </p>
                    <p className="text-[10px] text-slate-600">
                      Se não gostar, basta pedir reembolso.
                    </p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full max-w-sm mx-auto"
                  >
                    <a 
                      href={checkoutUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof window !== "undefined" && (window as any).fbq) {
                          (window as any).fbq('track', 'InitiateCheckout');
                        }
                      }}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full h-auto py-6 bg-[#00C853] hover:bg-[#00A846] text-white rounded-2xl shadow-xl shadow-green-200 flex flex-col gap-1 items-center justify-center px-4 border-none"
                      )}
                    >
                      <div className="flex items-center justify-center gap-2 text-base sm:text-xl font-black uppercase text-center leading-tight">
                        <ShoppingCart size={20} className="flex-shrink-0" />
                        <span>QUERO DESINCHAR AGORA</span>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold opacity-90">Acesso Imediato e Vitalício</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
