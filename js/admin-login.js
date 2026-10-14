const form=document.getElementById('admin-login-form');
const msg=document.getElementById('admin-login-message');
const ADMIN_EMAIL='admin@raizes.local';
const ADMIN_PASSWORD='admin123';
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const email=document.getElementById('admin-email').value.trim().toLowerCase();const password=document.getElementById('admin-password').value;if(email===ADMIN_EMAIL&&password===ADMIN_PASSWORD){localStorage.setItem('adminLogged','1');location.href='admin.html';return;}msg.hidden=false;msg.textContent='Credenciais administrativas inválidas. Use os dados de demonstração exibidos abaixo.';});
