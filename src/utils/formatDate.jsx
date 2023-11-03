export function formatDate(date) {
    const gunler = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
    const aylar = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
    ];

    const gun = date.getDate();
    const ay = date.getMonth();
    const yil = date.getFullYear();
    const saat = date.getHours();
    const dakika = date.getMinutes();
    const gunAdi = gunler[date.getDay()];
    const ayAdi = aylar[ay];

    //return `${gun} ${ayAdi} ${yil} ${gunAdi} ${saat}:${dakika} ${yil}`;
    return `${gun} ${ayAdi} ${gunAdi} ${saat}:${dakika}`;
}
