import { navLinks as NAV_LINKS, socialLinks } from "@/data/portfolio";

const availableSocialLinks = socialLinks.filter((social) => social.href);

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between lg:py-12">
          <div>
            <p className="font-heading text-title-sm text-foreground">
              [Nama Anda]
            </p>
            <p className="mt-1 text-caption text-muted-foreground">
              &copy; {new Date().getFullYear()} [Nama Anda]
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="order-3 md:order-none">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-nav-link text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul
            aria-label="Media sosial"
            className="flex items-center gap-x-5 gap-y-2"
          >
            {availableSocialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex h-11 items-center text-nav-link text-muted-foreground transition-colors hover:text-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
