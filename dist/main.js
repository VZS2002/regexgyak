(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{var e;null===(e=document.getElementById("fizetes"))||void 0===e||e.addEventListener("click",(()=>{var e,t,n,l,d,o,a,m;let v=null===(e=document.getElementById("nev"))||void 0===e?void 0:e.value,u=null===(t=document.getElementById("orszag"))||void 0===t?void 0:t.value,y=null===(n=document.getElementById("varos"))||void 0===n?void 0:n.value,g=null===(l=document.getElementById("utca"))||void 0===l?void 0:l.value,s=null===(d=document.getElementById("iranyitoszam"))||void 0===d?void 0:d.value,i=null===(o=document.getElementById("bankkartyaszam"))||void 0===o?void 0:o.value,c=null===(a=document.getElementById("ellenorzokod"))||void 0===a?void 0:a.value,z=null===(m=document.getElementById("bankkartyanev"))||void 0===m?void 0:m.value;/^[a-z]{1,}$/.test(v)?/^[a-z]{1,}$/.test(u)?/^[a-z]{1,}$/.test(y)?/^[a-z 0-9]{1,}$/.test(g)?/^[A-Z0-9]{1,}$/.test(s)?/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(i)?/^[0-9]{3}$/.test(c)?/^[a-zA-Z" "]{1,}$/.test(z)?(document.body.innerHTML="Sikeres fizetés",document.body.style.color="green",document.body.style.fontSize="30px",document.body.style.marginTop="200px"):document.getElementById("szoveg").textContent="A kártyára írt név helytelenül lett megadva":document.getElementById("szoveg").textContent="Az ellenőrző kód helytelenül lett megadva":document.getElementById("szoveg").textContent="A bankkártya helytelenül lett megadva":document.getElementById("szoveg").textContent="Az irányítószám helytelenül lett megadva":document.getElementById("szoveg").textContent="Az utca helytelenül lett megadva":document.getElementById("szoveg").textContent="A város helytelenül lett megadva":document.getElementById("szoveg").textContent="Az ország helytelenül lett megadva":document.getElementById("szoveg").textContent="A név helytelenül lett megadva"}))}))})();