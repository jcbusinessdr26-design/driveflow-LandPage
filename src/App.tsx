import { motion } from "motion/react";
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
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773792023/Design_sem_nome-removebg-preview_oihelx.png" 
              alt="DriverFlow Logo" 
              className="w-12 h-12 object-contain"
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
              Descubra quanto realmente<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-200">sobra no seu bolso</span> depois de um dia rodando.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed font-semibold">
              Pare de trabalhar no escuro. Veja seu lucro real considerando <span className="text-emerald-400">todos os custos.</span>
            </p>

            <motion.img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773824346/Gemini_Generated_Image_wh36aiwh36aiwh36-_1__hi7qhr.webp"
              alt="Motorista usando o DriverFlow"
              className="max-w-md md:max-w-xl mx-auto mb-8 w-full h-auto rounded-[2.5rem] shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <div className="flex flex-col gap-4">
              <motion.button 
                onClick={scrollToPricing}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full py-5 px-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-xl rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/25 group mb-8"
              >
                Começar agora <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VSL */}
      <section className="py-10 px-6 bg-slate-900/60">
        <div className="max-w-xl mx-auto">
          {/* Video placeholder */}
          <div className="group relative p-1 bg-gradient-to-b from-slate-800 to-slate-950 rounded-[2.5rem] shadow-2xl shadow-emerald-950/20 mb-8">
            <div className="relative aspect-video w-full bg-slate-900 rounded-[2.25rem] border border-slate-800/50 flex items-center justify-center cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/40 to-emerald-500/10 z-0" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-slate-950 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-emerald-500/30">
                  <Play fill="currentColor" size={32} className="ml-1.5" />
                </div>
                <p className="text-slate-300 font-bold text-lg">Assista antes de decidir</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=800" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10 group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUEBRA DE CRENÇA */}
      <section className="py-8 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-center">
            Faturamento <span className="text-red-500">não é lucro.</span>
          </h2>

          <p className="text-slate-400 text-center text-xl leading-relaxed mb-4">
            Você pode fazer <span className="text-white font-bold">R$300 no dia…</span> e ainda assim ganhar muito menos do que imagina.
          </p>
          <p className="text-slate-400 text-center text-xl leading-relaxed mb-8">
            Porque os custos não aparecem no aplicativo:
          </p>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Fuel size={20} />, text: "Combustível", desc: "O maior vilão do seu bolso." },
              { icon: <Wrench size={20} />, text: "Manutenção e desgaste", desc: "Seu carro precisa estar pronto para o trabalho." },
              { icon: <Utensils size={20} />, text: "Alimentação", desc: "Durante as longas horas de trabalho." },
              { icon: <Car size={20} />, text: "Desgaste do carro", desc: "Vida útil reduzida a cada km rodado." },
              { icon: <Navigation size={20} />, text: "Aluguel", desc: "Quem aluga precisa bater a meta antes de lucrar." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-slate-950/40 border border-slate-800/50 rounded-[1.5rem] hover:border-red-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">{item.text}</h4>
                  <p className="text-base text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-red-500/5 border border-red-500/20 rounded-[2rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-red-400 font-black text-xl uppercase tracking-tighter relative z-10">
              👉 No final… o que sobra é outra realidade.
            </p>
          </div>
        </div>
      </section>

      {/* 4. AGITAÇÃO DA DOR */}
      <section className="py-8 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
            Você trabalha 10, 12 horas por dia…<br/>
            Enfrenta trânsito, corridas ruins, desgaste…
          </h2>
          <p className="text-slate-400 leading-relaxed text-xl mb-6">
            E no final do mês ainda aperta pra pagar as contas.
          </p>
          <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-[2rem] mb-6">
            <p className="text-red-400 font-black text-2xl mb-2">👉 A verdade?</p>
            <p className="text-slate-300 text-xl font-semibold">
              Sem controle…<br/>
              <span className="text-red-400 font-black">você pode estar pagando pra trabalhar.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. MECANISMO */}
      <section className="py-10 px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
            O problema não é<br/>
            <span className="text-emerald-400">quanto você faz.</span>
          </h2>
          <p className="text-2xl md:text-3xl font-black text-white mb-6">
            É não enxergar o seu <span className="text-emerald-400">lucro real</span> por dia e por KM.
          </p>
          <p className="text-slate-400 leading-relaxed text-xl">
            Sem ver seus números de verdade…<br/>
            <span className="text-slate-200 font-bold">você toma decisões no escuro.</span>
          </p>
        </div>
      </section>

      {/* 6. SOLUÇÃO */}
      <section className="py-10 px-6 relative overflow-hidden bg-emerald-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-slate-950 text-center relative">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight">
            DriverFlow: sua gestão<br/>na palma da mão
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-6 leading-relaxed text-slate-950">
            O aplicativo que mostra exatamente:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Quanto entrou", icon: <TrendingUp size={24} />, color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { label: "Quanto saiu", icon: <DollarSign size={24} />, color: "text-red-400", bg: "bg-red-500/10" },
              { label: "Quanto sobrou", icon: <CheckCircle size={24} />, color: "text-blue-400", bg: "bg-blue-500/10" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-950 p-6 rounded-[2rem] shadow-xl border border-white/5 flex flex-col items-center group transition-all"
              >
                <div className={`${item.bg} ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="text-white font-black text-xl tracking-tight leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xl font-black leading-tight text-slate-950">
            Sem planilhas &nbsp;·&nbsp; Sem complicação &nbsp;·&nbsp; Sem achismo
          </p>
        </div>
      </section>

      {/* 7. BENEFÍCIOS */}
      <section className="py-8 px-6 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-white">Dirija com dados, <br /><span className="text-emerald-400">não com suposição.</span></h2>
          <div className="space-y-6">
            {[
              "Saiba seu lucro real todos os dias.",
              "Descubra quanto custa cada KM rodado.",
              "Controle total dos seus gastos.",
              "Veja se o dia realmente valeu a pena.",
              "Defina metas e acompanhe em tempo real.",
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-center p-5 bg-slate-950/50 border border-slate-800 rounded-3xl group hover:border-emerald-500/30 transition-all"
              >
                <div className="bg-emerald-500 rounded-xl p-1 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <CheckCircle size={14} className="text-slate-950" />
                </div>
                <span className="text-slate-300 text-lg font-bold group-hover:text-white transition-colors">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROVA VISUAL - APP DEMO */}
      <section className="py-10 px-6 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-black mb-10 text-white text-center">Veja como é na prática</h2>
          <motion.img 
            src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773856069/ChatGPT-Image-18-de-mar.-de-2026_-14_45_41-_1__ggsh6z.webp"
            alt="Dashboard DriverFlow"
            className="w-full h-auto max-w-xl mx-auto rounded-[2.5rem] shadow-2xl border border-slate-800 shadow-emerald-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* 9. SIMPLICIDADE */}
      <section className="py-10 px-6 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white text-center">Simples como deve ser</h2>
          <p className="text-slate-400 mb-8 text-xl leading-relaxed text-center">
            Você só precisa de <span className="text-emerald-400 font-bold">2 minutos</span> por dia.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <FileText size={20}/>, text: "Sem planilhas complicadas" },
              { icon: <TrendingUp size={20}/>, text: "Sem termos técnicos" },
              { icon: <Wallet size={20}/>, text: "Sem complicação" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-5 bg-slate-950/80 border border-slate-800 rounded-[2rem] flex items-center gap-5 group hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-slate-300 font-bold text-lg leading-tight group-hover:text-white transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PROVA SOCIAL */}
      <section className="py-10 px-6 relative">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">Quem usa, não volta atrás</h2>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-slate-500 text-lg font-medium">Prints reais de conversas com nossos usuários.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {[
              { id: 1, name: "Ricardo S.", city: "São Paulo", comment: "Achei que ganhava bem… hoje vejo o que realmente sobra. Mudou tudo.", seed: "driver1" },
              { id: 2, name: "Ana Paula", city: "Rio de Janeiro", comment: "Só no combustível já economizei muito. O app me abriu os olhos.", seed: "driver2" },
              { id: 3, name: "Marcos V.", city: "Curitiba", comment: "Agora sei exatamente quanto preciso fazer por dia pra bater minha meta.", seed: "driver3" }
            ].map((testi, i) => (
              <motion.div 
                key={testi.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group p-6 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/20">
                    <img src={`https://i.pravatar.cc/150?u=${testi.seed}`} alt={testi.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-tight">{testi.name}</h4>
                    <p className="text-sm text-emerald-500 font-bold uppercase tracking-widest">{testi.city}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg italic leading-relaxed">"{testi.comment}"</p>
                <div className="absolute top-6 right-8 text-emerald-500/10">
                  <FileText size={48} strokeWidth={3} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PARA QUEM É */}
      <section className="py-10 px-6 bg-slate-900/40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center text-white">Para quem é o <br /><span className="text-emerald-400">DriverFlow?</span></h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              "Motoristas que trabalham todos os dias.",
              "Quem paga aluguel de carro e precisa bater a meta.",
              "Quem quer parar de trabalhar no escuro.",
              "Quem quer mais controle financeiro de verdade.",
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="p-5 bg-slate-950/80 border border-slate-800 rounded-[2rem] flex items-center gap-5 group hover:border-emerald-500/30 transition-all"
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform" />
                <span className="text-slate-300 font-bold text-lg leading-tight group-hover:text-white transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. OFERTA */}
      <section id="pricing" className="py-10 px-6 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight text-center">Comece agora.</h2>
            <p className="text-slate-400 text-xl text-center">O investimento que se paga no <span className="text-emerald-400 font-bold">primeiro abastecimento.</span></p>
          </div>
          
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
                  <span className="text-slate-500 font-bold">/mês</span>
                </div>
                <p className="text-slate-400 font-medium">Controle completo.</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Acesso completo ao DriverFlow",
                  "Dashboard de lucro em tempo real",
                  "Registro de gastos e ganhos",
                  "Controle de combustível e manutenção",
                  "Monitoramento de km rodados",
                  "Relatórios de desempenho",
                  "Cancele quando quiser"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <div className="bg-emerald-500/10 rounded-full p-1 mt-0.5">
                      <CheckCircle size={14} className="text-emerald-500" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => window.open('https://pay.cakto.com.br/hrev4wd', '_blank')}
                className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/20 font-black rounded-2xl transition-all shadow-xl"
              >
                👉 Assinar Plano
              </motion.button>
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
                  <span className="text-slate-500 font-bold">/mês</span>
                </div>
                <p className="text-slate-400 font-medium italic text-left">A experiência completa de gestão.</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {[
                  "Tudo do plano Básico",
                  "Metas de lucro avançadas",
                  "Relatórios mensais completos",
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
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => window.open('https://pay.cakto.com.br/nqb9269', '_blank')}
                className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xl rounded-2xl transition-all shadow-xl shadow-emerald-500/20"
              >
                👉 Assinar Plano
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 13. GARANTIA */}
      <section className="pt-2 pb-10 px-6 bg-slate-900 overflow-hidden relative border-t border-slate-800">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-96 h-64 -mt-6 mb-4 overflow-visible flex items-center justify-center"
          >
            <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773801684/ChatGPT_Image_17_de_mar._de_2026__22_41_10-removebg-preview_cau976.webp" 
              alt="Selo de Garantia" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <h2 className="text-3xl font-black mb-4 text-white tracking-tight text-center">Teste sem risco por 7 dias</h2>
          <p className="text-slate-400 leading-relaxed text-xl text-center">
            Se você não tiver mais clareza sobre seus números…
          </p>
          <p className="text-emerald-400 font-black text-2xl mt-3">
            👉 devolvemos 100% do seu dinheiro.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-6 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
             <div className="flex items-center gap-2 text-emerald-500 mb-4 justify-center">
                <HelpCircle size={20} />
                <span className="font-black uppercase tracking-[0.2em] text-sm text-center">Dúvidas</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-center">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "1. Preciso entender de finanças para usar?", a: "Não. O DriverFlow foi feito para ser simples. Você só registra seus ganhos e gastos, e o app calcula tudo automaticamente." },
              { q: "2. Quanto tempo leva por dia?", a: "Menos de 2 minutos. É só lançar os valores do dia e o app organiza tudo pra você." },
              { q: "3. Funciona para qualquer motorista de aplicativo?", a: "Sim. Serve para quem trabalha com qualquer plataforma ou até mais de uma ao mesmo tempo." },
              { q: "4. Eu realmente vou saber quanto estou lucrando?", a: "Sim. O app considera todos os custos e mostra exatamente quanto sobra no seu bolso." },
              { q: "5. Posso cancelar quando quiser?", a: "Sim. Sem fidelidade. Você pode cancelar a qualquer momento." },
              { q: "6. E se eu não gostar?", a: "Você tem 7 dias de garantia. Se não fizer sentido pra você, devolvemos 100% do valor." },
              { q: "7. Preciso usar todos os dias?", a: "Quanto mais você usa, mais precisão você tem. Mas o ideal é registrar diariamente para ter controle real." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-bold text-slate-100 pr-4">{faq.q}</span>
                  <ChevronDown size={20} className="text-emerald-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed text-left">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] text-emerald-500 uppercase tracking-tight text-center">
            Pare de dirigir sem saber seu lucro real.
          </h2>
          <p className="text-2xl font-bold mb-10 text-emerald-400/80 max-w-lg mx-auto leading-relaxed text-center">
            Junte-se a centenas de motoristas que já profissionalizaram suas finanças com o DriverFlow.
          </p>
          <motion.button 
            onClick={scrollToPricing}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full py-6 px-12 bg-emerald-500 text-slate-950 font-black text-2xl rounded-[2.5rem] hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20"
          >
            Começar agora
          </motion.button>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-500 bg-slate-800 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/100?u=v${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Acesso imediato</p>
          </div>
        </div>
      </section>

      {/* WHATSAPP SECTION */}
      <section className="py-16 px-6 bg-slate-900 relative overflow-hidden text-center border-t border-slate-800">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-tight">Ainda com dúvida?</h2>
          <p className="text-xl text-slate-400 mb-8 font-medium">
            Fale direto com a gente no WhatsApp e entenda se o DriverFlow faz sentido para você.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => window.open('https://wa.me/5531992440099?text=Olá,%20quero%20entender%20melhor%20como%20o%20DriverFlow%20pode%20me%20ajudar%20a%20saber%20quanto%20realmente%20estou%20lucrando.', '_blank')}
            className="w-full py-6 px-8 bg-[#25D366] text-white font-black text-2xl rounded-[2.5rem] hover:brightness-110 transition-all shadow-2xl shadow-emerald-500/10 flex items-center justify-center gap-3"
          >
            <MessageSquare size={28} />
            Tirar dúvidas no WhatsApp
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-slate-900 bg-slate-950 text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1 mb-6">
            <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773792023/Design_sem_nome-removebg-preview_oihelx.png" 
              alt="DriverFlow Logo" 
              className="w-10 h-10 object-contain"
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
