import { Droplets, Zap, Wallet, Heart } from "lucide-react";

const reasons = [
  {
    title: "Reduzir o inchaço no dia a dia",
    description: "Focamos em ingredientes que ajudam seu corpo a eliminar toxinas e líquidos acumulados de forma natural.",
    icon: Droplets,
    emoji: "💧",
  },
  {
    title: "Usar ingredientes simples e baratos",
    description: "Ingredientes que você já tem em casa ou encontra no mercado da esquina sem gastar muito.",
    icon: Wallet,
    emoji: "💰",
  },
  {
    title: "Ser fácil de fazer mesmo sem experiência",
    description: "Passo a passo ultra simples, feito para quem não tem prática na cozinha ou tem pouco tempo.",
    icon: Zap,
    emoji: "⚡",
  },
  {
    title: "Comer bem sem abrir mão do sabor",
    description: "Esqueça a comida sem graça. Aqui você come bem, se sente satisfeito e com muito mais energia.",
    icon: Heart,
    emoji: "😋",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Aqui você encontra receitas pensadas para:</h3>
            <div className="space-y-10">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#00C853] relative">
                    <span className="absolute -top-1 -right-1 text-lg">{reason.emoji}</span>
                    <span className="text-xl font-bold">✔</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {reason.title.split(' ').map((word, i) => {
                        const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                        if (cleanWord === 'inchaço') return <span key={i} className="text-[#E53935]">{word} </span>;
                        if (cleanWord === 'leve') return <span key={i} className="text-[#00C853]">{word} </span>;
                        if (cleanWord === 'simples') return <span key={i} className="text-[#FB8C00]">{word} </span>;
                        return word + ' ';
                      })}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {reason.description.split(' ').map((word, i) => {
                        const cleanWord = word.replace(/[.,]/g, '').toLowerCase();
                        if (cleanWord === 'inchaço') return <span key={i} className="text-[#E53935] font-bold">{word} </span>;
                        if (cleanWord === 'leve') return <span key={i} className="text-[#00C853] font-bold">{word} </span>;
                        if (cleanWord === 'simples') return <span key={i} className="text-[#FB8C00] font-bold">{word} </span>;
                        return word + ' ';
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="mb-8">
              <img 
                src="/destaque.webp" 
                alt="Destaque" 
                className="w-full h-auto rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-10 uppercase tracking-tight">
              Diferente de dietas <span className="text-[#E53935]">complicadas</span>…
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
