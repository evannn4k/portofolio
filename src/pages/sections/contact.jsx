import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/data/portfolio";

const EMAIL_LINK = socialLinks.find(
  (social) => social.label === "Email" && social.href,
);
const DIRECT_LINKS = socialLinks.filter((social) => social.href);

const CONTACT_TYPES = [
  { value: "project", label: "Project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "internship", label: "Internship" },
  { value: "question", label: "Question" },
  { value: "other", label: "Other" },
];

const REQUIRED_MARK = (
  <span aria-hidden="true" className="text-primary">
    *
  </span>
);

export default function Contact() {
  const [topic, setTopic] = useState(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!EMAIL_LINK) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const typeLabel =
      CONTACT_TYPES.find((type) => type.value === topic)?.label ?? "Other";
    const subject = `[Portofolio] ${typeLabel} dari ${name}`;
    const body = [message, "\u2014", name, email, phone]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${EMAIL_LINK.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface-soft py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
              Kontak
            </p>
            <h2
              id="contact-heading"
              className="mt-4 text-display-sm sm:text-display-md md:text-display-lg"
            >
              Mari bangun sesuatu.
            </h2>
            <p className="mt-5 text-body-lg text-body">
              Punya proyek, ide kolaborasi, atau informasi magang? Ceritakan
              lewat form di samping saya akan membalas sebisa
              mungkin.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-title-sm text-foreground">Kontak langsung</h3>
              <ul
                aria-label="Kontak langsung"
                className="mt-4 flex flex-wrap gap-x-5 gap-y-1"
              >
                {DIRECT_LINKS.map((social) => (
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

          <div className="md:col-span-7">
            {EMAIL_LINK ? (
              <form onSubmit={handleSubmit} noValidate={false}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="contact-name">
                      Nama {REQUIRED_MARK}
                    </FieldLabel>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Nama lengkap"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="contact-email">
                      Email {REQUIRED_MARK}
                    </FieldLabel>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="nama@email.com"
                    />
                  </Field>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="contact-phone">Nomor</FieldLabel>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+62 ..."
                    />
                    <FieldDescription>Opsional.</FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="contact-type">Tipe</FieldLabel>
                    <Select name="type" value={topic} onValueChange={setTopic}>
                      <SelectTrigger
                        id="contact-type"
                        className="w-full"
                        aria-label="Tipe pesan"
                      >
                        <SelectValue placeholder="Pilih tipe" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONTACT_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <Field className="mt-5">
                  <FieldLabel htmlFor="contact-message">
                    Pesan {REQUIRED_MARK}
                  </FieldLabel>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Ceritakan proyek, kolaborasi, atau pertanyaan Anda..."
                    className="min-h-32"
                  />
                </Field>

                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Button
                    type="submit"
                    className="h-11 rounded-full px-6 text-button text-white"
                  >
                    Kirim Pesan
                  </Button>
                  {sent && (
                    <p role="status" className="text-caption text-muted-foreground">
                      Draft email telah disiapkan di aplikasi email Anda.
                    </p>
                  )}
                </div>
              </form>
            ) : (
              <p className="text-body-md text-body">
                Form kontak belum tersedia. Silakan hubungi saya melalui
                tautan langsung di sebelah.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
