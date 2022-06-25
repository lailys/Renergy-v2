import React from "react";

function Third() {
  return (
    <div className="landing-page-container-c">
      <div className="landing-page-container-c-header">Team Member</div>
      <div className="landing-page-container-c-center">
        {[
          [
            "url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            "John Smith",
            "CEO",
          ],
          [
            "url('https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            "John Smith",
            "CEO",
          ],
          [
            "url('https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            "John Smith",
            "CEO",
          ],
          [
            "url('https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            "John Smith",
            "CEO",
          ],
        ].map((member, index) => (
          <div key={index} className="landing-page-container-c-center-member">
            <div
              className="landing-page-container-c-center-member-card"
              style={{
                backgroundImage: member[0],
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Third;
