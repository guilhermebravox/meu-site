// Selecionando os elementos do formulário
const botaoEnviar = document.getElementById("enviar");
const nomeInput = document.getElementById("nome");
const mensagemInput = document.getElementById("mensagem");

botaoEnviar.addEventListener("click", () => {
  if (nomeInput.value.trim() === "") {
    alert("Por favor, insira seu nome.");
    return;
  }

  if (mensagemInput.value.trim() === "") {
    alert("Por favor, insira sua mensagem.");
    return;
  }

  alert("Mensagem enviada com sucesso!");
});

botaoEnviar.addEventListener("click", () => {
  const nome = nomeInput.value;
  const mensagem = mensagemInput.value;

  if (nome && mensagem) {
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    localStorage.setItem("nome", nome);
    localStorage.setItem("mensagem", mensagem);
    nomeInput.value = "";
    mensagemInput.value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

const botaoTema = document.getElementById("toggleTema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  botaoTema.innerText = document.body.classList.contains("dark-mode")
    ? "☀ Modo Claro"
    : "🌙 Modo Escuro";
});

botaoEnviar.addEventListener("click", () => {
  if (nomeInput.value.trim() === "") {
    alert("Por favor, insira seu nome.");
    return;
  }

  if (mensagemInput.value.trim() === "") {
    alert("Por favor, insira sua mensagem.");
    return;
  }

  alert("Mensagem enviada com sucesso!");
});

botaoEnviar.addEventListener("click", async () => {
  const nome = nomeInput.value;
  const mensagem = mensagemInput.value;

  if (nome && mensagem) {
    const resposta = await fetch("https://api.exemplo.com/mensagens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, mensagem })
    });

    if (resposta.ok) {
      alert("Mensagem enviada com sucesso!");
    } else {
      alert("Erro ao enviar mensagem.");
    }
  }
});

