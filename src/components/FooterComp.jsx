
export default function FooterComp() {
  return (
    <footer className="bg-black text-white py-10 md:mx-25">
      <div className=" px-4">
        <div className="grid grid-cols-3 md:grid-cols-10 mb-5 border-t border-gray-700 pt-10">
          <div>
            <h4 className="text-lg font-light mb-4 text-gray-400"><a href="https://github.com/Fadlanrmdhn" target="blank">GITHUB</a></h4>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4 text-gray-400"><a href="https://www.linkedin.com/in/fadlan-ramadhan-143969338/" target="blank">LINKEDIN</a></h4>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4 text-gray-400"><a href="https://www.instagram.com/_dlnrmdhnnn_/" target="black">INSTAGRAM</a></h4>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-10">
          <p className="text-start text-gray-400 font-light text-sm">
            © 2026 Fadlan (FSR) | All rights reserved..
          </p>
        </div>
      </div>
    </footer>
  );
}
