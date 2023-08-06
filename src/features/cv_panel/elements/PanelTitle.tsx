interface PanelTitleProps {
  children: string;
}

const PanelTitle = ({ children }: PanelTitleProps) => {
  return <h1 className="mb-4 text-lg">{children}</h1>;
};

export default PanelTitle;
