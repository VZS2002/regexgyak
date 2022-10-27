"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById("fizetes")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let nevellenorzo = /^[a-z]{1,}$/;
        let nev = (_a = document.getElementById('nev')) === null || _a === void 0 ? void 0 : _a.value;
        let orszagellenorzo = /^[a-z]{1,}$/;
        let orszag = (_b = document.getElementById('orszag')) === null || _b === void 0 ? void 0 : _b.value;
        let varosellenorzo = /^[a-z]{1,}$/;
        let varos = (_c = document.getElementById('varos')) === null || _c === void 0 ? void 0 : _c.value;
        let utcaellenorzo = /^[a-z 0-9]{1,}$/;
        let utca = (_d = document.getElementById('utca')) === null || _d === void 0 ? void 0 : _d.value;
        let iranyitoszamellenorzo = /^[A-Z0-9]{1,}$/;
        let iranyitoszam = (_e = document.getElementById('iranyitoszam')) === null || _e === void 0 ? void 0 : _e.value;
        let kartyaellenorzo = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
        let kartya = (_f = document.getElementById('bankkartyaszam')) === null || _f === void 0 ? void 0 : _f.value;
        let ellenorzokodellenorzo = /^[0-9]{3}$/;
        let ellenorzokod = (_g = document.getElementById('ellenorzokod')) === null || _g === void 0 ? void 0 : _g.value;
        let bankkartyanevellenorzo = /^[a-zA-Z" "]{1,}$/;
        let bankkartyanev = (_h = document.getElementById('bankkartyanev')) === null || _h === void 0 ? void 0 : _h.value;
        if (!nevellenorzo.test(nev)) {
            document.getElementById('szoveg').textContent = "A név helytelenül lett megadva";
        }
        else if (!orszagellenorzo.test(orszag)) {
            document.getElementById('szoveg').textContent = "Az ország helytelenül lett megadva";
        }
        else if (!varosellenorzo.test(varos)) {
            document.getElementById('szoveg').textContent = "A város helytelenül lett megadva";
        }
        else if (!utcaellenorzo.test(utca)) {
            document.getElementById('szoveg').textContent = "Az utca helytelenül lett megadva";
        }
        else if (!iranyitoszamellenorzo.test(iranyitoszam)) {
            document.getElementById('szoveg').textContent = "Az irányítószám helytelenül lett megadva";
        }
        else if (!kartyaellenorzo.test(kartya)) {
            document.getElementById('szoveg').textContent = "A bankkártya helytelenül lett megadva";
        }
        else if (!ellenorzokodellenorzo.test(ellenorzokod)) {
            document.getElementById('szoveg').textContent = "Az ellenőrző kód helytelenül lett megadva";
        }
        else if (!bankkartyanevellenorzo.test(bankkartyanev)) {
            document.getElementById('szoveg').textContent = "A kártyára írt név helytelenül lett megadva";
        }
        else {
            document.body.innerHTML = "Sikeres fizetés";
            document.body.style.color = "green";
            document.body.style.fontSize = "30px";
            document.body.style.marginTop = "200px";
        }
    });
});
