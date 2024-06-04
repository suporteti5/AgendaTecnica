/* SCROLL BUTTON */
window.addEventListener("scroll", function () {
  var topBtn = document.getElementById("topBtn");
  if (window.scrollY > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

/* HAMBURGUER MENU */
function showSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "none";
}

/* BANNER HOME */
const bannerData = [
  {
    h1: `Plataforma de Gestão de Segurança e Saúde Ocupacional com Tecnologia de Inteligência Artificial`,
    h2: `Acesso a Plataforma`,
    paragraph: `A Agenda Técnica Sistemas é uma plataforma online, acessível em tempo real e dedicada à gestão
        integrada da saúde e segurança ocupacional. Desenvolvida para empresas de todos os portes, tanto
        diretas quanto terceirizadas, nossa plataforma oferece uma solução abrangente para a produção,
        armazenamento e consulta eficiente de documentos relacionados à Segurança do Trabalho.
        <br><br>
        Com um conteúdo totalmente alinhado com a legislação vigente, nossa plataforma também aborda o
        compliance brasileiro em Saúde, Meio Ambiente e Segurança (SMS), permitindo a atualização e a
        guarda dos documentos ao longo do tempo, garantindo sua disponibilidade para consultas futuras.
        <br><br>
        Nossa solução é completa e definitiva para a gestão de SST, reduzindo em até 90% os erros
        comuns, agilizando a confecção de documentos em até três vezes e garantindo a integralização dos
        registros. Aposte na Agenda Técnica Sistemas para uma gestão eficaz e segura da saúde e
        segurança ocupacional de sua empresa.`,
    siteKey: `6Lct3LwpAAAAAD28yaJAJP2vclCnfUHG1Rk4RLve`,
  },
];

const homeImageContainer = document.getElementById("homeImageContainerID");

bannerData.forEach((data) => {
  /* TEXT */
  const homeImageText = document.createElement("div");
  homeImageText.classList.add("homeImageText");

  const h1 = document.createElement("h1");
  h1.classList.add("homeImageTextH1");
  h1.innerHTML = data.h1;

  const p = document.createElement("p");
  p.classList.add("homeImageTextP");
  p.innerHTML = data.paragraph;

  homeImageText.appendChild(h1);
  homeImageText.appendChild(p);
  homeImageContainer.appendChild(homeImageText);

  /* ANCOR */
  const homeImageTextLinks = document.createElement("div");
  homeImageTextLinks.classList.add("homeImageTextLinks");

  const link = document.createElement("a");
  link.setAttribute("href", "/formsOrcamento/forms.html");
  link.setAttribute("id", "homeImageTextButtonBudget");
  link.innerHTML = "Fazer orçamento ";

  const icon = document.createElement("i");
  icon.classList.add("bi", "bi-chevron-right");

  link.appendChild(icon);

  homeImageTextLinks.appendChild(link);
  homeImageText.appendChild(homeImageTextLinks);

  /* FORMS */
  const homeImageForms = document.createElement("div");
  homeImageForms.classList.add("homeImageForms");

  const form = document.createElement("form");
  form.classList.add("formHomeImage");
  form.setAttribute("action", "v2/log.asp");
  form.setAttribute("method", "POST");
  
  const h2 = document.createElement("h2");
  h2.innerHTML = data.h2;

  const formInputs = document.createElement("div");
  formInputs.classList.add("formInputs");

  const inputUser = document.createElement("input");
  inputUser.setAttribute("type", "email");
  inputUser.setAttribute("name", "usuario");
  inputUser.setAttribute("placeholder", "Usuário/Senha");

  const inputPass = document.createElement("input");
  inputPass.setAttribute("type", "password");
  inputPass.setAttribute("name", "senha");
  inputPass.setAttribute("placeholder", "Sua Senha");

  formInputs.appendChild(inputUser);
  formInputs.appendChild(inputPass);

  const recaptchaContainer = document.createElement("div");
  recaptchaContainer.setAttribute("id", "recaptchaContainer");
  recaptchaContainer.classList.add("g-recaptcha");
  recaptchaContainer.setAttribute("data-sitekey", data.siteKey);
  recaptchaContainer.setAttribute("data-callback", "handleRecaptcha");

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("homeImageFormsSubmit");
  buttonSubmit.setAttribute("type", "submit");
  buttonSubmit.innerHTML = "Login";

  form.appendChild(h2);
  form.appendChild(formInputs);
  form.appendChild(document.createElement("br"));
  form.appendChild(recaptchaContainer);
  form.appendChild(buttonSubmit);

  homeImageForms.appendChild(form);
  homeImageContainer.appendChild(homeImageForms);
});

/* SECTION COMPANIES */

const companiesData = [
  {
    href: "https://ammarhes.com.br/",
    src: "./Assets/Logo/LogoAmmarhesWrite.png",
    alt: "Logo Ammarhes",
    id: "ammarhes",
  },
  {
    href: "https://casaocupacional.com.br/",
    src: "./Assets/Logo/LogoCasa.png",
    alt: "Logo Casa",
    id: "casa",
  },
  {
    href: "https://asoonline.com.br/",
    src: "./Assets/Logo/LogoAsoNav.png",
    alt: "Logo Agenda Técnica",
    id: "agenda",
  },
  {
    href: "https://saude10clinica.com.br/",
    src: "./Assets/Logo/LogoSaude10.png",
    alt: "Logo Saude 10",
    id: "saude10",
  },
];

const companies = document.getElementById("companiesLogosDiv");

companiesData.forEach((company) => {
  const companiesLogoDiv = document.createElement("div");
  companiesLogoDiv.classList.add("companiesLogoDiv");

  const linkDiv = document.createElement("div");
  linkDiv.classList.add("logosLink");

  const companyLink = document.createElement("a");
  companyLink.setAttribute("target", "_blank");
  companyLink.setAttribute("href", company.href);

  const companyLogo = document.createElement("img");
  companyLogo.classList.add("CompaniesLogosImgs");
  companyLogo.id = company.id;
  companyLogo.setAttribute("src", company.src);
  companyLogo.setAttribute("alt", `Logo ${company.alt}`);

  const accessLink = document.createElement("a");
  accessLink.setAttribute("target", "_blank");
  accessLink.setAttribute("href", company.href);
  accessLink.classList.add("LinksButtons");
  accessLink.textContent = "Clique e Acesse";

  companyLink.appendChild(companyLogo);
  linkDiv.appendChild(companyLink);
  linkDiv.appendChild(accessLink);

  companies.appendChild(linkDiv);
});

/* SECTION ABOUT */

const sliderData = [
  {
    title: "Quem somos",
    pContent: `A Ammarhes Consultores em QSMS, pioneira na criação desta plataforma, é uma empresa de consultoria consolidada, com mais de 10 anos de experiência em todos os segmentos de Segurança e Saúde Ocupacional.
    <br><br>
    Identificamos a necessidade de desenvolver nossa própria plataforma online para a gestão eficaz de SMS, a fim de atender de forma abrangente às demandas de nossos clientes, garantindo a conformidade com todas as exigências do mercado.
    <br><br>
    Nosso sistema de controle online oferece acesso remoto aos recursos contratados, proporcionando eficiência a um custo acessível. Com sólida estabilidade financeira, entendemos que, no ramo em que atuamos, é essencial contar com uma empresa de renome e tradição no mercado.`,
    id: "quemSomos",
  },
  {
    title: `Nossa História`,
    pContent: `A Ammarhes surgiu como uma equipe de consultores especializados em Saúde Ocupacional, Meio Ambiente e Segurança do Trabalho, reunindo um grupo multidisciplinar que se expandiu para o desenvolvimento de sistemas de gestão. Em nosso portfólio, oferecemos assessoria na aplicação de diversas normas, incluindo ISO 14001, ISO 9001, NBR 16001 e SA 8000.
    <br><br>
        Somos registrados no CREA, com a emissão de ART (Anotação de Responsabilidade Técnica) nas atividades de Engenharia, com foco em Segurança do Trabalho e Meio Ambiente. Além disso, contamos com registro no CRM, através do Médico-Coordenador.`,
    id: "nossaHistoria",
  },
  {
    title: `Nosso Diferencial`,
    pContent: `Com base na vasta experiência da empresa no campo da consultoria em Saúde e Segurança do Trabalho, foi possível desenvolver a plataforma Agenda Técnica Sistemas de maneira intuitiva, oferecendo agilidade na criação e consulta de todo o conteúdo relacionado à gestão de SMS. Além disso, a plataforma está pronta para atender às exigências do eSocial.`,
    id: "nossoDiferencial",
  },
  {
    title: `Nossa Proposta`,
    pContent: `A Agenda Técnica Sistemas visa ser a solução completa e definitiva para a gestão de Saúde e Segurança do Trabalho.
    <br><br>
        Acessível por qualquer dispositivo com conexão à internet, proporciona facilidade e rapidez no acesso a todos os documentos essenciais, agilizando as atividades diárias e garantindo segurança e confiabilidade às empresas em conformidade com o eSocial.`,
    id: "nossaProposta",
  },
  {
    title: `Veja Mais `,
    pContent: `Veloz, simples e intuitiva! Combinando tecnologia avançada com segurança robusta, nossa plataforma se dedica a simplificar todas as questões documentais relacionadas à Saúde, Meio Ambiente e Segurança.
    <br><br>
        Aproveitando a inteligência artificial, nossa solução automatiza a criação de documentos, reduzindo erros e otimizando o processo de confecção com eficiência e precisão.`,
    id: "vejaMais",
  },
];

const sliderContainer = document.getElementById("sliderAbout");

sliderData.forEach((data) => {
  const sliderImage = document.createElement("li");
  sliderImage.classList.add("sliderListImageAbout");
  sliderImage.id = data.id;

  const background = document.createElement("div");
  background.classList.add("backgroundSliderAbout");

  const backgroundContent = document.createElement("div");
  backgroundContent.classList.add("backgroundContentSliderAbout");

  const sliderTitle = document.createElement("h2");
  sliderTitle.classList.add("sliderTitleAbout");
  sliderTitle.innerHTML = data.title;

  const sliderParagraph = document.createElement("p");
  sliderParagraph.classList.add("sliderParagraphAbout");
  sliderParagraph.innerHTML = data.pContent;

  backgroundContent.appendChild(sliderTitle);
  backgroundContent.appendChild(sliderParagraph);
  background.appendChild(backgroundContent);
  sliderImage.appendChild(background);

  sliderContainer.appendChild(sliderImage);
});

/* SECTION RECURSOS */

const gridRecursosData = [
  {
    icon: "bi bi-lightbulb",
    title: "Documentação",
    subTitle: "Geração De Documentos",
    paragraph: `Nossa plataforma integra, desenha e estrutura os riscos de maneira a gerar todos os documentos essenciais da área de Saúde, Meio Ambiente e Segurança do Trabalho (como PGR, laudos, etc.). `,
  },
  {
    icon: "bi bi-lightbulb",
    title: "Colaboradores",
    subTitle: "Sintonia com E-social",
    paragraph: `Facilita a guarda e a gestão dos colaboradores. Oferece acesso completo ao histórico de alterações nos registros de um funcionário específico, incluindo avaliações ambientais realizadas e prazos de documentos.`,
  },
  {
    icon: "bi bi-lightbulb",
    title: "Prazos",
    subTitle: "Controle de prazos",
    paragraph: `Oferecemos acompanhamento de prazos de documentos e notificações próximas ao vencimento, evitando assim a aplicação de multas.`,
  },
  {
    icon: "bi bi-lightbulb",
    title: "PPP",
    subTitle: "geração de ppp",
    paragraph: `Geração imediata do PPP (Perfil Profissiográfico Previdenciário) para qualquer funcionário. Criação, edição e acompanhamento simples de documentos essenciais.`,
  },
  {
    icon: "bi bi-lightbulb",
    title: "Qualidade",
    subTitle: "Gestão de qualidade Total",
    paragraph: `Ajuda e propõe estabelecer produtos de SMS e itens de controle utilizando o método da Gestão da Qualidade Total.`,
  },
  {
    icon: "bi bi-lightbulb",
    title: "Acompanhamento",
    subTitle: "Dashboards eficientes ",
    paragraph: `Nossa Dashboard (Tela inicial) é personalizada para monitorar apenas as informações selecionadas pelo usuário como pertinentes.`,
  },
];

const gridRecursosContainer = document.getElementById("gridRecursosContainer");

gridRecursosData.forEach((data) => {
  const gridRecursosItem = document.createElement("div");
  gridRecursosItem.classList.add("gridRecursosItem");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("gridRecursosTitle");

  const icon = document.createElement("span");
  icon.innerHTML = `<i class="${data.icon}"></i>`;

  const title = document.createElement("h3");
  title.innerHTML = data.title;

  titleContainer.appendChild(icon);
  titleContainer.appendChild(title);

  const subTitle = document.createElement("span");
  subTitle.classList.add("gridRecursosSubTitle");
  subTitle.innerHTML = data.subTitle;

  const content = document.createElement("div");
  content.classList.add("gridRecursosContentText");

  const paragraph = document.createElement("p");
  paragraph.innerHTML = data.paragraph;

  content.appendChild(paragraph);

  gridRecursosItem.appendChild(titleContainer);
  gridRecursosItem.appendChild(subTitle);
  gridRecursosItem.appendChild(content);

  gridRecursosContainer.appendChild(gridRecursosItem);
});

/* SECTION DOCS  */

const gridDocsData = [
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "LTCAT",
    text: `Analisa o LTCAT individualmente ou de forma coletiva, documentando se há necessidade ou não de aposentadoria especial, considerando a periodicidade da exposição ao agente nocivo.`,
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PCMAT",
    text: `Defina uma série de ações e medidas de segurança a serem adotadas durante o desenvolvimento da obra, com o objetivo de antecipar os riscos por etapa e implementar medidas preventivas adequadas.`,
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PPP",
    text: `Geração imediata do PPP (Perfil Profissiográfico Previdenciário) para qualquer funcionário. Criação, edição e acompanhamento simplificados de documentos importantes.`,
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "Ordens de serviço",
    text: `Elabore ordens de serviço sobre segurança e saúde no trabalho, comunicando aos empregados por meio de comunicados, cartazes ou meios eletrônicos os riscos e perigos das tarefas a serem executadas.`,
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PGR",
    text: `Formule e implemente medidas e procedimentos técnicos e administrativos para prevenir riscos e garantir que as instalações operem dentro de padrões de segurança considerados eficazes.`,
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "CAT",
    text: `A Comunicação de Acidente de Trabalho (CAT) deve ser emitida pela empresa para registrar qualquer caso de acidente de trabalho ou doença ocupacional. A emissão da CAT é de extrema importância, pois permite que a empresa e o governo assumam suas responsabilidades legais e garante que o trabalhador tenha seus direitos preservados.`,
  },
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "Outros documentos",
    text: `A plataforma conta com controles de segurança específicos para a gestão ocupacional da sua empresa, visando identificar os riscos, prevenir acidentes e doenças, e assegurar a integridade física dos colaboradores.`,
  },
];

const gridDocsContainer = document.getElementById("gridDocsContainer");

gridDocsData.forEach((data) => {
  const gridDocsItem = document.createElement("div");
  gridDocsItem.classList.add("gridDocsItem");

  const icon = document.createElement("span");
  icon.innerHTML = `<i class="${data.icon}"></i>`;

  const title = document.createElement("p");
  title.classList.add("gridDocsItemTitle");
  title.innerHTML = data.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("gridDocsItemParagraph");
  paragraph.innerHTML = data.text;

  gridDocsItem.appendChild(icon);
  gridDocsItem.appendChild(title);
  gridDocsItem.appendChild(paragraph);

  gridDocsContainer.appendChild(gridDocsItem);
});

/* SECTION PLATAFORMA */

const plataformData = [
  {
    icon: "bi bi-file-earmark-medical-fill",
    title: "PCMSO",
    text: "Anotação de responsabilidade técnica",
  },
  {
    icon: "bi bi-search",
    title: "PGR",
    text: "Elaboração de mapa de risco para fácil visualização das exposições nos ambientes",
  },
  {
    icon: "bi bi-map",
    title: "EPC",
    text: "Gerenciamento de equipamentos de proteção coletiva, assim como medidas mitigadoras para melhora da segurança",
  },
  {
    icon: "bi bi-graph-up",
    title: "Indicadores",
    text: "Crie e gerencie indicadores importantes para acompanhamento",
  },
];

const plataformContainer = document.getElementById("gridsPlataformaContainer");

plataformData.forEach((data) => {
  const gridsPlataformaItem = document.createElement("div");
  gridsPlataformaItem.classList.add("gridsPlataformaItem");

  const icon = document.createElement("span");
  icon.innerHTML = `<i class="${data.icon}"></i>`;

  const title = document.createElement("p");
  title.classList.add("gridsPlataformaItemTitle");
  title.innerHTML = data.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("gridsPlataformaItemParagraph");
  paragraph.innerHTML = data.text;

  gridsPlataformaItem.appendChild(icon);
  gridsPlataformaItem.appendChild(title);
  gridsPlataformaItem.appendChild(paragraph);

  plataformContainer.appendChild(gridsPlataformaItem);
});

/* SECTION BANNER 2 */

const sliderData1 = [
  {
    title: "Gestão de Entrega de EPI",
    pContent: `Em conformidade com a Norma Regulamentadora 6 do MTE (Ministério do Trabalho e Emprego), nossa plataforma oferece uma gestão completa dos Equipamentos de Proteção Individual (EPIs), abrangendo seus dados mais importantes:
<br><br>
  <ul class='ulSliderData'>
   <li> Cadastros</li>
   <li> Características</li>
   <li> Prazos de entrega, reposição e compra</li>
   <li> Validade de vencimento e certificado de aprovação (CA)</li>
   </ul>
    <br><br>
    Dessa forma, gestores e colaboradores recebem notificações oportunas, prevenindo quaisquer problemas relacionados à segurança e documentação.
    <br><br>
    Além disso, nossa plataforma apresenta um módulo de gestão de EPI por biometria, garantindo segurança e agilidade na interação com os colaboradores.`,
    id: "imgEPI",
  },
  {
    title: `Exposição aos Riscos por GHE    `,
    pContent: `Através da guia de Grupo Homogêneo de Exposição (GHE), nossa plataforma mapeia os riscos de mesmo grau enfrentados pelos colaboradores, formando grupos expostos a um risco comum.
    <br><br>
    Essa abordagem facilita a organização e gestão das avaliações ambientais e exames necessários para esses grupos, além de simplificar seu acompanhamento.
    <br><br>
    Com esse processo, torna-se mais fácil determinar e implementar medidas de prevenção de acidentes de trabalho nos grupos de exposição comuns, bem como avaliar e monitorar a evolução dos valores encontrados nas avaliações e na saúde dos colaboradores.`,
    id: "imgRiscos",
  },
  {
    title: `Relatórios Simplificados e <br> Personalizados`,
    pContent: `Nossa plataforma permite a geração fácil e descomplicada de relatórios, incluindo a criação de indicadores personalizados para acompanhar dados específicos.
    <br><br>
    Os usuários têm a opção de fazer o download dos relatórios em formato PDF, garantindo praticidade e acessibilidade.`,
    id: "imgRelatorio",
  },
];

const sliderContainerBanner2 = document.getElementById("slider");

sliderData1.forEach((data) => {
  const sliderImage = document.createElement("li");
  sliderImage.classList.add("sliderImage");
  sliderImage.id = data.id;

  const background = document.createElement("div");
  background.classList.add("background");

  const backgroundContent = document.createElement("div");
  backgroundContent.classList.add("backgroundContent");

  const sliderTitle = document.createElement("h2");
  sliderTitle.classList.add("sliderTitle");
  sliderTitle.innerHTML = data.title;

  const sliderParagraph = document.createElement("p");
  sliderParagraph.classList.add("sliderParagraph");
  sliderParagraph.innerHTML = data.pContent;

  backgroundContent.appendChild(sliderTitle);
  backgroundContent.appendChild(sliderParagraph);
  background.appendChild(backgroundContent);
  sliderImage.appendChild(background);

  sliderContainerBanner2.appendChild(sliderImage);
});

/* FORMS */

function handleRecaptcha() {
  let button = document.getElementById("submitButton");
  button.disabled = false;
  button.classList.remove("disabled");
}

document.addEventListener("DOMContentLoaded", () => {
  let isCaptchaVerified = false;

  const contactForm = document.getElementById("contactForm");
  const alertForm = document.getElementById("alertForm");
  const alertMessage = document.getElementById("alertMessage");
  const submitButton = document.getElementById("submitButton");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isCaptchaVerified) {
      return;
    }

    const formData = {
      nameFrom: "Não Responder",
      emailFrom: "naoresponder@ammarhes.com.br",
      nameTo: contactForm.name.value,
      emailTo: contactForm.email.value,
      emailSubject: contactForm.assunto.value,
      emailBody: contactForm.mensagem.value,
    };

    try {
      const res = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alertForm.style.display = "block";
        alert.classList.add("sucess");
        alertForm.style.backgroundColor = "rgb(185, 248, 185)";
        alertForm.style.color = "rgb(30, 70, 32)";
        alertMessage.innerHTML = `<img id="alertMessageImage" alt="icon" src="./Assets/IMGS/check.svg"> Mensagem enviada com sucesso`;

        submitButton.innerHTML = "Enviado";
        submitButton.style.opacity = 0.7;
      } else {
        alertForm.style.display = "block";
        alertForm.style.backgroundColor = "rgb(239 66 66)";
        alertForm.style.color = "rgb(255 255 255)";
        alertForm.classList.add("error");
        alertMessage.innerHTML = `<img id="alertMessageImage" alt="icon" src="./Assets/IMGS/exclamation-circle.svg"> Erro ao enviar o formulário!`;

        submitButton.innerHTML = "Erro";
        submitButton.style.opacity = 0.7;
      }
    } catch (error) {
      alertForm.style.display = "block";
      alertForm.style.backgroundColor = "rgb(239 66 66)";
      alertForm.style.color = "rgb(255 255 255)";
      alertForm.classList.add("error");

      submitButton.innerHTML = "Erro";
      submitButton.style.opacity = 0.7;
      alertMessage.innerHTML = `<img id="alertMessageImage" alt="icon" src="./Assets/IMGS/exclamation-circle.svg"> Erro ao enviar o formulário!`;
    }
  });

  window.handleCaptchaVerify = () => {
    isCaptchaVerified = true;
    submitButton.disabled = false;
  };

  window.handleCaptchaExpire = () => {
    isCaptchaVerified = false;
    submitButton.disabled = true;
  };
});

function send() {
  const submitButton = document.getElementById("submitButton");
  const nameForm = document.getElementById("nome");
  const emailForm = document.getElementById("email");
  const assuntoForm = document.getElementById("assunto");
  const messageForm = document.getElementById("mensagem");

  if (
    nameForm.value &&
    emailForm.value &&
    assuntoForm.value &&
    messageForm.value !== ""
  ) {
    submitButton.innerHTML = "Enviando...";
    submitButton.style.opacity = 0.7;
  }
}
