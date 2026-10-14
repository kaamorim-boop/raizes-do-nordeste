(window.ImageStoreReady||Promise.resolve()).then(()=>{
const cart=JSON.parse(localStorage.getItem('cart')||'[]');
const unit=JSON.parse(localStorage.getItem('selectedUnit')||'null');
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const mini=document.getElementById('mini-items');
const form=document.getElementById('checkout-form');
const paymentInputs=document.querySelectorAll('input[name="payment"]');
const cardFields=document.getElementById('card-fields');
const resultMode=document.getElementById('simulation-result');
if(!cart.length){location.href='carrinho.html';return;}
const subtotal=cart.reduce((s,i)=>s+i.preco*i.quantidade,0);
const promo=localStorage.getItem('checkoutPromo')==='1'?subtotal*.1:0;
const loyalty=localStorage.getItem('checkoutPoints')==='1'?Math.min(5,Math.max(0,subtotal-promo)):Number(localStorage.getItem('loyaltyReward')||'0');
const discount=promo+loyalty;
const total=Math.max(0,subtotal-discount);
document.getElementById('subtotal').textContent=money(subtotal);
document.getElementById('discount').textContent='- '+money(discount);
document.getElementById('total').textContent=money(total);
document.getElementById('unit').value=unit?unit.nome+' • '+unit.endereco:'Unidade não selecionada';
Promise.all(cart.map(async i=>{
  const src=await ImageStore.resolve(i.imagem)||i.imagem;
  return `<div class="mini-item"><img src="${src}" alt="${i.nome}" onerror="this.style.display='none'"><div><strong>${i.quantidade}x ${i.nome}</strong><small>${money(i.preco*i.quantidade)}</small></div></div>`;
})).then(cards=>mini.innerHTML=cards.join(''));
paymentInputs.forEach(r=>r.addEventListener('change',()=>{
  cardFields.classList.toggle('visible',document.querySelector('input[name="payment"]:checked').value==='card');
}));
form.addEventListener('submit',e=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  const method=document.querySelector('input[name="payment"]:checked').value;
  const customer={nome:document.getElementById('name').value.trim(),email:document.getElementById('email').value.trim(),telefone:document.getElementById('phone').value.trim()};
  localStorage.setItem('customerData',JSON.stringify(customer));
  const simulationStatus=resultMode?.value||'aprovado';
  localStorage.setItem('paymentData',JSON.stringify({metodo:method,total,simulado:true,status:simulationStatus}));
  document.getElementById('form-area').hidden=true;
  document.getElementById('processing').classList.add('visible');
  setTimeout(()=>{
    const order={id:'RN-'+new Date().getFullYear()+'-'+Math.floor(10000+Math.random()*90000),data:new Date().toLocaleString('pt-BR'),status:'Recebido',statusIndex:0,total,unit,items:cart,cliente:customer.nome,pagamento:method};
    const result=document.getElementById('result');
    const title=result.querySelector('h2');
    const orders=JSON.parse(localStorage.getItem('orders')||'[]');
    document.getElementById('processing').classList.remove('visible');
    if(simulationStatus==='aprovado'){
      orders.unshift(order);
      localStorage.setItem('orders',JSON.stringify(orders));
      localStorage.setItem('lastOrder',JSON.stringify(order));
      title.textContent='Pagamento aprovado!';
      document.getElementById('order-number').textContent=order.id;
      document.getElementById('payment-return').textContent='Retorno do serviço externo: pagamento aprovado (simulação).';
      result.classList.add('visible');
      localStorage.removeItem('cart');
      localStorage.removeItem('loyaltyReward');
      const u=JSON.parse(localStorage.getItem('raizesUser')||'null');
      if(u){
        u.pedidos=(u.pedidos||0)+1;
        const points=Number(localStorage.getItem('raizesPoints')||u.pontos||120)+Math.floor(total);
        localStorage.setItem('raizesPoints',String(points));
        u.pontos=points;
        localStorage.setItem('raizesUser',JSON.stringify(u));
      }
    }else{
      localStorage.removeItem('lastOrder');
      title.textContent=simulationStatus==='recusado'?'Pagamento recusado':'Serviço de pagamento indisponível';
      document.getElementById('order-number').textContent='Não gerado';
      document.getElementById('payment-return').textContent=simulationStatus==='recusado'?'Não foi possível concluir o pagamento. Tente novamente ou escolha outra forma de pagamento.':'Não foi possível comunicar com o serviço externo. Tente novamente em instantes.';
      result.classList.add('visible');
    }
  },1000);
});
});
