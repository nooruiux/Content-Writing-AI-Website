import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { footer, site } from "@/lib/content";

const panel = "rounded-xl border-[1.4px] border-border bg-surface backdrop-blur-lg";

const footerRoutes: Record<string, string> = {
  Contact: "/contact",
  "Contact Us": "/contact",
};

function footerLinkHref(label: string) {
  return footerRoutes[label] ?? "#";
}

export function Footer() {
  return (
    <footer className="pt-6 pb-14">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-stretch">
          <div className={`w-full p-8 lg:flex-1 ${panel}`}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="flex w-fit items-center gap-2"
                  aria-label={`${site.name} home`}
                >
                  <img src="/assets/logo-mark.svg" alt="" width={24} height={24} className="size-6" />
                  <span className="text-[20px] font-bold leading-6 text-white">{site.name}</span>
                </Link>
                <p className="text-base font-bold text-white/[0.72]">{footer.tagline}</p>
              </div>

              <div className="h-px w-full bg-white/5" />

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {footer.columns.map((col) => (
                  <div key={col.heading} className="flex flex-col gap-5">
                    <p className="text-base font-bold text-white">{col.heading}</p>
                    <ul className="flex flex-col gap-3 text-base text-white/[0.72]">
                      {col.links.map((link) => (
                        <li key={link}>
                          <a
                            href={footerLinkHref(link)}
                            className="transition-colors hover:text-white"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`flex w-full flex-col gap-8 p-8 lg:w-[488px] ${panel}`}>
            <div className="flex flex-col gap-6">
              <p className="text-title font-bold text-white">{footer.newsletter.heading}</p>
              <NewsletterForm />
            </div>

            <div className="mt-auto flex flex-col gap-5">
              <div className="h-px w-full bg-white/5" />
              <ul className="flex gap-4">
                {footer.socials.map((social) => (
                  <li key={social.label} className="flex-1">
                    <a
                      href="#"
                      aria-label={social.label}
                      className="flex aspect-square items-center justify-center rounded-xl border-[1.4px] border-border bg-white/[0.03] transition-colors hover:bg-white/[0.08]"
                    >
                      <img
                        src={social.icon}
                        alt=""
                        width={56}
                        height={56}
                        className="size-10 sm:size-[56px]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-base font-medium text-white">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
