const places = [
  {
    name: "Eiffel Tower, Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Big Ben, London",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Statue of Liberty, New York",
    img: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Grand Palace, Thailand",
    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Borobudur, Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ha Long Bay, Vietnam",
    img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Taj Mahal, India",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Colosseum, Rome",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
  },
];

// duplicated once for a seamless infinite loop
const slides = [...places, ...places];

export default function ImageAutoSlider() {
  return (
    <section className="autoslider">
      <div className="autoslider__fade autoslider__fade--top" />
      <div className="autoslider__track">
        <div className="autoslider__row">
          {slides.map((p, idx) => (
            <div className="autoslider__item" key={idx}>
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className="autoslider__label">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="autoslider__fade autoslider__fade--bottom" />
    </section>
  );
}