
interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;