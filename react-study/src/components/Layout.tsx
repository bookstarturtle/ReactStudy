import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout: React.FC = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
};

export default Layout;
