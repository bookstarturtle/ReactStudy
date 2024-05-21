import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main style={styles.main}>
      <h2>Main Content</h2>
      <p>This is the main content area.</p>
    </main>
  );
};

const styles = {
  main: {
    flex: 1,
    padding: '15px',
  },
};

export default MainContent;
