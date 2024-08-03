import React, { useState } from "react";
import axios from 'axios';

const Sponsors = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    email: '',
    phone: '',
    website: '',
    contactName: '',
    contactTitle: '',
    sector: '',
    activityType: '',
    activityDescription: '',
    values: '',
    sponsorshipLevel: '',
    budget: '',
    benefits: '',
    contribution: '',
    logo: '',
    standNeeds: '',
    staffNeeds: '',
    communicationNeeds: '',
    marketingGoals: '',
    targetAudience: '',
    successMetrics: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    axios.post('http://localhost:5000/sponsors/register', formData)
      .then(response => {
        console.log('Server response:', response);
        alert('Merci de votre intérêt à devenir sponsor!');
        setFormData({
          companyName: '',
          country: '',
          email: '',
          phone: '',
          website: '',
          contactName: '',
          contactTitle: '',
          sector: '',
          activityType: '',
          activityDescription: '',
          values: '',
          sponsorshipLevel: '',
          budget: '',
          benefits: '',
          contribution: '',
          logo: '',
          standNeeds: '',
          staffNeeds: '',
          communicationNeeds: '',
          marketingGoals: '',
          targetAudience: '',
          successMetrics: '',
        });
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  };

  return (
    <section className="sponsors section bg-sponsors overlay-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>Our <span className="alternate">Sponsors</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="sponsor-title text-center">
              <h5>Platinum Sponsors</h5>
            </div>
            <div className="block text-center">
              <ul className="list-inline sponsors-list">
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/pt-spon-two.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/pt-spon-two.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/pt-spon-three.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/pt-spon-four.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="sponsor-title text-center">
              <h5>Gold Sponsors</h5>
            </div>
            <div className="block text-center">
              <ul className="list-inline sponsors-list">
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/gl-spon-one.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/gl-spon-two.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="image-block text-center">
                    <a href="#">
                      <img src="assets/images/sponsors/gl-spon-three.png" alt="sponsors-logo" className="img-fluid" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h3>Devenir <span className="alternate">Sponsor</span></h3>
                      <p>Si vous souhaitez accompagner l'activité veuillez renseigner le formulaire</p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control main"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Contact Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="contactTitle"
                      value={formData.contactTitle}
                      onChange={handleChange}
                      placeholder="Contact Title"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      placeholder="Sector"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="activityType"
                      value={formData.activityType}
                      onChange={handleChange}
                      placeholder="Activity Type"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="activityDescription"
                      className="form-control main"
                      rows="10"
                      value={formData.activityDescription}
                      onChange={handleChange}
                      placeholder="Activity Description"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="values"
                      className="form-control main"
                      rows="10"
                      value={formData.values}
                      onChange={handleChange}
                      placeholder="Values"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="sponsorshipLevel"
                      value={formData.sponsorshipLevel}
                      onChange={handleChange}
                      placeholder="Sponsorship Level"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control main"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Budget"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="benefits"
                      className="form-control main"
                      rows="10"
                      value={formData.benefits}
                      onChange={handleChange}
                      placeholder="Benefits"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="contribution"
                      className="form-control main"
                      rows="10"
                      value={formData.contribution}
                      onChange={handleChange}
                      placeholder="Contribution"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control main"
                      name="logo"
                      value={formData.logo}
                      onChange={handleChange}
                      placeholder="Logo URL"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="standNeeds"
                      className="form-control main"
                      rows="10"
                      value={formData.standNeeds}
                      onChange={handleChange}
                      placeholder="Stand Needs"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="staffNeeds"
                      className="form-control main"
                      rows="10"
                      value={formData.staffNeeds}
                      onChange={handleChange}
                      placeholder="Staff Needs"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="communicationNeeds"
                      className="form-control main"
                      rows="10"
                      value={formData.communicationNeeds}
                      onChange={handleChange}
                      placeholder="Communication Needs"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="marketingGoals"
                      className="form-control main"
                      rows="10"
                      value={formData.marketingGoals}
                      onChange={handleChange}
                      placeholder="Marketing Goals"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="targetAudience"
                      className="form-control main"
                      rows="10"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      placeholder="Target Audience"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="successMetrics"
                      className="form-control main"
                      rows="10"
                      value={formData.successMetrics}
                      onChange={handleChange}
                      placeholder="Success Metrics"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-main-md">Devenir Sponsor</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
