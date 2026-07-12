const images = [
  {
    // Malaysia — Petronas Towers at night (Ainur Iman, Aug 2025)
    src: "https://images.unsplash.com/photo-1755435147466-8b886176de9b?q=80&w=800&auto=format&fit=crop",
    alt: "Kuala Lumpur Malaysia Petronas Towers night — Malaysia visa services O.S Travel Islamabad",
  },
  {
    // Saudi Arabia — Kaaba Mecca at night (Rumman Amin, Feb 2026)
    src: "https://images.unsplash.com/photo-1739788944329-9f5f16ff3833?q=80&w=800&auto=format&fit=crop",
    alt: "Mecca Kaaba Grand Mosque Saudi Arabia — Umrah Hajj visa services O.S Travel Islamabad",
  },
  {
    // Egypt — Sphinx & Pyramids of Giza (Martijn Vonk, Feb 2025)
    src: "https://images.unsplash.com/photo-1738520150386-02a4c73f4888?q=80&w=800&auto=format&fit=crop",
    alt: "Egypt Sphinx Pyramids of Giza Cairo — Egypt visa travel packages O.S Travel Islamabad",
  },
  {
    // Nepal — Mount Everest golden sunrise (Slava Auchynnikau, May 2026)
    src: "https://images.unsplash.com/photo-1746414885696-0db8d72cf393?q=80&w=800&auto=format&fit=crop",
    alt: "Nepal Mount Everest Himalayas sunrise — Nepal trekking visa packages O.S Travel Islamabad",
  },
  {
    // Turkey — Hagia Sophia exterior with minarets (Nida Oral, Oct 2025)
    src: "https://images.unsplash.com/photo-1729688120960-e7f5d1a7e536?q=80&w=800&auto=format&fit=crop",
    alt: "Istanbul Turkey Hagia Sophia mosque — Turkey visa services O.S Travel & Tours Islamabad",
  },
  {
    // China — Great Wall winding through green hills (HsinKai Tai, Oct 2025)
    src: "https://images.unsplash.com/photo-1730015584548-8eb90c5baa34?q=80&w=800&auto=format&fit=crop",
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