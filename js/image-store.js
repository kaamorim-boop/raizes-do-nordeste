(function(){
  const DB_NAME='raizesNordesteImages'; const STORE='productImages'; const VERSION=1;
  function open(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB_NAME,VERSION);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains(STORE))r.result.createObjectStore(STORE);};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
  async function put(id,blob){const db=await open();return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(blob,String(id));tx.oncomplete=()=>{db.close();res(true)};tx.onerror=()=>{db.close();rej(tx.error)}})}
  async function get(id){const db=await open();return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readonly');const r=tx.objectStore(STORE).get(String(id));r.onsuccess=()=>{db.close();res(r.result||null)};r.onerror=()=>{db.close();rej(r.error)}})}
  async function remove(id){const db=await open();return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(String(id));tx.oncomplete=()=>{db.close();res(true)};tx.onerror=()=>{db.close();rej(tx.error)}})}
  async function resolve(src){if(!src)return '';if(!String(src).startsWith('idb://product/'))return src;const id=String(src).split('/').pop();const blob=await get(id);return blob?URL.createObjectURL(blob):''}
  async function migrate(){
    let list; try{list=JSON.parse(localStorage.getItem('adminProducts')||'null')}catch{return}
    if(!Array.isArray(list))return;
    let changed=false;
    for(const p of list){if(typeof p.imagem==='string'&&p.imagem.startsWith('data:')){try{const res=await fetch(p.imagem);const blob=await res.blob();await put(p.id,blob);p.imagem='idb://product/'+p.id;changed=true;}catch(e){console.warn('Migração de imagem falhou',p.id,e)}}}
    if(changed){try{localStorage.setItem('adminProducts',JSON.stringify(list))}catch(e){console.warn('Não foi possível limpar imagens antigas',e)}}
  }
  window.ImageStore={put,get,remove,resolve,migrate};
  window.ImageStoreReady=migrate().catch(e=>{console.warn('Migração de imagens:',e);});
})();
