import { useParams } from "react-router-dom";

const PortfolioDetails = () => {
  const { id } = useParams();

  return <div>Portfolio ID: {id}</div>;
};

export default PortfolioDetails;