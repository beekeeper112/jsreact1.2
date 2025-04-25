import React, { useState } from "react";

export default function App(){
  const[kullaniciAdi, setKullaniciAdi]= useState("");
  return(
    <div>
      <div>
        <label htmlFor="kullaniciAdi">Kullanıcı Adınız</label>
        <input id="kullaniciAdi" placeholder="Adınızı yazın" value={kullaniciAdi} onChange={(e => setKullaniciAdi(e.target.value))} />
        {kullaniciAdi && (
          <div>
            <p>Merhaba,{kullaniciAdi}</p>
          </div>
        )}
      </div>
    </div>
  )
}


