const images = [
  {
    src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    alt: "Kuala Lumpur Malaysia Petronas Towers — Malaysia visa services O.S Travel Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=800&auto=format&fit=crop",
    alt: "Saudi Arabia Madinah Al-Masjid an-Nabawi — Umrah visa services Pakistan",
  },
  {
    src: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=800&auto=format&fit=crop",
    alt: "Egypt Pyramids of Giza — Egypt visa and travel packages O.S Travel Islamabad",
  },
    {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    alt: "Nepal Mount Everest Himalayas — Nepal visa and trekking packages Pakistan",
  },
  {
    src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop",
    alt: "Istanbul Turkey Hagia Sophia — Turkey visa services O.S Travel & Tours Islamabad",
  },
  {
    src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
    alt: "China Great Wall — China visa services and travel packages O.S Travel Islamabad",
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
