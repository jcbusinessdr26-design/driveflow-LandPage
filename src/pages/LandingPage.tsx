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
              Descubra quanto você <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">realmente lucra</span> dirigindo.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-5 leading-relaxed font-semibold">
              O aplicativo de gestão financeira criado para motoristas de aplicativo que querem <span className="text-emerald-400">parar de trabalhar no escuro</span> e finalmente ter controle dos seus ganhos e gastos.
            </p>

            <motion.img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1773824346/Gemini_Generated_Image_wh36aiwh36aiwh36-_1__hi7qhr.webp"
              alt="Motorista usando o DriverFlow"
              className="max-w-md md:max-w-xl mx-auto mb-8 w-full h-auto rounded-[2.5rem] shadow-2xl"
              fetchpriority="high"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

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
                className="w-full py-5 px-8 bg-emerald-500 text-slate-950 font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 mb-8"
              >
                Quero saber quanto realmente estou lucrando
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VSL */}
      <section className="py-8 px-6 bg-slate-900/60">
        <div className="max-w-xl mx-auto text-center">
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

      {/* 3. BLOCO DE IMPACTO */}
      <section className="py-8 px-6 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white uppercase tracking-tighter">
              Você não precisa trabalhar mais.<br/>
              <span className="text-red-500">Precisa parar de perder dinheiro sem perceber.</span>
            </h2>
            <div className="space-y-3 text-xl text-slate-400 leading-relaxed font-medium">
              <p>O problema não é rodar o dia inteiro.</p>
              <p>O problema é não saber quanto realmente sobra no final.</p>
              <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] mt-6">
                <p className="text-slate-200">
                  Sem controle, qualquer valor parece lucro…<br/>
                  <span className="text-red-400 font-bold">mas os custos vão comendo tudo.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. QUEBRA DE CRENÇA */}
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

      {/* 5. ANTES VS DEPOIS */}
      <section className="py-8 px-6 bg-slate-950 relative overflow-hidden text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white uppercase tracking-tighter">
            Como é a sua <span className="text-emerald-400">realidade</span> hoje?
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {/* ANTES */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 bg-slate-900/50 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 bg-red-500/10 text-red-500 text-xs font-black uppercase tracking-widest rounded-bl-2xl">
                Antes (Sem DriverFlow)
              </div>
              <ul className="space-y-4 mt-4">
                {[
                  "Trabalha o dia inteiro sem saber quanto lucrou",
                  "Acha que ganhou bem… mas o dinheiro some",
                  "Não sabe quanto precisa fazer por dia",
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
                Depois (Com DriverFlow)
              </div>
              <ul className="space-y-4 mt-4">
                {[
                  "Sabe exatamente quanto sobrou no final do dia",
                  "Controla todos os custos",
                  "Trabalha com meta e estratégia",
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

      {/* 6. APRESENTAÇÃO DO PRODUTO */}
      <section className="py-8 px-6 relative overflow-hidden bg-emerald-500">
        <div className="max-w-xl mx-auto text-slate-950 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">
              DriverFlow: controle total <br/>na palma da sua mão
            </h2>
            <div className="text-xl md:text-2xl font-bold mb-8 leading-relaxed text-slate-900/80 space-y-2">
              <p>O DriverFlow foi criado para transformar seus dados em clareza.</p>
              <p className="font-black text-slate-950">Sem planilhas. Sem conta manual. Sem complicação.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. BENEFÍCIOS */}
      <section className="py-8 px-6 bg-slate-950 overflow-hidden relative border-t border-slate-900">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white uppercase tracking-tighter">
            Trabalhe com clareza, <br /><span className="text-emerald-400">lucro e estratégia.</span>
          </h2>
          <div className="space-y-3">
            {[
              "Veja quanto realmente sobrou depois de todos os custos",
              "Entenda quanto o combustível está impactando seu lucro",
              "Saiba exatamente quanto falta para bater sua meta",
              "Descubra quanto você ganha por km rodado",
              "Tenha todos os seus gastos organizados em um só lugar",
              "Veja rapidamente se o dia valeu a pena financeiramente",
              "Pare de depender de anotações soltas ou planilhas confusas",
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

      {/* 8. PROVA VISUAL - APP DEMO */}
      <section className="py-6 px-6 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-black mb-10 text-white text-center">Veja como é na prática</h2>
          <motion.img 
            src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto/v1773856069/ChatGPT-Image-18-de-mar.-de-2026_-14_45_41-_1__ggsh6z.webp"
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

      {/* 10. PROVA SOCIAL */}
      <section className="py-8 px-6 relative bg-slate-950 border-t border-slate-900">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">Quem usa, não volta atrás</h2>
            <div className="flex justify-center gap-1.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-slate-500 text-xl font-medium">Histórias reais de quem profissionalizou sua gestão.</p>
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

      {/* 11. PARA QUEM É */}
      <section className="py-8 px-6 bg-slate-900/40 relative border-t border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-center text-white uppercase tracking-tighter">Para quem é o <br /><span className="text-emerald-400">DriverFlow?</span></h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Motoristas com carro próprio",
              "Motoristas com carro alugado",
              "Quem está começando no transporte por aplicativo",
              "Quem já roda há tempo e quer melhorar seu lucro real",
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="p-6 bg-slate-950/80 border border-slate-800 rounded-[2rem] flex items-center gap-6 group hover:border-emerald-500/30 transition-all"
              >
                <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
                <span className="text-slate-200 font-black text-xl leading-tight group-hover:text-white transition-colors uppercase tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BÔNUS */}
      <section className="py-8 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-3 border border-emerald-500/20">
              Presente para você
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Bônus Exclusivos</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Bônus 1: Controle de Metas Inteligente", desc: "Defina quanto quer ganhar e o app te diz exatamente o que falta." },
              { title: "Bônus 2: Relatórios Automáticos", desc: "Veja seu desempenho semanal e mensal sem precisar calcular nada." }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group shadow-xl"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all" />
                <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{bonus.title}</h4>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">{bonus.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-xs">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   Incluso no acesso
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. OFERTA */}
      <section id="pricing" className="py-8 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">
            O valor que você recupera no <br/><span className="text-emerald-400">primeiro dia de uso.</span>
          </h2>
          <p className="text-slate-400 mb-12 text-xl font-medium">Escolha o plano que faz mais sentido para o seu momento.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative p-10 bg-slate-950 border border-slate-800 rounded-[3rem] flex flex-col group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="mb-8">
                <h3 className="text-xl font-black mb-4 text-slate-100 uppercase tracking-widest text-sm">Plano Básico</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-bold text-slate-500">R$</span>
                  <span className="text-6xl font-black text-white tracking-tighter">19,90</span>
                  <span className="text-slate-500 font-bold ml-1 text-sm uppercase">Pagamento Único</span>
                </div>
                <p className="text-slate-400 font-medium text-left">Controle completo.</p>
              </div>
              
              <ul className="space-y-2.5 mb-8 flex-grow text-left">
                {[
                  "Acesso completo ao DriverFlow",
                  "Dashboard de lucro em tempo real",
                  "Registro de gastos e ganhos",
                  "Controle de combustível e manutenção",
                  "Monitoramento de km rodados",
                  "Relatórios de desempenho",
                  "Acesso Vitalício"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <div className="bg-emerald-500/10 rounded-full p-1 mt-0.5">
                      <CheckCircle size={14} className="text-emerald-500" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
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
                className="block text-center w-full py-5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/20 font-black rounded-2xl transition-all shadow-xl"
              >
                Quero começar a controlar meus ganhos agora
              </motion.a>
            </motion.div>

            {/* Plano Premium */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative pt-14 pb-10 px-10 bg-slate-950 border-2 border-emerald-500 rounded-[3rem] shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col z-10 group overflow-hidden"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-emerald-500 text-slate-950 text-[10px] font-black rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">
                🚀 MAIS ESCOLHIDO
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="mb-8">
                <h3 className="text-xl font-black mb-4 text-emerald-400 uppercase tracking-widest text-sm">Plano Premium</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-bold text-slate-500">R$</span>
                  <span className="text-6xl font-black text-emerald-400 tracking-tighter">27,90</span>
                  <span className="text-slate-500 font-bold ml-1 text-sm uppercase">Pagamento Único</span>
                </div>
                <p className="text-slate-400 font-medium italic text-left">A experiência completa de gestão.</p>
              </div>
              
              <ul className="space-y-2.5 mb-8 flex-grow text-left">
                {[
                  "Tudo do plano Básico",
                  "Metas de lucro avançadas",
                  "Relatórios completos",
                  "Dicas inteligentes de economia",
                  "Suporte prioritário via WhatsApp",
                  "Acesso antecipado a novas funções",
                  "Comunidade VIP de motoristas"
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
                href="https://pay.cakto.com.br/nqb9269"
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
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white uppercase tracking-tighter text-center">Risco zero por 7 dias</h2>
          <div className="text-slate-400 leading-relaxed text-xl text-center space-y-2 font-medium mb-6">
            <p>Se você não tiver mais clareza sobre seus números em uma semana…</p>
            <p className="text-emerald-400 font-black text-2xl uppercase tracking-tight">
              A gente devolve o seu dinheiro.
            </p>
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
              { q: "Preciso entender de finanças?", a: "Absolutamente não. O app foi feito para quem tem rotina corrida. É só lançar os valores e ele faz tudo." },
              { q: "Tenho que pagar todo mês?", a: "Não. O acesso é único e vitalício. Você paga uma vez e usa para sempre." },
              { q: "Funciona se eu usar Uber e 99?", a: "Sim! Você pode centralizar todos os seus ganhos de diferentes apps no DriverFlow." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia total. Se não gostar, devolvemos 100% sem burocracia." },
              { q: "Preciso usar todos os dias?", a: "Quanto mais você usa, mais precisão você tem. Mas o ideal é registrar diariamente para ter controle real." }
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
            Descubra agora quanto você realmente ganha e profissionalize sua jornada.
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
            Quero saber quanto realmente estou lucrando
          </motion.button>
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
