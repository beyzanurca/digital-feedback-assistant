function geriBildirimVer() {
    const cevap = document.getElementById("cevap").value;

    const feedback = document.getElementById("feedback");
    const score = document.getElementById("score");
    const scoreDetail = document.getElementById("scoreDetail");
    const suggestion = document.getElementById("suggestion");

    if (cevap.trim() === "") {
        feedback.innerText = "Lütfen bir cevap giriniz.";
        score.innerText = "";
        scoreDetail.innerText = "";
        suggestion.innerText = "";
        return;
    }

    feedback.innerText = "Cevabınız başarıyla alınmıştır.";

    let puan = 0;

    if (cevap.length < 50) {
        puan = 40;
    } else if (cevap.length < 100) {
        puan = 70;
    } else {
        puan = 90;
    }

    score.innerText = "Puan: " + puan;

    scoreDetail.innerText =
        "Bu puan, cevabın uzunluğu ve temel içerik yeterliliği dikkate alınarak otomatik olarak hesaplanmıştır.";

    if (puan < 50) {
        suggestion.innerText =
            "Cevabınızı daha ayrıntılı yazarak ve anahtar kavramlara yer vererek puanınızı artırabilirsiniz.";
    } else if (puan < 80) {
        suggestion.innerText =
            "Cevabınıza örnekler ekleyerek cevabınızı daha güçlü hale getirebilirsiniz.";
    } else {
        suggestion.innerText =
            "Cevabınız oldukça yeterlidir. Bu performansı koruyabilirsiniz.";
    }
}
