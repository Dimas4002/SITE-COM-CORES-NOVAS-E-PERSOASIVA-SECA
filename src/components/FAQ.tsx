import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o material?",
    answer: "Acesso imediato após o pagamento.",
  },
  {
    question: "O material é digital?",
    answer: "Sim, você recebe em PDF.",
  },
  {
    question: "Preciso de ingredientes caros?",
    answer: "Não, tudo simples e acessível.",
  },
  {
    question: "Funciona para iniciantes?",
    answer: "Sim, foi feito pra quem não tem experiência.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim, 7 dias.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center justify-center gap-1 text-[#000000]">
            <span className="text-[#E53935]">❓</span>Perguntas Frequentes
          </h2>
          <div className="w-20 h-1.5 bg-[#00C853] mx-auto rounded-full" />
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#F5F5F5] px-6 rounded-2xl border-none shadow-sm">
              <AccordionTrigger className="text-left font-bold hover:no-underline py-6 text-[#000000]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center p-8 bg-[#E8F5E9] rounded-3xl border border-[#00C853]/10">
          <p className="text-lg font-bold text-[#00C853] mb-2 uppercase">Sua satisfação ou seu dinheiro de volta.</p>
          <p className="text-slate-600">Se não gostar, basta pedir reembolso.</p>
        </div>
      </div>
    </section>
  );
}
