interface PanelTitleI {
  children: string;
}

const PanelTitle = ({ children }: PanelTitleI) => {
  return <h1>{children}</h1>;
};

export default PanelTitle;
