export default function FAQ() {
  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        FAQ Febsin
      </h2>
      <div className="max-w-prose mx-auto space-y-4">
        <div>
          <h3 className="font-bold text-black dark:text-white">
            Bagaimana cara pesan?
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tambah ke keranjang, checkout, dan bayar via transfer.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-black dark:text-white">
            Berapa ongkir?
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Rp 20.000 untuk Jawa, Rp 50.000 luar Jawa.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-black dark:text-white">Bisa retur?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Ya, 7 hari dengan kondisi asli.
          </p>
        </div>
      </div>
    </div>
  );
}
