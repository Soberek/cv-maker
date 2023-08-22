type InputProps = {
  label_title?: string;
  placeholder?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input = ({ label_title, placeholder, inputProps }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label_title && (
        <label htmlFor={inputProps.name} className="mb-2 text-[1rem] text-gray-400">
          {label_title}
        </label>
      )}

      <input
        className="border-b-2 border-gray-600 bg-gray-800 pb-2 text-white outline-none focus:border-b-2 focus:border-cyan-500"
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
