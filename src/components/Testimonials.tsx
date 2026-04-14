import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    location: "Rio de Janeiro",
    text: "Eu me sentia inchada todos os dias. Em poucos dias já senti diferença nas roupas.",
    image: "/mariana.webp",
  },
  {
    name: "Carla Mendes",
    location: "São Paulo",
    text: "As receitas são fáceis e gostosas. Consegui seguir sem dificuldade.",
    image: "/carla.webp",
  },
  {
    name: "Ricardo Oliveira",
    location: "Curitiba",
    text: "Perfeito pra quem tem rotina corrida. Me sinto muito mais leve.",
    image: "/ricardo.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-[#000000]">
            QUEM COMPROU SENTIU A DIFERENÇA
          </h2>
          <div className="w-20 h-1.5 bg-[#00C853] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
            >
              <Card className="h-full border border-slate-100 shadow-md bg-[#F5F5F5] relative rounded-3xl overflow-hidden">
                <Quote className="absolute top-6 right-6 text-[#00C853]/10 w-12 h-12" />
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <p className="italic text-[#555555] mb-8 relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#00C853]/20 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-bold text-lg text-[#000000]">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
