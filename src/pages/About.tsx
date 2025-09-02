import { Target, Eye, Award, Users, Ship, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Keunggulan',
      description: 'Komitmen pada kualitas layanan terbaik dan inovasi berkelanjutan'
    },
    {
      icon: Users,
      title: 'Profesionalisme',
      description: 'Tim berpengalaman dengan keahlian tinggi di bidang maritim'
    },
    {
      icon: Ship,
      title: 'Keandalan',
      description: 'Armada modern dan pemeliharaan berkala untuk keamanan optimal'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Jangkauan internasional dengan standar kelas dunia'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Berdirinya PT. Tirta Mahakam Resources' },
    { year: '2012', event: 'Ekspansi armada dengan 10 kapal cargo' },
    { year: '2015', event: 'Sertifikasi ISO 9001:2015' },
    { year: '2018', event: 'Pembukaan rute internasional Asia Tenggara' },
    { year: '2021', event: 'Digitalisasi sistem tracking dan monitoring' },
    { year: '2024', event: 'Armada 50+ kapal dengan teknologi terdepan' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding pt-24 bg-ocean-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-primary">
              Tentang PT. Tirta Mahakam Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Lebih dari 15 tahun menjadi mitra terpercaya dalam industri logistik maritim, 
              menghadirkan solusi inovatif dan berkelanjutan untuk masa depan yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-primary">
                Sejarah & Perjalanan Kami
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                PT. Tirta Mahakam Resources Tbk didirikan pada tahun 2009 dengan visi menjadi 
                perusahaan logistik maritim terdepan di Indonesia. Berawal dari armada kecil, 
                kini kami telah berkembang menjadi perusahaan dengan 50+ kapal modern.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Dengan komitmen pada kualitas, keamanan, dan inovasi, kami telah melayani 
                lebih dari 200 klien aktif di seluruh Asia Tenggara dengan berbagai kebutuhan 
                logistik maritim.
              </p>
              <p className="text-lg text-muted-foreground">
                Kami bangga menjadi bagian dari pertumbuhan ekonomi maritim Indonesia dan 
                berkomitmen untuk terus berinovasi dalam memberikan layanan terbaik.
              </p>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="pt-3">
                    <p className="text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-navy-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-lg opacity-90">
                  Menjadi perusahaan logistik maritim terdepan di Indonesia yang memberikan 
                  solusi terpadu dengan standar internasional, berkontribusi pada pembangunan 
                  ekonomi maritim nasional.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Misi</h3>
                </div>
                <ul className="space-y-3 text-lg opacity-90">
                  <li>• Memberikan layanan logistik maritim berkualitas tinggi</li>
                  <li>• Mengembangkan armada modern dengan teknologi terdepan</li>
                  <li>• Membangun kemitraan strategis jangka panjang</li>
                  <li>• Berkontribusi pada keberlanjutan lingkungan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-primary">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap layanan dan kemitraan yang kami bangun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-ocean hover:shadow-maritime transition-smooth hover:scale-105">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership (Simple version) */}
      <section className="section-padding bg-ocean-light">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-primary">
              Kepemimpinan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dipimpin oleh tim profesional berpengalaman dengan dedikasi tinggi untuk 
              menghadirkan inovasi dan pertumbuhan berkelanjutan di industri maritim.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}