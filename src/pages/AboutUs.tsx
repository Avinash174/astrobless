import React, { useState, useEffect } from 'react';
import StaticPage from '../components/StaticPage';

const AboutUs: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const content = [
    {
      heading: 'Our Vision',
      text: 'AstroBless was born from a desire to bridge the gap between ancient celestial wisdom and modern digital convenience. We believe that everyone deserves access to high-quality astrological guidance to navigate life\'s complex transitions.'
    },
    {
      heading: 'The Journey',
      text: 'Since our inception in 2020, we have grown into a community of over 5 million seekers and 5,000+ verified astrologers. Our platform uses state-of-the-art algorithms to ensure precise birth chart calculations while maintaining the human touch that only an experienced astrologer can provide.'
    },
    {
      heading: 'Our Promise',
      text: 'We are committed to transparency, privacy, and accuracy. Every expert on our platform goes through a rigorous 5-step verification process to ensure you receive the most authentic guidance possible.'
    },
    {
      heading: 'Social Impact',
      text: 'A portion of every consultation goes toward supporting digital literacy programs in rural communities, helping bridge the technological divide through celestial wisdom.'
    }
  ];

  return (
    <StaticPage 
      title="Our Story" 
      subtitle="Guiding millions towards celestial alignment through wisdom and technology." 
      loading={loading}
      content={content} 
    />
  );
};

export default AboutUs;
