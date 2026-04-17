const projetos = [
    {
        titulo: "Projeto 1",
        descricao: "Sistema simples em HTML e CSS",
        link: "#"
    },
    {
        titulo: "Projeto 2",
        descricao: "Aplicação com JavaScript",
        link: "#"
    },
    {
        titulo: "Projeto 3",
        descricao: "Landing Page Responsiva",
        link: "#"
    }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;

    container.appendChild(card);
});