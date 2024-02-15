import React, { useState } from "react";

export const Qrcode = () => {
  const [img, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${encodeURIComponent(
        qrData
      )}`;
      setImage(url);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  function downloadQr() {}
  return (
    <div>
      {img && (
        <img
          src={img}
          style={{ width: "400px", height: "300px" }}
          alt="qrcode"
        />
      )}
      {loading && <p style={{ color: "skyblue" }}>Loading please wait</p>}
      <label htmlFor="qrcode">Data for qrcode</label>
      <input
        type="text"
        id="qrcode"
        onChange={(e) => setQrData(e.target.value)}
      />
      <label>Size</label>
      <input type="text" />
      <button onClick={() => generateQr()} disabled={loading}>
        generate qr code
      </button>
      <button onClick={() => downloadQr()}>download qr code</button>
    </div>
  );
};
