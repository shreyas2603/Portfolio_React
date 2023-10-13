// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <h2>Projects</h2>
      <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <p class="p-heading">Projects That I Completed!!!</p>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-4">
              <div class="text-box1">
                <h4 class="head">Portfolio</h4>
                <h4 class="colo">Developed a professional and visually appealing web portfolio using HTML,JavaScript,Bootstrap and CSS to showcase my skills, projects, and 
                  achievements. Utilized responsive design principles to ensure optimal viewing on various devices, creating an online presence that 
                  highlights my technical abilities and achievements. The portfolio includes sections for an introduction, education, project showcases, 
                  Courses Completed and contact 
                  information, providing a comprehensive overview of my qualifications and experiences.</h4>
              <button class="but">
              <a href="https://github.com/shreyas2603/SHREYAS_PORTFOLIO">PROJECT</a>
            </button>
              </div>
          </div>
          <div class="col-lg-4">
            <div class="text-box1">
              
              <h4 class="head">Invoice PDF Automation</h4>
              <h4 class="colo">Designed and developed an Invoice Automation System using C# 
              and ASP.NET Framework, designed to tackle the inefficiencies of manual invoice processing. This cutting-edge solution offers 
              automated data extraction and real-time tracking capabilities. 
              By reducing errors and streamlining processes, the system delivers tangible benefits, including a 40% decrease in 
              processing time and substantial cost savings. User feedback underscores its user-friendly interface and 
              efficiency. Looking ahead, I'm excited to explore AI-powered enhancements for even greater automation and efficiency gains.</h4>
              
              <button class="but">
              <a href="https://github.com/shreyas2603/Invoice_Automation_PDF_Extraction">PROJECT</a>
            </button>
            </div>
        </div>
          <div class="col-lg-4">
              <div class="text-box1">
                 
                  <h4 class="head">Crowd Funding</h4>
                  <h4 class="colo">At First, while thinking of doing a new project our team came up with the idea of crowdfunding. Sometimes we also experience 
              while donating to funding websites that they genuinely started the fund or is it fake. If it's genuine then how much commission does the 
              third party get? and the fund risers are they even spending the money for what they collected Money and what happened 
              to the patient did they survive we don't have the correct answer to the above questions right. 
              So Our team came up with the brilliant idea to eliminate the third party as well as keep track of money and finally transparency above all.</h4>
                  
              <button class="but">
              <a href="https://github.com/shreyas2603/Crowd_funding_solidity">PROJECT</a>
            </button>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="text-box1">
                <h4 class="head">Movie Recommendation Project</h4>
                <h4 class="colo">I conceptualized and brought to life a Movie Recommendation System by harnessing the power of machine learning algorithms and web development 
          technologies. Leveraging Python for comprehensive data analysis and modeling, I fine-tuned a recommendation model that delivers personalized 
          movie suggestions. Taking it a step further, I seamlessly integrated this model with a user-friendly web application using HTML, CSS, and 
          JavaScript. This fusion of data-driven insights and web development wizardry ensures users receive tailored movie recommendations while 
          enjoying a visually appealing and intuitive interface. This project showcases my ability to bridge the realms of data science and web 
          development, delivering a dynamic, user-focused solution at the intersection of technology and entertainment.</h4>

          <button class="but">
              <a href="https://github.com/shreyas2603/MOVIE_Recommendation">PROJECT</a>
            </button>
              </div>
          </div>
      </div>
  </div>
    </section>
  );
}

export default Projects;
