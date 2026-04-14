import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background border-2 border-dashed border-primary/30 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full flex items-center justify-center relative">
                <ShieldCheck size={80} className="text-primary md:w-32 md:h-32" />
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Sua Satisfação ou Seu Dinheiro de Volta</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Se você não amar as receitas ou não se sentir mais leve em até 7 dias, basta nos enviar um e-mail e devolveremos 100% do seu investimento. O risco é todo nosso.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold">
                <span className="text-sm uppercase tracking-widest">Garantia Incondicional de 7 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
