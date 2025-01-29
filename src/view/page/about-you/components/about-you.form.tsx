import { useState } from "react";
import TermsAndConditions from "./terms&conditions";

const AboutYouForm = () => {
  const [showTerms, setShowTerms] = useState(false);
  return (
    <div>
      <button className="text-blue-500" onClick={() => setShowTerms(true)}>
        Terms And conditions
      </button>
      {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
    </div>
  );
};

export default AboutYouForm;
