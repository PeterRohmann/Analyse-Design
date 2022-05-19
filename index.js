function rest(){
    let restvaerdi
    let pris = document.getElementById("pris");
    let reference = document.getElementById("reference");
    let months = document.getElementById("months");
    let km = document.getElementById("km");
    let udbetaling = document.getElementById("udbetaling");
    let rente = document.getElementById("rente");
console.log(reference.value)
console.log(months.value)
console.log(km.value)

if( months.value == 12 && km.value == 15000) { restvaerdi = reference.value * 1.38 }
if( months.value == 12 && km.value == 20000) { restvaerdi = reference.value * 1.36 }
if( months.value == 12 && km.value == 25000) { restvaerdi = reference.value * 1.35 }
if( months.value == 12 && km.value == 30000) { restvaerdi = reference.value * 1.33 }
if( months.value == 12 && km.value == 35000) { restvaerdi = reference.value * 1.31 }
if( months.value == 12 && km.value == 40000) { restvaerdi = reference.value * 1.3 }
if( months.value == 12 && km.value == 45000) { restvaerdi = reference.value * 1.28 }
if( months.value == 12 && km.value == 50000) { restvaerdi = reference.value * 1.26 }
if( months.value == 12 && km.value == 55000) { restvaerdi = reference.value * 1.25 }
if( months.value == 12 && km.value == 60000) { restvaerdi = reference.value * 1.23 }
if( months.value == 12 && km.value == 65000) { restvaerdi = reference.value * 1.21 }
if( months.value == 24 && km.value == 15000) { restvaerdi = reference.value * 1.24 }
if( months.value == 24 && km.value == 20000) { restvaerdi = reference.value * 1.2 }
if( months.value == 24 && km.value == 25000) { restvaerdi = reference.value * 1.17 }
if( months.value == 24 && km.value == 30000) { restvaerdi = reference.value * 1.14 }
if( months.value == 24 && km.value == 35000) { restvaerdi = reference.value * 1.13 }
if( months.value == 24 && km.value == 40000) { restvaerdi = reference.value * 1.11 }
if( months.value == 24 && km.value == 45000) { restvaerdi = reference.value * 1.09 }
if( months.value == 24 && km.value == 50000) { restvaerdi = reference.value * 1.08 }
if( months.value == 24 && km.value == 55000) { restvaerdi = reference.value * 1.06 }
if( months.value == 24 && km.value == 60000) { restvaerdi = reference.value * 1.03 }
if( months.value == 24 && km.value == 65000) { restvaerdi = reference.value * 1 }
if( months.value == 36 && km.value == 15000) { restvaerdi = reference.value * 1.14 }
if( months.value == 36 && km.value == 20000) { restvaerdi = reference.value * 1.1 }
if( months.value == 36 && km.value == 25000) { restvaerdi = reference.value * 1.05 }
if( months.value == 36 && km.value == 30000) { restvaerdi = reference.value * 1 }
if( months.value == 36 && km.value == 35000) { restvaerdi = reference.value * 0.97 }
if( months.value == 36 && km.value == 40000) { restvaerdi = reference.value * 0.92 }
if( months.value == 36 && km.value == 45000) { restvaerdi = reference.value * 0.86 }
if( months.value == 36 && km.value == 50000) { restvaerdi = reference.value * 0.82 }
if( months.value == 36 && km.value == 55000) { restvaerdi = reference.value * 0.77 }
if( months.value == 36 && km.value == 60000) { restvaerdi = reference.value * 0.72 }
if( months.value == 36 && km.value == 65000) { restvaerdi = reference.value * 0.66 }
if( months.value == 48 && km.value == 15000) { restvaerdi = reference.value * 0.93 }
if( months.value == 48 && km.value == 20000) { restvaerdi = reference.value * 0.88 }
if( months.value == 48 && km.value == 25000) { restvaerdi = reference.value * 0.84 }
if( months.value == 48 && km.value == 30000) { restvaerdi = reference.value * 0.79 }
if( months.value == 48 && km.value == 35000) { restvaerdi = reference.value * 0.73 }
if( months.value == 48 && km.value == 40000) { restvaerdi = reference.value * 0.66 }
if( months.value == 48 && km.value == 45000) { restvaerdi = reference.value * 0.61 }
if( months.value == 48 && km.value == 50000) { restvaerdi = reference.value * 0.57 }
if( months.value == 48 && km.value == 55000) { restvaerdi = reference.value * 0.52 }
if( months.value == 48 && km.value == 60000) { restvaerdi = reference.value * 0.47 }
if( months.value == 48 && km.value == 65000) { restvaerdi = reference.value * 0.35 }
if( months.value == 60 && km.value == 15000) { restvaerdi = reference.value * 0.86 }
if( months.value == 60 && km.value == 20000) { restvaerdi = reference.value * 0.76 }
if( months.value == 60 && km.value == 25000) { restvaerdi = reference.value * 0.67 }
if( months.value == 60 && km.value == 30000) { restvaerdi = reference.value * 0.61 }
if( months.value == 60 && km.value == 35000) { restvaerdi = reference.value * 0.54 }
if( months.value == 60 && km.value == 40000) { restvaerdi = reference.value * 0.49 }
if( months.value == 60 && km.value == 45000) { restvaerdi = reference.value * 0.43 }
if( months.value == 60 && km.value == 50000) { restvaerdi = reference.value * 0.36 }
if( months.value == 60 && km.value == 55000) { restvaerdi = reference.value * 0.31 }
if( months.value == 60 && km.value == 60000) { restvaerdi = reference.value * 0.27 }
if( months.value == 60 && km.value == 65000) { restvaerdi = reference.value * 0.25 }
if( months.value == 72 && km.value == 15000) { restvaerdi = reference.value * 0.69 }
if( months.value == 72 && km.value == 20000) { restvaerdi = reference.value * 0.60 }
if( months.value == 72 && km.value == 25000) { restvaerdi = reference.value * 0.52 }
if( months.value == 72 && km.value == 30000) { restvaerdi = reference.value * 0.43 }
if( months.value == 72 && km.value == 35000) { restvaerdi = reference.value * 0.37 }
if( months.value == 72 && km.value == 40000) { restvaerdi = reference.value * 0.32 }
if( months.value == 72 && km.value == 45000) { restvaerdi = reference.value * 0.28 }
if( months.value == 72 && km.value == 50000) { restvaerdi = reference.value * 0.25 }
if( months.value == 72 && km.value == 55000) { restvaerdi = reference.value * 0.22 }
if( months.value == 72 && km.value == 60000) { restvaerdi = reference.value * 0.19 }
if( months.value == 72 && km.value == 65000) { restvaerdi = reference.value * 0.18 }


document.getElementById("restvaerdi").innerHTML = Math.round(restvaerdi);

let tempvalue = pris.value - restvaerdi - udbetaling.value

let ydelse = ( tempvalue * ( 1 + (rente.value / 100 / 12 )) ** months.value ) / months.value

document.getElementById("ydelse").innerHTML = Math.round(ydelse);
}