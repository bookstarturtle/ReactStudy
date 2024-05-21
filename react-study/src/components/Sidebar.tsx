import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside style={styles.sidebar}>
      <ul>
        <li>react-study</li>
        <li>1 구현 과제</li>
        <li>2</li>
        <li>3</li>
        
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '400px',
    background: '#f4f4f4',
    padding: '15px',
    boxSizing: 'border-box' as 'border-box',
    height: '100vh',
  },
};

export default Sidebar;
