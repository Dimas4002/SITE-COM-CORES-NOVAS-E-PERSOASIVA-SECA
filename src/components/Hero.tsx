import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-24 lg:pt-16 lg:pb-40">
      <div className="absolute top-0 left-0 w-full bg-yellow-400 py-2 text-center z-50 shadow-sm">
        <p className="text-black text-xs md:text-sm font-bold tracking-widest uppercase">
          OFERTA VÁLIDA SOMENTE HOJE ({today})
        </p>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#000000] mb-4 uppercase">
              BARRIGA <span className="text-[#E53935]">INCHADA</span> NO FIM DO DIA?
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#E53935] mb-6 uppercase">
              NÃO É GORDURA… É O QUE VOCÊ COME
            </h2>
            <div className="mb-8 flex flex-col gap-6 items-center">
              <img 
                src="/hero.webp" 
                alt="30 Receitas" 
                className="max-w-full h-auto mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-lg md:text-xl text-[#333333] mb-8 max-w-2xl mx-auto font-medium">
              Descubra como ajustar sua alimentação com receitas <span className="text-[#FB8C00]">simples</span> e começar a se sentir mais <span className="text-[#00C853]">leve</span> já nos primeiros dias.
            </p>
            <div className="flex justify-center w-full px-2">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-sm sm:max-w-md"
              >
                <a 
                  href="https://pay.cakto.com.br/zsuo6ok_812793" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).fbq) {
                      (window as any).fbq('track', 'InitiateCheckout');
                    }
                  }}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "text-sm sm:text-lg px-4 sm:px-8 py-6 sm:py-8 rounded-full shadow-lg hover:shadow-xl transition-all group font-bold w-full flex items-center justify-center mx-auto h-auto min-h-[64px] bg-[#00C853] hover:bg-[#00A846] text-white border-none"
                  )}
                >
                  <span className="text-center">QUERO DESINCHAR AGORA</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </motion.div>
            </div>
            <p className="mt-6 text-xs font-bold text-black uppercase tracking-tight mb-12">
              🔒 Compra segura • Acesso imediato após pagamento.
            </p>

            <div className="mb-8 flex flex-col gap-6 items-center">
              <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">
                30 RECEITAS SECA & DESINCHA
              </h3>
              <p className="text-lg md:text-xl text-[#333333] max-w-2xl mx-auto font-medium">
                Receitas práticas, com ingredientes <span className="text-[#FB8C00]">simples</span>, feitas para quem sente a barriga pesada, estufada e quer se sentir mais <span className="text-[#00C853]">leve</span> no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration removed to keep page pure white */}
    </section>
  );
}
