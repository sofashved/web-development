document.getElementById('translate').addEventListener('click', function() {
    const vydant = document.getElementById('vydan');
    const paslastnamet = document.getElementById('paslastname');
    const pasnamet = document.getElementById('pasname');
    const pasfathersnamet = document.getElementById('pasfathersname');
    const gendert = document.getElementById('gender');
    const birthplacet = document.getElementById('birthplace');

    if (vydant.innerText === 'ГУ МВД РОССИИ ПО Г. МОСКВЕ') {
        vydant.innerText = 'GU MVD OF RUSSIA IN MOSCOW';
        paslastnamet.innerText = 'SHVEDOVA';
        pasnamet.innerText = 'SOFYA';
        pasfathersnamet.innerText = 'SERGEEVNA';
        gendert.innerText = 'FEM';
        birthplacet.innerText = 'MOSCOW';
    }
    else {
        vydant.innerText = 'ГУ МВД РОССИИ ПО Г. МОСКВЕ';
        paslastnamet.innerText = 'ШВЕДОВА';
        pasnamet.innerText = 'СОФЬЯ';
        pasfathersnamet.innerText = 'СЕРГЕЕВНА';
        gendert.innerText = 'ЖЕН.';
        birthplacet.innerText = 'ГОР. МОСКВА';
    }
    })