// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Criar botão topo
const btnTopo = document.createElement('a');
btnTopo.id = 'btnTopo';
btnTopo.href = '#';
btnTopo.className = 'btn-topo';
btnTopo.innerHTML = '↑';
document.body.appendChild(btnTopo);

const btnTopoEl = document.getElementById('btnTopo');

// Mostrar/ocultar botão topo
window.addEventListener('scroll', () => {
  btnTopoEl.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll suave ao clicar no botão topo
btnTopoEl.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
