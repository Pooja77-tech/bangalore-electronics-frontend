export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Reliable technology services designed for modern enterprises.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {[
            "Biometrics Access",
            "Electronic Components",
            "IT Infrastructure",
            "Video Surveillance",
            "Maintenance & Support",
            "System Integration",
          ].map((service) => (
            <div
              key={service}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-slate-600">
                Enterprise-grade solutions tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
