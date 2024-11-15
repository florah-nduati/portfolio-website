import React from 'react';
import image1 from '../assets/widb.jpeg';
import image2 from '../assets/packet.jpeg';
import image3 from '../assets/WIDB2.jpeg';
import image4 from '../assets/ibm.jpeg'

const Certifications = () => {
  const certificates = [
    {
      name: 'Introduction to Packet Tracer',
      issuer: 'Cisco Networking Academy',
      date: 'February 2022',
      image: image2, 
    },
    {
      name: 'Bachelor\'s Degree in Computer Science',
      issuer: 'Murang\'a University of Technology',
      date: 'November 2024',
       // Add the path to your image here
    },
    {
      name: 'Women in Digital Business',
      issuer: 'Google Digital Skills',
      date: 'November 2024',
      image: image1, // Add the path to your image here
    },
    {
        name: 'TEACH2GIVE software development bootcamp',
        issuer: 'the jitu company',
        date: 'November 2024',
      // Add the path to your image here
      },
      {
        name: 'IBM cloud computing',
        issuer: 'IBM',
        date: 'November 2024',
        image: image4 // Add the path to your image here
      },
      {
        name: 'women in digital business ',
        issuer: 'google digital skills',
        date: 'November 2024',
        image: image3, // Add the path to your image here
      },
  ];

  return (
    <div className="certifications-container" style={styles.container}>
      <h2 style={styles.header}>My Certifications</h2>
      <div style={styles.certList}>
        {certificates.map((certificate, index) => (
          <div key={index} style={styles.certCard}>
            <img 
              src={certificate.image} 
              alt={certificate.name} 
              style={styles.certImage} 
            />
            <div style={styles.certDetails}>
              <h3 style={styles.certName}>{certificate.name}</h3>
              <p style={styles.certIssuer}>Issued by: {certificate.issuer}</p>
              <p style={styles.certDate}>Date: {certificate.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, #8454c7, #ae58bf)',
    padding: '3rem',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  certList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  certCard: {
    backgroundColor: '#f8bb7c',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    width: '300px',
    textAlign: 'center',
  },
  certImage: {
    width: '100%',
    height: '40vh',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  certDetails: {
    marginTop: '1rem',
  },
  certName: {
    fontSize: '1.6rem',
    color: '#007BFF',
    marginBottom: '0.5rem',
  },
  certIssuer: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '0.5rem',
  },
  certDate: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default Certifications;