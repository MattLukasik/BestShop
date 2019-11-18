document.addEventListener('DOMContentLoaded', function (e) {
    console.log('loaded');


//    DROPDOWN MENU W KALKULATORZE//

    var dropBtn = document.querySelector('.form_fields_btn');
    var dropMenu = document.querySelector('.dropdown_visible');
    var arrowDown = document.querySelector('.form_fields_btn');


    dropBtn.addEventListener('click', function (e) {
        dropMenu.classList.toggle('dropdown_hidden');
        e.preventDefault();
        arrowDown.classList.toggle('btn_visible');
    });

    //definiowanie zmiennej z sumą całkowitą i zmiennych częściowych
    // przygotowanych do mnożenia

    var total = document.querySelector('.num_result_total');
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;


    //Przekazywanie w locie i mnożenie danych z pola ILOŚĆ PRODUKTÓW //
    //+POJAWIANIE BELKI
    var formFieldProd = document.getElementById('product_quant');
    var sourceNumProd = document.getElementById('source_quant_prod');
    var productResult = document.getElementById('product_result');
    var productBar = document.querySelector('.results.prod');

    formFieldProd.addEventListener('input', function (a, b) {
        if (this.value < 0 || this.value.includes(".") || this.value.includes(",")) {
            sourceNumProd.innerText = "Podaj liczbę całkowitą większą od 0";
            productResult.innerText = '$' + 0 * 0.5;
            productBar.style.visibility = 'visible';
            sum1 = 0 * 0.5;
            total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
                                                                                    //WALIDACJA INPUTU, MOŻNA TEŻ WSTAWIĆ DO INPUTUT W HTML:
        } else {                                                                  // min="0" oninput="validity.valid||(value='');"
            sourceNumProd.innerText = this.value + ' * $0.5';                      // DZIALA IDENTYCZNIE ALE NIE PRZEKAZUJE ALERTU
            productResult.innerText = '$' + this.value * 0.5;
            productBar.style.visibility = 'visible';
            sum1 = this.value * 0.5;
            total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
        }
        console.log(this.value);
    });


    //Przekazywanie w locie i mnożenie danych z pola ILOŚĆ ZAMÓWIEŃ //
    //+POJAWIANIE BELKI

    var formFieldOrder = document.getElementById('order_quant');
    var sourceNumOrder = document.getElementById('source_quant_order');
    var orderResult = document.getElementById('orders_result');
    var productOrd = document.querySelector('.results.ord');

    formFieldOrder.addEventListener('input', function () {
        if (this.value < 0 || this.value.includes(".") || this.value.includes(",")) {   //WALIDACJA INPUTU, MOŻNA TEŻ WSTAWIĆ DO INPUTUT W HTML:
            sourceNumOrder.innerText = "Podaj liczbę całkowitą większą od 0";           // min="0" oninput="validity.valid||(value='');"
            orderResult.innerText = '$' + 0 * 0.25;                                        // DZIALA IDENTYCZNIE ALE NIE PRZEKAZUJE ALERTU
            productOrd.style.visibility = 'visible';
            sum2 = 0 * 0.25;
            total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);

        } else {
            sourceNumOrder.innerText = this.value + ' * $0.5';
            orderResult.innerText = '$' + this.value * 0.25;
            productOrd.style.visibility = 'visible';
            sum2 = this.value * 0.25;
            total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
        }
    });

    //DODANIE PAKIETU + POJAWIENIE BELKI

    var optBasic = document.querySelector('.option.basic');
    var optProf = document.querySelector('.option.professional');
    var optPremium = document.querySelector('.option.premium');
    var optShown = document.querySelector('.form_fields_btn');
    var packBar = document.querySelector('.results.pack');
    var optPrice = document.querySelector('.num_result.package');
    var optPack = document.querySelector('.optPack');

    optBasic.addEventListener('click', function (e) {
        optShown.innerText = this.innerText;
        dropMenu.classList.toggle('dropdown_hidden');
        optPack.innerText = 'Basic';
        optPrice.innerText = '$' + 0;
        packBar.classList.remove('pack');
        arrowDown.classList.toggle('btn_visible');
        sum3 = 0;
        total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });

    optProf.addEventListener('click', function (e) {
        optShown.innerText = this.innerText;
        dropMenu.classList.toggle('dropdown_hidden');
        optPack.innerText = 'Professional';
        optPrice.innerText = '$' + 25;
        packBar.classList.remove('pack');
        arrowDown.classList.toggle('btn_visible');
        sum3 = 25;
        total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });
    optPremium.addEventListener('click', function (e) {
        optShown.innerText = this.innerText;
        dropMenu.classList.toggle('dropdown_hidden');
        optPack.innerText = 'Premium';
        optPrice.innerText = '$' + 60;
        packBar.classList.remove('pack');
        arrowDown.classList.toggle('btn_visible');
        sum3 = 60;
        total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });
    // DODANIE KSIĘGOWOŚCI I TERMINALA //
    //+pojawianie belki
    var accountCheck = document.getElementById('account');
    var rentalCheck = document.getElementById('rental');
    var accountingPrice = document.querySelector('.num_result.acc');
    var rentalPrice = document.querySelector('.num_result.terminal');
    var accBar = document.querySelector('.results.acc');
    var rentBar = document.querySelector('.results.rent');

    accountCheck.addEventListener('click', function (e) {
        accountingPrice.innerText = '$' + 25;
        accBar.classList.toggle('acc');
        if (accBar.classList.contains('acc')) {
            sum4 = 0;
        } else {
            sum4 = 25;
        }
        total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });

    rentalCheck.addEventListener('click', function (e) {
        rentalPrice.innerText = '$' + 30;
        rentBar.classList.toggle('rent');
        if (rentBar.classList.contains('rent')) {
            sum5 = 0;
        } else {
            sum5 = 30;
        }
        total.innerText = '$' + (sum1 + sum2 + sum3 + sum4 + sum5);
    });

    //HAMBURGER MENU W WERSJI MOBILNEJ

    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.page-nav-list');

    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('hamburger-active');
        navList.classList.toggle('nav_list_mobile');
    });

});



