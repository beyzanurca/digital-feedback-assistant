function geriBildirimVer() {
    const cevap = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");

    if (cevap.trim() === "") {
        feedback.innerText = "Lütfen cevabınızı giriniz.";
        return;
    }

    if (cevap.length < 50) {
        feedback.innerText = "Cevabınız kısa. Konuyu biraz daha detaylandırabilirsiniz.";
    } 
    else if (cevap.includes("geri bildirim")) {
        feedback.innerText = "Konuya değinmişsiniz. Örneklerle desteklerseniz daha güçlü olabilir.";
    } 
    else {
        feedback.innerText = "Cevabınız yeterince açıklayıcı görünüyor. Başarılı bir yanıt.";
    }
}
function ogretmenYorumEkle() {
  function ogretmenYorumEkle() {
    const yorum = document.getElementById("teacherComment").value;
    const alan = document.getElementById("teacherFeedback");

    if (yorum.trim() === "") {
        alan.innerText = "Öğretmen yorumu boş bırakılamaz.";
        return;
    }

    localStorage.setItem("ogretmenYorumu", yorum);
    alan.innerText = "Öğretmen Yorumu: " + yorum;
}
   window.onload = function () {
    const kayitliYorum = localStorage.getItem("ogretmenYorumu");
    if (kayitliYorum) {
        document.getElementById("teacherFeedback").innerText =
            "Öğretmen Yorumu: " + kayitliYorum;
    }function geriBildirimVer() {
    const cevap = document.getElementById("answer").value;
    const feedback = document.getElementById("feedback");
    const scoreAlan = document.getElementById("score");

    let puan = 0;

    if (cevap.trim() === "") {
        feedback.innerText = "Lütfen cevabınızı giriniz.";
        puan = 0;
    } 
    else if (cevap.length < 50) {
        feedback.innerText = "Cevabınız kısa. Konuyu biraz daha detaylandırabilirsiniz.";
        puan = 40;
    } 
    else if (cevap.length < 150) {
        feedback.innerText = "Cevabınız anlaşılır ancak geliştirilebilir.";
        puan = 70;
    } 
    else {
        feedback.innerText = "Cevabınız yeterince açıklayıcı ve başarılı.";
        puan = 90;
    }

    if (cevap.toLowerCase().includes("geri bildirim")) {
        puan += 10;
    }

    if (puan > 100) {
        puan = 100;
    }

    scoreAlan.innerText = "Puan: " + puan;

    localStorage.setItem("ogrenciPuani", puan);
}

 

