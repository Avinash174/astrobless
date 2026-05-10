import React, { useState, useEffect } from 'react';
import StaticPage from '../components/StaticPage';

const Careers: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      heading: 'Join the Cosmic Team',
      text: 'We are always looking for passionate developers, designers, and astrology enthusiasts to help us scale the future of spiritual tech. At AstroBless, you\'ll work on cutting-edge AI and real-time communication systems.'
    },
    {
      heading: 'Open Roles',
      text: '• Senior Frontend Engineer (React/TypeScript)\n• UI/UX Designer (Cosmic Design Language)\n• Backend Engineer (Node.js/Scalability)\n• Content Strategist (Astrology Focus)'
    },
    {
      heading: 'Our Culture',
      text: 'We value curiosity, empathy, and innovation. We believe in high autonomy and high accountability, providing our team with the tools they need to build something truly special.'
    },
    {
      heading: 'Perks',
      text: 'Remote-first culture, competitive equity, health insurance, and free weekly sessions with our top-rated astrologers.'
    }
  ];

  return (
    <StaticPage 
      title="Careers" 
      subtitle="Help us build the most trusted spiritual guidance platform in the world." 
      loading={loading}
      content={content} 
    />
  );
};

export default Careers;
