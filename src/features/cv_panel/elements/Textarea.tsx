type TextareaProps = {
  label_title?: string;
  placeholder?: string;
  className?: string;
  inputProps: React.InputHTMLAttributes<HTMLTextAreaElement>;
};

const TextArea = ({ inputProps, label_title, placeholder, className }: TextareaProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={``} className="mb-2 text-[1rem] text-gray-400">
        {label_title}
      </label>

      <textarea
        {...inputProps}
        placeholder={placeholder}
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        className={`border-b-2 border-gray-600 bg-gray-800 pb-2 text-white outline-none focus:border-b-2 focus:border-cyan-500 ${className}`}
      />
    </div>
  );
};

export default TextArea;
