import React from 'react';

const Garis = () => {
  const styles = {
    container: {
      width: '100%', /* Full width of the container */
      display: 'flex',
      // paddingLeft: '10px',
      justifyContent: 'center', /* Center the line horizontally */
      margin: '0 0 30px 0px', /* Add margin above and below the line */
    },
    line: {
      width: '100%', /* Width of the line, adjust as needed */
      border: 'none', /* Remove default border */
      borderTop: '2px solid #000', /* Add top border to create the line */
    //   boxShadow: '4px 4px 15px 0px rgba(0, 0, 0, 0.18) inset',
      margin: '0', /* Remove default margin */
    },
  };

  return (
    <div style={styles.container}>
      <hr style={styles.line} />
    </div>
  );
};

export default Garis;
