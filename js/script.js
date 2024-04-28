const navPersegi = document.querySelector("nav button:nth-child(1)");
const navPersegiPanjang = document.querySelector("nav button:nth-child(2)");
const navSegitiga = document.querySelector("nav button:nth-child(3)");
const sectionPersegi = document.querySelector("section#persegi");
const sectionPersegiPanjang = document.querySelector("section#persegi-panjang");
const sectionSegitiga = document.querySelector("section#segitiga");

navPersegi.addEventListener("click", () => {
    sectionPersegi.classList.add("active");
    sectionPersegiPanjang.classList.remove("active");
    sectionSegitiga.classList.remove("active");
});

navPersegiPanjang.addEventListener("click", () => {
    sectionPersegiPanjang.classList.add("active");
    sectionPersegi.classList.remove("active");
    sectionSegitiga.classList.remove("active");
});

navSegitiga.addEventListener("click", () => {
    sectionSegitiga.classList.add("active");
    sectionPersegi.classList.remove("active");
    sectionPersegiPanjang.classList.remove("active");
});

const btnSubmit = document.getElementsByClassName("btn-submit");
const side1 = document.getElementsByClassName("side1");
const side2 = document.getElementsByClassName("side2");
const side3 = document.getElementsByClassName("side3");

btnSubmit[0].addEventListener("click", (e) => {
    if(sectionPersegi.contains("active")) {
        e.preventDefault();
        countLuasPersegi();
        countKelilingPersegi();
    }
});

btnSubmit[1].addEventListener("click", (e) => {
    if(sectionPersegiPanjang.contains("active")) {
        e.preventDefault();
        countLuasPersegiPanjang();
        countKelilingPersegiPanjang();
    }
});

btnSubmit[2].addEventListener("click", (e) => {
    if(sectionSegitiga.contains("active")) {
        e.preventDefault();
        countLuasSegitigaa();
        countKelilingSegitiga();
    }
});

function countLuasPersegi() {
    const inputValue = document.getElementById("sisi-persegi").value;
    side1[0].innerText = inputValue;

    if(!this.Helper.checkHitung(value)) {
        const show = document.createElement("p");
        show.classList = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

        show.innerText = "Input Angka Dengan Benar!"
        this.result(nilai);
    } else {
        let valueInt = parseInt(value);
        let hasil = valueInt * valueInt;

        const nilai = document.createElement("p");
        
        nilai.innerText = `L = ${valueInt} x ${valueInt}\nL = ${hasil}`;
        this.result(nilai);
    }

    document.querySelector("section:persegi").innerText = inputValue * inputValue;
}