import { ArrowRight, Ship, Anchor, Globe, Award, Users, CheckCircle, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import heroImage from '@/assets/hero-ship.jpg';
import shipVision from '@/assets/ship-vision.jpg';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import service3 from '@/assets/service-3.jpg';
import newsHero from '@/assets/news-hero.jpg';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

const toggleIndex = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const services = [
    {
      title: 'Jasa Tug & Barge',
      description: 'Menyediakan jasa tongkang berkualitas tinggi untuk melayani kebutuhan logistik maritime untuk kargo curah kering, terutama batubara.',
      image: service1,
    },
    {
      title: 'Penyewaan Kapal',
      description: 'Kami memiliki pengalaman lebih dari 21 tahun dalam menyediakan layanan sewa & pengiriman via kapal tongkang untuk ratusan perusahaan dengan berbagai ukuran.',
      image: service2,
    },
    {
      title: 'Kargo & Pengiriman',
      description: 'Kami dapat mengirimkan kargo seperti batubara, nikel dan kargo kering ke tujuan yang Anda pilih sesuai jadwal sesuai rencan',
      image: service3,
    },

  ];

  const testimonials = [
  {
    content: "Barang saya banyak: pipa, mesin, genset, kadang kerangka baja. Dikirim dari Jakarta ke site proyek. Dulu pernah pakai jasa lain, sering delay",
    name: "Aris Sudaryanto",
    position: "Importir - PT Indonesia Raya",
    image: "./src/assets/digital.png",
  },
  {
    content: "Saya rutin kirim produk makanan kering ke Jakarta, tapi kadang juga bawa bahan baku dari Jakarta ke Pontianak. Support-nya bagus dan jadwal kapal konsisten.",
    name: "Almeera Zara Qirani",
    position: "Director of IT - PT Telekomunikasi Indonesia",
    image: "./src/assets/digital.png",
  },
  {
    content: "Membantu saya dengan packing yang aman untuk makanan. Support-nya bagus dan jadwal kapal konsisten",
    name: "PT Digitalrise",
    position: "Director of IT - PT Telekomunikasi Indonesia",
    image: "./src/assets/digital.png",
  },
  {
    content: "Membantu saya dengan packing yang aman untuk makanan. Support-nya bagus dan jadwal kapal konsisten",
    name: "PT Digitalrise",
    position: "Director of IT - PT Telekomunikasi Indonesia",
    image: "./src/assets/digital.png",
  },
]


  const clients = [
    { logo: './src/assets/ace.png' },
    { logo: './src/assets/kopi.png' },
    { logo: './src/assets/geresik.png' },
    { logo: './src/assets/beton.png' },
    { logo: './src/assets/semen.png' },
  ];

  const news = [
    {
      title: 'Annual Business Plan 2025',
      excerpt: 'Dalam era industri 4.0, transformasi digital menjadi kunci utama untuk mencapai keunggulan operasional (Operation Excellence). Dengan memanfaatkan teknologi digital, perusahaan dapat meningkatkan efisiensi, akurasi, dan daya saing dalam operasional bisnis...',
      date: 'November 1, 2024',
    },
    {
      title: 'Annual Business Plan 2025',
      excerpt: 'Dalam era industri 4.0, transformasi digital menjadi kunci utama untuk mencapai keunggulan operasional (Operation Excellence). Dengan memanfaatkan teknologi digital, perusahaan dapat meningkatkan efisiensi, akurasi, dan daya saing dalam operasional bisnis...',
      date: 'November 1, 2024',
    },
    {
      title: 'Improvement Forum Regarding 2025',
      excerpt: 'Managament Improvement adalah sebuah wadah bagi setiap Karyawan untuk berkontribusi terhadap perusahaan melalui initiatif Improvement Skala Kecil (Suggestion System) & Skala Besar (Quality Control) dalam upaya peningkatan kualitas pekerjaan, Solve Issue Departemen, upaya pencapaian KPI masing-masing Departemen.',
      date: 'November 1, 2024',
    },
    {
      title: 'Town Hall “Operation Excellence Through Digitalization” 2025',
      excerpt: 'Sebuah pertemuan resmi yang diadakan oleh perusahaan atau organisasi untuk menyampaikan informasi penting kepada seluruh karyawan atau anggota tim.',
      date: 'November 1, 2024',
    },
  ];

  const faqs = [
  {
    question: "Bagaimana cara melakukan pemesanan Kapal",
    answer: "Untuk melakukan pemesanan kapal, Anda bisa menghubungi tim sales kami melalui formulir atau telepon yang tersedia."
  },
  {
    question: "Apakah ada informasi tracking pengiriman",
    answer: "Ya, setelah pesanan dikonfirmasi, Anda akan menerima nomor tracking untuk memantau pengiriman kapal Anda."
  },
  {
    question: "Bagaimana cara klaim garansi",
    answer: "Jika terdapat kerusakan atau masalah, Anda bisa mengajukan klaim garansi melalui layanan pelanggan kami."
  }
];


  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `var(--hero-overlay), url(${heroImage})` }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-4xl font-bold mb-10 animate-fade-in">
            Melintasi Lautan, Membawa 
            <span className="text-yellow-500"> Kepercayaan, </span>
            Kiriman Anda <br /> Aman Bersama Kami
          </h1>
          <p className="text-xl md:text-2xl mb-8  max-w-3xl mx-auto">
           Kami merupakan perusahaan pelayaran dan logistik <br />yang terintegrasi dengan konektivitas global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">            
          </div>
        </div>
      </section>

      {/* About Preview with Ship Image and Vision/Mission */}
  <section className="py-16">
  <div className="container-custom">
    <div className="lg:flex lg:gap-12 items-stretch">
      
      {/* Kiri: Judul + Deskripsi + Konten */}
      <div className="lg:flex-1 flex flex-col space-y-8">
        
        {/* Judul + Deskripsi */}
        <div className="text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            PT. Tirta Mahakam Resources Tbk
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kami merupakan perusahaan pelayaran dan logistik yang terintegrasi dengan konektivitas global.
            Dengan visi yang solid dan komitmen dalam melaksanakan misi-misi perusahaan,
            kami siap membawa industri maritim Indonesia menuju pelayaran global.
          </p>
        </div>

        {/* Stats + Vision/Mission */}
        <div className="lg:flex gap-[150px]">
          {/* Kiri: Stats Boxes */}
          <div className="flex flex-col gap-5 lg:w-1/3">
            {/* Jarak Tempuh */}
            <div className="bg-[#F8F7A3] p-3 rounded-xl text-left shadow-md">
              <h3 className="text-lg font-bold mb-1">Jarak Tempuh</h3>
              <p className="text-4xl font-bold">5000 +</p>
              <p className="text-sm text-black ">Pengiriman tiap bulan ke Seluruh Indonesia</p>
            </div>

            {/* Area Layanan */}
            <div className="bg-[#2f3858] p-4 rounded-xl text-left shadow-md text-white">
              <h3 className="text-lg font-bold mb-1">Area Layanan</h3>
              <p className="text-4xl font-bold">40</p>
              <p className="text-sm text-white ">Area Layanan di Seluruh Indonesia</p>
            </div>
          </div>

          {/* Tengah: Vision & Mission */}
          <div className="flex-1 flex flex-col space-y-9 mt-6 lg:mt-0">
            {/* Visi */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-5 text-black">Visi</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Menjadi perusahaan logistik berbasis digital dengan jaringan luas dan solusi terintegrasi
              </p>
            </div>

            {/* Misi */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold mb-5 text-black">Misi</h3>
              <ul className="list-disc ml-5 text-base text-muted-foreground space-y-1">
                <li>Memberikan pelayanan jasa logistik terintegrasi, berkualitas, dan efisien kepada pelanggan.</li>
                <li>Mengelola dan mengembangkan usaha logistik <br />secara berkesinambungan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Kanan: Gambar + Tombol */}
      <div className="lg:w-1/3 flex mt-10 lg:mt-0">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg relative">
          <img 
            src={shipVision} 
            alt="Modern Cargo Ship" 
            className="w-full h-full object-cover"
          />
          {/* Tombol di bawah */}
          <div className="absolute bottom-4 right-4">
            <button className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-lg flex items-center shadow-md hover:bg-[#e6c700] transition">
              Tentang Kami
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




      {/* Services Section */}
    <section className="section-padding bg-gray-100">
  <div className="container-custom">
    {/* Bagian Heading */}
    <div className="text-left mb-12">
      {/* Teks kecil dengan buletan */}
      <span className="inline-block px-4  bg-white py-1 text-sm font-semibold text-black border border-black rounded-full mb-4">
        LAYANAN KAMI
      </span>

      {/* Judul besar */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Kami Memberikan Layanan dan Perioritas Terbaik
      </h2>
    </div>
    
    {/* Grid Services */}
    <div className="grid lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="shadow-ocean hover:shadow-maritime transition-smooth hover:scale-105">
          <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-black">
              {service.title}
            </h3>
            <p className="text-muted-foreground">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Client Logos */}
      <section className="section-padding">
  <div className="container-custom">
    {/* Judul */}
    <div className="text-center mb-12">
      <span className="inline-block px-4  bg-white py-1 text-sm font-semibold text-black border border-black rounded-full mb-4">
        KLIEN KAMI
        </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
       Kami membantu perusahaan untuk kebutuhan logistik.
      </h2>
    </div>

    {/* Grid Logo */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {clients.map((client, index) => (
        <div key={index} className="flex flex-col items-center">
          <img 
            src={client.logo} 
            className="w-30 h-24 object-contain mb-4"
          />          
        </div>
      ))}
    </div>
  </div>
</section>


{/* Experience & Testimonials */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">            
             <span className="inline-block px-4  bg-white py-1 text-sm font-semibold text-black border border-black rounded-full mb-4">
            TESTIMONAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Pengalaman dan Testimoni Dari Klien Kami</h2>          
          </div>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
            <div
  key={index}
  className="embla__slide flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-4"
>
  <Card className="bg-[#07237e] h-full rounded-xl shadow-lg">
    <CardContent className="p-8 text-left flex flex-col justify-between h-full">
      {/* Isi testimonial */}
      <p className="text-lg text-white mb-6 italic text-center">
        "{testimonial.content}"
      </p>

      {/* Bagian profil */}
      <div className="flex items-center space-x-4 mt-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-white object-cover"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-white">
            {testimonial.position}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="text-white bg-[#07237e] border-white hover:bg-white hover:text-black">
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="text-white bg-[#07237e] border-white hover:bg-white hover:text-black">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
     <section className="section-padding">
  <div className="container-custom">
    <div className="text-left mb-12">
      <span className="inline-block px-4 bg-white py-1 text-sm font-semibold text-black border border-black rounded-full mb-4">
        BERITA DAN INFORMASI
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Informasi Seputar Berita Perusahaan
      </h2>  
    </div>
<div className="flex flex-col lg:flex-row gap-12 items-start">
  {/* Kiri: 45% */}
  <div className="flex flex-col gap-14 lg:basis-[45%]">
    {/* Gambar */}
    <div className="aspect-[4/3] bg-black rounded-2xl overflow-hidden shadow-ocean">
      <img 
        src={newsHero}
        alt="Company News" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* News ke-4 */}
    {news[3] && (
      <div>
        <span className="text-sm text-muted-foreground">{news[3].date}</span>
        <h3 className="text-xl font-bold mb-2 text-black">{news[3].title}</h3>
        <p className="text-muted-foreground mb-3">{news[3].excerpt}</p>
        <Button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Baca Selengkapnya
        </Button>
      </div>
    )}
  </div>

  {/* Kanan: 55% */}
  <div className="flex flex-col gap-6 lg:basis-[55%]">
    {news.slice(0, 3).map((article, index) => (
      <div key={index} className="border-b border-border pb-6 last:border-b-0">
        <span className="text-sm text-muted-foreground">{article.date}</span>
        <h3 className="text-xl font-bold mb-2 text-black">{article.title}</h3>
        <p className="text-muted-foreground mb-3">{article.excerpt}</p>
        <Button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-ocean-blue transition-colors">
          Baca Selengkapnya
        </Button>
      </div>
    ))}
  </div>
</div>
</div>
</section>


    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-4 bg-white py-1 text-sm font-semibold text-black border border-black rounded-full mb-4">
        FAQ
       </span>
        <h2 className="text-2xl md:text-2xl font-bold text-[#07237e] mb-10">
          PERTANYAAN YANG SERING DIAJUKAN
        </h2>

        <div className="max-w-2xl mx-auto space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => toggleIndex(index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-navy-blue text-bold border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>       
    

      {/* CTA Section */}
      <section className="section-padding text-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-10">
            Ingin tahu lebih banyak tentang produk dan layanan kami? Silahkan ajukan <br /> penawaran
          </h2>          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-navy-blue text-white px-8 py-4 rounded hover:bg-blue-700 transition-colors">
              AJUKAN PENAWARAN
            </Button>      
          </div>
        </div>
      </section>
    </div>
  );
}