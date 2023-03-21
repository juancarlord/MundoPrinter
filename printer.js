const { jsPDF } = require("jspdf");
const { print } = require('pdf-to-printer');
async function impresora() {
    var festivos = ["3/20/2023", "4/2/2023", "4/6/2023", "4/7/2023", "4/9/2023", "5/1/2023", "5/22/2023",
    "6/12/2023", "6/19/2023", "7/3/2023", "7/20/2023", "8/7/2023", "8/21/2023", "10/16/2023","11/6/2023", "11/13/2023",
    "12/8/2023", "12/25/2023", "1/1/2024", "1/8/2024", "3/25/2024", "3/28/2024", "3/29/2024", "5/1/2024", "5/13/2024", "6/3/2024", "6/10/2024", "7/1/2024", "7/20/2024", "8/7/2024", "8/19/2024", "10/14/2024", "11/4/2024", "11/11/2024", "12/8/2024", "12/25/2024"
    ]
    var tacReg = new RegExp('^'+ "TAC");
    var MamReg = new RegExp('^'+ "MAMOGRAFIA");
    var OstReg = new RegExp('^'+ "OSTEODENSITOMETRIA");
    var RXReg = new RegExp('^'+ "RX");
    var PieloReg = new RegExp('^' + "PIELOGRAFIA");
    console.log(RXReg.test(document.getElementById("estudios-dropdown").value));
    console.log(document.getElementById("estudios-dropdown").value);
    var entidad = document.getElementById('entidad').value;
    var fecha = new Date();
    console.log(fecha.getDay());
    if (entidad == "PREPAGADA") {
        switch(fecha.getDay()){
            case 1:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 2;
                for (let index = 0; index < 1; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 2:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 2;
                for (let index = 0; index < 1; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);
                
                if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 3:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 2;
                for (let index = 0; index < 1; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);
                
                if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                    if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                        newFecha = recogerNormal
                        newFecha.setDate(newFecha.getDate()+3)
                        newFecha = newFecha.toLocaleDateString('en-US')
                        break;
                    }
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 4:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 4;
                for (let index = 0; index < 1; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+3);
                    if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                        newFecha = recogerNormal
                        newFecha.setDate(newFecha.getDate()+1)
                        newFecha = newFecha.toLocaleDateString('en-US')
                        break;
                    }
                    newFecha = recogerNormal.toLocaleDateString('en-US');
                    break;
                }
                
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+3)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 5:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 4;
                for (let index = 0; index < 3; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);
                
                if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 6:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 3;
                for (let index = 0; index < 2; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);
                
                if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
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
                var festivo = new Date();
                cuenta = 4;
                for (let index = 0; index < 3; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                    if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                        newFecha = recogerNormal
                        newFecha.setDate(newFecha.getDate()+3)
                        newFecha = newFecha.toLocaleDateString('en-US')
                        break;
                    }
                    newFecha = recogerNormal.toLocaleDateString('en-US');
                    break;
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 2:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 6;
                for (let index = 0; index < 3; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+3);
                    if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                        newFecha = recogerNormal
                        newFecha.setDate(newFecha.getDate()+1)
                        newFecha = newFecha.toLocaleDateString('en-US')
                        break;
                    }
                    newFecha = recogerNormal.toLocaleDateString('en-US');
                    break;
                }

                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+3)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 3:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 6;
                for (let index = 0; index < 5; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }

                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 4:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 6;
                for (let index = 0; index < 5; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                    
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 5:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 6;
                for (let index = 0; index < 5; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);

                if(tacReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }
                if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                    newFecha = recogerNormal
                    newFecha.setDate(newFecha.getDate()+1)
                    newFecha = newFecha.toLocaleDateString('en-US')
                    break;
                }
                newFecha = recogerNormal.toLocaleDateString('en-US');
                break;
            case 6:
                var recogerNormal = new Date();
                var festivo = new Date();
                cuenta = 5;
                for (let index = 0; index < 4; index++) {
                    festivo.setDate(festivo.getDate() + 1);
                    console.log(festivo.toLocaleDateString('en-US'));
                    if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                        cuenta++;
                        console.log("hubo festivo");
                    } else {
                        console.log("no se encontro festivo");
                    }
                }
                recogerNormal.setDate(recogerNormal.getDate()+cuenta);
                
                if(tacReg.test(document.getElementById("estudios-dropdown").value)){
                    recogerNormal.setDate(recogerNormal.getDate()+1);
                }

                newFecha = recogerNormal.toLocaleDateString('en-US');
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
                    var festivo = new Date();
                    cuenta = 1;
                    for (let index = 0; index < 1; index++) {
                        festivo.setDate(festivo.getDate() + 1);
                        console.log(festivo.toLocaleDateString('en-US'));
                        if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                            cuenta++;
                            console.log("hubo festivo");
                        } else {
                            console.log("no se encontro festivo");
                        }
                    }
                    if (hour >= 12 || RXReg.test(document.getElementById("estudios-dropdown").value) || PieloReg.test(document.getElementById("estudios-dropdown").value)) {
                        recogerNormal.setDate(recogerNormal.getDate() + cuenta);

                        if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                        }
                        
                        if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                        recogerNormal.setDate(recogerNormal.getDate()+cuenta+1);
                        if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        break;
                    }
                    
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString('en-US') + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 2:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    var festivo = new Date();
                    cuenta = 1;
                    for (let index = 0; index < 1; index++) {
                        festivo.setDate(festivo.getDate() + 1);
                        console.log(festivo.toLocaleDateString('en-US'));
                        if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                            cuenta++;
                            console.log("hubo festivo");
                        } else {
                            console.log("no se encontro festivo");
                        }
                    }
                    if (hour >= 12 || RXReg.test(document.getElementById("estudios-dropdown").value) || PieloReg.test(document.getElementById("estudios-dropdown").value)) {
                        recogerNormal.setDate(recogerNormal.getDate() + cuenta);

                        if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                        }
                        if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                        recogerNormal.setDate(recogerNormal.getDate()+cuenta+1);
                        if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString('en-US') + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 3:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    var festivo = new Date();
                    cuenta = 1;
                    for (let index = 0; index < 1; index++) {
                        festivo.setDate(festivo.getDate() + 1);
                        console.log(festivo.toLocaleDateString('en-US'));
                        if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                            cuenta++;
                            console.log("hubo festivo");
                        } else {
                            console.log("no se encontro festivo");
                        }
                    }
                    if (hour >= 12 || RXReg.test(document.getElementById("estudios-dropdown").value) || PieloReg.test(document.getElementById("estudios-dropdown").value)) {
                        recogerNormal.setDate(recogerNormal.getDate() + cuenta);

                        if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                            if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                                newFecha = recogerNormal
                                newFecha.setDate(newFecha.getDate()+3)
                                newFecha = newFecha.toLocaleDateString('en-US')
                                break;
                            }
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                        recogerNormal.setDate(recogerNormal.getDate()+cuenta+1);
                        if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+3)
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                        }
                            newFecha = recogerNormal
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString('en-US') + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 4:
                    var recogerNormal = new Date();
                    var hour = recogerNormal.getHours()
                    var festivo = new Date();
                    cuenta = 1;
                    for (let index = 0; index < 1; index++) {
                        festivo.setDate(festivo.getDate() + 1);
                        console.log(festivo.toLocaleDateString('en-US'));
                        if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                            cuenta++;
                            console.log("hubo festivo");
                        } else {
                            console.log("no se encontro festivo");
                        }
                    }
                    if (hour >= 12 || RXReg.test(document.getElementById("estudios-dropdown").value) || PieloReg.test(document.getElementById("estudios-dropdown").value)) {
                        recogerNormal.setDate(recogerNormal.getDate() + cuenta);

                        if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                            recogerNormal.setDate(recogerNormal.getDate()+3);
                            if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                                newFecha = recogerNormal
                                newFecha.setDate(newFecha.getDate()+1)
                                newFecha = newFecha.toLocaleDateString('en-US')
                                break;
                            }
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                        recogerNormal.setDate(recogerNormal.getDate()+cuenta+3);
                        if (festivos.includes(recogerNormal.toLocaleDateString('en-US'))) {
                            newFecha = recogerNormal
                            newFecha.setDate(newFecha.getDate()+1)
                            newFecha = newFecha.toLocaleDateString('en-US')
                            break;
                        }
                        newFecha = recogerNormal
                        newFecha = newFecha.toLocaleDateString('en-US')
                        break;
                    }
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString('en-US') + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 5:
                    var recogerNormal = new Date();
                    var festivo = new Date();
                    var hour = recogerNormal.getHours();
                    cuenta = 3;
                    for (let index = 0; index < 3; index++) {
                        festivo.setDate(festivo.getDate() + 1);
                        console.log(festivo.toLocaleDateString('en-US'));
                        if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                            cuenta++;
                            console.log("hubo festivo");
                        } else {
                            console.log("no se encontro festivo");
                        }
                    }
                    if (hour >= 12 || RXReg.test(document.getElementById("estudios-dropdown").value) || PieloReg.test(document.getElementById("estudios-dropdown").value)) {
                        recogerNormal.setDate(recogerNormal.getDate() + cuenta);
                        
                        if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                            recogerNormal.setDate(recogerNormal.getDate()+1);
                            console.log("coincide");
                        }
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        console.log(newFecha + " " + hour);
                        break;
                    }
                    if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                        recogerNormal.setDate(recogerNormal.getDate()+cuenta+1);
                        newFecha = recogerNormal.toLocaleDateString('en-US');
                        break;
                    }
                    
                    recogerNormal.setDate(recogerNormal.getDate());
                    newFecha = recogerNormal.toLocaleDateString('en-US') + " de 2:00pm a 5:30pm";
                    console.log(newFecha);
                    break;
                case 6:
                    var recogerNormal = new Date();
                    var festivo = new Date();
                    var hour = recogerNormal.getHours();
                    cuenta = 2;
                    for (let index = 0; index < 2; index++) {
                        festivo.setDate(festivo.getDate() + 1);
                        console.log(festivo.toLocaleDateString('en-US'));
                        if (festivos.includes(festivo.toLocaleDateString('en-US'))) {
                            cuenta++;
                            console.log("hubo festivo");
                        } else {
                            console.log("no se encontro festivo");
                        }
                    }
                    recogerNormal.setDate(recogerNormal.getDate() + cuenta);
                    
                    if(tacReg.test(document.getElementById("estudios-dropdown").value) ||  MamReg.test(document.getElementById("estudios-dropdown").value) || OstReg.test(document.getElementById("estudios-dropdown").value)){
                        recogerNormal.setDate(recogerNormal.getDate()+1);
                    }
                    newFecha = recogerNormal.toLocaleDateString('en-US');
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
    // JsBarcode("#itf", cedula, {format: "code128", width: 2, height: 50, displayValue: false});
    var qr = new QRious({
        element: document.getElementById('itf'),
        value: 'https://mundoradiologico.com/'
    })
    
    const img = document.querySelector('img#itf');
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [76, 410]
    });
    doc.setFontSize(14);
    doc.setFont("helvetica", 'bold')
    doc.text("MUNDO RADIOLOGICO S.A.S", 38, 7, 'center');
    doc.setFontSize(11)
    doc.text('TICKET DE RESULTADOS', 38, 15, 'center')
    doc.setFont("helvetica", 'normal')
    doc.text("Acceda a su estudio en el siguiente enlace:", 38, 20, 'center')
    doc.setFont("helvetica", 'bold')
    doc.text("https://mundoradiologico.com/", 38, 25, 'center')
    doc.setFont("helvetica", 'normal')
    doc.text("Ingresando los siguientes datos:", 38, 30, 'center')
    doc.setFont("helvetica", 'bold')
    doc.text(("Usuario: "+ cedula), 38, 35, 'center')
    doc.text(("Contraseña: "+ cedula), 38, 40, 'center')
    doc.text(entidad, 50, 45,)
    doc.text('Nombre del paciente', 2.5, 50)
    doc.setFont("helvetica", 'normal')
    doc.text(nombreCompleto, 2.5, 55)
    doc.setFont("helvetica", 'bold')
    doc.text('Documento', 2.5, 60)
    doc.setFont("helvetica", 'normal')
    doc.text((documento +' '+ cedula), 2.5, 65)
    doc.setFont("helvetica", 'bold')
    doc.text('Estudio realizado', 2.5, 70)
    doc.setFont("helvetica", 'normal')
    var estudioSplit = doc.splitTextToSize(estudios, maxLineWidth)
    doc.setFontSize(10)
    doc.text(estudioSplit, 2.5, 75)
    doc.setFontSize(12)
    doc.text('Fecha de realizacion: '+fecha.toLocaleDateString('en-US'),2.5, 92)
    if(newFecha.length > 12){//newFecha.length > 12
        doc.text('Fecha de entrega: ',2.5, 97)    
        doc.text(newFecha, 2.5, 100)
        doc.addImage(img.src, 'PNG', 22, 104)
        doc.setFontSize(8)
        doc.text('Entrega de resultados: \nLunes a Viernes 8:00 am a 11:30 y de 2:00 pm a 5:30 pm ',38, 137,'center')
        doc.text('Sábados de 8:00 am a 11:30am',38, 144, 'center')
        doc.text('Si su dispositivo es Apple debe desbloquear las ventanas\n emergentes para visualizar las imagenes',38, 149, 'center')
        
    }
    else {
    doc.text('Fecha de entrega: '+newFecha,2.5, 97)
    doc.addImage(img.src, 'PNG', 22, 98)
    doc.setFontSize(8)
    doc.text('Entrega de resultados: \nLunes a Viernes 8:00 am a 11:30 y de 2:00 pm a 5:30 pm ',38, 127,'center')
    doc.text('Sábados de 8:00 am a 11:30am',38, 134, 'center')
    doc.text('Si su dispositivo es Apple debe desbloquear las ventanas \n emergentes para visualizar las imagenes',38, 139, 'center')
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