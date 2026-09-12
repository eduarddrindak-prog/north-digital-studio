import { useState } from "react";

import "./ServiceCuration.css";

type CurationItem = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const items: CurationItem[] = [
  {
    number: "01",
    title: "Furniture",
    description:
      "Pieces are selected for proportion, comfort and the way they relate to the architecture around them.",
    image:
      "/projects/nord/images/services/01-furniture.jpg",
  },
  {
    number: "02",
    title: "Lighting",
    description:
      "Lighting creates rhythm and atmosphere, from architectural fixtures to the softer moments around the room.",
    image:
      "/projects/nord/images/services/02-lighting.jpg",
  },
  {
    number: "03",
    title: "Objects",
    description:
      "A small number of considered objects give the interior character without competing with the space itself.",
    image:
      "/projects/nord/images/services/03-objects.jpg",
  },
  {
    number: "04",
    title: "Styling",
    description:
      "The final layer brings materials, books, textiles and everyday objects into a coherent whole.",
    image:
      "/projects/nord/images/services/04-styling.jpg",
  },
];

function ServiceCuration() {
  const [activeItem, setActiveItem] = useState(0);

  const active = items[activeItem];

  return (
    <div className="service-curation">
      <div className="service-curation__list">
        {items.map((item, index) => (
          <button
            key={item.number}
            type="button"
            className={[
              "service-curation__item",
              activeItem === index &&
                "service-curation__item--active",
            ]
              .filter(Boolean)
              .join(" ")}
            onMouseEnter={() => setActiveItem(index)}
            onFocus={() => setActiveItem(index)}
            onClick={() => setActiveItem(index)}
          >
            <span>{item.number}</span>

            <strong>{item.title}</strong>

            <span
              className="service-curation__arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        ))}
      </div>

      <div className="service-curation__visual">
        <div className="service-curation__image">
          <img
            key={active.image}
            src={active.image}
            alt={active.title}
          />
        </div>

        <div className="service-curation__caption">
          <span>{active.title}</span>

          <p>{active.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCuration;