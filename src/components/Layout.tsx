import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Armada Kapal', href: '/fleet' },
  { name: 'Proyek & Galeri', href: '/projects' },
  { name: 'Berita', href: '/news' },
  { name: 'Karir', href: '/career' },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     <header
  className={`fixed left-0 right-0 z-50 transition-smooth ${
    scrolled
      ? 'top-0 bg-navy-blue backdrop-blur-md shadow-maritime'
      : 'top-4'
  }`}
>
  <nav className="container-custom">
    <div className="flex items-center justify-between h-16 lg:h-20">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-navy-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">T</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-white">PT. Tirta Mahakam</h1>
          <p className="text-xs text-white">Resources Tbk</p>
        </div>
      </Link>

      {/* Navigation Center */}
      <div className="hidden lg:flex items-center flex-1 justify-center space-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm font-medium transition-smooth hover:text-ocean-blue ${
              location.pathname === item.href
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right Side (CTA + Language Switch) */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/contact">
          <Button variant="default" className="text-black bg-[#f4ce05] btn-cta hover:bg-[#e6c700] transition">
            Hubungi Kami
          </Button>
        </Link>
        <div className="flex items-center text-sm font-medium text-white space-x-2">
          <button className="hover:text-ocean-blue">ID</button>
          <span>|</span>
          <button className="hover:text-ocean-blue">EN</button>
        </div>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
        <div className="px-4 py-4 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block py-2 text-sm font-medium transition-smooth ${
                location.pathname === item.href
                  ? 'text-ocean-blue'
                  : 'text-foreground hover:text-ocean-blue'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="text-black w-full mt-4 btn-cta">
              Hubungi Kami
            </Button>
          </Link>

          {/* Language Switch Mobile */}
          <div className="flex justify-center mt-4 text-sm font-medium space-x-2">
            <button className="hover:text-ocean-blue">ID</button>
            <span>|</span>
            <button className="hover:text-ocean-blue">EN</button>
          </div>
        </div>
      </div>
    )}
  </nav>
</header>


      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
     <footer className="bg-navy-blue text-white">
  <div className="container-custom py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {/* Logo & Company Description */}
      <div className="col-span-2 space-y-4">
        <div className="flex items-center space-x-3">
          <img src="./src/assets/logo.png" alt="Logo" className="w-30 h-30" />
          <div>          
            <p className="text-sm">Kami merupakan perusahaan pelayaran dan logistik yang terintegrasi dengan konektivitas global. Kami memberikan solusi rantai pasokan dan ekosistem bisnis terpadu sebagai bagian dari logistic solution universe.</p>
          </div>
        </div>
      </div>

      {/* Quick Links (Left) */}
      <div>
        <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about" className="hover:underline">Tentang Kami</Link></li>
          <li><Link to="/services" className="hover:underline">Layanan</Link></li>
          <li><Link to="/fleet" className="hover:underline">Armada Kapal</Link></li>
        </ul>
      </div>

      {/* Quick Links (Right) */}
      <div>
        <h4 className="text-sm font-semibold mb-4 invisible lg:visible">⠀</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/projects" className="hover:underline">Proyek & Galeri</Link></li>
          <li><Link to="/news" className="hover:underline">Berita & Artikel</Link></li>
          <li><Link to="/career" className="hover:underline">Karier</Link></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold">Join Us</h4>
        <div className="flex space-x-4 text-white text-lg">
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>&copy; PT. Tirta Mahakam Resources Tbk. All rights reserved.</p>
      <Link to="/contact" className="flex items-center gap-1 mt-4 md:mt-0 hover:underline">
        Hubungi Kami <span className="ml-1">→</span>
      </Link>
    </div>
  </div>
</footer>

    </div>
  );
}