import Reveal from "../Reveal/Reveal";

import "./StudioPrinciple.css";

type StudioPrincipleProps = {
  number: string;
  title: string;
  description: string;
};

function StudioPrinciple({
  number,
  title,
  description,
}: StudioPrincipleProps) {
  return (
    <Reveal className="studio-principle">
      <div className="studio-principle__number">
        {number}
      </div>

      <div className="studio-principle__content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <span
        className="studio-principle__arrow"
        aria-hidden="true"
      >
        ↗
      </span>
    </Reveal>
  );
}

export default StudioPrinciple;