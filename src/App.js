import React, { useRef, useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFirstSectionContent, setShowFirstSectionContent] = useState(false);
  const [initialLabelOpacity, setInitialLabelOpacity] = useState(1);
  const [opacity1, setOpacity1] = useState(0);
  const [showModal, setShowModal] = useState(false);


  const areas = [
    { id: 1, title: 'Unpacking Gender Equality', description: 'Understanding the nuances of gender equality is the first step towards achieving it. We delve into the differentiations between sex and gender, the societal constructs of gender roles, and the various forms of gender discrimination that are often ingrained in our societies. Our comprehensive content will equip you with the knowledge to identify and challenge gender inequality.' },
    { id: 2, title: 'Bridging the Gender Wage Gap', description: "The persistent gender wage gap is a stark reminder of the economic disparities based on gender. We believe in 'Equal Pay for Equal Work, ' and advocate for fair payment without gender discrimination. Here, we dissect the contributing factors of the wage gap, highlight progress, and provide tools for advocating pay equity in your workplace." },
    { id: 3, title: 'Powering the Potential of Women and Girls', description: 'Empowering women and girls goes beyond ensuring equal rights and opportunities. We also celebrate their achievements and their indispensable contributions to all aspects of life. Here, we share powerful narratives of women and girls who have broken the glass ceiling and provide resources to support empowerment initiatives.' },
    { id: 4, title: 'Involving Men and Boys in the Conversation', description: "Gender equality is not a women's issue alone; it encompasses us all. We emphasize the vital role of men and boys in promoting gender equality and provide resources to help them challenge harmful gender norms and stereotypes, encouraging them to become allies in the cause." },
    { id: 5, title: 'Championing LGBTQ+ Rights and Inclusion', description: 'Inclusivity is a cornerstone of gender equality. We focus on the rights of individuals across all gender identities and expressions under the LGBTQ+ spectrum. Here, we share insights on the unique challenges faced by LGBTQ+ individuals and provide resources to foster an inclusive, accepting society.' },
    { id: 6, title: 'Advocacy and Activism', description: 'Transforming knowledge into action is the key to bring about change. We provide a toolkit that includes guides, resources, and actionable steps to advocate for gender equity in your community, your workplace, and your personal life. From planning awareness drives to advocating for policy amendments, we stand with you in your journey towards equality.' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
        setShowFirstSectionContent(true);
        setOpacity1((window.scrollY - 100) / 60);
      } else {
        setInitialLabelOpacity(1 - window.scrollY / 100);
        setShowNavbar(false);
        setShowFirstSectionContent(false);
      }
      if (window.scrollY > 400) {
        setNavbarBackground('rgba(0, 0, 0, 0.5)');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={`App-header${showNavbar ? " visible" : ""}`} style={{ backgroundColor: navbarBackground }}>
        <nav>
          <button onClick={() => scrollToRef(section1Ref)}>About Us</button>
          <button onClick={() => scrollToRef(section2Ref)}>Our Mission</button>
          <button onClick={() => scrollToRef(section3Ref)}>Core Focus Areas</button>
          <button onClick={() => scrollToRef(section4Ref)}>Join Us</button>
        </nav>
        <div className="label">Gender Equity Hub</div>
      </header>
      <section ref={section1Ref} className="parallax parallax1 first-section">
        <div className="dimmed-layer"></div>
        {showFirstSectionContent ? (
          <div className="content" style={{ opacity: opacity1 }}>
            <h2>What is Gender Equity Hub?</h2>
            <p>
              Gender Equity Hub is a global platform committed to fostering an environment where everyone is treated equitably, irrespective of their gender. We engage in promoting awareness, sparking dialogues, and providing actionable tools to challenge gender biases and address systemic inequality.
            </p>
          </div>
        ) : (
          <div className="initial-label" style={{ opacity: initialLabelOpacity }}>Gender Equity Hub</div>
        )}

      </section>
      <section ref={section2Ref} className="second-section">
        <div className="content">
          <h2 className="title">Our mission</h2>
          <div className="separator"></div>
          <p className="text">
            We are on a mission to inspire change, foster an inclusive culture, and cultivate a society where opportunities, rights, and resources are distributed fairly, transcending the boundaries of gender.
          </p>
        </div>
      </section>
      <section ref={section3Ref} className="focus-areas parallax parallax2">
        <div className="dimmed-layer"></div>
        <div className="content">
          <h2 className="focus-title">Core Focus Areas</h2>
          <div className="focus-area-content">
            {areas.map(area => (
              <div key={area.id} className="focus-area-card">
                <h2 className="focus-area-title">{area.title}</h2>
                <p className="focus-area-description">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={section4Ref} className="joinUs">
        <div className="content">
          <h2 className="join-us-title">Join Us</h2>
          <div className="separator"></div>
          <p className="join-us-content">
            We extend an open invitation to you to join us and contribute to our mission of promoting gender equity. Share your experiences, ask questions, engage in the conversation, and connect with like-minded individuals passionate about driving change. Your participation can help shape a fairer society.
          </p>
          <button className="join-us-btn" onClick={() => setShowModal(true)}>Join Us</button>

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
                <form>
                  <label>Email:</label>
                  <input type="email" required placeholder="Do not add real email"/>

                  <label>Message:</label>
                  <textarea required />

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <footer>
        © 2024 Copyright. All Rights Reserved. Designed by Nurassyl Kurmangali.
      </footer>
    </div>
  );
};

export default App;