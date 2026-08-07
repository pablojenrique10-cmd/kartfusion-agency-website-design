import { useState } from "react";

export default function Orcamento() {
  const [enviado, setEnviado] = useState(false);

  function enviarWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const nome = form.get("nome");
    const empresa = form.get("empresa");
    const tipo = form.get("tipo");

    const mensagem = `Olá, KartFusion! Gostaria de solicitar um orçamento.

Nome: ${nome}
Empresa: ${empresa}
Tipo de site: ${tipo}`;

    window.open(
      `https://wa.me/5543996317934?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );

    setEnviado(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-4">
          Solicite seu orçamento 🚀
        </h1>

        <p className="mb-6">
          Conte um pouco sobre seu negócio e vamos criar o site ideal para você.
        </p>

        {enviado ? (
          <div className="p-6 rounded-xl bg-green-100 text-green-900 font-semibold text-center">
            ✅ Solicitação enviada! 
            <br />
            Entraremos em contato pelo WhatsApp.
          </div>
        ) : (
          <form onSubmit={enviarWhatsApp} className="space-y-4">
            <input
              name="nome"
              placeholder="Seu nome"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              name="empresa"
              placeholder="Nome da empresa"
              className="w-full p-3 border rounded-lg"
            />

            <input
              name="tipo"
              placeholder="Qual site você precisa?"
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              className="w-full p-3 rounded-lg bg-black text-white hover:opacity-90 transition"
              type="submit"
            >
              Solicitar orçamento
            </button>
          </form>
        )}
      </div>
    </div>
  );
}