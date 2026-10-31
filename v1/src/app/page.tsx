"use client";
import { DetalheProduto } from "@/components";
import { blogDados, lojaDados, portfolioDados } from "@/data";
import { Produto } from "@/interfaces";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowLeft, CheckCircle, ChevronRight, Code } from "lucide-react";
import { useEffect, useState } from "react";

// --- TIPAGENS ---
interface Portfolio {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

// --- COMPONENTES DE PÁGINA ---

const PortfolioView = ({ data }: { data: Portfolio }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto space-y-16">
    <section className="space-y-6 pt-12 md:pt-24 text-center md:text-left">
      <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-4">
        Disponível para novos projetos
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100">
        Opa, beleza? Me chamo{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          {data.name}
        </span>
        .
      </h1>

      <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">
        {data.role}. {data.bio}
      </p>

      <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
        <a
          href="#store"
          className="px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-lg hover:bg-white transition-colors"
        >
          Ver Meus Produtos
        </a>

        <a
          href="#blog"
          className="px-6 py-3 bg-zinc-800 text-zinc-100 font-medium rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
        >
          Ler Artigos
        </a>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
        <Code className="w-6 h-6 text-emerald-400" /> Minhas Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-300 font-medium hover:border-emerald-500/50 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  </div>
);

const BlogView = ({
  posts,
  navigate,
}: {
  posts: BlogPost[];
  navigate: (path: string) => void;
}) => (
  <div className="animate-in fade-in duration-500 max-w-4xl mx-auto space-y-12 pt-8">
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-zinc-100">Blog</h1>

      <p className="text-zinc-400 text-lg">
        Pensamentos, tutoriais e aprendizados sobre desenvolvimento e negócios
        digitais.
      </p>
    </div>

    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          onClick={() => navigate(`/blog/${post.slug}`)}
          className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all hover:bg-zinc-800/40"
        >
          <time className="text-sm text-zinc-500 mb-2 block">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              dateStyle: "long",
            })}
          </time>

          <h2 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
            {post.title}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">{post.excerpt}</p>

          <div className="flex items-center text-emerald-400 font-medium text-sm gap-1 group-hover:gap-2 transition-all">
            Ler artigo completo <ChevronRight className="w-4 h-4" />
          </div>
        </article>
      ))}
    </div>
  </div>
);

const BlogPostView = ({
  post,
  navigate,
}: {
  post: BlogPost;
  navigate: (path: string) => void;
}) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto pt-8">
    <button
      onClick={() => navigate("/blog")}
      className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 mb-8 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" /> Voltar para o blog
    </button>

    <article className="space-y-8">
      <header className="space-y-4 border-b border-zinc-800 pb-8">
        <time className="text-emerald-400 font-mono text-sm">
          {new Date(post.date).toLocaleDateString("pt-BR", {
            dateStyle: "long",
          })}
        </time>

        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100 leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="prose prose-invert prose-emerald max-w-none text-zinc-300 leading-relaxed text-lg">
        <p>{post.content}</p>

        {/* Aqui renderizaríamos o Markdown real em um projeto Next.js usando react-markdown */}
        <div className="h-32 bg-zinc-800/30 border border-zinc-800 rounded-xl mt-8 flex items-center justify-center text-zinc-500 italic">
          [Conteúdo estendido do artigo viria aqui]
        </div>
      </div>
    </article>
  </div>
);

const StoreView = ({
  items,
  navigate,
}: {
  items: Produto[];
  navigate: (path: string) => void;
}) => (
  <div className="animate-in fade-in duration-500 max-w-5xl mx-auto space-y-12 pt-8">
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold text-zinc-100">Loja</h1>
      <p className="text-zinc-400 text-lg max-w-xl mx-auto">
        Acelere seu desenvolvimento com templates de alta conversão e
        componentes testados em produção.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <div
          key={item.slug}
          onClick={() => navigate(`/store/${item.slug}`)}
          className="group flex flex-col p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all overflow-hidden"
        >
          <div className="h-48 bg-zinc-950 rounded-t-xl relative overflow-hidden flex items-center justify-center">
            {/* Imagem Placeholder */}
            {item.type === "landing_page" ? (
              <Code className="w-16 h-16 text-zinc-800 group-hover:scale-110 transition-transform duration-500" />
            ) : (
              <CheckCircle className="w-16 h-16 text-zinc-800 group-hover:scale-110 transition-transform duration-500" />
            )}

            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
                  item.isFree
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                }`}
              >
                {item.type === "component" ? "Componente" : "Template"}
              </span>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h2>

              <p className="text-zinc-400 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
              <span className="text-2xl font-bold text-zinc-100">
                {item.isFree
                  ? "Grátis"
                  : `R$ ${item.price.toFixed(2).replace(".", ",")}`}
              </span>

              <span className="flex items-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-800 px-4 py-2 rounded-lg group-hover:bg-zinc-700 transition-colors">
                Ver Detalhes <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- APLICAÇÃO PRINCIPAL (Roteamento e Layout) ---

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  // Simulação simplificada de roteamento do Next.js
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setCurrentPath(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Pega a rota inicial
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  // Renderiza a página correta baseado no 'slug' simulado na rota
  const renderView = () => {
    if (currentPath === "/" || currentPath === "") {
      return <PortfolioView data={portfolioDados} />;
    }

    if (currentPath === "/blog") {
      return <BlogView posts={blogDados} navigate={navigate} />;
    }

    if (currentPath.startsWith("/blog/")) {
      const slug = currentPath.split("/")[2];
      const post = blogDados.find((p) => p.slug === slug);
      if (post) return <BlogPostView post={post} navigate={navigate} />;
      return (
        <div className="text-center py-20 text-xl text-zinc-400">
          Artigo não encontrado.
        </div>
      );
    }

    if (currentPath === "/store") {
      return <StoreView items={lojaDados} navigate={navigate} />;
    }

    if (currentPath.startsWith("/store/")) {
      const slug = currentPath.split("/")[2];
      const item = lojaDados.find((p) => p.slug === slug);
      if (item) return <DetalheProduto item={item} navigate={navigate} />;
      return (
        <div className="text-center py-20 text-xl text-zinc-400">
          Produto não encontrado.
        </div>
      );
    }

    return (
      <div className="text-center py-20 text-xl text-zinc-400">Página 404.</div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            onClick={() => navigate("/")}
            className="text-xl font-bold cursor-pointer flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-zinc-950">
              <Code size={18} strokeWidth={3} />
            </div>
            Leonardo Aragão Dev
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button
              onClick={() => navigate("/")}
              className={`hover:text-zinc-100 transition-colors ${currentPath === "/" ? "text-zinc-100" : ""}`}
            >
              Portfólio
            </button>

            <button
              onClick={() => navigate("/blog")}
              className={`hover:text-zinc-100 transition-colors ${currentPath.includes("/blog") ? "text-zinc-100" : ""}`}
            >
              Blog
            </button>

            <button
              onClick={() => navigate("/store")}
              className={`hover:text-zinc-100 transition-colors flex items-center gap-1.5 ${currentPath.includes("/store") ? "text-emerald-400" : ""}`}
            >
              Loja{" "}
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>
          </nav>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-100 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-100 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-8 md:py-12">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} Desenvolvido com Next.js & Tailwind
            CSS.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => navigate("/")}
              className="hover:text-zinc-300"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/blog")}
              className="hover:text-zinc-300"
            >
              Blog
            </button>

            <button
              onClick={() => navigate("/store")}
              className="hover:text-zinc-300"
            >
              Loja
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
