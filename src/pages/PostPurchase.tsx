import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function PostPurchase() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      // Cria a conta do usuário
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          }
        }
      });

      if (error) throw error;

      // Cria a sessão com o insert de success
      setStatus("success");
      
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Erro ao criar acesso. Verifique seus dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-slate-50 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] opacity-50 -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773792023/Design_sem_nome-removebg-preview_oihelx.png" 
              alt="DriverFlow Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="font-black text-2xl tracking-tighter text-white">DriverFlow</span>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-center w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full mb-6 mx-auto border border-emerald-500/20">
            <CheckCircle size={32} />
          </div>

          <h1 className="text-3xl font-black text-center mb-3 tracking-tight">Compra aprovada com sucesso</h1>
          
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 mb-8 text-center">
            <p className="text-emerald-400 font-semibold text-sm">
              Agora crie seu acesso usando o <span className="text-emerald-300 font-black">mesmo email</span> informado na compra da Cakto.
            </p>
          </div>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-6">
                 <p className="text-slate-300 mb-2">Seu acesso foi criado com sucesso!</p>
                 <p className="text-slate-400 text-sm">Acesse o aplicativo pelo seu celular ou computador.</p>
              </div>
              <a 
                href="https://driverflow.site" // Adaptar para a URL real do app principal
                className="block w-full py-4 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 transition-all shadow-lg"
              >
                Ir para o Aplicativo
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email da Compra</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all outline-none"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Criar Senha</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>

              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex items-start gap-2 text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-sm font-medium"
                >
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 mt-4 bg-emerald-500 text-slate-950 font-black text-lg rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50 flex justify-center items-center"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Criar acesso"}
              </button>
            </form>
          )}

        </div>
      </motion.div>
    </div>
  );
}
