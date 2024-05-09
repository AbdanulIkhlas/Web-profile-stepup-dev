import { Link } from "react-router-dom";
import Footer from "../components/Fragments/Footer";
import CardArtikel from "../components/Fragments/CardArtikel";
import Button from "../components/Elements/Button/Button";
import LatestCardArticle from "../components/Fragments/LatestCardArticle";
import Navbar from "../components/Fragments/Navbar";
import useVerifyUser from "../hooks/useVerifyUser";

const Artikel = () => {
  const user = useVerifyUser();

  const latestArticle = [
    {
      id: 1,
      image: "../../../images/machineLearning.png",
      title: "Mengenal Konsep Machine Learning",
      author: "John Doe",
      content:
        "Machine learning adalah cabang dari kecerdasan buatan yang berfokus pada pembuatan sistem yang dapat belajar dari data.",
      published_at: "2024-05-09",
    },
    {
      id: 2,
      image: "../../../images/blockchain.png",
      title: "Penerapan Blockchain dalam Keuangan",
      author: "Alice Smith",
      content:
        "Blockchain telah mengubah paradigma dalam industri keuangan dengan memberikan transparansi dan keamanan yang tinggi.",
      published_at: "2024-05-08",
    },
    {
      id: 3,
      image: "../../../images/iot.png",
      title: "Pengenalan Internet of Things (IoT)",
      author: "Bob Johnson",
      content:
        "Internet of Things adalah konsep di mana objek fisik dapat terhubung dan bertukar data melalui internet.",
      published_at: "2024-05-07",
    },
  ];

  const articles = [
    {
      id: 4,
      image: "../../../images/reactJs.png",
      title: "Memahami Dasar-dasar ReactJS",
      author: "Emily Brown",
      content:
        "ReactJS adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna yang interaktif.",
      published_at: "2024-05-06",
    },
    {
      id: 5,
      image: "../../../images/mobileDev.png",
      title: "Teknik Pengembangan Aplikasi Mobile",
      author: "David Wilson",
      content:
        "Pengembangan aplikasi mobile melibatkan berbagai teknik dan platform, seperti Android dan iOS.",
      published_at: "2024-05-05",
    },
    {
      id: 6,
      image: "../../../images/dataScience.png",
      title: "Peran Data Science dalam Bisnis",
      author: "Sarah Davis",
      content:
        "Data science membantu bisnis dalam mengambil keputusan berdasarkan analisis data yang akurat dan mendalam.",
      published_at: "2024-05-04",
    },
  ];

  return (
    <>
      {/* {user ? <NavbarDev /> : <NavBar />} */}
      <Navbar user={user} />
      <main className="flex flex-col min-h-screen px-2 mb-14 box-border">
        <h1 className="mt-[80px] text-2xl font-bold text-center">Artikel</h1>
        <p className="mt-[30px] w-full text-xs font-body leading-4 text-black px-[12px] text-center">
          Jelajahi dunia teknologi terkini dengan artikel kami! Perkembangan
          terbaru, kecerdasan buatan, dan solusi paling inovatif menunggu untuk
          ditemukan
        </p>
        {user ? (
          <Link
            to="/developer/article/create"
            className="md:flex md:w-full md:justify-center"
          >
            <Button
              type="submit"
              classname={`w-full md:w-[50%] my-10 py-3 bg-primary rounded-full shadow-lg shadow-slate-500 hover:shadow-md hover:shadow-dark transition duration-300 `}
            >
              Buat Artikel
            </Button>
          </Link>
        ) : (
          <></>
        )}
        {/* <img src={`${image}`} alt="" /> */}
        <h2 className="mt-[30px] px-[12px] font-bold text-xl text-center">
          Postingan Terbaru
        </h2>
        {/* <LatestCardArticle /> */}
        <div className="w-full">
          {latestArticle.map((article, index) => (
            <LatestCardArticle key={index} id={index} {...article} />
          ))}
        </div>
        {/* memanggil object semua artikel */}
        <h2 className="mt-[30px] px-[12px] font-bold text-xl text-center ">
          Postingan Lainnya
        </h2>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          {articles.map((article, index) => (
            <CardArtikel key={index} id={index} {...article} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Artikel;
