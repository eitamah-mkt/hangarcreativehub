// ============================================
// HANGAR CREATIVE HUB — script.js
// Tradução (PT/EN/ES) + interações
// ============================================

const translations = {
    pt: {
        "nav.sobre": "Sobre",
        "nav.servicos": "Serviços",
        "nav.cases": "Cases",
        "nav.metodo": "Método",
        "nav.contato": "Contato",

        "hero.eyebrow": "ROTA · COMUNICAÇÃO & TECNOLOGIA",
        "hero.subtitle": "Você e sua empresa voando mais alto em comunicação e tecnologia.",
        "hero.scroll": "conheça a agência",

        "bubble.1": "Produção de Conteúdo",
        "bubble.2": "Jornalismo",
        "bubble.3": "Branding",
        "bubble.4": "Estratégia",
        "bubble.5": "Fotografia",
        "bubble.6": "Audiovisual",
        "bubble.7": "Social Media",
        "bubble.8": "Design",

        "btn.portfolio": "Portfólio",
        "btn.cap": "Fale com a Cap",
        "btn.team": "Fale com o time para voar mais alto",

        "board.1": "BRANDING", "board.2": "FOTOGRAFIA", "board.3": "SOCIABILIDADE",
        "board.4": "DESIGN", "board.5": "AUDIOVISUAL", "board.6": "CONSULTORIA",
        "board.7": "TRÁFEGO PAGO", "board.8": "WEB DESIGN", "board.9": "PROGRAMAÇÃO",
        "board.10": "JORNALISMO DIGITAL",

        "servicos.eyebrow": "CARTA DE SERVIÇOS",
        "servicos.titulo": "O que decola com a gente",
        "servicos.lead": "Da estratégia à entrega, cada serviço tem um dono, um método e um resultado esperado — nada de pacote genérico.",

        "servico.branding.titulo": "Branding",
        "servico.branding.desc": "Identidade visual, naming e reposicionamento de marca com consistência do logo ao ponto de venda.",
        "servico.jornalismo.titulo": "Jornalismo",
        "servico.jornalismo.desc": "Conteúdo com apuração e autoridade editorial para marcas que querem ser fonte, não só anunciante.",
        "servico.fotografia.titulo": "Fotografia",
        "servico.fotografia.desc": "Produção de imagem para produto, gastronomia, indústria e institucional, com direção de arte própria.",
        "servico.audiovisual.titulo": "Audiovisual",
        "servico.audiovisual.desc": "Roteiro, filmagem e edição para redes, institucional e campanhas com formato pensado por canal.",
        "servico.social.titulo": "Social Media",
        "servico.social.desc": "Planejamento editorial, produção e gestão de comunidade com calendário e métricas mensais.",
        "servico.performance.titulo": "Performance",
        "servico.performance.desc": "Tráfego pago e leitura de indicadores para transformar audiência em oportunidade de negócio.",
        "servico.design.titulo": "Design",
        "servico.design.desc": "Peças gráficas, manipulação de imagem e materiais de campanha alinhados à identidade da marca.",
        "servico.estrategia.titulo": "Estratégia",
        "servico.estrategia.desc": "Diagnóstico, posicionamento e plano de comunicação com metas claras antes de qualquer produção.",

        "cases.eyebrow": "DIÁRIO DE BORDO",
        "cases.titulo": "Cases que já voaram",
        "cases.lead": "Um recorte de projetos reais, com problema, estratégia, execução e resultado — do jeito que quem contrata precisa ver.",
        "cases.cta": "Ver portfólio completo",

        "case.problema": "Problema", "case.estrategia": "Estratégia",
        "case.execucao": "Execução", "case.resultado": "Resultado",
        "case.metricaplaceholder": "[inserir métrica real de resultado]",

        "case1.tag": "REBRANDING · EDRO",
        "case1.titulo": "Reposicionamento de marca",
        "case1.problema": "Identidade visual desatualizada, sem consistência entre logo, frota e uniformes.",
        "case1.estrategia": "Rebranding completo com novo símbolo, paleta e sistema de aplicação por ponto de contato.",
        "case1.execucao": "Redesenho do logo, aplicação em frota, uniformes, papelaria e brindes institucionais.",
        "case1.resultado": "Marca padronizada em todos os pontos de contato, com percepção mais profissional.",

        "case2.tag": "IDENTIDADE VISUAL · GASTRONOMIA",
        "case2.titulo": "Marca para novo ponto gastronômico",
        "case2.problema": "Negócio novo sem identidade visual definida para abertura de loja.",
        "case2.estrategia": "Construção de marca do zero: naming, logotipo e linguagem visual para fachada e redes.",
        "case2.execucao": "Identidade aplicada em fachada, cardápio, embalagens e conteúdo de abertura.",
        "case2.resultado": "Abertura com identidade coesa e pronta para escalar para novas unidades.",

        "case3.tag": "PERFORMANCE · SOCIAL",
        "case3.titulo": "Leitura de dados para redes sociais",
        "case3.problema": "Cliente produzia conteúdo sem acompanhar evolução de métricas e aptidões dos formatos.",
        "case3.estrategia": "Painel de performance com leitura mensal de evolução e recomendação de ajuste de rota.",
        "case3.execucao": "Relatórios visuais e reuniões periódicas de leitura de indicadores com o cliente.",
        "case3.resultado": "Decisões de conteúdo passaram a ser orientadas por dado, não por achismo.",

        "case4.tag": "CONTEÚDO · AUTORIDADE JORNALÍSTICA",
        "case4.titulo": "Conteúdo com apuração jornalística",
        "case4.problema": "Marca com conteúdo genérico, sem diferenciação frente a concorrentes do setor.",
        "case4.estrategia": "Pauta e produção de conteúdo com técnica jornalística para gerar autoridade no setor.",
        "case4.execucao": "Produção fotográfica e de texto em campo, com fontes reais e checagem de informação.",
        "case4.resultado": "Conteúdo com credibilidade editorial, diferente do padrão publicitário do setor.",

        "metodo.eyebrow": "PLANO DE VOO",
        "metodo.titulo": "Como o trabalho decola",
        "metodo.lead": "Um método fixo por trás de cada projeto, independente do tamanho da empresa ou do serviço contratado.",
        "metodo1.titulo": "Diagnóstico",
        "metodo1.desc": "Levantamento de marca, concorrência e maturidade digital antes de propor qualquer ação.",
        "metodo2.titulo": "Estratégia",
        "metodo2.desc": "Plano de comunicação com prioridades, canais e metas definidas junto com o cliente.",
        "metodo3.titulo": "Produção",
        "metodo3.desc": "Execução de branding, conteúdo, fotografia e audiovisual dentro do plano definido.",
        "metodo4.titulo": "Performance",
        "metodo4.desc": "Acompanhamento de métricas e ajuste de rota com relatórios periódicos.",

        "sobre.eyebrow": "TRIPULAÇÃO",
        "sobre.titulo": "Quem está na cabine",
        // ✅ ALTERADO: adicionado "tecnologia" na lista
        "sobre.lead": "A Hangar Creative Hub nasceu para ser o hub que reúne comunicação e tecnologia num só lugar, evitando que empresas precisem contratar vários fornecedores soltos para contar a própria história. O time reúne jornalismo, design, fotografia, performance e tecnologia sob um mesmo método, para que cada entrega saia coerente com a anterior.",

        "depo.eyebrow": "RELATO DE PASSAGEIROS",
        "depo.titulo": "O que dizem os clientes",
        "depo1.texto": "\"[Inserir depoimento real de cliente sobre o trabalho da Hangar aqui.]\"",
        "depo1.autor": "— [Nome do cliente, empresa]",
        "depo2.texto": "\"[Inserir depoimento real de cliente sobre o trabalho da Hangar aqui.]\"",
        "depo2.autor": "— [Nome do cliente, empresa]",
        "depo3.texto": "\"[Inserir depoimento real de cliente sobre o trabalho da Hangar aqui.]\"",
        "depo3.autor": "— [Nome do cliente, empresa]",

        "contato.eyebrow": "TORRE DE CONTROLE",
        "contato.titulo": "Pronto para decolar?",
        "contato.lead": "Fale com o time e conte o que sua empresa precisa comunicar.",

        "footer.tagline": "Comunicação e tecnologia sob o mesmo teto.",
        "footer.institucional": "Institucional",
        "footer.razaosocial": "Razão social: Hangar Creative Hub LTDA",
        "footer.cnpj": "CNPJ: 55.373.242/0001-12",
        "footer.endereco": "Endereço: Rua Frei Mansueto, 1289 - Varjota, Fortaleza - CE, 60175-157",
        "footer.contato": "Contato",
        "footer.email": "E-mail: contact@hangarcreativehub.com",
        "footer.legal": "Legal",
        "footer.privacidade": "Política de Privacidade e Cookies",
        "footer.copy": "© 2026 Hangar Creative Hub. Todos os direitos reservados."
    },

    en: {
        "nav.sobre": "About",
        "nav.servicos": "Services",
        "nav.cases": "Cases",
        "nav.metodo": "Method",
        "nav.contato": "Contact",

        "hero.eyebrow": "ROUTE · COMMUNICATION & TECHNOLOGY",
        "hero.subtitle": "You and your company flying higher in communication and technology.",
        "hero.scroll": "get to know the agency",

        "bubble.1": "Content Production",
        "bubble.2": "Journalism",
        "bubble.3": "Branding",
        "bubble.4": "Strategy",
        "bubble.5": "Photography",
        "bubble.6": "Audiovisual",
        "bubble.7": "Social Media",
        "bubble.8": "Design",

        "btn.portfolio": "Portfolio",
        "btn.cap": "Speak with the Cap",
        "btn.team": "Talk to the team to fly higher",

        "board.1": "BRANDING", "board.2": "PHOTOGRAPHY", "board.3": "SOCIABILITY",
        "board.4": "DESIGN", "board.5": "AUDIOVISUAL", "board.6": "CONSULTING",
        "board.7": "PAID MEDIA", "board.8": "WEB DESIGN", "board.9": "DEVELOPMENT",
        "board.10": "DIGITAL JOURNALISM",

        "servicos.eyebrow": "SERVICE MANIFEST",
        "servicos.titulo": "What takes off with us",
        "servicos.lead": "From strategy to delivery, every service has an owner, a method and an expected result — no generic packages.",

        "servico.branding.titulo": "Branding",
        "servico.branding.desc": "Visual identity, naming and brand repositioning, consistent from the logo to the point of sale.",
        "servico.jornalismo.titulo": "Journalism",
        "servico.jornalismo.desc": "Researched content with editorial authority for brands that want to be a source, not just an advertiser.",
        "servico.fotografia.titulo": "Photography",
        "servico.fotografia.desc": "Image production for product, food, industry and corporate use, with in-house art direction.",
        "servico.audiovisual.titulo": "Audiovisual",
        "servico.audiovisual.desc": "Script, filming and editing for social, corporate and campaigns, formatted for each channel.",
        "servico.social.titulo": "Social Media",
        "servico.social.desc": "Editorial planning, production and community management with a calendar and monthly metrics.",
        "servico.performance.titulo": "Performance",
        "servico.performance.desc": "Paid media and data reading to turn audience into real business opportunity.",
        "servico.design.titulo": "Design",
        "servico.design.desc": "Graphic pieces, image editing and campaign materials aligned with brand identity.",
        "servico.estrategia.titulo": "Strategy",
        "servico.estrategia.desc": "Diagnosis, positioning and communication plan with clear goals before any production starts.",

        "cases.eyebrow": "FLIGHT LOG",
        "cases.titulo": "Cases that already flew",
        "cases.lead": "A selection of real projects, with problem, strategy, execution and result — the way a buyer actually needs to see it.",
        "cases.cta": "See the full portfolio",

        "case.problema": "Problem", "case.estrategia": "Strategy",
        "case.execucao": "Execution", "case.resultado": "Result",
        "case.metricaplaceholder": "[insert real result metric]",

        "case1.tag": "REBRANDING · EDRO",
        "case1.titulo": "Brand repositioning",
        "case1.problema": "Outdated visual identity, with no consistency between logo, fleet and uniforms.",
        "case1.estrategia": "Full rebrand with a new symbol, palette and application system for every touchpoint.",
        "case1.execucao": "Logo redesign, applied to fleet, uniforms, stationery and corporate merchandise.",
        "case1.resultado": "Standardized brand across every touchpoint, with a more professional perception.",

        "case2.tag": "VISUAL IDENTITY · FOOD & BEVERAGE",
        "case2.titulo": "Brand for a new food venue",
        "case2.problema": "New business with no defined visual identity ahead of store opening.",
        "case2.estrategia": "Brand built from scratch: naming, logotype and visual language for storefront and social.",
        "case2.execucao": "Identity applied to storefront, menu, packaging and launch content.",
        "case2.resultado": "Launch with a cohesive identity, ready to scale to new locations.",

        "case3.tag": "PERFORMANCE · SOCIAL",
        "case3.titulo": "Data reading for social media",
        "case3.problema": "Client was producing content without tracking metrics or format performance.",
        "case3.estrategia": "Performance dashboard with monthly evolution reading and course-correction recommendations.",
        "case3.execucao": "Visual reports and periodic meetings to review indicators with the client.",
        "case3.resultado": "Content decisions became data-driven instead of based on guesswork.",

        "case4.tag": "CONTENT · JOURNALISTIC AUTHORITY",
        "case4.titulo": "Content with journalistic research",
        "case4.problema": "Brand with generic content, no differentiation from sector competitors.",
        "case4.estrategia": "Story angles and content production using journalistic technique to build sector authority.",
        "case4.execucao": "On-site photo and text production, with real sources and fact-checking.",
        "case4.resultado": "Content with editorial credibility, different from the sector's typical ad-like output.",

        "metodo.eyebrow": "FLIGHT PLAN",
        "metodo.titulo": "How the work takes off",
        "metodo.lead": "A fixed method behind every project, regardless of company size or service hired.",
        "metodo1.titulo": "Diagnosis",
        "metodo1.desc": "Brand, competitor and digital maturity assessment before proposing any action.",
        "metodo2.titulo": "Strategy",
        "metodo2.desc": "Communication plan with priorities, channels and goals defined together with the client.",
        "metodo3.titulo": "Production",
        "metodo3.desc": "Execution of branding, content, photography and audiovisual within the defined plan.",
        "metodo4.titulo": "Performance",
        "metodo4.desc": "Metrics tracking and course correction with periodic reports.",

        "sobre.eyebrow": "CREW",
        "sobre.titulo": "Who's in the cockpit",
        // ✅ ALTERADO: adicionado "technology" na lista
        "sobre.lead": "Hangar Creative Hub was created to be the hub that brings communication and technology together in one place, so companies don't need to hire several loose vendors to tell their own story. The team brings journalism, design, photography, performance and technology together under one method, so every deliverable stays consistent with the last.",

        "depo.eyebrow": "PASSENGER REPORTS",
        "depo.titulo": "What clients say",
        "depo1.texto": "\"[Insert a real client testimonial about Hangar's work here.]\"",
        "depo1.autor": "— [Client name, company]",
        "depo2.texto": "\"[Insert a real client testimonial about Hangar's work here.]\"",
        "depo2.autor": "— [Client name, company]",
        "depo3.texto": "\"[Insert a real client testimonial about Hangar's work here.]\"",
        "depo3.autor": "— [Client name, company]",

        "contato.eyebrow": "CONTROL TOWER",
        "contato.titulo": "Ready for takeoff?",
        "contato.lead": "Talk to the team and tell us what your company needs to communicate.",

        "footer.tagline": "Communication and technology under the same roof.",
        "footer.institucional": "Company",
        "footer.razaosocial": "Legal name: Hangar Creative Hub LTDA",
        "footer.cnpj": "Company ID (CNPJ): 55.373.242/0001-12",
        "footer.endereco": "Address: Rua Frei Mansueto, 1289 - Varjota, Fortaleza - CE, 60175-157, Brazil",
        "footer.contato": "Contact",
        "footer.email": "Email: contact@hangarcreativehub.com",
        "footer.legal": "Legal",
        "footer.privacidade": "Privacy & Cookies Policy",
        "footer.copy": "© 2026 Hangar Creative Hub. All rights reserved."
    },

    es: {
        "nav.sobre": "Nosotros",
        "nav.servicos": "Servicios",
        "nav.cases": "Casos",
        "nav.metodo": "Método",
        "nav.contato": "Contacto",

        "hero.eyebrow": "RUTA · COMUNICACIÓN Y TECNOLOGÍA",
        "hero.subtitle": "Tú y tu empresa volando más alto en comunicación y tecnología.",
        "hero.scroll": "conoce la agencia",

        "bubble.1": "Producción de Contenido",
        "bubble.2": "Periodismo",
        "bubble.3": "Branding",
        "bubble.4": "Estrategia",
        "bubble.5": "Fotografía",
        "bubble.6": "Audiovisual",
        "bubble.7": "Social Media",
        "bubble.8": "Diseño",

        "btn.portfolio": "Portafolio",
        "btn.cap": "Habla con la Cap",
        "btn.team": "Habla con el equipo para volar más alto",

        "board.1": "BRANDING", "board.2": "FOTOGRAFÍA", "board.3": "SOCIABILIDAD",
        "board.4": "DISEÑO", "board.5": "AUDIOVISUAL", "board.6": "CONSULTORÍA",
        "board.7": "MEDIOS PAGOS", "board.8": "WEB DESIGN", "board.9": "PROGRAMACIÓN",
        "board.10": "PERIODISMO DIGITAL",

        "servicos.eyebrow": "CARTA DE SERVICIOS",
        "servicos.titulo": "Lo que despega con nosotros",
        "servicos.lead": "De la estrategia a la entrega, cada servicio tiene un responsable, un método y un resultado esperado — nada de paquetes genéricos.",

        "servico.branding.titulo": "Branding",
        "servico.branding.desc": "Identidad visual, naming y reposicionamiento de marca con coherencia del logo al punto de venta.",
        "servico.jornalismo.titulo": "Periodismo",
        "servico.jornalismo.desc": "Contenido con investigación y autoridad editorial para marcas que quieren ser fuente, no solo anunciante.",
        "servico.fotografia.titulo": "Fotografía",
        "servico.fotografia.desc": "Producción de imagen para producto, gastronomía, industria e institucional, con dirección de arte propia.",
        "servico.audiovisual.titulo": "Audiovisual",
        "servico.audiovisual.desc": "Guion, filmación y edición para redes, institucional y campañas con formato pensado por canal.",
        "servico.social.titulo": "Social Media",
        "servico.social.desc": "Planificación editorial, producción y gestión de comunidad con calendario y métricas mensuales.",
        "servico.performance.titulo": "Performance",
        "servico.performance.desc": "Medios pagos y lectura de indicadores para transformar audiencia en oportunidad de negocio.",
        "servico.design.titulo": "Diseño",
        "servico.design.desc": "Piezas gráficas, manipulación de imagen y materiales de campaña alineados a la identidad de marca.",
        "servico.estrategia.titulo": "Estrategia",
        "servico.estrategia.desc": "Diagnóstico, posicionamiento y plan de comunicación con metas claras antes de cualquier producción.",

        "cases.eyebrow": "DIARIO DE VUELO",
        "cases.titulo": "Casos que ya volaron",
        "cases.lead": "Una selección de proyectos reales, con problema, estrategia, ejecución y resultado — como quien contrata necesita verlo.",
        "cases.cta": "Ver portafolio completo",

        "case.problema": "Problema", "case.estrategia": "Estrategia",
        "case.execucao": "Ejecución", "case.resultado": "Resultado",
        "case.metricaplaceholder": "[insertar métrica real de resultado]",

        "case1.tag": "REBRANDING · EDRO",
        "case1.titulo": "Reposicionamiento de marca",
        "case1.problema": "Identidad visual desactualizada, sin coherencia entre logo, flota y uniformes.",
        "case1.estrategia": "Rebranding completo con nuevo símbolo, paleta y sistema de aplicación por punto de contacto.",
        "case1.execucao": "Rediseño del logo, aplicado a flota, uniformes, papelería y artículos institucionales.",
        "case1.resultado": "Marca estandarizada en todos los puntos de contacto, con una percepción más profesional.",

        "case2.tag": "IDENTIDAD VISUAL · GASTRONOMÍA",
        "case2.titulo": "Marca para nuevo local gastronómico",
        "case2.problema": "Negocio nuevo sin identidad visual definida para la apertura de la tienda.",
        "case2.estrategia": "Construcción de marca desde cero: naming, logotipo y lenguaje visual para fachada y redes.",
        "case2.execucao": "Identidad aplicada en fachada, carta, empaques y contenido de apertura.",
        "case2.resultado": "Apertura con identidad coherente y lista para escalar a nuevas sucursales.",

        "case3.tag": "PERFORMANCE · REDES SOCIALES",
        "case3.titulo": "Lectura de datos para redes sociales",
        "case3.problema": "El cliente producía contenido sin monitorear la evolución de métricas y formatos.",
        "case3.estrategia": "Panel de performance con lectura mensual de evolución y recomendación de ajuste de ruta.",
        "case3.execucao": "Informes visuales y reuniones periódicas de lectura de indicadores con el cliente.",
        "case3.resultado": "Las decisiones de contenido pasaron a basarse en datos, no en suposiciones.",

        "case4.tag": "CONTENIDO · AUTORIDAD PERIODÍSTICA",
        "case4.titulo": "Contenido con investigación periodística",
        "case4.problema": "Marca con contenido genérico, sin diferenciación frente a competidores del sector.",
        "case4.estrategia": "Pauta y producción de contenido con técnica periodística para generar autoridad en el sector.",
        "case4.execucao": "Producción fotográfica y de texto en campo, con fuentes reales y verificación de información.",
        "case4.resultado": "Contenido con credibilidad editorial, distinto del estándar publicitario del sector.",

        "metodo.eyebrow": "PLAN DE VUELO",
        "metodo.titulo": "Cómo despega el trabajo",
        "metodo.lead": "Un método fijo detrás de cada proyecto, sin importar el tamaño de la empresa o el servicio contratado.",
        "metodo1.titulo": "Diagnóstico",
        "metodo1.desc": "Análisis de marca, competencia y madurez digital antes de proponer cualquier acción.",
        "metodo2.titulo": "Estrategia",
        "metodo2.desc": "Plan de comunicación con prioridades, canales y metas definidas junto con el cliente.",
        "metodo3.titulo": "Producción",
        "metodo3.desc": "Ejecución de branding, contenido, fotografía y audiovisual dentro del plan definido.",
        "metodo4.titulo": "Performance",
        "metodo4.desc": "Seguimiento de métricas y ajuste de ruta con informes periódicos.",

        "sobre.eyebrow": "TRIPULACIÓN",
        "sobre.titulo": "Quién está en la cabina",
        // ✅ ALTERADO: adicionado "tecnología" na lista
        "sobre.lead": "Hangar Creative Hub nació para ser el hub que reúne comunicación y tecnología en un solo lugar, evitando que las empresas necesiten contratar varios proveedores sueltos para contar su propia historia. El equipo reúne periodismo, diseño, fotografía, performance y tecnología bajo un mismo método, para que cada entrega sea coherente con la anterior.",

        "depo.eyebrow": "RELATO DE PASAJEROS",
        "depo.titulo": "Lo que dicen los clientes",
        "depo1.texto": "\"[Insertar un testimonio real de cliente sobre el trabajo de Hangar aquí.]\"",
        "depo1.autor": "— [Nombre del cliente, empresa]",
        "depo2.texto": "\"[Insertar un testimonio real de cliente sobre el trabajo de Hangar aquí.]\"",
        "depo2.autor": "— [Nombre del cliente, empresa]",
        "depo3.texto": "\"[Insertar un testimonio real de cliente sobre el trabajo de Hangar aquí.]\"",
        "depo3.autor": "— [Nombre del cliente, empresa]",

        "contato.eyebrow": "TORRE DE CONTROL",
        "contato.titulo": "¿Listo para despegar?",
        "contato.lead": "Habla con el equipo y cuéntanos qué necesita comunicar tu empresa.",

        "footer.tagline": "Comunicación y tecnología bajo el mismo techo.",
        "footer.institucional": "Institucional",
        "footer.razaosocial": "Razón social: Hangar Creative Hub LTDA",
        "footer.cnpj": "CNPJ: 55.373.242/0001-12",
        "footer.endereco": "Dirección: Rua Frei Mansueto, 1289 - Varjota, Fortaleza - CE, 60175-157, Brasil",
        "footer.contato": "Contacto",
        "footer.email": "Correo: contact@hangarcreativehub.com",
        "footer.legal": "Legal",
        "footer.privacidade": "Política de Privacidad y Cookies",
        "footer.copy": "© 2026 Hangar Creative Hub. Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', function () {

    let typingTimeout = null;

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.pt;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    }

    function startTypingEffect() {
        if (typingTimeout) clearTimeout(typingTimeout);
        const title = document.getElementById('typingTitle');
        if (!title) return;
        const text = "HANGAR CREATIVE HUB";
        title.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                title.textContent = text.substring(0, i + 1);
                i++;
                typingTimeout = setTimeout(type, 65);
            } else {
                title.innerHTML = text + '<span class="typing-cursor"></span>';
                typingTimeout = null;
            }
        }
        typingTimeout = setTimeout(type, 150);
    }

    function changeLanguage(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        applyTranslations(lang);
        startTypingEffect();
        localStorage.setItem('hangar-language', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            changeLanguage(this.getAttribute('data-lang'));
        });
    });

    const savedLang = localStorage.getItem('hangar-language') || 'pt';
    changeLanguage(savedLang);

    // Duplica o conteúdo do quadro de aptidões para loop contínuo
    const track = document.querySelector('.board-track');
    if (track) {
        track.innerHTML += track.innerHTML;
    }

    // Scroll reveal para seções
    document.querySelectorAll('.section, .case-card, .service-card, .flightpath li')
        .forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Carrossel de fotos dos cases
    document.querySelectorAll('.case-carousel').forEach(carousel => {
        const track = carousel.querySelector('.case-carousel-track');
        const slides = Array.from(carousel.querySelectorAll('.case-slide'));
        const dotsWrap = carousel.querySelector('.case-dots');
        const prevBtn = carousel.querySelector('.case-nav.prev');
        const nextBtn = carousel.querySelector('.case-nav.next');
        if (!track || slides.length === 0) return;

        let current = 0;
        let autoplayTimer = null;
        const autoplayDelay = parseInt(carousel.dataset.autoplay, 10) || 0;

        const dots = slides.map((_, i) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'case-dot';
            dot.setAttribute('aria-label', `Ir para imagem ${i + 1}`);
            dot.addEventListener('click', () => goTo(i, true));
            dotsWrap.appendChild(dot);
            return dot;
        });

        function render() {
            track.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
        }

        function goTo(index, userInitiated) {
            current = (index + slides.length) % slides.length;
            render();
            if (userInitiated) restartAutoplay();
        }

        function next(userInitiated) { goTo(current + 1, userInitiated); }
        function prev(userInitiated) { goTo(current - 1, userInitiated); }

        function stopAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
        }

        function startAutoplay() {
            stopAutoplay();
            if (autoplayDelay > 0 && slides.length > 1) {
                autoplayTimer = setInterval(() => next(false), autoplayDelay);
            }
        }

        function restartAutoplay() {
            startAutoplay();
        }

        if (prevBtn) prevBtn.addEventListener('click', () => prev(true));
        if (nextBtn) nextBtn.addEventListener('click', () => next(true));

        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        carousel.addEventListener('focusin', stopAutoplay);
        carousel.addEventListener('focusout', startAutoplay);

        // Swipe por toque
        let touchStartX = null;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            stopAutoplay();
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            if (touchStartX === null) return;
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(deltaX) > 40) {
                deltaX < 0 ? next(true) : prev(true);
            } else {
                startAutoplay();
            }
            touchStartX = null;
        });

        render();
        startAutoplay();
    });
});

document.addEventListener('touchstart', function () {}, { passive: true });