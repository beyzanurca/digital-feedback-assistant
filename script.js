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

