import { initialCVDataI } from "../../../types/initialCVData";

const Link = ({ value }: { value: string }) => {
  return (
    <div className="text-md font-semibold">
      <a href={`https://${value}`} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    </div>
  );
};

const LinksForm = ({ data }: { data: initialCVDataI["links"] }) => {
  return (
    <div className="flex flex-wrap bg-black text-white [&>*]:w-1/2 [&>*]:px-6 [&>*]:py-3">
      {Object.values(data).map((link) => (
        <Link key={link} value={link} />
      ))}
    </div>
  );
};

export default LinksForm;
