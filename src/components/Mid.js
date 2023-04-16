import React, { useEffect, useRef } from "react";
import "../styles.css";

export default function Mid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // change this value to adjust when the element should start to fade in
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        } else {
          entry.target.classList.remove("fade-in-up");
        }
      });
    }, options);

    observer.observe(sectionRef.current);

    return () => observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div className="mid">
      <div ref={sectionRef} className="mid-container">
        <h1 className="mid-title">Meet Our Team</h1>
        <div className="members">
          <div className="member">
            <img style={{ height: '150px', width: '150px',boxShadow: "5px 5px 10px #888888",  border: "2px solid" }}  src="https://media.discordapp.net/attachments/1097277899628892281/1097278465050415274/PXL_20220215_2320050822.jpg?width=353&height=448" alt="Member" />
            <div className="member-info">
              <h2 className="member-name">Judith Limo</h2>
              <p className="member-position">CEO</p>
              <p className="member-bio">
              I'm a Senior Year Undergraduate at University of Central Missouri. My major is Software Engineering. I Love reading, watching movies and tv shows. 

              </p>
            </div>
          </div>
          <div className="member">
            <img style={{ height: '150px', width: '150px',boxShadow: "5px 5px 10px #888888", border: "2px solid" }} src="https://media.licdn.com/dms/image/C5603AQHzZPkAGZPouQ/profile-displayphoto-shrink_800_800/0/1634449835814?e=1687392000&v=beta&t=o4LH6Pkos9aCPjqlkX6MDbF8g1Ul75MomuVp6R77-KA" alt="Member" />
            <div className="member-info">
              <h2 className="member-name">Paul Dakkumalla</h2>
              <p className="member-position">d  </p>
              <p className="member-bio">
                       I'm a Senior Year Undergraduate at University of Central Missouri. My major is Computer Science. 
              </p>
            </div>
          </div>
          <div className="member">
            <img style={{ height: '150px', width: '150px',boxShadow: "5px 5px 10px #888888" ,border: "2px solid"}} src="https://cdn.discordapp.com/attachments/1096577155183431707/1097270813431967914/IMG_0180.jpg" alt="Member" />
            <div className="member-info">
              <h2 className="member-name">Collin Vesel</h2>
              <p className="member-position">COO</p>
              <p className="member-bio">
                I'm a Senior Year Undergraduate at University of Central Missouri. My major is Computer Science. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
