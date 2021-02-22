const { jsPDF } = require("jspdf");
async function impresora() {
    var documento = document.getElementById('documento').value;
    var cedula = document.getElementById('cedula').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var nombre1 = document.getElementById('nombre1').value;
    var nombre2 = document.getElementById('nombre2').value;
    var entidad = document.getElementById('entidad').value;
    var estudios = document.getElementById('estudios-dropdown').value;
    var nombreCompleto = nombre1+' '+nombre2+' '+apellido1+' '+apellido2;
    document.getElementById("itf").style.display = "none";
    JsBarcode("#itf", cedula, {format: "code128", width: 2, height: 50, displayValue: false});

    const img = document.querySelector('img#itf');

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [80, 120]
    });
    doc.text("Mundo Radiologico SAS", 7, 8);
    doc.setFontSize(10)
    doc.text(cedula, 2.5, 20)
    doc.addImage(img.src, 'PNG', 2, 100)
    doc.save("resultados.pdf"); // will save the file in the current working directory
    var fecha = new Date();
    if (entidad != "EPS") {
        switch(fecha.getDay()){
            case 1:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 2:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 3:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 4:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 5:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+1);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 6:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+2);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            default:
                newFecha = 'Los domingos no atendemos :)';
                break;
        }
        
    }
    else{
        switch(fecha.getDay()){
            case 1:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+3);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 2:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+3);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 3:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+5);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 4:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+5);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 5:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+5);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            case 6:
                var recogerNormal = new Date();
                recogerNormal.setDate(recogerNormal.getDate()+4);
                newFecha = recogerNormal.toLocaleDateString();
                break;
            default:
                newFecha = 'Los domingos no atendemos :)';
                break;
        }
    }

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
    console.log(documento);
    console.log(cedula);
    console.log(apellido1);
    console.log(apellido2);
    console.log(nombre1);
    console.log(nombre2);
    console.log(entidad);
    console.log(estudios);
    console.log(fecha);
    console.log(newFecha);
}