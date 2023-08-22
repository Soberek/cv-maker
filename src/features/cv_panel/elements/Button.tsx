type ButtonProps = {
  onClick: () => void;
  children: string;
  type?: "submit" | "button";
  size?: "small" | "medium" | "large";
};

const Button = ({ onClick, children, type, size }: ButtonProps) => {
  let buttonSize = "px-1 py-1";
  switch (size) {
    case "small":
      buttonSize = "px-1 py-1";
      break;
    case "medium":
      buttonSize = "px-2 py-2";
      break;
    case "large":
      buttonSize = "px-4 py-4";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`border-2 border-cyan-500 text-cyan-500  ${buttonSize}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
