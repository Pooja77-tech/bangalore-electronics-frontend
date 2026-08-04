import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Container,
  PageShell,
  SectionHeader,
  SurfaceCard,
  fadeUp,
} from "../../components/ui/PremiumLayout";

const contactInfo = [
  {
    label: "Phone",
    value: "+91 8049511596",
    href: "tel:+918049511596",
    icon: Phone,
    color: "var(--slack-green)",
  },
  {
    label: "WhatsApp",
    value: "+91 8217064201",
    href: "https://wa.me/918217064201",
    icon: FaWhatsapp,
    color: "var(--slack-green)",
  },
  {
    label: "Email",
    value: "info@bangaloreelectronics.com",
    href: "mailto:info@bangaloreelectronics.com",
    icon: Mail,
    color: "var(--slack-blue)",
  },
  {
    label: "Address",
    value: "124, Sadar Patrappa Road, Bangalore - 560002, Karnataka, India",
    icon: MapPin,
    color: "var(--slack-red)",
  },
];

export default function Contact() {
  return (
    <PageShell>
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Start with a clear conversation."
          description="Reach out for enquiries, support, or business discussions. Our team will help define the right path for your security, IT, networking, or electronics requirement."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SurfaceCard {...fadeUp} className="p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase text-[var(--color-accent)]">
              Get in touch
            </p>
            <div className="mt-8 grid gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex gap-4 rounded-[18px] border border-[var(--color-border)] bg-white p-4 transition hover:border-[rgba(97,31,105,0.24)]">
                    <Icon
                      className="mt-1 h-5 w-5 shrink-0"
                      style={{ color: item.color }}
                    />
                    <div>
                      <p className="text-sm text-[var(--color-muted)]">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-base font-semibold text-[var(--color-text)]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </SurfaceCard>

          <SurfaceCard {...fadeUp} className="overflow-hidden p-0">
            <iframe
              title="Bangalore Electronics Location"
              src="https://maps.google.com/maps?q=Bangalore%20Electronics%20124%2C%20Sadar%20Patrappa%20Rd%20Bangalore&t=&z=18&ie=UTF8&iwloc=&output=embed"
              className="h-[520px] w-full"
              loading="lazy"
            />
          </SurfaceCard>
        </div>
      </Container>
    </PageShell>
  );
}
