import React from 'react';
import Helmet from 'react-helmet';

const AboutUs = () => (
  <div>
    <Helmet
      title="About Us | Wendte Blog"
      meta={[
        { name: 'description', content: 'Learn about Alex Wendte and Brianna Wendte through their blog.' },
        { name: 'keywords', content: 'Wendte Blog, Alex Wendte, Brianna Wendte' },
      ]}
    />
    <h1>About Us</h1>
  </div>
);
export default AboutUs;
