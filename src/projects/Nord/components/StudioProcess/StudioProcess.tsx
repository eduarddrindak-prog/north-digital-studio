import Reveal from "../Reveal/Reveal";

import "./StudioProcess.css";

type StudioProcessProps = {
  number: string;
  title: string;
  description: string;
};

function StudioProcess({
  number,
  title,
  description,
}: StudioProcessProps) {
  return (
    <Reveal className="studio-process">
      <div className="studio-process__number">
        {number}
      </div>

      <div className="studio-process__content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </Reveal>
  );
}

export default StudioProcess;