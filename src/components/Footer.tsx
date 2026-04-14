import { Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Seca & Desincha</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Comece hoje a se sentir mais leve no seu dia a dia.
            </p>
            <div className="flex gap-4">
              {/* Social links removed as requested */}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white">Suporte</h4>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
              <Mail size={18} />
              <span className="text-sm">suportecentrodetoxbrasil@gmail.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-white/60">Aviso Legal</h4>
            <p className="text-[10px] text-white/60 leading-relaxed">
              Este produto não substitui orientação profissional. Resultados podem variar.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/40">
            © 2026 – Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-[10px] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
