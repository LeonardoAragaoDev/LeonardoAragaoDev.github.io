import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GERA UM SITE ESTÁTICO (HTML/CSS/JS)
  output: "export",

  // CRIA PASTAS PARA CADA PÁGINA (Resolve o erro 403)
  trailingSlash: true,

  // DESATIVA O PROCESSAMENTO DE IMAGEM NO SERVIDOR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
