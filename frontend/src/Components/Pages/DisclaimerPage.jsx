import React from 'react';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-4xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Medical Disclaimer
        </h1>

        <p className="text-gray-300 mb-4">
          The content on HealthLife is provided for <strong>general informational purposes only</strong>. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
        </p>

        <p className="text-gray-300 mb-4">
          Always seek the guidance of your physician or other qualified healthcare professional regarding any medical condition or health-related concerns. Do not disregard professional medical advice or delay seeking it because of something you read on this website.
        </p>

        <p className="text-gray-300 mb-4">
          HealthLife makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the content on this website. Any reliance you place on such information is strictly at your own risk.
        </p>

        <p className="text-gray-300 mb-4">
          External links to other websites are provided for convenience only. HealthLife is not responsible for the content, policies, or practices of these external sites.
        </p>

      </div>
    </div>
  );
};

export default DisclaimerPage;
