export default function Footer() {
  return (
    <footer className="bg-gray-950 p-6 mt-auto">
      <div className="flex justify-around flex-wrap">
        <div>
          <h3 className="text-orange-500 font-bold">Febsin</h3>
          <p>Fashion Indonesia dengan karakter kuat.</p>
          <div className="flex space-x-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">👍</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">🎵</a>
          </div>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold">Menu Utama</h3>
          <ul>
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/produk" className="text-white">Produk</a></li>
            <li><a href="/tentang-kami" className="text-white">Tentang Kami</a></li>
            <li><a href="/blog" className="text-white">Blog</a></li>
            <li><a href="/kontak" className="text-white">Kontak</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold">Kategori</h3>
          <ul>
            <li>Casual</li>
            <li>Smart Casual</li>
            <li>Chic</li>
            <li>Streetwear</li>
            <li>Vintage</li>
            <li>Formal</li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold">Kontak & Newsletter</h3>
          <p>Jakarta, Indonesia</p>
          <p>☎ +62 812-3456-7890</p>
          <p>📧 info@febsin.com</p>
          <p className="mt-2">Berlangganan newsletter:</p>
          <input type="email" placeholder="Email Anda" className="p-2 rounded-lg text-black mt-2" />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-2">Subscribe</button>
        </div>
      </div>
      <p className="text-center mt-4">© 2024 FebSin. All rights reserved. <a href="/kebijakan-privasi">Kebijakan Privasi</a> <a href="/syarat-dan-ketentuan">Syarat & Ketentuan</a></p>
    </footer>
  );
}