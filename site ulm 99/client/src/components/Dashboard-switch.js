

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.sidebar-link');
  const content = document.getElementById('dashboard-content');
  const title = document.getElementById('dashboard-title');

  
  const sections = {
    'dashboard-accueil': {
      title: 'Accueil',
      html: `<div class="dashboard-welcome">
        <h2>Bienvenue sur votre dashboard ULM Records !</h2>
        <p>Gérez vos sons, artistes, événements et plus encore depuis cet espace premium.</p>
      </div>`
    },
    'dashboard-sons': {
      title: 'Sons',
      html: `<div class="dashboard-section">
        <h2>Gestion des Sons</h2>
        <p>Ajoutez, modifiez ou supprimez vos sons ici.</p>
      </div>`
    },
    'dashboard-artistes': {
      title: 'Artistes',
      html: `<div class="dashboard-section">
        <h2>Gestion des Artistes</h2>
        <p>Ajoutez, modifiez ou supprimez vos artistes ici.</p>
      </div>`
    },
    'dashboard-evenements': {
      title: 'Événements',
      html: `<div class="dashboard-section">
        <h2>Gestion des Événements</h2>
        <p>Ajoutez, modifiez ou supprimez vos événements ici.</p>
      </div>`
    },
    'dashboard-galerie': {
      title: 'Galerie',
      html: `<div class="dashboard-section">
        <h2>Galerie</h2>
        <p>Ajoutez ou supprimez des images de la galerie.</p>
      </div>`
    },
    'dashboard-recrutement': {
      title: 'Recrutement',
      html: `<div class="dashboard-section">
        <h2>Recrutement</h2>
        <p>Gérez les candidatures et les membres.</p>
      </div>`
    },
    'dashboard-contact': {
      title: 'Contact',
      html: `<div class="dashboard-section">
        <h2>Contact</h2>
        <p>Consultez les messages reçus via le formulaire de contact.</p>
      </div>`
    }
  };

  function switchSection(id) {
    
    links.forEach(link => link.classList.remove('active'));
  
    const activeLink = document.getElementById(id + '-link');
    if (activeLink) activeLink.classList.add('active');
    
    if (sections[id]) {
      title.textContent = sections[id].title;
      content.innerHTML = sections[id].html;
    }
  }

  // Ajoute les listeners sur chaque lien
  links.forEach(link => {
    link.addEventListener('click', function () {
      const sectionId = this.dataset.section;
      switchSection(sectionId);
    });
  });

 
  switchSection('dashboard-accueil');
});
