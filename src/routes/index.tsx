import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, LockKeyhole, ShieldCheck, Ticket, UserRound } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Especial DJ Lipe — 10 Anos | GHVE Eventos" },
    { name: "description", content: "Celebre uma década de música com o Especial DJ Lipe. Confira novidades e informações sobre ingressos." },
    { property: "og:title", content: "Especial DJ Lipe — 10 Anos | GHVE Eventos" },
    { property: "og:description", content: "Celebre uma década de música com o Especial DJ Lipe. Confira novidades e informações sobre ingressos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  const accountNotice = () => {
    const dialog = document.getElementById("account-notice");
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  };
  const closeAccountNotice = () => {
    const dialog = document.getElementById("account-notice");
    if (dialog instanceof HTMLDialogElement) dialog.close();
  };
  return <main className="event-site">
    <div className="announcement-bar">✦ UMA DÉCADA DE MÚSICA. UMA NOITE PARA FICAR NA HISTÓRIA.</div>
    <header className="site-header">
      <a className="brand-lockup" href="#inicio" aria-label="Especial DJ Lipe — início"><img className="header-event-logo" src="/logo-especial-10-anos.svg" alt="Especial 10 Anos DJ Lipe"/></a>
      <nav className="desktop-nav"><a href="#sobre">O especial</a><a href="#duvidas">Dúvidas</a></nav>
      <a className="header-account" href="#conta"><UserRound size={17}/> Minha conta</a>
    </header>
    <section className="hero" id="inicio"><div className="hero-content">
      
      <img className="hero-logo-image" src="/logo-especial-10-anos.svg" alt="Especial 10 Anos DJ Lipe"/>
      <p className="hero-subtitle">10 anos de história. Milhares de momentos.<br/> Uma noite para celebrar tudo isso junto.</p>
      <p className="hero-copy">Uma edição especial para quem fez parte dessa trajetória — e para quem ainda vai viver muita coisa com a gente.</p>
      <div className="hero-actions"><a className="button button-primary" href="#ingressos">QUERO MEU INGRESSO <ArrowRight size={19}/></a><a className="button button-secondary" href="#conta"><UserRound size={17}/> Acessar minha conta</a></div>
      <div className="hero-trust"><ShieldCheck size={16}/> Compra segura <i/> <LockKeyhole size={15}/> Seus dados protegidos</div>
    </div><div className="hero-side-note">GHVE EVENTOS • APRESENTA</div></section>
    <section className="producer-strip"><span className="producer-label">PRODUZIDO POR</span><img className="producer-logo-image" src="/logo-ghve-eventos.svg" alt="GHVE Eventos"/><span className="producer-divider"/><span className="producer-caption">Experiências que viram história.</span></section>
    <section className="intro-section section-wrap" id="sobre"><div className="section-kicker">MAIS QUE UMA FESTA</div><div className="intro-grid"><h2>UMA DÉCADA.<br/><em>INÚMERAS</em><br/>MEMÓRIAS.</h2><div className="intro-text"><p className="intro-lead">Algumas histórias merecem ser celebradas em grande estilo.</p><p>O Especial DJ Lipe — 10 anos de carreira nasce para reunir música, energia e pessoas que fizeram parte dessa caminhada. Uma edição comemorativa para celebrar o que já vivemos e tudo o que ainda vem pela frente.</p><p className="muted-copy">Em breve, mais detalhes sobre a trajetória do Lipe e sobre essa edição especial.</p><a className="text-link" href="#ingressos">Faça parte dessa história <ArrowRight size={17}/></a></div></div></section>
    <section className="tickets-section section-wrap" id="ingressos"><div className="section-kicker">GARANTA SEU LUGAR</div><div className="ticket-panel"><div className="ticket-panel-copy"><span className="ticket-overline">ESPECIAL DJ LIPE • 10 ANOS</span><h2>SUA PRÓXIMA<br/><em>MEMÓRIA COMEÇA AQUI.</em></h2><p>Estamos preparando os detalhes para você escolher seu ingresso com facilidade. Datas, lotes e valores serão publicados assim que forem confirmados.</p></div><div className="ticket-panel-action"><div className="ticket-icon"><Ticket size={29}/></div><strong>Ingressos em breve</strong><span>Volte para conferir as novidades.</span><a className="button button-primary button-full" href="#conta">CRIAR MINHA CONTA <ArrowRight size={18}/></a><small>Deixe seu acesso preparado para quando as vendas abrirem.</small></div></div></section>
    <section className="account-section" id="conta"><div className="account-inner"><div className="account-copy"><div className="section-kicker">SUA ÁREA</div><h2>DEIXE TUDO<br/><em>PRONTO.</em></h2><p>Crie sua conta para facilitar o acesso aos seus pedidos e ingressos.</p><ul><li><Check size={17}/> Acompanhe pedidos em um só lugar</li><li><Check size={17}/> Recupere o acesso pelo e-mail</li><li><Check size={17}/> Entre com segurança quando voltar</li></ul></div><div className="account-card"><div className="account-card-icon"><UserRound size={22}/></div><h3>Bem-vindo ao especial.</h3><p>Entre na sua conta ou crie seu cadastro para acompanhar as novidades.</p><button className="button button-primary button-full" onClick={accountNotice}>CRIAR CADASTRO <ArrowRight size={18}/></button><button className="button button-quiet button-full" onClick={accountNotice}>Já tenho uma conta</button><div className="account-security"><LockKeyhole size={14}/> Seus dados serão tratados com segurança.</div></div></div></section>
    <dialog id="account-notice" className="notice-dialog"><button className="dialog-close" aria-label="Fechar" onClick={closeAccountNotice}>×</button><span className="dialog-symbol"><ShieldCheck size={26}/></span><h2>Cadastro em preparação</h2><p>O cadastro será liberado quando a autenticação segura e a política de privacidade estiverem configuradas.</p><button className="button button-primary button-full" onClick={closeAccountNotice}>ENTENDI</button></dialog>
    <section className="faq-section section-wrap" id="duvidas"><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>SEM COMPLICAÇÃO.</h2><details><summary>Quando os ingressos estarão disponíveis?</summary><p>As datas e os valores serão publicados aqui quando forem confirmados oficialmente.</p></details><details><summary>Vou precisar criar uma conta para comprar?</summary><p>A experiência será pensada para você escolher o ingresso primeiro e informar os dados necessários durante o checkout.</p></details><details><summary>Como vou recuperar minha conta?</summary><p>A recuperação de senha será feita pelo e-mail cadastrado quando a autenticação estiver ativa.</p></details></section>
    <footer className="site-footer"><a className="footer-brand" href="#inicio" aria-label="Especial DJ Lipe — início"><img className="footer-event-logo" src="/logo-especial-10-anos.svg" alt="Especial 10 Anos DJ Lipe"/></a><p>Uma década de música. Uma noite para ficar na história.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} GHVE Eventos. Todos os direitos reservados.</span><span className="footer-producer">Produzido por <img className="footer-ghve-logo" src="/logo-ghve-eventos.svg" alt="GHVE Eventos"/></span></div></footer>
  </main>;
}