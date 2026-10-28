import { useMemo, useState } from "react";
import { Tractor, Search, MapPin, Phone, CalendarDays, Sprout, ShieldCheck, Clock3, Menu, X, ArrowRight, SlidersHorizontal, CheckCircle2 } from "lucide-react";

const equipmentData = [
  { id: 1, name: "Tractor", category: "Tractors", rate: 900, unit: "day", location: "Yavatmal", dealer: "Shree Farm Services", phone: "9876543210", emoji: "🚜", description: "Reliable tractor for ploughing and field preparation.", availability: "Available" },
  { id: 2, name: "Rotavator", category: "Tillage", rate: 650, unit: "day", location: "Darwha", dealer: "Kisan Machinery Centre", phone: "9876543211", emoji: "🌾", description: "Prepare soil and break up crop residue efficiently.", availability: "Available" },
  { id: 3, name: "Seed Drill", category: "Sowing", rate: 500, unit: "day", location: "Digras", dealer: "Sai Agro Rentals", phone: "9876543212", emoji: "🌱", description: "Support consistent seed placement during sowing.", availability: "Available" },
  { id: 4, name: "Harvester", category: "Harvesting", rate: 2400, unit: "day", location: "Yavatmal", dealer: "Vidarbha Farm Equipment", phone: "9876543213", emoji: "🌻", description: "A harvesting option for seasonal farm work.", availability: "Check availability" },
  { id: 5, name: "Water Pump", category: "Irrigation", rate: 350, unit: "day", location: "Ner", dealer: "Shree Farm Services", phone: "9876543210", emoji: "💧", description: "Move water to support irrigation needs.", availability: "Available" },
  { id: 6, name: "Cultivator", category: "Tillage", rate: 550, unit: "day", location: "Pusad", dealer: "Kisan Machinery Centre", phone: "9876543211", emoji: "🌿", description: "Loosen soil and manage weeds between rows.", availability: "Available" }
];

const categories = ["All equipment", "Tractors", "Tillage", "Sowing", "Harvesting", "Irrigation"];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All equipment");
  const [location, setLocation] = useState("All locations");
  const [sort, setSort] = useState("recommended");
  const [selected, setSelected] = useState(null);
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const locations = ["All locations", ...new Set(equipmentData.map((item) => item.location))];
  const equipment = useMemo(() => {
    let result = equipmentData.filter((item) => {
      const matchesSearch = `${item.name} ${item.category} ${item.dealer} ${item.location}`.toLowerCase().includes(search.toLowerCase());
      return matchesSearch && (category === "All equipment" || item.category === category) && (location === "All locations" || item.location === location);
    });
    if (sort === "price-low") result = [...result].sort((a, b) => a.rate - b.rate);
    if (sort === "price-high") result = [...result].sort((a, b) => b.rate - a.rate);
    return result;
  }, [search, category, location, sort]);

  const openBooking = (item) => {
    setSelected(item);
    setDays(1);
    setStartDate("");
    setCustomerName("");
    setCustomerPhone("");
    setBookingMessage("");
  };

  const submitBooking = (event) => {
    event.preventDefault();
    if (!selected) return;
    setBookingMessage(`Demo booking request prepared for ${selected.name}. Please call ${selected.dealer} at ${selected.phone} to confirm availability.`);
  };

  return (
    <div className="min-h-screen bg-[#f7faf7] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-green-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2.5" aria-label="AgriRent home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-700 text-white"><Tractor size={23} /></span>
            <span><span className="block text-xl font-extrabold tracking-tight text-green-900">AgriRent</span><span className="block text-[10px] font-semibold uppercase tracking-[.18em] text-slate-500">Farm equipment rental</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a className="hover:text-green-700" href="#equipment">Find equipment</a>
            <a className="hover:text-green-700" href="#how-it-works">How it works</a>
            <a className="hover:text-green-700" href="#about">About</a>
          </nav>
          <div className="hidden md:block"><a href="#equipment" className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-green-800">Explore equipment <ArrowRight className="ml-1 inline" size={15} /></a></div>
          <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button>
        </div>
        {mobileMenu && <nav className="flex flex-col gap-3 border-t px-5 py-4 text-sm font-semibold md:hidden"><a href="#equipment" onClick={() => setMobileMenu(false)}>Find equipment</a><a href="#how-it-works" onClick={() => setMobileMenu(false)}>How it works</a><a href="#about" onClick={() => setMobileMenu(false)}>About</a></nav>}
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700 text-white">
          <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full border-[44px] border-white/5" />
          <div className="pointer-events-none absolute bottom-[-140px] left-[35%] h-80 w-80 rounded-full border-[50px] border-lime-300/10" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_.85fr] md:py-24 lg:px-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-green-50"><Sprout size={15} /> Smart access to farm machinery</div>
              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">The right equipment.<br /><span className="text-lime-300">Right when you need it.</span></h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-green-50/90 sm:text-lg">Explore farm equipment, compare rental rates, and connect with local dealers — all in one simple place.</p>
              <div className="mt-8 flex flex-wrap gap-3"><a href="#equipment" className="rounded-xl bg-lime-300 px-5 py-3 font-bold text-green-950 shadow-lg transition hover:bg-lime-200">Find equipment <ArrowRight className="ml-2 inline" size={17} /></a><a href="#how-it-works" className="rounded-xl border border-white/30 px-5 py-3 font-bold text-white transition hover:bg-white/10">How it works</a></div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-green-50/90"><span className="flex items-center gap-2"><ShieldCheck size={17} /> Easy dealer connection</span><span className="flex items-center gap-2"><Clock3 size={17} /> Flexible rental periods</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-7">
                <div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-medium text-green-100">Explore local equipment</p><p className="mt-1 text-2xl font-extrabold">Made for farmers</p></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-300 text-green-950"><Tractor size={26} /></span></div>
                <div className="space-y-3">
                  {[["🚜", "Tractors", "For field preparation"], ["🌱", "Sowing equipment", "For planting season"], ["🌻", "Harvesting tools", "For harvest time"]].map(([emoji, title, desc]) => <div key={title} className="flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-800"><span className="grid h-12 w-12 place-items-center rounded-xl bg-green-50 text-2xl">{emoji}</span><div className="flex-1"><p className="font-bold">{title}</p><p className="mt-0.5 text-xs text-slate-500">{desc}</p></div><ArrowRight size={17} className="text-green-700" /></div>)}
                </div>
                <p className="mt-4 text-center text-xs text-green-100">Demo listings for project presentation</p>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-lime-300 px-4 py-3 text-green-950 shadow-lg"><p className="text-xs font-semibold">Simple rental discovery</p><p className="text-sm font-extrabold">Search • Compare • Connect</p></div>
            </div>
          </div>
        </section>

        <section id="equipment" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="text-sm font-extrabold uppercase tracking-[.16em] text-green-700">Equipment marketplace</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Find what your farm needs</h2><p className="mt-3 max-w-xl leading-6 text-slate-600">Browse sample listings and compare daily rental rates before contacting a dealer.</p></div>
            <div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-900"><span className="text-xl font-black">{equipment.length}</span> listings shown</div>
          </div>
          <div className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1.4fr_.8fr_.8fr]">
            <label className="relative block"><span className="sr-only">Search equipment</span><Search className="absolute left-3.5 top-3.5 text-slate-400" size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search equipment, dealer, or town..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" /></label>
            <label className="relative block"><span className="sr-only">Filter category</span><SlidersHorizontal className="absolute left-3.5 top-3.5 text-slate-400" size={17} /><select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-green-600">{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
            <label className="relative block"><MapPin className="absolute left-3.5 top-3.5 text-slate-400" size={17} /><select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-green-600">{locations.map((l) => <option key={l}>{l}</option>)}</select></label>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${category === c ? "bg-green-800 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-800"}`}>{c}</button>)}</div><label className="text-xs font-semibold text-slate-500">Sort by <select value={sort} onChange={(e) => setSort(e.target.value)} className="ml-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-700"><option value="recommended">Recommended</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>

          {equipment.length ? <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{equipment.map((item) => <article key={item.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
            <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-green-50 via-lime-50 to-amber-50"><span className="text-7xl drop-shadow-sm transition group-hover:scale-110">{item.emoji}</span><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-green-800 shadow-sm">{item.availability}</span><span className="absolute bottom-4 right-4 rounded-lg bg-white/90 px-2.5 py-1.5 text-xs font-bold text-slate-700">{item.category}</span></div>
            <div className="p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-extrabold text-slate-900">{item.name}</h3><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin size={13} /> {item.location}</p></div><div className="text-right"><p className="text-xl font-black text-green-800">₹{item.rate.toLocaleString("en-IN")}</p><p className="text-xs text-slate-500">per day</p></div></div><p className="mt-4 min-h-[40px] text-sm leading-5 text-slate-600">{item.description}</p><div className="mt-4 border-t border-slate-100 pt-4"><p className="text-xs text-slate-500">Listed by</p><p className="mt-1 font-bold text-slate-800">{item.dealer}</p><div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => openBooking(item)} className="rounded-xl bg-green-700 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-green-800">Request rental</button><a href={`tel:${item.phone}`} className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-green-200 px-3 py-2.5 text-sm font-bold text-green-800 transition hover:bg-green-50"><Phone size={15} /> Call dealer</a></div></div></div>
          </article>)}</div> : <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center"><Search className="mx-auto text-slate-400" size={30} /><h3 className="mt-3 font-bold">No equipment found</h3><p className="mt-1 text-sm text-slate-500">Try changing your search or filters.</p><button onClick={() => { setSearch(""); setCategory("All equipment"); setLocation("All locations"); }} className="mt-4 rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white">Clear filters</button></div>}
          <p className="mt-6 text-xs leading-5 text-slate-500">Note: Equipment, dealer names, rates, and phone numbers are sample data for demonstration. Confirm all details with the dealer before arranging a rental.</p>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-extrabold uppercase tracking-[.16em] text-green-700">Three simple steps</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">From search to connection</h2><p className="mt-3 text-slate-600">AgriRent helps farmers discover equipment without making the process complicated.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[{n:"01", icon:<Search size={24} />, title:"Search equipment", desc:"Find machinery by name, category, or nearby town."},{n:"02", icon:<CalendarDays size={24} />, title:"Review rental details", desc:"Check sample daily rates and estimate a rental cost."},{n:"03", icon:<Phone size={24} />, title:"Connect with dealer", desc:"Contact the listed dealer to confirm availability and terms."}].map((step) => <div key={step.n} className="rounded-2xl border border-slate-200 bg-[#fbfdfb] p-6"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl bg-green-100 text-green-800">{step.icon}</span><span className="text-3xl font-black text-green-100">{step.n}</span></div><h3 className="mt-5 text-lg font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p></div>)}</div></div>
        </section>

        <section id="about" className="scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-green-950 p-7 text-white sm:p-10 md:flex-row md:items-center"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.16em] text-lime-300">About AgriRent</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Helping farmers discover equipment with confidence.</h2><p className="mt-3 leading-6 text-green-50/80">This student project demonstrates a simple way to explore agricultural machinery, compare rental prices, and reach local dealers.</p></div><a href="#equipment" className="shrink-0 rounded-xl bg-lime-300 px-5 py-3 font-bold text-green-950 transition hover:bg-lime-200">Browse listings <ArrowRight className="ml-2 inline" size={16} /></a></div></section>
      </main>

      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p><span className="font-extrabold text-green-800">AgriRent</span> — Agricultural Equipment Rental Platform</p><p>Student project prototype · Demo data only</p></div></footer>

      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4" onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
        <div role="dialog" aria-modal="true" aria-labelledby="booking-title" className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-7">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-green-700">Rental request</p><h2 id="booking-title" className="mt-1 text-2xl font-black text-slate-900">{selected.name}</h2><p className="mt-1 text-sm text-slate-500">₹{selected.rate.toLocaleString("en-IN")} per day · {selected.location}</p></div><button onClick={() => setSelected(null)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Close booking form"><X /></button></div>
          <form onSubmit={submitBooking} className="mt-6 space-y-4"><label className="block text-sm font-semibold">Your name<input required value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-green-600" placeholder="Enter your name" /></label><label className="block text-sm font-semibold">Contact number<input required pattern="[0-9]{10}" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-green-600" placeholder="10-digit mobile number" /></label><div className="grid grid-cols-2 gap-3"><label className="block text-sm font-semibold">Rental start date<input required type="date" min={new Date().toISOString().slice(0,10)} value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-green-600" /></label><label className="block text-sm font-semibold">Number of days<input required type="number" min="1" max="90" value={days} onChange={(e) => setDays(Math.max(1, Number(e.target.value)))} className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-green-600" /></label></div><div className="flex items-center justify-between rounded-xl bg-green-50 p-4"><span className="text-sm font-semibold text-green-900">Estimated rental cost</span><span className="text-xl font-black text-green-900">₹{(selected.rate * days).toLocaleString("en-IN")}</span></div><p className="text-xs leading-5 text-slate-500">This is a demo form. It does not send or save your information. Contact the dealer directly to confirm your request.</p><button type="submit" className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white hover:bg-green-800">Prepare request</button></form>
          {bookingMessage && <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900"><p className="flex items-center gap-2 font-bold"><CheckCircle2 size={17} /> Request prepared</p><p className="mt-2 leading-5">{bookingMessage}</p><a className="mt-3 inline-flex items-center gap-2 font-bold underline" href={`tel:${selected.phone}`}><Phone size={15} /> Call dealer to confirm</a></div>}
        </div>
      </div>}
    </div>
  );
}

export default App;
