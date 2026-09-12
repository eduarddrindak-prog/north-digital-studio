import { useRef } from "react";

import "./BeforeAfter.css";

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
};

function BeforeAfter({
  before,
  after,
  beforeAlt = "Before renovation",
  afterAlt = "After renovation",
}: BeforeAfterProps) {
  const beforeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const updatePosition = (value: number) => {
    const position = Math.max(0, Math.min(100, value));

    if (beforeRef.current) {
      beforeRef.current.style.clipPath =
        `inset(0 ${100 - position}% 0 0)`;
    }

    if (handleRef.current) {
      handleRef.current.style.left = `${position}%`;
    }
  };

  return (
    <div className="before-after">
      {/* AFTER */}
      <div className="before-after__image before-after__image--after">
        <img
          src={after}
          alt={afterAlt}
        />
      </div>

      {/* BEFORE */}
      <div
        ref={beforeRef}
        className="before-after__before"
      >
        <img
          src={before}
          alt={beforeAlt}
        />
      </div>

      {/* HANDLE */}
      <div
        ref={handleRef}
        className="before-after__handle"
        style={{ left: "50%" }}
      >
        <span className="before-after__handle-line" />

        <span className="before-after__handle-circle">
          <span>←</span>
          <span>→</span>
        </span>

        <span className="before-after__handle-line" />
      </div>

      {/* INPUT */}
      <input
        type="range"
        className="before-after__input"
        min="0"
        max="100"
        defaultValue="50"
        onChange={(event) =>
          updatePosition(Number(event.target.value))
        }
        aria-label="Compare before and after"
      />

      {/* LABELS */}
      <span className="before-after__label before-after__label--before">
        Before
      </span>

      <span className="before-after__label before-after__label--after">
        After
      </span>
    </div>
  );
}

export default BeforeAfter;