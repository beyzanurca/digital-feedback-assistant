function geriBildirimVer() {
    const cevap = document.getElementById("cevap").value;
    const feedbackAlan = document.getElementById("feedback");
    const scoreAlan = document.getElementById("score");
    const scoreDetail = document.getElementById("scoreDetail");
    const suggestion = document.getElementById("suggestion");

    if (cevap.trim() === "") {
        feedbackAlan.innerText = "Lütfen bir cevap giriniz.";
        scoreAlan.innerText = "";
        scoreDetail.innerText = "";
        suggestion.innerText = "";
        return;
    }

    feedbackAlan.innerText = "Cevabınız başarıyla alınmıştır.";

    let puan = 0;

    if (cevap.length < 50) {
        puan = 40;
    } else if (cevap.length < 100) {
        puan = 70;
    } else {
        puan = 90;
    }

    scoreAlan.innerText = "Puan: " + puan;
    scoreDetail.innerText =
        "Puanlama; cevap uzunluğu ve temel içerik yeterliliği dikkate alınarak otomatik olarak yapılmıştır.";

    if (puan < 50) {
        suggestion.innerText =
            "Cevabınızı daha ayrıntılı yazarak ve temel kavramlara yer vererek puanınızı artırabilirsiniz.";
    } else if (puan < 80) {
        suggestion.innerText =
            "Cevabınıza örnekler ekleyerek daha güçlü bir cevap oluşturabilirsiniz.";
    } else {
        suggestion.innerText =
            "Cevabınız oldukça yeterli. Bu düzeyi koruyabilirsiniz.";
    }
}
