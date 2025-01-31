import { Helmet } from "react-helmet-async";
interface HelmetData {
  title: string;
}

const HelmetCon = ({ title }: HelmetData) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetCon;
