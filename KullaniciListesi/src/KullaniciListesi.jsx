import React, { useEffect, useState } from "react";

export default function KullaniciListesi() {
  const [isim, setIsim] = useState("");
  const [yas, setYas] = useState("");
  const [kullanicilar, setKullanicilar] = useState([]);
  const [loading, setLoading] = useState(true);

  // API'den veri çek
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // API'den gelen kullanıcıların sadece adını ve sahte yaşını alalım
        const kullaniciListesi = data.map((k) => ({
          isim: k.name,
          yas: Math.floor(Math.random() * 30 + 20), // sahte yaş üret
        }));
        setKullanicilar(kullaniciListesi);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setLoading(false);
      });
  }, []);

  const kullaniciEkle = () => {
    if (isim.trim() !== "" && yas.trim() !== "") {
      setKullanicilar([...kullanicilar, { isim, yas }]);
      setIsim("");
      setYas("");
    }
  };

  const kullaniciSil = (index) => {
    const yeniListe = kullanicilar.filter((_, i) => i !== index);
    setKullanicilar(yeniListe);
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Kullanıcı Listesi</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="İsim"
          value={isim}
          onChange={(e) => setIsim(e.target.value)}
        />
        <br />
        <input
          placeholder="Yaş"
          type="number"
          value={yas}
          onChange={(e) => setYas(e.target.value)}
        />
        <br />
        <button onClick={kullaniciEkle}>Ekle</button>
      </div>

      <ul>
        {kullanicilar.map((kullanici, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>İsim:</strong> {kullanici.isim} - <strong>Yaş:</strong> {kullanici.yas}
            <button
              onClick={() => kullaniciSil(index)}
              style={{ marginLeft: "10px" }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
