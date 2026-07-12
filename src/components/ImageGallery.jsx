const images = [
  {
    // Malaysia ✅ Petronas Towers night
    src: "https://images.unsplash.com/photo-1755435147466-8b886176de9b?q=80&w=800&auto=format&fit=crop",
    alt: "Kuala Lumpur Malaysia Petronas Towers — Malaysia visa services O.S Travel Islamabad",
  },
  {
    // Saudi Arabia ✅ Kaaba Masjid al-Haram
    src: "https://images.unsplash.com/photo-1513072064285-240f87fa81e8?q=80&w=800&auto=format&fit=crop",
    alt: "Mecca Kaaba Grand Mosque Saudi Arabia — Umrah Hajj visa services O.S Travel Islamabad",
  },
  {
    // Egypt ✅ Aerial Pyramids of Giza
    src: "https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=800&auto=format&fit=crop",
    alt: "Egypt Pyramids of Giza Cairo — Egypt visa travel packages O.S Travel Islamabad",
  },
  {
    // Nepal ✅ Himalayas fog landscape
    src: "https://images.unsplash.com/photo-1490791539531-102a1e0beb7b?q=80&w=800&auto=format&fit=crop",
    alt: "Nepal Himalayas mountains — Nepal trekking visa packages O.S Travel Islamabad",
  },
  {
    // Turkey ✅ Hagia Sophia sunset
    src: "https://images.unsplash.com/photo-1567712595315-545da0d341b2?q=80&w=800&auto=format&fit=crop",
    alt: "Istanbul Turkey Hagia Sophia mosque sunset — Turkey visa services O.S Travel Islamabad",
  },
  {
    // China ✅ Great Wall green hills
    src: "https://images.unsplash.com/photo-1761492159415-f100f11742a6?q=80&w=800&auto=format&fit=crop",
    alt: "China Great Wall Beijing — China visa services travel packages O.S Travel Islamabad",
  },
];

export default function ImageGallery() {
  return (
    <section className="gallery__section">
      <div className="gallery__intro"></div>
      <div className="gallery__row">
        {images.map((img, idx) => (
          <div className="gallery__item" key={idx}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}