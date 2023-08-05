interface ButtonProps {
  onClick: () => void;
  children: string;
  type?: "submit" | "button";
}

const Button = ({ onClick, children, type }: ButtonProps) => {
  return (
    <button onClick={onClick} className="border-2 border-cyan-500 px-2 py-2 text-cyan-500" type={type || "button"}>
      {children}
    </button>
  );
};

export default Button;
