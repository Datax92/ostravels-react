const images = [
  {
    // Malaysia — Petronas Towers at night ✅ (already working)
    src: "https://images.unsplash.com/photo-1755435147466-8b886176de9b?q=80&w=800&auto=format&fit=crop",
    alt: "Kuala Lumpur Malaysia Petronas Towers — Malaysia visa services O.S Travel Islamabad",
  },
  {
    // Saudi Arabia — Kaaba Mecca at night ✅ (photo-1771170983433)
    src: "https://images.unsplash.com/photo-1771170983433-1576bc4a7eec?q=80&w=800&auto=format&fit=crop",
    alt: "Mecca Kaaba Grand Mosque Saudi Arabia — Umrah Hajj visa services O.S Travel Islamabad",
  },
  {
    // Egypt — Sphinx & Pyramids of Giza ✅ (photo-1738580426685)
    src: "https://images.unsplash.com/photo-1738580426685-f8f0d34291dc?q=80&w=800&auto=format&fit=crop",
    alt: "Egypt Sphinx Pyramids of Giza Cairo — Egypt visa travel packages O.S Travel Islamabad",
  },
  {
    // Nepal — Mount Everest golden sunrise ✅ (photo-1778003586047)
    src: "https://images.unsplash.com/photo-1778003586047-69c68f764af5?q=80&w=800&auto=format&fit=crop",
    alt: "Nepal Mount Everest Himalayas sunrise — Nepal trekking visa packages O.S Travel Islamabad",
  },
  {
    // Turkey — Hagia Sophia exterior ✅ (photo-1761249519600)
    src: "https://images.unsplash.com/photo-1761249519600-b92688f3d094?q=80&w=800&auto=format&fit=crop",
    alt: "Istanbul Turkey Hagia Sophia mosque — Turkey visa services O.S Travel & Tours Islamabad",
  },
  {
    // China — Great Wall through green hills ✅ (photo-1761492159415)
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