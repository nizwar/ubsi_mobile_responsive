
var css = '.aplikasi{width:90% !important;padding:0 40px;min-height:200px;margin:auto!important;float:none !important} #aplikasi{width:auto !important; float:none !important}body{width:100% !important;margin-top:60px}';
//Buat style, untuk nerapin CSS diatas
var style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

//Meta viewport, biasa dipake buat responsive (tapi di web ga ada tag ini dong )
var x = document.createElement('META');
x.setAttribute('name', 'viewport');
x.setAttribute('content', 'width=device-width, initial-scale=1');

//CSS sederhana yang saya buat waktu ikut program Web Mobile Spesialis
var linkCss = document.createElement('link');
linkCss.setAttribute('rel', 'stylesheet');
linkCss.setAttribute('type', 'text/css');
linkCss.setAttribute('href', 'https://nizwar-id.firebaseapp.com/css/main.css');

//Ambil head buat masukin item diatas
var head = document.head || document.getElementsByTagName('head')[0];
head.appendChild(x);
head.appendChild(linkCss);
head.appendChild(style);

//ambil class, ada class navigation-view apa belum? 
var divDrawer = document.getElementsByClassName('navigation-view')[0];

//Cek, kalo belum buat, kalo engga, yaudah skip
if (divDrawer == null) {
    //Buat menu navigasi
    divDrawer = document.createElement('DIV');
    divDrawer.setAttribute('class', 'navigation-view');
    divDrawer.setAttribute('style', 'left:0;overflow-y: scroll;');
    divDrawer.innerHTML = "<div class=\"nav-image\" style=\"background:url('https://nizwar-id.firebaseapp.com/src/img/main/gedung_bsi.jpg');\"><div class=\"back-nav\" onclick=\"simulasiDrawer(0)\"></div><label><h1>UBSI Explorer</h1><label>Universitas Bina Sarana Informatika</label></label></div>";

    //Buat UL aja
    var ulDrawer = document.createElement('ul');
    divDrawer.appendChild(ulDrawer);


    //Buat navigasi overlay disini
    var blank = document.createElement("DIV");
    blank.setAttribute('id', 'blank');
    blank.setAttribute('onclick', 'simulasiDrawer(0)');

    //Memindahkan menu Arrowsidemenu kedalam elemen lain
    var drawerMenu = document.getElementsByClassName('arrowsidemenu')[0].getElementsByTagName('li');
    for (i = 0; i < drawerMenu.length; i++) {
        ulDrawer.appendChild(drawerMenu[i]);
    }
    
    //Masukin yg diatas 
    document.body.appendChild(blank);
    document.body.appendChild(divDrawer);
}


//ambil class, ada class header-container apa belum? 
var topBar = document.getElementsByClassName('header-container')[0];

//Cek, kalo belum ada, langsung buat, kalo engga, yaudah skip
if (topBar == null) {
    topBar = document.createElement('div');
    topBar.setAttribute('class', 'header-container');
    topBar.setAttribute('style', 'height:56px;position:fixed');

    var btnDrawer = document.createElement('span');
    btnDrawer.setAttribute('class', 'menu-drawer');
    btnDrawer.setAttribute('onclick', 'simulasiDrawer(1)');
    btnDrawer.innerHTML = "&equiv;";
    topBar.appendChild(btnDrawer);

    judul = document.createElement('span');
    judul.setAttribute('class', 'profile-title');
    judul.innerHTML = "UBSI Students Explorer by Nizwar";
    topBar.appendChild(judul);

    document.body.appendChild(topBar);
}

//Sembunyiin navigasiDrawer
simulasiDrawer(0); 

//Jalankan 2x, biar bersih
cleanEverything();
cleanEverything();


//Fungsi buat simulasi drawer
function simulasiDrawer(mode) {
    if (mode == 1) {
        divDrawer.style.left = "0px";
        blank.style.display = "block";
    } else {
        divDrawer.style.left = "-320px";
        blank.style.display = "none";
    }
}

//Bersihin menu-menu dan tampilan biar responsive
function cleanEverything() {
    var elementTDs = document.getElementsByTagName('td');
    for (var item in elementTDs) {
        var element = elementTDs[item];
        try {
            if (element.getAttribute('background') != null) {
                element.parentNode.removeChild(element);
            }
        } catch (e) { }
        try {
            if (element.getAttribute('bgcolor') != null) {
                element.parentNode.removeChild(element);
            }
        } catch (e) { }
        try {
            if (element.getAttribute('width') == '25%') {
                element.parentNode.removeChild(element);
            }
        } catch (e) { }
    }
    var elementsTable = document.getElementsByTagName('table');
    for (var item in elementsTable) {
        var element = elementsTable[item];
        try {
            if (element.getAttribute('bgcolor') == '#FFFFFF') {
                element.setAttribute('width', '100%');
                element.setAttribute('style', 'width:auto;height:auto;position:absolute;top:0;left:0');
            }
        } catch (e) { }
    }
}