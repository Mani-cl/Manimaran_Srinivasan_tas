const openMenu=document.getElementById("openmenu");
const closeMenu=document.getElementById("closemenu");
const menubox=document.getElementById("menu-box");
openMenu.addEventListener("click", function(){
    menubox.style.marginLeft="0";
})
closeMenu.addEventListener("click", function(){
    menubox.style.marginLeft="-792px";
});
var language= {
    eng:{
        link11:"An Idea",
        link12:"Apply Sapni",
        link23:"For entrepreneurs",
        link34:"Bank of dreams",
        link41:"Dreams are supported",
        link55:"99 Inspirational Stories",
        maincontent5:"SparkleHeart is a society created to help people fulfill even their wildest dreams. Dreamers and their supporters meet here - companies that lend a helping hand to make the world a better place for all of us together. We are ready to help you fulfill your dream. As a basis for inspiration - 99 stories about Latvian women are also created.",
        subheading11:"WANT TO FULFILL YOUR DREAM?",
        subheading22:"WANT TO HELP SOMEONE FULFILL A DREAM?",
        sublink22:"For dreamers",
        sublink24:"For entrepreneurs",
        formheading11:"CONTACT US",


    },
    lt:{
        link111:"Ideja",
        link121:"Piesaki Sapni",
        link231:"Uzņēmējiem",
        link341:"Sapņu banka",
        link411:"Sapņus atbalsta",
        link551:"99 Iedvesmas stāsti",
        maincontent51:"SparkleHeart ir biedrība, kas radīta, lai palīdzētu cilvēkiem piepildīt pat pārdrošākos sapņus. Šeit satiekas sapņotāji un viņu atbalstītāji - uzņēmumi, kas sniedz palīdzīgu roku, lai kopā pasauli padarītu par labāku vietu mums visiem.Mēs esam gatavi palīdzēt Tev piepildīt sapni. Kā pamats iedvesmai - tiek radīti arī 99 stāsti par Latvijas sievietēm.",
        subheading111:"VĒLIES PIEPILDĪT SAVU SAPNI?",
        subheading221:"VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?",
        sublink221:"Sapņotājiem",
        sublink241:"Uzņēmējiem",
        formheading111:"SAZINĀTIES AR MUMS",
    },
}
const english=document.getElementById("en");
const latvian= document.getElementById("lv");
var firstLink=document.getElementById("firstlink");
var secondLink=document.getElementById("secondlink");
var thirdLink=document.getElementById("thirdlink");
var fourthLink=document.getElementById("fourthlink");
var fifthLink=document.getElementById("fifthlink");
var sixthLink=document.getElementById("sixthlink");
var mainContent=document.getElementById("main-content");
var subHeading1=document.getElementById("sub-heading1");
var subHeading2=document.getElementById("sub-heading2");
var subLink1=document.getElementById("sub-link");
var subLink2=document.getElementById("sub-link2");
var formHeading=document.getElementById("form-heading");
english.addEventListener("click", function(){
    firstLink.textContent=language.eng.link11;
    secondLink.textContent=language.eng.link12;
    thirdLink.textContent=language.eng.link23;
    fourthLink.textContent=language.eng.link34;
    fifthLink.textContent=language.eng.link41;
    sixthLink.textContent=language.eng.link55;
    mainContent.textContent=language.eng.maincontent5;
    subHeading1.textContent=language.eng.subheading11;
    subHeading2.textContent=language.eng.subheading22;
    subLink1.textContent=language.eng.sublink22;
    subLink2.textContent=language.eng.sublink24;
    formHeading.textContent=language.eng.formheading11;

})