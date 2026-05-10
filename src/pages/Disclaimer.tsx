import React, { useState, useEffect } from 'react';
import StaticPage from '../components/StaticPage';

const Disclaimer: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      heading: 'General Information',
      text: 'The information provided on AstroBless is for spiritual guidance, personal growth, and entertainment purposes only. Astrology is not an exact science and should not be used as a definitive basis for making life-changing decisions.'
    },
    {
      heading: 'Professional Advice',
      text: 'Our consultations do not constitute legal, medical, financial, or psychological advice. If you are facing serious issues in these areas, we strongly recommend consulting a qualified professional (e.g., doctor, lawyer, or certified financial planner).'
    },
    {
      heading: 'No Guarantees',
      text: 'While our experts strive for the highest accuracy based on traditional and modern astrological principles, AstroBless makes no guarantees regarding the outcome of any predictions or advice provided during sessions.'
    },
    {
      heading: 'User Responsibility',
      text: 'By using our platform, you acknowledge that you are responsible for your own choices and actions. AstroBless and its affiliates shall not be held liable for any decisions made based on the information provided by our experts or AI tools.'
    }
  ];

  return (
    <StaticPage 
      title="Cosmic Disclaimer" 
      subtitle="Important guidelines regarding our spiritual guidance and predictions." 
      loading={loading}
      content={content} 
    />
  );
};

export default Disclaimer;
