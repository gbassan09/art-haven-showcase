import { Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-8">
            Vamos <span className="italic font-normal">Conversar?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-16">
            Interessado em meu trabalho ou quer colaborar em algum projeto? 
            Entre em contato e vamos criar algo incrível juntos.
          </p>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:artista@email.com"
              className="group p-8 bg-card rounded-lg border border-border hover:border-foreground/20 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                artista@email.com
              </p>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-card rounded-lg border border-border hover:border-foreground/20 transition-all duration-300 hover-lift"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <Instagram size={24} />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-2">
                Instagram
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                @artista
              </p>
            </a>

            <div className="p-8 bg-card rounded-lg border border-border">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-2">
                Localização
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
