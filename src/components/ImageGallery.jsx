const images = [
  {
    src: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop",
    alt: "Kuala Lumpur Malaysia Petronas Towers — Malaysia visa services O.S Travel Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
    alt: "Mecca Grand Mosque Kaaba Saudi Arabia — Umrah Hajj visa services O.S Travel Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=800&auto=format&fit=crop",
    alt: "Egypt Pyramids of Giza Cairo — Egypt visa and travel packages O.S Travel Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    alt: "Nepal Himalayas Everest Base Camp — Nepal trekking visa packages O.S Travel Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
    alt: "Istanbul Turkey Hagia Sophia Blue Mosque — Turkey visa services O.S Travel Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
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
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" width="400" height="300" />
          </div>
        ))}
      </div>
    </section>
  );
}
