import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1>To do List</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: '10px',
    background: '#333',
    color: '#fff',
    textAlign: 'center' as 'center', // 타입 캐스팅
  },
};

export default Header;
