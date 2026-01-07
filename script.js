// Sistema de Tradução Funcional - VERSÃO FINAL
document.addEventListener('DOMContentLoaded', function() {
    
    let isAnimating = false;
    let typingTimeout = null;
    
    // Adiciona delays diferentes para cada bolha (para efeito de onda)
    function setupBubbleAnimations() {
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach((bubble, index) => {
            bubble.style.setProperty('--i', index);
        });
    }
    
    // Função para iniciar digitação
    function startTypingEffect() {
        if (typingTimeout) clearTimeout(typingTimeout);
        
        const activeTitle = document.querySelector('.language-content.active h1');
        if (!activeTitle) return;
        
        const originalText = activeTitle.textContent || "HANGAR CREATIVE HUB";
        activeTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                activeTitle.textContent = originalText.substring(0, i + 1);
                i++;
                typingTimeout = setTimeout(typeWriter, 70);
            } else {
                activeTitle.innerHTML = originalText + '<span class="typing-cursor"></span>';
                typingTimeout = null;
            }
        }
        
        typingTimeout = setTimeout(typeWriter, 150);
    }
    
    // Função para mudar idioma
    function changeLanguage(lang) {
        if (isAnimating) return;
        
        const currentBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (currentBtn && currentBtn.classList.contains('active')) return;
        
        isAnimating = true;
        
        // Remove active de tudo
        document.querySelectorAll('.language-content, .lang-btn').forEach(el => {
            el.classList.remove('active');
        });
        
        // Ativa novo conteúdo
        const activeContent = document.getElementById(`content-${lang}`);
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        
        if (activeContent && activeBtn) {
            setTimeout(() => {
                activeContent.classList.add('active');
                activeBtn.classList.add('active');
                
                // Configura animações das bolhas para o novo conteúdo
                setTimeout(() => {
                    setupBubbleAnimations();
                    startTypingEffect();
                    isAnimating = false;
                }, 200);
            }, 30);
        }
        
        localStorage.setItem('hangar-language', lang);
    }
    
    // Eventos nos botões de idioma
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Carrega idioma salvo ou inicia em PT
    const savedLang = localStorage.getItem('hangar-language') || 'pt';
    
    // Inicialização
    setTimeout(() => {
        const ptContent = document.getElementById('content-pt');
        const ptButton = document.querySelector('.lang-btn[data-lang="pt"]');
        
        if (ptContent && ptButton) {
            ptContent.classList.add('active');
            ptButton.classList.add('active');
            
            // Configura animações iniciais
            setTimeout(() => {
                setupBubbleAnimations();
                startTypingEffect();
            }, 300);
        }
        
        // Se houver idioma salvo e não for PT, muda após 1.5 segundos
        if (savedLang && savedLang !== 'pt') {
            setTimeout(() => {
                changeLanguage(savedLang);
            }, 1500);
        }
    }, 200);
});

// Previne comportamentos padrão indesejados
document.addEventListener('touchstart', function() {}, {passive: true});