
export default function FooterComp() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Sky.DictionaryEnglish</h4>
            <p className="text-gray-400">
              Website Kamus Bahasa Inggris dengan fitur lengkap untuk mencari kata, mendengarkan pelafalan, dan mempelajari penggunaan kata dalam berbagai konteks. Kami berkomitmen untuk memberikan pengalaman belajar bahasa Inggris yang mudah dan menyenangkan bagi semua pengguna.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Tautan</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <p className="text-gray-400">Email: info@sky.dictionaryenglish.com</p>
            <p className="text-gray-400">Phone: +62 896 8728 9371</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2026 Sky.DictionaryEnglish. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
