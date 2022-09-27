import React from "react";
import { Checkbox } from "theme-ui";

export default function JobInsightsForm() {
  return (
    <div className="job-insights-apply-form">
      <div className="applyTitle">Apply</div>
      <div className="job-insights-form-main">
        <div className="job-insights-form-required-tag-div">
          <div />
          <div className="job-insights-form-required-tag">
            <p>
              <span>*</span>Required
            </p>
          </div>
        </div>
        <div className="apply-for-this-job">Apply for this job</div>
        <div className="linkedin-main">
          <p>
            Your full linkedin profile
            <br />
            will be shared.<span>Learn More</span>
          </p>
          <div className="linkedin-btn">
            <h3>Apply with LinkedIn</h3>
          </div>
        </div>

        <div className="line-saperator" />
        {/* Form Start Here */}
        <form>
          <div className="job-insight-form-label-with-input">
            <label>
              First Name<span>*</span>
            </label>
            <input />
          </div>
          <div className="job-insight-form-label-with-input">
            <label>
              Last Name<span>*</span>
            </label>
            <input />
          </div>
          <div className="job-insight-form-label-with-input">
            <label>
              Email<span>*</span>
            </label>
            <input />
          </div>
          <div className="job-insight-form-label-with-input">
            <label>
              Phone<span>*</span>
            </label>
            <input />
          </div>
          <div className="job-insight-form-label-with-input">
            <label>
              Resume/CV<span>*</span>
            </label>
            <div className="file-add">
              <div className="file-add-three-options">
                <span>Attach, </span>
                <span>Dropbox, </span>
                <span>or enter manually</span>
              </div>
              <div className="bottom-text">
                <p>(File types: pdf, doc, docx, txt, rtf)</p>
              </div>
            </div>
          </div>
          <div className="job-insight-form-label-with-input">
            <label>
              Resume/CV<span>*</span>
            </label>
            <div className="file-add">
              <div className="file-add-three-options">
                <span>Attach</span>
                <span>Dropbox,</span>
                <span>or enter manually</span>
              </div>
              <div className="bottom-text">
                <p>(File types: pdf, doc, docx, txt, rtf)</p>
              </div>
            </div>
          </div>

          <div className="line-saperator" />
          {/* Form Start Here */}
          <label className="bottom-form-label">
            Link to Portfolio or Github <span>*</span>
          </label>
          <input className="bottom-form-input" />

          <br style={{ marginTop: "2rem" }} />
          <label className="bottom-form-label">
            LinkedIn Profile URL <span>*</span>
          </label>
          <input className="bottom-form-input" />

          <br style={{ marginTop: "2rem" }} />
          <label className="bottom-form-label">
            How did you hear about this job? <span>*</span>
          </label>
          <input className="bottom-form-input" />

          <br style={{ marginTop: "2rem" }} />
          <label className="bottom-form-label">
            Are you authorized to work lawfully in the United States for
            Calendly? <span>*</span>
          </label>
          <div>
            <select className="form-select-options" name="" id="">
              <option value="volvo">--</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <br style={{ marginTop: "2rem" }} />
          <label className="bottom-form-label">
            How will now or in the future require Calendly to commence
            ("Sponser") and immigration case in order to employ you (for
            example, H-1B or other employment-based immigration case)? This is
            some time called "sponsorship" for an employment-based visa status.
            <span>*</span>
          </label>
          <div>
            <select className="form-select-options" name="" id="">
              <option value="volvo">--</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <br style={{ marginTop: "2rem" }} />
          <label className="bottom-form-label">
            Calendly is registered as an employer in many, but not all, states.
            If you are not located in or able to work from a state where
            Calendly is registered, you will not be eligible for employment.
            Please select the state where you will reside and work.
            <span>*</span>
          </label>
          <div>
            <select className="form-select-options" name="" id="">
              <option value="volvo">Please select</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div style={{ marginTop: "2rem" }} className="line-saperator" />

          <div className="form-bottom-demographical-q-main">
            <h1>Demographical questions</h1>
            <br style={{ marginTop: "2rem" }} />
            <p>
              Calendly has an inclusive culture of belonging, where our people
              intentionally foster a diverse workplace where{" "}
              <span>everyone</span> is welcomed, valued, respected, and heart.
              Our inclusive culture engages the full potential of each
              individual to accelerate innovation and our ability to drive
              business outcomes that fullfill our mission. Your responses will
              be used (in aggeregate only) to help us identify areas of
              improvements in our process. Your response will{" "}
              <span>will not</span> be associated with your specific application
              and <span>will not</span> in any way be used in hiring decision.
            </p>
            <p>
              I identify my gender as (Select one){" "}
              <span style={{ color: "#DB2A3A" }}>*</span>
            </p>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Agender</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Genderfluid/bigender</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Genderqueer/gender not conforming</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Main</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Non-binary/third gender</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Questioning</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Two-spirit</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Women</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">My option is not listed</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">I don't wish to answer</p>
              </div>
            </div>

            <br style={{ marginTop: "2rem" }} />
            <p>
              Would you describe yourself as transgender? (Select One)
              <span style={{ color: "#DB2A3A" }}>*</span>
            </p>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Yes</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">No</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">I don't wish to answer</p>
              </div>
            </div>

            <br style={{ marginTop: "2rem" }} />
            <p>
              Do you identify as a part of the LGBTQ+ community? (Select One)
              <span style={{ color: "#DB2A3A" }}>*</span>
            </p>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Yes</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">No</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">I don't wish to answer</p>
              </div>
            </div>

            <br style={{ marginTop: "2rem" }} />
            <p>
              I Identify my race as (Select One)
              <span style={{ color: "#DB2A3A" }}>*</span>
            </p>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">American Indian/Alaskan Native</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Asian</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Black or African American</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Hispanic or Latino</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Native Hawaiian or Other Pacific Islander</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">White</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Two or more races</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Not specified</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">I don't wish to answer</p>
              </div>
            </div>

            <br style={{ marginTop: "2rem" }} />
            <p>
              Veteran Status (Select One)
              <span style={{ color: "#DB2A3A" }}>*</span>
            </p>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">No, I am not a veteran</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Yes, I am a veteran</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">I don't wish to answer</p>
              </div>
            </div>
            
            <br style={{ marginTop: "2rem" }} />
            <p>
              I have a physical disability (Select One)
              <span style={{ color: "#DB2A3A" }}>*</span>
            </p>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">Yes</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">No</p>
              </div>
            </div>
            <div className="checkbox-and-label">
              <div className="checkbox-div">
                <Checkbox/>
                <p className="checkbox-label">I don't wish to answer</p>
              </div>
              <br style={{ marginTop: "2rem" }} />
            <div className="line-saperator" />
            </div>

            <div className="submit-btn">
                Submit Application
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
