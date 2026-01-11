function geriBildirimVer() {
    const cevap = document.getElementById("cevap").value;

    const feedback = document.getElementById("feedback");
    const score = document.getElementById("score");
    const scoreDetail = document.getElementById("scoreDetail");
    const suggestion = document.getElementById("suggestion");

    // Boş cevap kontrolü
    if (cevap.trim() === "") {
        feedback.innerText = "Lütfen bir cevap giriniz.";
        score.innerText = "";
        scoreDetail.innerText = "";
        suggestion.innerText = "";
        return;
    }

    // Geri bildirim
    feedback.innerText = "Cevabınız başarıyla alınmıştır.";

    // Puanlama
    let puan = 0;

    if (cevap.length < 50) {
        puan = 40;
    } else if (cevap.length < 100) {
        puan = 70;
    } else {
        puan = 90;
    }

    // Puan gösterimi
    score.innerText = "Puan: " + puan;

    // Puan açıklaması
    scoreDetail.innerText =
        "Bu puan, cevabın uzunluğu ve temel içerik yeterliliği dikkate alınarak otomatik olarak hesaplanmıştır.";

    // Geliştirme önerisi
    if (puan < 50) {
        suggestion.innerText =
            "Cevabınızı daha ayrıntılı yazarak ve anahtar kavramlara yer vererek puanınızı yükseltebilirsiniz.";
    } else if (puan < 80) {
        suggestion.innerText =
            "Cevabınıza örnekler ekleyerek cevabınızı daha güçlü hale getirebilirsiniz.";
    } else {
        suggestion.innerText =
            "Cevabınız oldukça yeterlidir. Bu performansı koruyabilirsiniz.";
    }
}
