export default function SyaratDanKetentuan() {
  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Syarat & Ketentuan Febsin
      </h2>
      <div className="max-w-prose mx-auto">
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
          Dengan menggunakan situs Febsin, Anda setuju dengan syarat berikut:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>Pengiriman: 3-5 hari kerja di Indonesia.</li>
          <li>Pembayaran: Transfer bank atau e-wallet.</li>
          <li>Pengembalian: 7 hari dengan kondisi asli.</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Hubungi kami untuk detail lebih lanjut.
        </p>
      </div>
    </div>
  );
}
