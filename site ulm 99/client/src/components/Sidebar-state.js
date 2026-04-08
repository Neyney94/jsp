
function setSidebarLoggedIn(isLoggedIn) {
  const out = document.querySelector('.sidebar-logged-out');
  const inDiv = document.querySelector('.sidebar-logged-in');
  if (isLoggedIn) {
    out.style.display = 'none';
    inDiv.style.display = 'flex';
  } else {
    out.style.display = 'block';
    inDiv.style.display = 'none';
  }
}



document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-login');
  if (btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      setSidebarLoggedIn(true);
    });
  }
  const logout = document.querySelector('.sidebar-profile-logout');
  if (logout) {
    logout.addEventListener('click', function() {
      setSidebarLoggedIn(false);
    });
  }
});
