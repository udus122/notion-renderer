import type { FC } from "react";

type Props = {
  checked: boolean;
};

export const Checkbox: FC<Props> = ({ checked }) => {
  return checked ? <CheckedBox /> : <UnCheckBox />;
};

export const UnCheckBox = () => (
  <span className="notion-checkbox">
    <svg viewBox="0 0 16 16">
      <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
    </svg>
  </span>
);

export const CheckedBox = () => (
  <span className="notion-checkbox checked">
    <svg viewBox="0 0 14 14">
      <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
    </svg>
  </span>
);
