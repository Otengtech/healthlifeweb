import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-4xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-300 mb-4">
          Welcome to HealthLife. By accessing or using this website, you agree to comply with these Terms & Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Use of Content
        </h2>
        <p className="text-gray-300 mb-4">
          All content on HealthLife is for informational purposes only. You may not copy, reproduce, or distribute content from this website without prior written permission. Unauthorized use is prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Health Information
        </h2>
        <p className="text-gray-300 mb-4">
          The information provided on this website is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider for any medical condition.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          External Links
        </h2>
        <p className="text-gray-300 mb-4">
          HealthLife may contain links to third-party websites. We do not control and are not responsible for their content, policies, or practices. Please review the policies of any external site you visit.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Limitation of Liability
        </h2>
        <p className="text-gray-300 mb-4">
          HealthLife shall not be liable for any damages arising from the use or inability to use this website or reliance on the content provided. Use the website at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-3">
          Updates to Terms
        </h2>
        <p className="text-gray-300 mb-4">
          HealthLife may update these Terms & Conditions at any time. Updated terms will be reflected on this page. Continued use of the website constitutes acceptance of the updated terms.
        </p>

      </div>
    </div>
  );
};

export default TermsPage;
