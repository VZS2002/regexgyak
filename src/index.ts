document.addEventListener("DOMContentLoaded", ()=> {

    document.getElementById("fizetes")?.addEventListener("click", ()=>{


            let nevellenorzo = /^[a-z]{1,}$/
            let nev : string= (document.getElementById('nev') as HTMLInputElement)?.value;

            let orszagellenorzo = /^[a-z]{1,}$/
            let orszag : string= (document.getElementById('orszag') as HTMLInputElement)?.value;
            
            let varosellenorzo = /^[a-z]{1,}$/
            let varos : string= (document.getElementById('varos') as HTMLInputElement)?.value;

            let utcaellenorzo = /^[a-z 0-9]{1,}$/
            let utca : string= (document.getElementById('utca') as HTMLInputElement)?.value;
            
            let iranyitoszamellenorzo = /^[A-Z0-9]{1,}$/
            let iranyitoszam : string= (document.getElementById('iranyitoszam') as HTMLInputElement)?.value;
            
            let kartyaellenorzo = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
            let kartya : string= (document.getElementById('bankkartyaszam') as HTMLInputElement)?.value;
            
            let ellenorzokodellenorzo = /^[0-9]{3}$/
            let ellenorzokod : string= (document.getElementById('ellenorzokod') as HTMLInputElement)?.value;

            let bankkartyanevellenorzo = /^[a-zA-Z" "]{1,}$/
            let bankkartyanev : string= (document.getElementById('bankkartyanev') as HTMLInputElement)?.value;
            
            if (!nevellenorzo.test(nev)){
               (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "A név helytelenül lett megadva"
            }
            else if (!orszagellenorzo.test(orszag))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "Az ország helytelenül lett megadva"
                
            }
            else if (!varosellenorzo.test(varos))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "A város helytelenül lett megadva"
            }
            else if (!utcaellenorzo.test(utca))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "Az utca helytelenül lett megadva"
            }   
            else if (!iranyitoszamellenorzo.test(iranyitoszam))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "Az irányítószám helytelenül lett megadva"
            }
            else if (!kartyaellenorzo.test(kartya))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "A bankkártya helytelenül lett megadva"
            }
            else if (!ellenorzokodellenorzo.test(ellenorzokod))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "Az ellenőrző kód helytelenül lett megadva"
            }
            else if (!bankkartyanevellenorzo.test(bankkartyanev))
            {
                (document.getElementById('szoveg') as HTMLParagraphElement).textContent = "A kártyára írt név helytelenül lett megadva"
            }
            else {
                document.body.innerHTML ="Sikeres fizetés";
                document.body.style.color = "green";
                document.body.style.fontSize = "30px";
                document.body.style.marginTop = "200px";

            }



    });
});