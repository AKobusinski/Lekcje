function policz(){
    var polak = document.getElementById("liczba1").Value;
    var nowak = document.getElementById("liczba2").Value;
    var rysik = document.getElementById("liczba3").Value;

    document.getElementById("wynik").innerHTML = Math.max(polak, nowak, rysik);
}