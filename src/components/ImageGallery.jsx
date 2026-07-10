const images = [
  {
    src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=800&auto=format&fit=crop",
    alt: "Best travel agency Islamabad Pakistan — client visa consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=800&auto=format&fit=crop",
    alt: "O.S Travel & Tours office Islamabad — best visa consultant Pakistan",
  },
  {
    src: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=800&auto=format&fit=crop",
    alt: "Best travel agency Pakistan — passport and visa documentation services",
  },
  {
    src: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=800&auto=format&fit=crop",
    alt: "Best Umrah and visa services Islamabad — international travel planning",
  },
  {
    src: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=800&auto=format&fit=crop",
    alt: "Best tour agency Islamabad — flight ticketing and hotel booking services",
  },
  {
    src: "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=800&auto=format&fit=crop",
    alt: "Best travel agency in Pakistan — trusted visa file processing team",
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
