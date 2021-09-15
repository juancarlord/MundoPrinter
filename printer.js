const { jsPDF } = require("jspdf");
const { print } = require('pdf-to-printer');
async function impresora() {
    var festivos = ["5/17/2021", "6/7/2021", "6/14/2021", "7/5/2021", "7/20/2021", "8/16/2021", "10/18/2021",
    "11/1/2021", "11/15/2021", "12/8/2021", "1/10/2022", "3/21/2022", "4/14/2022", "4/15/2022", "5/17/2022",
    "6/20/2022", "6/27/2022", "7/4/2022", "7/20/2022", "8/15/2022", "10/17/2022", "11/7/2022", "11/14/2022",
    "12/8/2022"
    ]
    var entidad = document.getElementById('entidad').value;
    var fecha = new Date();
    if (entidad == "PREPAGADA") {
        switch(fecha.getDay()){
            case 1:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (document.getElementById("hayTac").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 2:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (document.getElementById("hayTac").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 3:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (document.getElementById("hayTac").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 4:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                if (document.getElementById("hayTac").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+3);
                }
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+3);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 5:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+3);
                if (document.getElementById("hayTac").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 6:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+2);
                if (document.getElementById("hayTac").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            default:
                newFecha = 'Los domingos no atendemos :)';
                break;
        }
        
    }
    else if(entidad == 'EPS'){
        switch(fecha.getDay()){
            case 1:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+3);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 2:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+3);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+3);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+3)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 3:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+5);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 4:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+5);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 5:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+5);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 6:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+4);
                if (document.getElementById("hayFestivo").checked) {
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString())) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString()
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString();
                break;
            default:
                newFecha = 'Los domingos no atendemos :)';
                break;
        }
    }
    else if (entidad == "PARTICULAR") {
            switch (fecha.getDay()) {
                case 1:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    if (hour >= 12) {
                        recogerNormal.setDate(recogerNormal.getDate() + 1);
                        if (document.getElementById("hayFestivo").checked) {
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                        }
                        if (festivos.includes(recogerNormal.toLocaleDateString())) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString()
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString();
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString() + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 2:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    if (hour >= 12) {
                        recogerNormal.setDate(recogerNormal.getDate() + 1);
                        if (document.getElementById("hayFestivo").checked) {
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                        }
                        if (festivos.includes(recogerNormal.toLocaleDateString())) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString()
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString();
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString() + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 3:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    if (hour >= 12) {
                        recogerNormal.setDate(recogerNormal.getDate() + 1);
                        if (document.getElementById("hayFestivo").checked) {
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                        }
                        if (festivos.includes(recogerNormal.toLocaleDateString())) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString()
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString();
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString() + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 4:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    if (hour >= 12) {
                        recogerNormal.setDate(recogerNormal.getDate() + 1);
                        if (document.getElementById("hayFestivo").checked) {
                            recogerNormal.setDate(recogerNormal.getDate()+3);
                        }
                        if (festivos.includes(recogerNormal.toLocaleDateString())) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+3)
                            newFecha = newFecha.toLocaleDateString()
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString();
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString() + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 5:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    if (hour >= 12) {
                        recogerNormal.setDate(recogerNormal.getDate() + 3);
                        if (document.getElementById("hayFestivo").checked) {
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                        }
                        if (festivos.includes(recogerNormal.toLocaleDateString())) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString()
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString();
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString() + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 6:
                    var recogerNormal = new Date();
                    recogerNormal.setDate(recogerNormal.getDate() + 2);
                    if (document.getElementById("hayFestivo").checked) {
                        recogerNormal.setDate(recogerNormal.getDate()+1);
                    }
                    if (festivos.includes(recogerNormal.toLocaleDateString())) {
                        newFecha = recogerNormal
                        newFecha.setDate(newFecha.getDate()+1)
                        newFecha = newFecha.toLocaleDateString()
                        break;
                    }
                    newFecha = recogerNormal.toLocaleDateString();
                    console.log(newFecha);
                    break;
                default:
                    newFecha = 'Los domingos no atendemos :)';
                    console.log(newFecha);
                    break;
            }

        }


    var documento = document.getElementById('documento').value;
    var cedula = document.getElementById('cedula').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var nombre1 = document.getElementById('nombre1').value;
    var nombre2 = document.getElementById('nombre2').value;
    
    var estudios = document.getElementById('estudios-dropdown').value;
    var nombreCompleto = nombre1+' '+nombre2+' '+apellido1+' '+apellido2;
    var lineHeight = 1.2, pageWidth = 72, margin = 0.5, maxLineWidth = pageWidth - margin *2, oneLineHeight = (10*lineHeight)/72;
    document.getElementById("itf").style.display = "none";
    JsBarcode("#itf", cedula, {format: "code128", width: 2, height: 50, displayValue: false});

    const img = document.querySelector('img#itf');
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [72, 310]
    });
    doc.setFontSize(12);
    doc.setFont("helvetica", 'bold')
    doc.text("MUNDO RADIOLOGICO S.A.S", 7, 10);
    doc.setFontSize(9)
    doc.text('TICKET DE RESULTADOS', 16, 15)
    doc.text(entidad, 50, 25)
    doc.text('Nombre del paciente', 2.5, 30)
    doc.setFont("helvetica", 'normal')
    doc.text(nombreCompleto, 2.5, 35)
    doc.setFont("helvetica", 'bold')
    doc.text('Documento', 2.5, 40)
    doc.setFont("helvetica", 'normal')
    doc.text((documento +' '+ cedula), 2.5, 45)
    doc.setFont("helvetica", 'bold')
    doc.text('Estudio realizado', 2.5, 50)
    doc.setFont("helvetica", 'normal')
    var estudioSplit = doc.splitTextToSize(estudios, maxLineWidth)
    doc.setFontSize(8)
    doc.text(estudioSplit, 2.5, 55)
    doc.setFontSize(10)
    doc.text('Fecha de realizacion: '+fecha.toLocaleDateString(),2.5, 70)
    if(newFecha.length > 12){
        doc.text('Fecha de entrega: ',2.5, 75)    
        doc.text(newFecha, 2.5, 80)
        doc.addImage(img.src, 'PNG', 2, 81)
        doc.setFontSize(6)
        doc.text('Entrega de resultados: \nLunes a Viernes 8:00 am a 11:30 y de 2:00 pm a 5:30 pm ',36, 100,'center')
        doc.text('Sábados de 8:00 am a 11:30am',36, 106, 'center')
        doc.text('Los resultados se entregan UNICAMENTE con este ticket o \n con su documento de identificación',36, 109, 'center')
        doc.text('Si requiere copia de sus resultados debe cancelar \n el valor correspondiente.',36, 115, 'center')
    }
    else {
    doc.text('Fecha de entrega: '+newFecha,2.5, 75)
    doc.addImage(img.src, 'PNG', 2, 76)
    doc.setFontSize(6)
    doc.text('Entrega de resultados: \nLunes a Viernes 8:00 am a 11:30 y de 2:00 pm a 5:30 pm ',36, 95,'center')
    doc.text('Sábados de 8:00 am a 11:30am',36, 101, 'center')
    doc.text('Los resultados se entregan UNICAMENTE con este ticket o \n con su documento de identificación',36, 104, 'center')
    doc.text('Si requiere copia de sus resultados debe cancelar \n el valor correspondiente.',36, 110, 'center')
    }
    doc.save("resultados.pdf"); // will save the file in the current working directory
    doc.close();

    // const pdfDoc = await PDFLib.PDFDocument.create();
    // const page = pdfDoc.addPage([350, 400]);
    // page.moveTo(50, 200);
    // page.drawText('Impresora de resultados');
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    document.getElementById('pdf').src = "resultados.pdf";

    document.getElementById("cedula").value = ""
    document.getElementById("apellido1").value = ""
    document.getElementById("apellido2").value = ""
    document.getElementById("nombre1").value = ""
    document.getElementById("nombre2").value = ""
    document.getElementById("ignore1").value = ""
    document.getElementById("ignore2").value = ""
    document.getElementById("ignore3").value = ""
    document.getElementById("ignore4").value = ""
    document.getElementById("ignore5").value = ""
    document.getElementById("cedula").focus();

    

    const options = {
    win32:['-print-settings "fit"']
    }
    function arroz() {
    
    print('resultados.pdf', options).then(console.log).catch(console.error);
    
    }
    arroz();
    // console.log(documento);
    // console.log(cedula);
    // console.log(apellido1);
    // console.log(apellido2);
    // console.log(nombre1);
    // console.log(nombre2);
    // console.log(entidad);
    // console.log(estudios);
    // console.log(fecha);
    // console.log(newFecha);
}