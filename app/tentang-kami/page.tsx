export default function TentangKami() {
  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
        TENTANG FEBSIN
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base max-w-prose mx-auto">
        Febsin adalah perwujudan dari kekuatan karakter dan karya lokal. Kami
        berkomitmen pada sustainable fashion, mendukung pengrajin lokal, dan
        menciptakan desain yang edgy serta versatile.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            DNA Febsin
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Sustainable: Material ramah lingkungan.</li>
            <li>Edgy: Desain berani dan modern.</li>
            <li>Versatile: Cocok untuk berbagai gaya.</li>
            <li>Local: Dukungan penuh untuk pengrajin lokal.</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <svg className="w-64 h-64 text-orange-500" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="90"
              x2="90"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="90"
              y1="90"
              x2="10"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="50" cy="20" r="3" fill="currentColor" />
            <circle cx="20" cy="70" r="3" fill="currentColor" />
            <circle cx="80" cy="70" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
