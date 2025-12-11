import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import "../App.css";

/* Image imports */
import logo from "../assets/HolyCross-logo.png"; 
import SomacBuffet from "../assets/Day1/SomacBuffet.jpg";
import LapuStatue from "../assets/Day1/LapuStatue.jpg";
import CebuAirport from "../assets/Day1/CebuAirport.jpg";
import WorldTech from "../assets/Day1/WorldTech.jpg";
import MagelanCross from "../assets/Day1/MagelanCross.jpg";
import CheckIn from "../assets/Day1/CheckIn.jpg";
import DavaoAirport from "../assets/Day1/DavaoAirport.jpg";
import BreakFastBai from "../assets/Day2/BreakFastBai.jpg";
import RivanIT from "../assets/Day2/RivanIT.jpg";
import Buffet101 from "../assets/Day2/Buffet101.jpg";
import CodeChum from "../assets/Day2/CodeChum.jpg";
import Parian from "../assets/Day2/Parian.jpg";
import BreakFast2 from "../assets/Day3/BreakFast2.jpg";
import MataTechnology from "../assets/Day3/MataTechnology.jpg";
import Vikings from "../assets/Day3/Vikings.jpg";
import Donation from "../assets/Day3/Donation.jpg";
import SuperCat from "../assets/Day3/SuperCat.jpg";
import VistaCheckIn from "../assets/Day3/VistaCheckIn.jpg";
import VistaBreakFast from "../assets/Day4/VistaBreakFast.jpg";
import ChocolateHills from "../assets/Day4/ChocolateHills.jpg";
import Tarsier from "../assets/Day4/Tarsier.jpg";
import Loboc from "../assets/Day4/Loboc.jpg";
import Sikatuna from "../assets/Day4/Sikatuna.jpg";
import ManilaDavao from "../assets/Day4/ManilaDavao.jpg";
import CertificatePic from "../assets/certificate.jpg"; 

/* Company logo imports */
import WorldTechCompany from "../assets/companies/WorldTechCompany.jpg";
import RivanITCompany from "../assets/companies/RivanITCompany.png";
import CodeChumTechCompany from "../assets/companies/CodeChumTechCompany.png";
import MataTechCompany from "../assets/companies/MataTechCompany.png";
import TarsierCompany from "../assets/companies/TarsierCompany.png";
import CoverPageCompany from "../assets/companies/CoverPageCompany.jpg";

export default function EducationalTour() {
  const day1Ref = useRef(null);
  const day2Ref = useRef(null);
  const day3Ref = useRef(null);
  const day4Ref = useRef(null);
  const certificateRef = useRef(null);
  const learningJournalRef = useRef(null);

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openImageModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <div className="App">
      {/* Image Modal */}
      {modalOpen && selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '20px'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90%',
            maxHeight: '90%'
          }}>
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.4)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              ✕
            </button>
            
            <img 
              src={selectedImage} 
              alt={selectedTitle}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '10px',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.1)'
              }}
            />
            
            <div style={{
              color: 'white',
              textAlign: 'center',
              marginTop: '15px',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              {selectedTitle}
            </div>
            
            <div style={{
              color: '#ccc',
              textAlign: 'center',
              marginTop: '5px',
              fontSize: '0.9rem'
            }}>
              Click outside or press ESC to close
            </div>
          </div>
        </div>
      )}

      {/* Add Back Button at the top */}
      <div style={{ padding: 20, position: 'fixed', top: 0, left: 0, zIndex: 1001 }}>
        <Link to="/">
          <button className="cover-button" style={{
            background: 'var(--school-red)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(179,0,0,0.4)'
          }}>
            ← Back to Portfolio
          </button>
        </Link>
      </div>

      <div className="cover-container">
        <div className="cover-overlay"></div>
        <div className="cover-content">
          <img src={logo} alt="HCDC Logo" className="cover-logo" />
          <h1 className="cover-title">HOLY CROSS OF DAVAO COLLEGE</h1>
          <p className="cover-subtitle">BS in Information Technology – 3rd Year</p>
          <p className="cover-info">Cebu-Bohol Educational Tour 2025</p>
          
          {/* Day Navigation Buttons */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            justifyContent: 'center',
            marginTop: '30px'
          }}>
            <button
              className="cover-button"
              onClick={() => scrollToSection(day1Ref)}
              style={{ background: 'linear-gradient(45deg, #B30000, #8a0000)' }}
            >
              DAY 1
            </button>
            <button
              className="cover-button"
              onClick={() => scrollToSection(day2Ref)}
              style={{ background: 'linear-gradient(45deg, #B30000, #8a0000)' }}
            >
              DAY 2
            </button>
            <button
              className="cover-button"
              onClick={() => scrollToSection(day3Ref)}
              style={{ background: 'linear-gradient(45deg, #B30000, #8a0000)' }}
            >
              DAY 3
            </button>
            <button
              className="cover-button"
              onClick={() => scrollToSection(day4Ref)}
              style={{ background: 'linear-gradient(45deg, #B30000, #8a0000)' }}
            >
              DAY 4
            </button>
            <button
              className="cover-button"
              onClick={() => scrollToSection(learningJournalRef)}
              style={{ 
                background: 'linear-gradient(45deg, #0066cc, #004080)',
                color: 'white'
              }}
            >
              LEARNING JOURNAL
            </button>
            <button
              className="cover-button"
              onClick={() => scrollToSection(certificateRef)}
              style={{ 
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: '#333'
              }}
            >
              CERTIFICATE
            </button>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>Journey: November 19-22, 2025</h2>

        {/* Bus Info */}
        <div className="itinerary-bus">
          <p><strong>Bus A:</strong> 46 students + 2 faculty | TG: Roschelle Danica Dibdib</p>
          <p><strong>Bus B:</strong> 45 students + 3 faculty | TG: Renz Noval, Jr.</p>
        </div>

        {/* Quick Navigation Bar */}
        <div style={{
          position: 'sticky',
          top: '70px',
          background: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginBottom: '30px',
          zIndex: 100,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center'
        }}>
          <button
            className="cover-button"
            onClick={() => scrollToSection(day1Ref)}
            style={{ 
              padding: '8px 20px',
              fontSize: '0.9rem',
              background: 'var(--school-red)'
            }}
          >
            DAY 1
          </button>
          <button
            className="cover-button"
            onClick={() => scrollToSection(day2Ref)}
            style={{ 
              padding: '8px 20px',
              fontSize: '0.9rem',
              background: 'var(--school-red)'
            }}
          >
            DAY 2
          </button>
          <button
            className="cover-button"
            onClick={() => scrollToSection(day3Ref)}
            style={{ 
              padding: '8px 20px',
              fontSize: '0.9rem',
              background: 'var(--school-red)'
            }}
          >
            DAY 3
          </button>
          <button
            className="cover-button"
            onClick={() => scrollToSection(day4Ref)}
            style={{ 
              padding: '8px 20px',
              fontSize: '0.9rem',
              background: 'var(--school-red)'
            }}
          >
            DAY 4
          </button>
          <button
            className="cover-button"
            onClick={() => scrollToSection(learningJournalRef)}
            style={{ 
              padding: '8px 20px',
              fontSize: '0.9rem',
              background: 'linear-gradient(45deg, #0066cc, #004080)',
              color: 'white'
            }}
          >
            LEARNING JOURNAL
          </button>
          <button
            className="cover-button"
            onClick={() => scrollToSection(certificateRef)}
            style={{ 
              padding: '8px 20px',
              fontSize: '0.9rem',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              color: '#333'
            }}
          >
            VIEW CERTIFICATE
          </button>
        </div>

        {/* DAY 1 */}
        <div ref={day1Ref} className="itinerary-day">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h3>DAY 1 – NOV 19, WED</h3>
            <button
              className="cover-button"
              onClick={() => scrollToSection(day2Ref)}
              style={{ 
                padding: '8px 20px',
                fontSize: '0.9rem',
                background: 'var(--school-red)'
              }}
            >
              Next: DAY 2 →
            </button>
          </div>
          <ActivityCard image={DavaoAirport} title="Departure from Davao to Cebu" time="8:45 a.m." description="Estimated Time of Departure via Philippine Airlines." isBusA={true} />
          <ActivityCard image={CebuAirport} title="Arrival at Mactan-Cebu International Airport" time="9:30 a.m." description="We landed at Mactan-Cebu International Airport and were warmly welcomed. After getting our luggage, we met our tour guides and prepared to start our exciting Cebu-Bohol educational adventure." isBusA={true} />
          <ActivityCard image={LapuStatue} title="First Tourist Spot in Cebu – Lapu-Lapu Shrine" time="10:00 a.m." description="Our first tourist stop in Cebu was the Lapu-Lapu Shrine. We learned about the bravery of the Filipino hero who defeated Magellan and enjoyed taking memorable photos at this historic site." isBusA={false} />
          <ActivityCard image={SomacBuffet} title="Lunch at Somac Korean Restaurant" time="11:00 a.m." description="We had our first meal together at Somac Korean Restaurant inside SM Seaside. Everyone can enjoy an Eat-All-You-Can buffet with different Korean dishes." isBusA={false} />
          <ActivityCard image={WorldTech} title="WORLDTECH INFORMATION SOLUTIONS, INC." time="1:30 p.m." description="We visited WORLDTECH INFORMATION SOLUTIONS, INC. where we got an overview of their IT operations and learned about the latest technology solutions. It was an insightful experience that gave us a glimpse into the professional IT industry." isBusA={false} />
          <ActivityCard image={MagelanCross} title="Magellan's Cross" time="3:30 p.m." description="We visited Magellan's Cross, a historic landmark in Cebu. It was fascinating to see this symbol of faith and history, and we took the opportunity to learn about its significance while capturing memorable photos." isBusA={false} />
          <ActivityCard image={CheckIn} title="Check-in at Bai Hotel" time="6:30 p.m." description="Rest of the time is free to relax." isBusA={false} />
        </div>

        {/* DAY 2 */}
        <div ref={day2Ref} className="itinerary-day">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h3>DAY 2 – NOV 20, THU</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="cover-button"
                onClick={() => scrollToSection(day1Ref)}
                style={{ 
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  background: 'var(--school-red)'
                }}
              >
                ← Previous: DAY 1
              </button>
              <button
                className="cover-button"
                onClick={() => scrollToSection(day3Ref)}
                style={{ 
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  background: 'var(--school-red)'
                }}
              >
                Next: DAY 3 →
              </button>
            </div>
          </div>
          <ActivityCard image={BreakFastBai} title="Breakfast at Café Bai Hotel" time="6:00 a.m." description="We started our day with a delicious buffet breakfast at Café Bai Hotel, enjoying a variety of dishes before heading out for our exciting activities." isBusA={true} />
          <ActivityCard image={RivanIT} title="RIVAN IT CEBU" time="9:00 a.m." description="Bus A visited RIVAN IT CEBU, where we learned about their IT solutions and company operations. They also demonstrated how a professional call center is set up, giving us practical insights into customer support and technology management." isBusA={true} />
          <ActivityCard image={Buffet101} title="Lunch Buffet at Buffet 101 International Cuisine" time="11:30 a.m." description="We enjoyed an Eat-All-You-Can lunch at Buffet 101 International Cuisine, savoring a variety of dishes and taking a short break to recharge before our afternoon activities." isBusA={false} />
          <ActivityCard image={CodeChum} title="CODECHUM at CIT-U Wildcat Labs" time="2:00 p.m." description="We had a hands-on experience at CODECHUM in CIT-U Wildcat Labs, exploring coding projects and learning how IT systems are developed and managed in a real-world setting." isBusA={false} />
          <ActivityCard image={Parian} title="Parian" time="4:00 p.m." description="We visited Parian, a historic district in Cebu, where we explored old streets, admired heritage houses, and learned about the local culture and history." isBusA={false} />
          <ActivityCard image={CheckIn} title="Bai Hotel" time="6:30 p.m." description="We returned to Bai Hotel to rest and freshen up after a day full of sightseeing. The evening was free for relaxation or personal time." isBusA={false} />
        </div>

        {/* DAY 3 */}
        <div ref={day3Ref} className="itinerary-day">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h3>DAY 3 – NOV 21, FRI</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="cover-button"
                onClick={() => scrollToSection(day2Ref)}
                style={{ 
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  background: 'var(--school-red)'
                }}
              >
                ← Previous: DAY 2
              </button>
              <button
                className="cover-button"
                onClick={() => scrollToSection(day4Ref)}
                style={{ 
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  background: 'var(--school-red)'
                }}
              >
                Next: DAY 4 →
              </button>
            </div>
          </div>
          <ActivityCard image={BreakFast2} title="Breakfast and Check-out at Bai Hotel" time="6:00 a.m." description="We had a buffet breakfast at Bai Hotel and checked out, preparing to travel to Tagbilaran City for the next leg of our educational tour." isBusA={true} />
          <ActivityCard image={MataTechnology} title="MATA TECHNOLOGIES, INC." time="9:00 a.m." description="We visited MATA TECHNOLOGIES, INC., where we observed IT operations and learned about their innovative solutions. It was a great opportunity to see how professionals handle real-world IT projects." isBusA={false} />
          <ActivityCard image={Vikings} title="Lunch Buffet at Viking's SM City" time="11:00 a.m." description="We enjoyed an Eat-All-You-Can lunch at Viking's SM City before heading to the pier to depart for Tagbilaran City." isBusA={false} />
          <ActivityCard image={Donation} title="Donation Activity" time="1:30 p.m." description="We participated in a donation activity, giving contributions and support to the local community. It was a meaningful experience that allowed us to give back and learn the value of helping others." isBusA={false} />
          <ActivityCard image={SuperCat} title="Cebu to Tagbilaran via SuperCat Ferry" time="2:30 p.m." description="We departed Cebu via SuperCat ferry and enjoyed the scenic 2-hour journey to Tagbilaran City." isBusA={false} />
          <ActivityCard image={VistaCheckIn} title="Check-in at Panglao Vista Suites" time="6:00 p.m." description="We checked in at Panglao Vista Suites, had dinner by the poolside, and spent the rest of the evening exploring Panglao Island at our leisure." isBusA={false} />
        </div>

        {/* DAY 4 */}
        <div ref={day4Ref} className="itinerary-day">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <h3>DAY 4 – NOV 22, SAT</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="cover-button"
                onClick={() => scrollToSection(day3Ref)}
                style={{ 
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  background: 'var(--school-red)'
                }}
              >
                ← Previous: DAY 3
              </button>
              <button
                className="cover-button"
                onClick={() => scrollToSection(learningJournalRef)}
                style={{ 
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                  background: 'linear-gradient(45deg, #0066cc, #004080)',
                  color: 'white'
                }}
              >
                Next: Learning Journal →
              </button>
            </div>
          </div>
          <ActivityCard image={VistaBreakFast} title="Breakfast at Panglao Vista Suites" time="6:00 a.m." description="We started our day with a buffet breakfast at Panglao Vista Suites before checking out and preparing for our last day of sightseeing." isBusA={true} />
          <ActivityCard image={ChocolateHills} title="Chocolate Hills" time="10:00 a.m." description="We visited the Chocolate Hills, marveling at the unique natural formations and taking photos to capture the stunning scenery. It was a highlight of our tour in Bohol." isBusA={false} />
          <ActivityCard image={Tarsier} title="Tarsier Sanctuary" time="11:00 a.m." description="We visited the Tarsier Sanctuary and observed the tiny, adorable tarsiers in their natural habitat. It was fascinating to learn about their behavior and conservation efforts." isBusA={false} />
          <ActivityCard image={Loboc} title="Loboc River Cruise & Lunch" time="12:00 p.m." description="Lunch Fiesta Buffet at Floating Restaurant while cruising Loboc River with Harana." isBusA={false} />
          <ActivityCard image={Sikatuna} title="Sikatuna Mirror of the World" time="2:00 p.m." description="We explored the Sikatuna Mirror of the World, a unique attraction filled with reflective art and interactive displays. It was a fun and memorable experience for taking creative photos." isBusA={false} />
          <ActivityCard image={ManilaDavao} title="Departure to Davao" time="5:30 p.m." description="Proceed to Panglao International Airport for departure to Davao via Cebu Pacific Air." isBusA={false} />
        </div>

        {/* LEARNING JOURNAL SECTION */}
        <div ref={learningJournalRef} className="personal-section" style={{ marginTop: '50px', padding: '40px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              color: '#0066cc',
              fontSize: '2.5rem',
              marginBottom: '10px'
            }}>
              Learning Journal
            </h2>
            <p style={{ 
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto 30px'
            }}>
              Reflections and insights from our company visits during the educational tour
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#888',
              fontStyle: 'italic'
            }}>
              Click on any pic to view it larger
            </p>
          </div>

          {/* Company Learning Entries */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px'
          }}>
            
            {/* WorldTech */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div
                  onClick={() => openImageModal(WorldTechCompany, "WorldTech Information Solutions, Inc.")}
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img 
                    src={WorldTechCompany} 
                    alt="WorldTech Logo" 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '3px solid #0066cc'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ color: '#0066cc', margin: '0' }}>WorldTech Information Solutions, Inc.</h3>
                  <p style={{ color: '#666', margin: '5px 0 0 0' }}>Day 1 • November 19, 2025</p>
                </div>
              </div>
              <div style={{
                background: '#f0f8ff',
                padding: '20px',
                borderRadius: '10px',
                borderLeft: '4px solid #0066cc'
              }}>
                <h4 style={{ color: '#333', marginTop: '0' }}>What I Learned:</h4>
                <ul style={{ paddingLeft: '20px', color: '#444', lineHeight: '1.6' }}>
                  <li>Overview of enterprise IT solutions</li>
                  <li>Importance of system integration in businesses</li>
                  <li>Real-world application of technology consulting</li>
                  <li>Career opportunities in IT solutions companies</li>
                </ul>
                <p style={{ 
                  color: '#666', 
                  fontStyle: 'italic',
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px dashed #ccc'
                }}>
                  "Seeing how technology transforms business operations gave me a clearer picture of my future career path."
                </p>
              </div>
            </div>

            {/* Rivan IT */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div
                  onClick={() => openImageModal(RivanITCompany, "Rivan IT Cebu")}
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img 
                    src={RivanITCompany} 
                    alt="Rivan IT Logo" 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '3px solid #28a745'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ color: '#28a745', margin: '0' }}>Rivan IT Cebu</h3>
                  <p style={{ color: '#666', margin: '5px 0 0 0' }}>Day 2 • November 20, 2025</p>
                </div>
              </div>
              <div style={{
                background: '#f0fff4',
                padding: '20px',
                borderRadius: '10px',
                borderLeft: '4px solid #28a745'
              }}>
                <h4 style={{ color: '#333', marginTop: '0' }}>What I Learned:</h4>
                <ul style={{ paddingLeft: '20px', color: '#444', lineHeight: '1.6' }}>
                  <li>Call center operations and technology infrastructure</li>
                  <li>Customer support system management</li>
                  <li>IT services for business process outsourcing</li>
                  <li>Importance of communication skills in IT</li>
                </ul>
                <p style={{ 
                  color: '#666', 
                  fontStyle: 'italic',
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px dashed #ccc'
                }}>
                  "The live call center demonstration showed me how technology and human interaction work together."
                </p>
              </div>
            </div>

            {/* CodeChum */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div
                  onClick={() => openImageModal(CodeChumTechCompany, "CodeChum at CIT-U Wildcat Labs")}
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img 
                    src={CodeChumTechCompany} 
                    alt="CodeChum Logo" 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '3px solid #ff6b00'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ color: '#ff6b00', margin: '0' }}>CodeChum at CIT-U Wildcat Labs</h3>
                  <p style={{ color: '#666', margin: '5px 0 0 0' }}>Day 2 • November 20, 2025</p>
                </div>
              </div>
              <div style={{
                background: '#fff4e6',
                padding: '20px',
                borderRadius: '10px',
                borderLeft: '4px solid #ff6b00'
              }}>
                <h4 style={{ color: '#333', marginTop: '0' }}>What I Learned:</h4>
                <ul style={{ paddingLeft: '20px', color: '#444', lineHeight: '1.6' }}>
                  <li>Hands-on coding experience in a lab environment</li>
                  <li>Project-based learning approaches</li>
                  <li>Academic-industry collaboration</li>
                  <li>Development tools and version control systems</li>
                </ul>
                <p style={{ 
                  color: '#666', 
                  fontStyle: 'italic',
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px dashed #ccc'
                }}>
                  "The practical coding session reinforced the importance of hands-on practice in learning programming."
                </p>
              </div>
            </div>

            {/* MATA Technologies */}
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div
                  onClick={() => openImageModal(MataTechCompany, "MATA Technologies, Inc.")}
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <img 
                    src={MataTechCompany} 
                    alt="MATA Tech Logo" 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '10px',
                      objectFit: 'cover',
                      border: '3px solid #6f42c1'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ color: '#6f42c1', margin: '0' }}>MATA Technologies, Inc.</h3>
                  <p style={{ color: '#666', margin: '5px 0 0 0' }}>Day 3 • November 21, 2025</p>
                </div>
              </div>
              <div style={{
                background: '#f8f0ff',
                padding: '20px',
                borderRadius: '10px',
                borderLeft: '4px solid #6f42c1'
              }}>
                <h4 style={{ color: '#333', marginTop: '0' }}>What I Learned:</h4>
                <ul style={{ paddingLeft: '20px', color: '#444', lineHeight: '1.6' }}>
                  <li>Innovative technology solutions in development</li>
                  <li>Startup culture and innovation processes</li>
                  <li>Project management in tech companies</li>
                  <li>Emerging technologies and their applications</li>
                </ul>
                <p style={{ 
                  color: '#666', 
                  fontStyle: 'italic',
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px dashed #ccc'
                }}>
                  "The innovative approach to problem-solving was inspiring and showed me how creativity drives technology."
                </p>
              </div>
            </div>

          </div>

          {/* Reflection Summary */}
          <div style={{
            maxWidth: '800px',
            margin: '50px auto 30px',
            padding: '30px',
            background: 'linear-gradient(135deg, #f8f9ff, #e6f0ff)',
            borderRadius: '15px',
            border: '2px solid #0066cc'
          }}>
            <h3 style={{ 
              color: '#0066cc',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Overall Reflection
            </h3>
            <p style={{ 
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#333',
              textAlign: 'center'
            }}>
              This educational tour provided invaluable insights into the IT industry. Visiting different companies showed me the diverse career paths available, from enterprise solutions and BPO services to academic collaboration and tech innovation. Each visit reinforced the importance of practical skills, continuous learning, and adaptability in the fast-evolving technology field.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ 
            textAlign: 'center',
                        marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <button
              className="cover-button"
              onClick={() => scrollToSection(certificateRef)}
              style={{ 
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: '#333',
                minWidth: '150px'
              }}
            >
              View Certificate →
            </button>
            <button
              className="cover-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ 
                background: 'var(--school-red)',
                minWidth: '150px'
              }}
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Certificate Section */}
        <div ref={certificateRef} className="personal-section" style={{ marginTop: '50px' }}>
          <h2>Certificate of Participation</h2>
          <div className="personal-card" style={{ 
            maxWidth: '1000px', 
            padding: '40px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ 
              textAlign: 'center', 
              width: '100%',
              maxWidth: '900px' 
            }}>
              
              {/* Certificate Image Display */}
              <div 
                onClick={() => openImageModal(CertificatePic, "Certificate of Participation")}
                style={{
                  border: '10px solid #B30000',
                  borderRadius: '15px',
                  padding: '20px',
                  background: '#fff',
                  boxShadow: '0 10px 30px rgba(179, 0, 0, 0.2)',
                  marginBottom: '30px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(179, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(179, 0, 0, 0.2)';
                }}
              >
                <img 
                  src={CertificatePic} 
                  alt="Certificate of Participation" 
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
                
                {/* Decorative border */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '8px',
                  background: 'linear-gradient(90deg, #B30000, #8a0000)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '8px',
                  background: 'linear-gradient(90deg, #B30000, #8a0000)'
                }}></div>
                
                {/* Click hint overlay */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'rgba(179, 0, 0, 0)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'background 0.3s ease',
                  pointerEvents: 'none'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(179, 0, 0, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(179, 0, 0, 0)'}
                >
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    transform: 'translateY(10px)'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0'}
                  >
                    Click to view larger
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div style={{
                background: 'linear-gradient(135deg, #fff9f9, #ffffff)',
                border: '2px solid #B30000',
                borderRadius: '10px',
                padding: '30px',
                boxShadow: '0 5px 15px rgba(179, 0, 0, 0.1)',
                margin: '0 auto',
                maxWidth: '800px'
              }}>
                <h3 style={{ 
                  color: '#B30000', 
                  fontSize: '2rem',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  CERTIFICATE DETAILS
                </h3>
                
                <div style={{ 
                  textAlign: 'center', 
                  marginBottom: '25px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '15px'
                }}>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                      <strong>Recipient:</strong> Mark Jonas Ortiz Gutang
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                      <strong>Program:</strong> BS Information Technology - 3rd Year
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                      <strong>Event:</strong> Cebu-Bohol Educational Tour 2025
                    </p>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                      <strong>Date:</strong> November 19-22, 2025
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                      <strong>Issued by:</strong> Holy Cross of Davao College
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                      <strong>College of Engineering and Technology</strong>
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #B30000',
                  marginTop: '20px'
                }}>
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#555',
                    fontStyle: 'italic',
                    margin: '0',
                    textAlign: 'center'
                  }}>
                    "This certificate is awarded in recognition of active participation and successful completion of the educational tour, demonstrating commitment to professional growth and academic excellence."
                  </p>
                </div>
              </div>
              
              {/* Navigation back to top */}
              <div style={{ 
                marginTop: '40px', 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <button
                  className="cover-button"
                  onClick={() => scrollToSection(learningJournalRef)}
                  style={{ 
                    background: 'linear-gradient(45deg, #0066cc, #004080)',
                    color: 'white',
                    minWidth: '150px'
                  }}
                >
                  ← Learning Journal
                </button>
                <button
                  className="cover-button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{ 
                    background: 'var(--school-red)',
                    minWidth: '150px'
                  }}
                >
                  Back to Top
                </button>
                <button
                  className="cover-button"
                  onClick={() => scrollToSection(day1Ref)}
                  style={{ 
                    background: 'var(--school-red)',
                    minWidth: '150px'
                  }}
                >
                  Back to DAY 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}