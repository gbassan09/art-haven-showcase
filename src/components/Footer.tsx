import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-display text-2xl font-semibold">
            Artista
          </span>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:artista@email.com"
              className="p-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm font-body opacity-60">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
