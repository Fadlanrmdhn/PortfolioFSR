
export default function FooterComp() {
  return (
    <footer className="bg-black text-white py-10 mx-25 ">
      <div className=" px-4">
        <div className="grid grid-cols-1 md:grid-cols-10 mb-5 border-t border-gray-700 pt-10">
          <div>
            <h4 className="text-lg font-light mb-4 text-gray-400">GITHUB</h4>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4 text-gray-400">LINKEDIN</h4>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4 text-gray-400">INSTAGRAM</h4>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-10">
          <p className="text-start text-gray-400 font-light text-sm">
            © 2026 Fadlan (FSR) . Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
