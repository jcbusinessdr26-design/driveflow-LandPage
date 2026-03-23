import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Fuel, 
  Wrench, 
  Utensils, 
  Navigation, 
  Target, 
  FileText, 
  CheckCircle, 
  ChevronRight,
  ChevronDown,
  Play,
  Car,
  Wallet,
  BarChart3,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Star,
  DollarSign
} from "lucide-react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">

      {/* TOP BAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 px-6 py-4">
        <div className="max-w-xl mx-auto flex items-center justify-center text-center">
          <div className="flex items-center gap-1">
            <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1773792023/Design_sem_nome-removebg-preview_oihelx.png" 
              alt="DriverFlow Logo" 
              className="w-12 h-12 object-contain"
              fetchpriority="high"
            />
            <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 uppercase">DriverFlow</span>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-16 pb-6 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent -z-10 blur-3xl" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl opacity-50 animate-pulse" />

        <div className="max-w-xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] mb-4 tracking-tighter">
              Descubra se você está <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">lucrando de verdade</span> ou só rodando muito
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-5 leading-relaxed font-semibold">
              O DriverFlow mostra quanto realmente sobra no seu bolso depois de combustível, alimentação, aluguel e outros gastos — por dia, semana e mês.
            </p>

            <motion.img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1774174485/ChatGPT_Image_22_de_mar._de_2026_06_57_20_1_ohhmfm.png"
              alt="DriverFlow - Controle de lucro"
              className="max-w-md md:max-w-xl mx-auto mb-8 w-full h-auto rounded-[2.5rem] shadow-2xl"
              fetchpriority="high"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-lg text-slate-400 mb-6 font-medium">
              Veja seu lucro real em segundos, sem precisar fazer conta manual.
            </p>

            <div className="flex flex-col gap-4">
              <motion.button 
                onClick={scrollToPricing}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="w-full py-5 px-8 bg-emerald-500 text-slate-950 font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 mb-3"
              >
                Quero ver meu lucro real
              </motion.button>
            </div>
            
            <p className="text-sm text-slate-500 font-medium">
              Pagamento único • Acesso imediato • Garantia de 7 dias
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MINI VSL */}
      <section className="py-8 px-6 bg-slate-900/60">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-slate-400 mb-6 font-medium">Assista agora e entenda por que faturar não é a mesma coisa que lucrar</p>
          <div className="group relative p-1 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[2.5rem] shadow-2xl shadow-emerald-950/20 mb-8 overflow-hidden">
            <div 
              className="relative aspect-video w-full bg-slate-950 rounded-[2.25rem] border border-slate-800/50 flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                poster="https://res.cloudinary.com/dynjqdxw8/video/upload/f_jpg,q_auto/v1773973696/Mini_vsl_Driver_flow_pronta_1_wnrnri.jpg"
                preload="none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                playsInline
              >
                <source src="https://res.cloudinary.com/dynjqdxw8/video/upload/q_auto,vc_auto/v1773973696/Mini_vsl_Driver_flow_pronta_1_wnrnri.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              <AnimatePresence>
                {!isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-[2px]"
                  >
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 scale-100 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-emerald-500/40">
                      <Play fill="currentColor" size={32} className="ml-1.5" />
                    </div>
                    <p className="mt-4 text-white font-black text-xl tracking-tight drop-shadow-lg">Assista agora</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOCO DE DOR */}
      <section className="py-8 px-6 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white uppercase tracking-tighter">
              Você pode estar rodando muito <br/>
              <span className="text-red-500">e lucrando pouco.</span>
            </h2>
            <div className="space-y-3 text-xl text-slate-400 leading-relaxed font-medium">
              <p>Faturamento alto não significa lucro alto</p>
              <p>Combustível, alimentação e aluguel reduzem o que realmente sobra</p>
              <p>Sem controle, fica fácil confundir correria com resultado</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. BLOCO DE CHOQUE */}
      <section className="py-8 px-6 bg-slate-900/60 relative overflow-hidden">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white uppercase tracking-tighter">
            Uma coisa é o que entra. <br/>
            <span className="text-emerald-400">Outra é o que sobra.</span>
          </h2>
          
          <motion.img 
            src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1773856069/ChatGPT-Image-18-de-mar.-de-2026_-14_45_41-_1__ggsh6z.webp"
            alt="Comparação faturamento vs lucro"
            className="w-full h-auto max-w-lg mx-auto mb-8 rounded-[2.5rem] shadow-2xl border border-slate-800"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          
          <p className="text-xl text-slate-300 font-bold mb-8">
            Pare de olhar só faturamento. Veja quanto realmente ficou no seu bolso.
          </p>
          
          <motion.button 
            onClick={scrollToPricing}
            className="w-full py-4 px-8 bg-emerald-500 text-slate-950 font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
          >
            Quero começar agora
          </motion.button>
        </div>
      </section>

      {/* 5. BLOCO DE REALIDADE */}
      <section className="py-8 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white uppercase tracking-tighter">
              O problema não é trabalhar muito. <br/>
              <span className="text-red-500">É não saber quanto realmente sobrou.</span>
            </h2>
            <div className="space-y-4 text-xl text-slate-400 leading-relaxed font-medium mb-8">
              <p>Sem clareza, qualquer valor parece bom no dia.</p>
              <p>Mas no fim do mês, os custos vão comendo seu resultado sem você perceber.</p>
              <p className="text-2xl font-black text-white">Você roda, roda, roda…</p>
              <p className="text-slate-300">e mesmo assim não sabe com certeza:</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3 text-left">
              {[
                "quanto lucrou de verdade",
                "quanto precisa fazer por dia",
                "se o esforço realmente compensou"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl">
                  <div className="w-3 h-3 bg-red-500 rounded-full shrink-0" />
                  <span className="text-slate-200 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. QUEBRA DE CRENÇA */}
      <section className="py-8 px-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-900">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-center uppercase tracking-tighter">
            Faturamento <span className="text-red-500">não é lucro.</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 mb-10">
            {[
              { icon: <Fuel size={20} />, text: "Combustível", desc: "Tira uma parte todos os dias do seu bolso." },
              { icon: <Utensils size={20} />, text: "Alimentação", desc: "Entra como um gasto invisível que você nem percebe." },
              { icon: <Wrench size={20} />, text: "Manutenção", desc: "Aparece quando você menos espera e limpa seu lucro." },
              { icon: <Car size={20} />, text: "Aluguel do carro", desc: "Pode consumir grande parte do seu ganho real." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-slate-950/60 border border-slate-800/50 rounded-[2rem] hover:border-red-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-100 mb-1">{item.text}</h4>
                  <p className="text-lg text-slate-500 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 bg-red-500/10 border-2 border-red-500/20 rounded-[2.5rem] text-center relative overflow-hidden group shadow-2xl shadow-red-500/5"
          >
            <p className="text-red-400 font-black text-2xl uppercase tracking-tighter relative z-10">
              👉 Se você não acompanha isso… você está trabalhando no escuro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. BLOCO ANTES / DEPOIS */}
      <section className="py-8 px-6 bg-slate-950 relative overflow-hidden text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white uppercase tracking-tighter">
            Como é a realidade de quem <br/>
            <span className="text-emerald-400">dirige no escuro?</span>
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {/* ANTES */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-slate-900/50 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 bg-red-500/10 text-red-500 text-xs font-black uppercase tracking-widest rounded-bl-2xl">
                Antes do DriverFlow
              </div>
              <ul className="space-y-4 mt-4">
                {[
                  "Trabalha o dia inteiro sem saber quanto realmente lucrou",
                  "Vê o faturamento entrar, mas não sabe quanto sobrou",
                  "Define metas no chute",
                  "Perde dinheiro sem perceber",
                  "Depende de anotações soltas ou da memória"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-lg font-medium leading-snug">
                    <span className="text-red-500 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* DEPOIS */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-emerald-500/10"
            >
              <div className="absolute top-0 right-0 p-4 bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-widest rounded-bl-2xl">
                Com o DriverFlow
              </div>
              <ul className="space-y-4 mt-4">
                {[
                  "Vê o lucro real depois de todos os custos",
                  "Sabe exatamente quanto sobrou no dia",
                  "Acompanha metas com clareza",
                  "Entende onde o dinheiro está indo",
                  "Toma decisão com base em números, não em sensação"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-100 text-lg font-bold leading-snug">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. BLOCO DE SOLUÇÃO */}
      <section className="py-8 px-6 relative overflow-hidden bg-emerald-500">
        <div className="max-w-xl mx-auto text-slate-950 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">
              O DriverFlow foi criado para <br/>transformar correria em clareza
            </h2>
            <div className="text-xl md:text-2xl font-bold mb-4 leading-relaxed text-slate-900/80 space-y-2">
              <p>Sem planilha.</p>
              <p>Sem conta manual.</p>
              <p className="font-black text-slate-950">Sem complicação.</p>
            </div>
            <p className="text-lg text-slate-900/80 font-medium">
              Com poucos minutos por dia, você registra seus números e enxerga o que realmente importa: quanto ficou no seu bolso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. BLOCO DE BENEFÍCIOS */}
      <section className="py-8 px-6 bg-slate-950 overflow-hidden relative border-t border-slate-900">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white uppercase tracking-tighter">
            O que você consegue ver <br /><span className="text-emerald-400">com o DriverFlow</span>
          </h2>
          <div className="space-y-3">
            {[
              "Quanto realmente sobrou depois de todos os custos",
              "Quanto combustível, alimentação, aluguel e manutenção estão pesando no seu lucro",
              "Quanto falta para bater sua meta",
              "Quanto você ganha por km rodado",
              "Seus ganhos e gastos organizados em um só lugar",
              "Se o dia valeu a pena financeiramente ou não"
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-center p-6 bg-slate-900/50 border border-slate-800 rounded-[2rem] group hover:border-emerald-500/30 transition-all shadow-lg"
              >
                <div className="bg-emerald-500 rounded-xl p-1.5 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <CheckCircle size={18} className="text-slate-950" />
                </div>
                <span className="text-slate-300 text-lg font-bold group-hover:text-white transition-colors leading-tight">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BLOCO DE PROVA */}
      <section className="py-6 px-6 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-black mb-10 text-white text-center">Veja na prática como o DriverFlow ajuda no seu dia a dia</h2>
          
          <div className="space-y-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left p-6 bg-slate-900/50 border border-slate-800 rounded-[2rem]"
            >
              <h3 className="text-xl font-black text-white mb-2">Lucro líquido + meta</h3>
              <p className="text-slate-400 font-medium">Veja quanto realmente sobrou no mês e quanto falta para atingir sua meta.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-left p-6 bg-slate-900/50 border border-slate-800 rounded-[2rem]"
            >
              <h3 className="text-xl font-black text-white mb-2">Ganhos x gastos / Produtividade</h3>
              <p className="text-slate-400 font-medium">Entenda seus ganhos, gastos e indicadores de produtividade de forma visual.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-left p-6 bg-slate-900/50 border border-slate-800 rounded-[2rem]"
            >
              <h3 className="text-xl font-black text-white mb-2">Lançamentos do dia</h3>
              <p className="text-slate-400 font-medium">Registre cada dia e veja o lucro líquido de cada operação.</p>
            </motion.div>
          </div>
          
          <motion.img 
            src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773824346/Gemini_Generated_Image_wh36aiwh36aiwh36-_1__hi7qhr.webp"
            alt="Dashboard DriverFlow"
            className="w-full h-auto max-w-xl mx-auto rounded-[2.5rem] shadow-2xl border border-slate-800 shadow-emerald-500/10"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* 9. SIMPLICIDADE */}
      <section className="py-8 px-6 bg-slate-950 overflow-hidden relative border-t border-slate-900">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">Simples como deve ser</h2>
            <div className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-medium space-y-2">
              <p>Você só precisa de poucos minutos por dia.</p>
              <p className="font-black text-emerald-400 uppercase tracking-tight">
                Sem planilhas &nbsp;·&nbsp; Sem complicação &nbsp;·&nbsp; Sem perder tempo
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. BLOCO DE EXEMPLO REAL */}
      <section className="py-8 px-6 bg-slate-900/40 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white uppercase tracking-tighter">
            Exemplo de um dia registrado
          </h2>
          
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-[3rem] shadow-2xl mb-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-900/50 rounded-2xl">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Ganhos brutos</p>
                <p className="text-2xl font-black text-white">R$ 504,00</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Combustível</p>
                <p className="text-2xl font-black text-red-400">- R$ 80,00</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Alimentação</p>
                <p className="text-2xl font-black text-red-400">- R$ 7,00</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl">
                <p className="text-slate-500 text-sm font-medium uppercase mb-1">Aluguel</p>
                <p className="text-2xl font-black text-red-400">- R$ 124,43</p>
              </div>
            </div>
            <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl">
              <p className="text-slate-500 text-sm font-medium uppercase mb-1">Lucro líquido</p>
              <p className="text-4xl font-black text-emerald-400">R$ 292,57</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
              <p className="text-red-400 font-black text-lg mb-2">Sem controle</p>
              <p className="text-slate-400 font-medium">Entrou R$ 504 e parece que o dia foi ótimo.</p>
            </div>
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <p className="text-emerald-400 font-black text-lg mb-2">Com o DriverFlow</p>
              <p className="text-slate-400 font-medium">Você vê que sobraram R$ 292,57 líquidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. BLOCO DE DEPOIMENTO */}
      <section className="py-8 px-6 relative bg-slate-950 border-t border-slate-900">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">Quem começa a acompanhar de verdade, não quer mais voltar para o escuro</h2>
            <div className="flex justify-center gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              "https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1774053151/depoimento_1_drive_flow_jr6bpc.jpg",
              "https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1774053151/depoimento_2_drive_flow_oaihoy.jpg",
              "https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1774053150/depoimento_3_drive_flow_mfvpr4.jpg"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
              >
                <img 
                  src={src} 
                  alt={`Depoimento de motorista parceiro ${i + 1}`} 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
))}
          </div>
        </div>
      </section>

      {/* 13. OFERTA */}
      <section id="pricing" className="py-8 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">
            O valor que você pode recuperar em clareza <br/><span className="text-emerald-400">começa já no primeiro dia.</span>
          </h2>
          <p className="text-slate-400 mb-12 text-xl font-medium">porque o que destrói seu resultado não é só ganhar menos. É continuar rodando sem saber o que realmente está sobrando.</p>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative p-10 bg-slate-950 border-2 border-emerald-500 rounded-[3rem] shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col group overflow-hidden max-w-lg mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase tracking-widest rounded-full mb-4 border border-emerald-500/20 w-fit mx-auto">
              Oferta especial
            </span>
            
            <div className="mb-8">
              <h3 className="text-xl font-black mb-4 text-emerald-400 uppercase tracking-widest text-sm">Acesso completo ao DriverFlow</h3>
              <div className="flex items-baseline gap-1 mb-2 justify-center">
                <span className="text-2xl font-bold text-slate-500">R$</span>
                <span className="text-6xl font-black text-white tracking-tighter">19,90</span>
                <span className="text-slate-500 font-bold ml-1 text-sm uppercase">Pagamento Único</span>
              </div>
              <p className="text-slate-400 font-medium">Você recebe acesso vitalício.</p>
            </div>
            
            <ul className="space-y-2.5 mb-8 text-left">
              {[
                "Acesso completo ao app",
                "Dashboard de lucro real",
                "Registro de ganhos e gastos",
                "Controle de combustível, alimentação, aluguel e manutenção",
                "Acompanhamento de metas",
                "Visão por dia, semana e mês",
                "Relatórios de desempenho",
                "Acesso imediato"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <div className="bg-emerald-500 rounded-full p-1 mt-0.5 shadow-lg shadow-emerald-500/20">
                    <CheckCircle size={14} className="text-slate-950" />
                  </div>
                  <span className="text-slate-100 font-bold">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.a 
              href="https://pay.cakto.com.br/hrev4wd"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="block text-center w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xl rounded-2xl transition-all shadow-xl shadow-emerald-500/20"
            >
              Quero começar a controlar meus ganhos agora
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 14. GARANTIA */}
      <section className="py-8 px-6 bg-slate-900/50 overflow-hidden relative border-t border-slate-900">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-[15.6rem] h-[15.6rem] mb-5 flex items-center justify-center p-4 bg-white/5 rounded-full border border-white/5 shadow-2xl"
          >
            <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1773801684/ChatGPT_Image_17_de_mar._de_2026__22_41_10-removebg-preview_cau976.webp" 
              alt="Selo de Garantia" 
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white uppercase tracking-tighter text-center">Teste sem risco por 7 dias</h2>
          <div className="text-slate-400 leading-relaxed text-xl text-center space-y-2 font-medium mb-6">
            <p>Use o DriverFlow e veja seus números com mais clareza.</p>
            <p className="text-emerald-400 font-black text-2xl uppercase tracking-tight">
              Se dentro de 7 dias você sentir que o app não te ajudou a entender melhor seu lucro real, devolvemos seu dinheiro.
            </p>
            <p className="text-slate-500 font-medium">Risco zero para testar.</p>
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-8 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter text-center">Dúvidas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Preciso entender de finanças?", a: "Não. O app foi feito para facilitar sua rotina e mostrar seus números de forma simples." },
              { q: "Tenho que pagar todo mês?", a: "Não. O pagamento é único." },
              { q: "Funciona para Uber e 99?", a: "Sim. Você pode registrar sua operação independentemente da plataforma." },
              { q: "Preciso usar todos os dias?", a: "Para ter clareza real, o ideal é registrar sua rotina com frequência. O processo é simples e rápido." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-900/50 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-emerald-500/30 transition-all shadow-lg">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-black text-slate-100 pr-4 uppercase tracking-tight">{faq.q}</span>
                  <div className="bg-emerald-500/10 p-2 rounded-xl group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} className="text-emerald-500" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed text-left font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 16. WHATSAPP */}
      <section className="py-8 px-6 bg-emerald-500 relative overflow-hidden text-center">
        <div className="max-w-xl mx-auto relative z-10 text-slate-950">
          <div className="w-16 h-16 bg-slate-950 text-emerald-500 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">Quer falar com a gente?</h2>
          <p className="text-xl md:text-2xl text-slate-900/80 mb-10 font-bold leading-relaxed">
            Se ainda tem alguma dúvida, mande um "Oi" no nosso WhatsApp que te ajudamos.
          </p>
          <motion.button 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            onClick={() => window.open('https://wa.me/5531992440099?text=Olá,%20quero%20entender%20melhor%20como%20o%20DriverFlow%20pode%20me%20ajudar%20a%20saber%20quanto%20realmente%20estou%20lucrando.', '_blank')}
            className="w-full py-6 px-8 bg-slate-950 text-white font-black text-2xl rounded-[2rem] hover:brightness-110 transition-all shadow-2xl flex items-center justify-center gap-3"
          >
            Chamar no WhatsApp
          </motion.button>
        </div>
      </section>

      {/* 17. FECHAMENTO */}
      <section className="py-8 px-6 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] text-white uppercase tracking-tighter">
            Pare de dirigir no <span className="text-red-500">escuro.</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-12 text-slate-400 max-w-lg mx-auto leading-relaxed">
            Descubra agora quanto realmente sobra no seu bolso e comece a tomar decisões com mais clareza.
          </p>
          <motion.button 
            onClick={scrollToPricing}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="w-full py-7 px-12 bg-emerald-500 text-slate-950 font-black text-2xl rounded-[2.5rem] hover:bg-emerald-400 transition-all shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] shadow-emerald-500/30"
          >
            Quero ver meu lucro real agora
          </motion.button>
          <p className="text-sm text-slate-500 font-medium mt-6">
            Pagamento único • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-slate-900 bg-slate-950 text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1 mb-6">
            <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1773792023/Design_sem_nome-removebg-preview_oihelx.png" 
              alt="DriverFlow Logo" 
              className="w-10 h-10 object-contain"
              loading="lazy"
              decoding="async"
            />
            <span className="font-black text-2xl tracking-tighter text-white">DriverFlow</span>
          </div>
          <p className="text-sm text-slate-600 mb-8 font-medium leading-relaxed">
            © 2026 DriverFlow. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-8 text-xs text-slate-500 font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-emerald-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
