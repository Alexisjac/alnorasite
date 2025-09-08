"use client";
import React from "react";
import Head from "next/head";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby4O9Lf5sfRV-w0iTq7jXdnEIQBWchbp3UYqHhbfceBQOswN_2HFw8N4vjfT7fVyjFW/exec";

// =============================
// FUNCTIONS
// =============================
async function submitForm(data: any) {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    alert("✅ Votre demande a été envoyée avec succès !");
  } catch (err) {
    alert("❌ Erreur, réessayez plus tard.");
    console.error(err);
  }
}

// =============================
// PAGE
// =============================
export default function Page() {
  const orgName = "Alnora";
  const siteUrl = "https://alnora.ca";
  const preview = `${siteUrl}/preview.jpg`; // Mets un visuel 1200x630 à /public/preview.jpg

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: orgName,
    url: siteUrl,
    image: preview,
    description:
      "Services de nettoyage extérieur résidentiel et commercial: lavage à pression, fenêtres, gouttières, bacs et scellant d’asphalte. Satisfaction garantie.",
    areaServed: [
      "Brome-Missisquoi",
      "Haute-Yamaska",
      "Rouville",
      "Granby",
      "Cowansville",
      "Bromont",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Estrie / Montérégie",
      addressCountry: "CA",
    },
    telephone: "+1-263-380-9382",
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Head>
        {/* PRIMARY SEO */}
        <title>Alnora — Nettoyage extérieur haute gamme</title>
        <meta
          name="description"
          content="Alnora: lavage à pression, fenêtres, gouttières, bacs et scellant d’asphalte. Résidentiel & commercial — Brome-Missisquoi, Haute-Yamaska, Rouville. Satisfaction garantie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="Alnora, nettoyage extérieur, lavage à pression, nettoyage de fenêtres, gouttières, bacs, scellant d’asphalte, Granby, Bromont, Cowansville"
        />
        <meta name="author" content="Alnora" />
        <meta name="theme-color" content="#064e3b" />

        {/* FAVICONS (mets les fichiers dans /public) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Alnora — Nettoyage extérieur haute gamme" />
        <meta
          property="og:description"
          content="Résidentiel & commercial — Lavage à pression, fenêtres, gouttières, bacs et scellant d’asphalte. Satisfaction garantie."
        />
        <meta property="og:image" content={preview} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alnora" />
        <meta property="og:locale" content="fr_CA" />

        {/* TWITTER / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alnora — Nettoyage extérieur haute gamme" />
        <meta
          name="twitter:description"
          content="Service rapide et professionnel depuis 2019. Satisfaction garantie."
        />
        <meta name="twitter:image" content={preview} />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* HEADER (numéro retiré, email seulement) */}
      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-40 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <div className="text-2xl font-extrabold tracking-tight text-emerald-900 select-none">
            ALNORA
          </div>

          {/* NAV desktop */}
          <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <a href="#services" className="hover:text-emerald-800">Services</a>
            <a href="#why" className="hover:text-emerald-800">Pourquoi nous</a>
            <a href="#form" className="hover:text-emerald-800">Soumission</a>
            <a href="#history" className="hover:text-emerald-800">Histoire</a>
            <a href="#work" className="hover:text-emerald-800">Travailler avec nous</a>
          </nav>

          {/* Email only */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            <a
              href="mailto:contact@alnora.ca"
              className="rounded-lg bg-emerald-800 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 whitespace-nowrap"
            >
              ✉️ contact@alnora.ca
            </a>
          </div>
        </div>

        {/* NAV mobile */}
        <div className="md:hidden px-4 sm:px-6 pb-3">
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <a href="#services" className="hover:text-emerald-800">Services</a>
            <a href="#why" className="hover:text-emerald-800">Pourquoi nous</a>
            <a href="#form" className="hover:text-emerald-800">Soumission</a>
            <a href="#history" className="hover:text-emerald-800">Histoire</a>
            <a href="#work" className="hover:text-emerald-800">Travailler avec nous</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-white">
        <div className="absolute inset-0">
          <img
            src="/hero-clean.jpg"
            alt="Nettoyage extérieur Alnora"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/90 to-emerald-700/90" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 md:py-32 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Nettoyage extérieur <span className="text-white">Haute gamme</span>
          </h1>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto">
            Résidentiel & Commercial — Brome-Missisquoi • Haute-Yamaska • Rouville
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-6">
            <a
              href="#form"
              className="rounded-xl bg-amber-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-extrabold text-emerald-950 shadow hover:bg-amber-400 transition whitespace-nowrap"
            >
              Obtenir une soumission
            </a>
            {/* Téléphone visible ici (call-to-action), pas en haut */}
            <a
              href="tel:2633809382"
              className="rounded-xl bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-extrabold text-emerald-900 shadow hover:bg-gray-100 transition whitespace-nowrap"
            >
              📞 263-380-9382
            </a>
          </div>
        </div>
      </section>

      {/* BANDEAU GARANTIE */}
      <div className="bg-emerald-900 text-white py-3 overflow-hidden">
        <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-center font-bold text-base sm:text-lg will-change-transform">
          ✅ Satisfaction garantie • Pas satisfait? On revient • Depuis 2019
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* POURQUOI NOUS */}
      <section id="why" className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900">Pourquoi choisir Alnora ?</h2>
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <PromiseCard title="✨ Qualité garantie" desc="Si vous n’êtes pas satisfait, on repasse. Point final." />
            <PromiseCard title="⚡ Rapidité" desc="Réponse rapide et exécution nette. L’avant/après est instantané." />
            <PromiseCard title="🤝 Professionnalisme" desc="Communication claire, tenue soignée et respect des lieux." />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-emerald-900">Nos services</h2>
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <ServiceCard title="Lavage à pression" short="Redonne une apparence neuve" details="Patios, entrées, façades." />
            <ServiceCard title="Nettoyage de fenêtres" short="Clarté impeccable" details="Intérieur et extérieur, rendu sans traces." />
            <ServiceCard title="Nettoyage de gouttières" short="Protège le bâtiment" details="Débouchage complet et dégagement des débris." />
            <ServiceCardBacs />
            <ServiceCard title="Scellant d’asphalte" short="Durabilité & esthétique" details="Nous collaborons avec une équipe spécialisée qui fait uniquement ça, pour garantir un résultat uniforme et durable." />
            <ServiceCard title="Demandes spéciales" short="Solutions sur mesure" details="Chaque projet est étudié individuellement." />
          </div>
        </div>
      </section>

      {/* FORMULAIRE SOUMISSION */}
      <section id="form" className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-emerald-900">Demande de soumission</h2>
          <p className="mt-3 text-center text-base sm:text-lg text-gray-700">Remplissez le formulaire et recevez une réponse rapide.</p>
          <GeneralForm />
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="history" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900">L’histoire d’Alnora</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-gray-900">
            Depuis 2019, Alnora élève les standards du nettoyage extérieur. Fondée par une équipe locale jeune et motivée, 
            l’entreprise s’est rapidement imposée grâce à sa rigueur et son professionnalisme. 
            Aujourd’hui, Alnora combine dynamisme et expertise pour offrir un service qui inspire confiance et fidélité.
          </p>
        </div>
      </section>

      {/* TRAVAILLER AVEC NOUS */}
      <section id="work" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-emerald-900">Travailler avec nous</h2>
          <p className="mt-3 text-center text-base sm:text-lg text-gray-700">
            Vous cherchez un emploi motivant ou vous êtes une entreprise qui veut plus de clients ?  
            Rejoignez l’aventure Alnora.
          </p>
          <WorkForm />
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-emerald-900">Avis clients</h2>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <Testimonial name="Julie L. — Granby" quote="Résultat impeccable et rapide. Alnora inspire confiance dès le premier contact." />
            <Testimonial name="Marc D. — Cowansville" quote="Ponctuel, efficace, propre. Alnora prend la qualité au sérieux et ça se voit." />
            <Testimonial name="Sophie G. — Bromont" quote="Terrasse et entrée transformées. La valeur perçue de la propriété monte d’un coup." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-emerald-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-extrabold">ALNORA</div>
            <p className="mt-2 text-sm opacity-90">Nettoyage extérieur résidentiel & commercial</p>
          </div>
          <div>
            <div className="font-bold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>📞 263-380-9382</li>
              <li>✉️ contact@alnora.ca</li>
              <li>📍 Brome-Missisquoi • Haute-Yamaska • Rouville</li>
            </ul>
          </div>
          <div>
            <div className="font-bold">Liens rapides</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#services">Services</a></li>
              <li><a href="#why">Pourquoi nous</a></li>
              <li><a href="#form">Soumission</a></li>
              <li><a href="#history">Histoire</a></li>
              <li><a href="#work">Travailler avec nous</a></li>
            </ul>
          </div>
        </div>
        <div className="bg-emerald-950 py-4 text-center text-xs">
          © {new Date().getFullYear()} ALNORA — Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

// =============================
// COMPONENTS
// =============================
function PromiseCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-200 hover:shadow-md transition">
      <h3 className="text-xl font-extrabold text-emerald-900">{title}</h3>
      <p className="mt-2 text-gray-700">{desc}</p>
    </div>
  );
}

function ServiceCard({
  title,
  short,
  details,
}: {
  title: string;
  short: string;
  details: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="rounded-2xl bg-gray-50 p-6 shadow ring-1 ring-gray-200 hover:shadow-lg transition cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <h3 className="text-xl font-extrabold text-emerald-900">{title}</h3>
      <p className="mt-2 text-base text-gray-800">{short}</p>
      {open && <p className="mt-3 text-sm text-gray-700">{details}</p>}
    </div>
  );
}

function ServiceCardBacs() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-2xl bg-gray-50 p-6 shadow ring-1 ring-gray-200 hover:shadow-lg transition">
      <h3
        className="text-xl font-extrabold text-emerald-900 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Lavage de bacs
      </h3>
      <p className="mt-2 text-base text-gray-800">
        Supprime les mauvaises odeurs et maintient un environnement sain.
      </p>
      {open && <BacsForm />}
    </div>
  );
}

function GeneralForm() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );
    data.type = "Soumission Générale";
    await submitForm(data);
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 sm:mt-10 max-w-2xl space-y-4 rounded-2xl bg-white p-6 sm:p-8 shadow-xl ring-1 ring-gray-200"
    >
      <Label>Nom complet</Label>
      <Input name="name" required />
      <Label>Téléphone</Label>
      <Input name="phone" type="tel" required />
      <Label>Courriel</Label>
      <Input name="email" type="email" required />
      <Label>Adresse</Label>
      <Input name="address" />
      <Label>Dimensions (si applicable)</Label>
      <Input name="dimensions" />
      <Label>Disponibilités préférées</Label>
      <Input name="dispo" />
      <Label>Informations supplémentaires</Label>
      <Textarea name="notes" />
      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-emerald-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-extrabold text-white hover:bg-emerald-800 transition"
        disabled={loading}
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}

function BacsForm() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );
    data.type = "Soumission Bacs";
    await submitForm(data);
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 space-y-3 rounded-xl bg-white p-4 shadow-inner ring-1 ring-gray-200"
    >
      <Label>Nom complet</Label>
      <Input name="name" required />
      <Label>Téléphone</Label>
      <Input name="phone" type="tel" required />
      <Label>Courriel</Label>
      <Input name="email" type="email" required />
      <Label>Adresse</Label>
      <Input name="address" required />
      <Label>Nombre de bacs</Label>
      <Input name="bacs" type="number" required />
      <Label>Type de bacs</Label>
      <select
        name="bacsType"
        className="w-full rounded-xl border border-gray-300 px-3 py-2"
      >
        <option>Ordures</option>
        <option>Recyclage</option>
        <option>Compost</option>
        <option>Mixte</option>
      </select>
      <Label>État des bacs</Label>
      <select
        name="etat"
        className="w-full rounded-xl border border-gray-300 px-3 py-2"
      >
        <option>Normal</option>
        <option>Très sale / odeur forte</option>
      </select>
      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-900 px-4 py-2 text-white font-bold hover:bg-emerald-800 transition"
        disabled={loading}
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}

function WorkForm() {
  return (
    <form
      action="mailto:contact@alnora.ca"
      method="POST"
      encType="text/plain"
      className="mx-auto mt-8 sm:mt-10 max-w-2xl space-y-4 rounded-2xl bg-gray-50 p-6 sm:p-8 shadow ring-1 ring-gray-200"
    >
      <Label>Nom complet</Label>
      <Input name="Nom" required />
      <Label>Téléphone</Label>
      <Input name="Téléphone" type="tel" required />
      <Label>Courriel</Label>
      <Input name="Courriel" type="email" required />
      <Label>Êtes-vous</Label>
      <select
        name="Role"
        className="w-full rounded-xl border border-gray-300 px-3 py-2"
      >
        <option>Candidat (emploi)</option>
        <option>Entreprise (partenariat)</option>
      </select>
      <Label>Message</Label>
      <Textarea name="Message" />
      <button className="mt-2 w-full rounded-xl bg-emerald-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-extrabold text-white hover:bg-emerald-800 transition">
        Envoyer par courriel
      </button>
    </form>
  );
}

function Testimonial({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-200">
      <div className="text-amber-500 text-lg">★★★★★</div>
      <p className="mt-3 text-gray-900">“{quote}”</p>
      <div className="mt-3 text-sm font-semibold text-emerald-900">{name}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-bold text-emerald-900">{children}</div>;
}
function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring focus:ring-emerald-200"
    />
  );
}
function Textarea(props: any) {
  return (
    <textarea
      {...props}
      rows={4}
      className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring focus:ring-emerald-200"
    />
  );
}
