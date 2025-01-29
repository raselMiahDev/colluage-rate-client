import React, { useEffect, useState } from "react";

interface TermsAndConditionsProps {
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white w-11/12 max-w-2xl p-8 rounded-lg shadow-lg relative">
        {/* Close Button  */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          Close
        </button>
        {/* Model Content  */}

        <h2 className="text-xl font-semibold">Terms and Conditions</h2>
        <p className="mt-2 text-gray-700">
          Welcome to <span className="font-semibold text-blue-600">Workly</span>
          . By sigining in and using this website, you agree to these Terms and
          Conditions. Please read them carefully, as they define your rights,
          responsibilities, and obligations as a user.
        </p>
        <h3 className="mt-4 font-semibold">1. Purpose of the Platform</h3>
        <p className="text-gray-700">
          The Platform provides a space for users to share workplace
          experiences, and discuss work-related environments. It aims to foster
          transparency and improve workplace conditions through honest and
          constructive feedback. The Platform is intended for lawful ethical use
          only
        </p>
        <h3 className="mt-4 font-semibold">2. User Responsibilities</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Share accurate, respectful, and truthful experiences.</li>
          <li>Avoid posting defamatory, harmful, or offensive content.</li>
          <li>Abide by all applicable laws and regulations.</li>
          <li>
            Use the platform for malicious , harassing, or otherwise harmful
            actions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
