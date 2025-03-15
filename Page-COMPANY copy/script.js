document.addEventListener("DOMContentLoaded", () => {
    // Selecionando os botões do menu
    const menuLinks = document.querySelectorAll("header nav ul li a");
    const contatoButton = document.querySelector("#btnNosContrate");  // Selecionando o botão "Nos Contrate"

    // Função para rolar até uma seção específica
    function scrollToSection(sectionSelector) {
        const section = document.querySelector(sectionSelector);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Adicionando eventos de clique nos links do menu
    menuLinks[0].addEventListener("click", () => scrollToSection(".topo-do-site"));
    menuLinks[1].addEventListener("click", () => scrollToSection(".projetos"));
    menuLinks[2].addEventListener("click", () => scrollToSection(".visao-cliente"));
    menuLinks[3].addEventListener("click", () => scrollToSection(".beneficios-empresa"));
    menuLinks[4].addEventListener("click", () => scrollToSection(".sobre"));

    // Adicionando evento ao botão "Nos Contrate" para rolar até a seção "projetos"
    contatoButton.addEventListener("click", () => scrollToSection(".projetos"));

    // Criando o botão de rolagem para o topo
    const scrollTopButton = document.createElement("button");
    scrollTopButton.innerHTML = "<i class='bi bi-arrow-up'></i>";
    scrollTopButton.id = "scrollTopButton";
    scrollTopButton.style.position = "fixed";
    scrollTopButton.style.bottom = "20px";
    scrollTopButton.style.right = "20px";
    scrollTopButton.style.width = "60px";
    scrollTopButton.style.height = "60px";
    scrollTopButton.style.padding = "10px";
    scrollTopButton.style.borderRadius = "50%";
    scrollTopButton.style.border = "none";
    scrollTopButton.style.backgroundColor = "#1a0d72";
    scrollTopButton.style.color = "#fff";
    scrollTopButton.style.cursor = "pointer";
    scrollTopButton.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    scrollTopButton.style.transition = "transform 0.2s, box-shadow 0.2s, opacity 0.5s, filter 0.5s";
    scrollTopButton.style.display = "none";
    document.body.appendChild(scrollTopButton);

    // Mostrar/ocultar botão ao rolar a página com efeito de desaparecimento enquanto o scroll está em movimento
    let isScrolling;
    window.addEventListener("scroll", () => {
        scrollTopButton.style.opacity = "0";
        scrollTopButton.style.filter = "blur(2px)";

        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            scrollTopButton.style.opacity = "1";
            scrollTopButton.style.filter = "blur(0px)";
        }, 500); // Delay de 0,5 segundos para restaurar a visibilidade após parar de rolar

        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    // Ajustar tamanho do botão para dispositivos móveis
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function handleMobileSize(e) {
        if (e.matches) {
            scrollTopButton.style.width = "50px";
            scrollTopButton.style.height = "50px";
        } else {
            scrollTopButton.style.width = "60px";
            scrollTopButton.style.height = "60px";
        }
    }
    mediaQuery.addListener(handleMobileSize);
    handleMobileSize(mediaQuery);

    // Efeitos de hover no botão de rolagem
    scrollTopButton.addEventListener("mouseenter", () => {
        scrollTopButton.style.transform = "scale(1.1)";
        scrollTopButton.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.5)";
    });
    scrollTopButton.addEventListener("mouseleave", () => {
        scrollTopButton.style.transform = "scale(1)";
        scrollTopButton.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    });

    // Evento de clique no botão de rolagem para o topo
    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
