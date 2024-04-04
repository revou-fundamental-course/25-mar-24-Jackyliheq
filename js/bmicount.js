function hitungbmi() {
    let umur = document.getElementById("umur").value
    let bb = document.getElementById("bb").value
    let tb = document.getElementById("tb").value

    let bmi = ( bb /((tb/100)*(tb/100))).toFixed(2)
    //hitungan nya bb/tb dalam meter pangkat 2
    document.getElementById('head').innerHTML = 'Hasil BMI Kamu'
    document.getElementById('bmi-output').innerHTML = bmi
    
    if (bmi <= 18.5){
        document.getElementById('message').innerHTML = 'Kekurangan berat badan'
    } else if (18.5<=bmi && bmi <= 24.9){
        document.getElementById('message').innerHTML = 'Normal (ideal)'
    } else if (25.0<=bmi && bmi <= 29.9){
        document.getElementById('message').innerHTML = 'Kelebihan berat badan'
    } else{
        document.getElementById('message').innerHTML = 'Obesitas'
    }  
    
    // display web yang bagus seperti meletakkan hasil di sebelah perhitungan saya tidak mengerti
    // saya dapat ini dari searching di youtube untuk menggunakan innerhtml karna lebih mudah dimengerti

}



function reload() {
    window.location.reload()    
}
