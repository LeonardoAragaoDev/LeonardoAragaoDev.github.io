import { Produto } from "@/interfaces";
import { ArrowLeft, CheckCircle, CreditCard, Download } from "lucide-react";
import React from "react";

export const DetalheProduto = ({
  item,
  navigate,
}: {
  item: Produto;
  navigate: (path: string) => void;
}) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto pt-8">
    <button
      onClick={() => navigate("/store")}
      className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 mb-8 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" /> Voltar para os códigos
    </button>

    <div className="flex flex-col lg:flex-row gap-12">
      {/* Coluna Principal */}
      <div className="flex-1 space-y-8">
        <div>
          <div
            className={`inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full ${
              item.isFree
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
            }`}
          >
            {item.type === "component"
              ? "Componente Gratuito"
              : "Produto Premium"}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
            {item.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/50">
          <div>
            <div className="text-zinc-400 text-sm mb-1">Investimento</div>
            <div className="text-4xl font-bold text-zinc-100">
              {item.isFree
                ? "Gratuito"
                : `R$ ${item.price.toFixed(2).replace(".", ",")}`}
            </div>
          </div>

          <button
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto justify-center ${
              item.isFree
                ? "bg-emerald-500 hover:bg-emerald-600 text-zinc-950 shadow-emerald-500/25 shadow-lg"
                : "bg-zinc-100 hover:bg-white text-zinc-900 shadow-white/20 shadow-lg"
            }`}
          >
            {item.isFree ? (
              <React.Fragment>
                <Download className="w-5 h-5" /> Baixar Código
              </React.Fragment>
            ) : (
              <React.Fragment>
                <CreditCard className="w-5 h-5" /> Comprar Agora
              </React.Fragment>
            )}
          </button>
        </div>

        <div className="space-y-6 pt-8 border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-100">Sobre o Produto</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            {item.details}
          </p>
        </div>
      </div>

      {/* Coluna Lateral (Features) */}
      <div className="lg:w-80 space-y-6">
        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 sticky top-24">
          <h3 className="text-lg font-bold text-zinc-100 mb-6">
            O que está incluído:
          </h3>

          <ul className="space-y-4">
            {item.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm leading-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
