import { Button, Grid, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { CardComp } from "./CardComp";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import CDasarJs from "../assets/certif/DasarJS.png" 
import CDasarWeb from "../assets/certif/DasarWeb.png" 
import CFinancial from "../assets/certif/Financial.png" 
import CIgdx from "../assets/certif/IGDX.png" 
import CK3 from "../assets/certif/K3.png" 
import CCode from "../assets/certif/Code.png" 
import CGemini from "../assets/certif/Gemini.png" 

export default function CardCertif() {
  const data = [
    {
      id: 1,
      title: "Dicoding ",
      desc: "learn basic javascript programming",
      image: CDasarJs,
    //   link: link,
    },

    {
      id: 2,
      title: "Dicoding",
      desc: "learn the basics of web programming",
      image: CDasarWeb,
    //   link: link,
    },

    {
      id: 3,
      title: "Dicoding",
      desc: "Introduction to Financial Literacy",
      image: CFinancial,
    //   link: link,
    },
    {
      id: 4,
      title: "IGDX Career",
      desc: "Career buidance for aspiring game developer",
      image: CIgdx,
    //   link: link,
    },
    {
      id: 5,
      title: "International labour organization",
      desc: "occupational Health and Safety",
      image: CK3,
    //   link: link,
    },
    {
      id: 6,
      title: "Genimi",
      desc: "Basic competencies needed to use Google AI",
      image: CGemini,
    //   link: link,
    },
    {
      id: 7,
      title: "Code Org",
      desc: "Successful completion of Course A",
      image: CCode,
    //   link: link,
    },
  ];

  // isi gambar yang tampil
  const [images, setImages] = useState([]);

  // jumlah card tiap load
  const imagesPerPage = 3;

  // halaman
  const [page, setPage] = useState(1);

  // apakah semua card sudah tampil
  const isAllLoaded = images.length >= data.length;

  useEffect(() => {
    setImages(data.slice(0, page * imagesPerPage));
  }, [page]);

  // tombol load more
  const handleLoadMore = () => {
    // kalau udah mentok
    if (isAllLoaded) {
      setPage(1); // balik awal
    } else {
      setPage(page + 1);
    }
  };

  // tombol close
  const handleClose = () => {
    setPage(1);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {images.map((item) => (
          <Grid item xs={6} key={item.id} className="w-[25rem]">
            <CardComp
              component="img"
              height="194"
              item={item}
              className="group max-w-[30rem] bg-[#090909] bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
              imageClassName="w-full h-full object-cover transition-all duration-700 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              sx={{ borderRadius: "10px" }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center justify-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                    <HiOutlineExternalLink />
                </div>
              </div>
            </CardComp>
          </Grid>
        ))}
      </Grid>

      <div className="
            flex justify-center items-center gap-3 md:gap-4
            absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t flex items-end pb-2 z-20 transition-colors duration-500 from-[#030303] via-[#030303]/90 to-transparent
          "
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "0px",
        }}
      >
        {/* tombol utama */}
        {!isAllLoaded && (
          <Button
            variant="contained"
            onClick={() => setPage(page + 1)}
            style={{ backgroundColor: "black" }}
          >
            Load More <IoIosArrowDown className="mx-2"/>
          </Button>
        )}

        {/* tombol close muncul kalau page > 1 */}
        {page > 1 && (
          <Button  onClick={handleClose} style={{color:"red",
            border: "1px solid red",
            borderRadius: "5rem",
            padding: "5px",
            width: "7rem"
          }}>
            Close
          </Button>
        )}
      </div>
    </div>
  );
}
