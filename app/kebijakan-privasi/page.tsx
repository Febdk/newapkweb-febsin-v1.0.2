export default function KebijakanPrivasi() {
  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Kebijakan Privasi Febsin
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-prose mx-auto">
        Kami menghargai privasi Anda. Data pribadi Anda dilindungi sesuai GDPR
        dan undang-undang Indonesia. Kami hanya mengumpulkan data untuk
        pemesanan dan newsletter dengan persetujuan Anda.
      </p>
      <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
        <li>Data yang dikumpulkan: Nama, email, alamat pengiriman.</li>
        <li>Penggunaan: Untuk proses order dan komunikasi.</li>
        <li>Hak Anda: Akses, hapus, atau ubah data kapan saja.</li>
      </ul>
    </div>
  );
}
