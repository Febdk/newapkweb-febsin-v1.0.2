export default function KebijakanPrivasi() {
  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Kebijakan Privasi Febsin
      </h2>
      <div className="max-w-prose mx-auto">
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
          Kami menghargai privasi Anda. Data pribadi Anda dilindungi sesuai GDPR
          dan undang-undang Indonesia. Kami hanya mengumpulkan data untuk
          pemesanan dan newsletter dengan persetujuan Anda.
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>
            <strong>Data yang dikumpulkan:</strong> Nama, email, alamat
            pengiriman.
          </li>
          <li>
            <strong>Penggunaan:</strong> Untuk proses order dan komunikasi.
          </li>
          <li>
            <strong>Hak Anda:</strong> Akses, hapus, atau ubah data kapan saja.
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Hubungi kami di info@febsin.com untuk pertanyaan privasi.
        </p>
      </div>
    </div>
  );
}
