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

// Botão "Voltar ao topo"
const btnTopo = document.createElement('a');
btnTopo.id = 'btnTopo';
btnTopo.href = '#';
btnTopo.className = 'btn-topo';
btnTopo.innerHTML = '↑';
document.body.appendChild(btnTopo);

const btnTopoEl = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopoEl.style.display = 'block';
  } else {
    btnTopoEl.style.display = 'none';
  }
});

// Scroll suave para o botão topo
btnTopoEl.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
