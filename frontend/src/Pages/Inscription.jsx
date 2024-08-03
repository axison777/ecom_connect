import React, { useState } from 'react';
import axios from 'axios';


const Inscription = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    website: '',
    sector: '',
    companyType: '',
    activityDescription: '',
    ecomExperience: '',
    participationGoals: '',
    participationMotivation: '',
    contributionPotential: '',
    projectPresentation: '',
    recommendationLetter: null,
    lodgingNeeds: '',
    dietaryNeeds: '',
    accessibilityNeeds: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios.post('http://localhost:5000/api/participants/register', data)
      .then(response => {
        alert('Inscription réussie!');
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  };

  return (
    <section className="section contact-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3>Remplissez le <span className="alternate">Formulaire</span></h3>
              <p>Veuillez bien suivre les indications pour remplir le formulaire</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-3">
            <label>Nom:</label> <span></span>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Prénom:</label> <span></span>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Titre et Fonction:</label><span></span>
            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
          </div>
          <div className="col-md-3"><span></span>
            <label>Nom de l'entreprise/organisation:</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Pays de résidence:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Adresse e-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Numéro de téléphone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Site web (optionnel):</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <label>Secteur d'activité:</label>
            <input type="text" name="sector" value={formData.sector} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Type d'activité:</label>
            <input type="text" name="companyType" value={formData.companyType} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Description de l'activité et des produits/services proposés:</label>
            <textarea name="activityDescription" value={formData.activityDescription} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Expérience dans le domaine du e-commerce:</label>
            <textarea name="ecomExperience" value={formData.ecomExperience} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Attentes et objectifs de la participation à E-commerce Connect:</label>
            <textarea name="participationGoals" value={formData.participationGoals} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Motivation pour participer à E-commerce Connect:</label>
            <textarea name="participationMotivation" value={formData.participationMotivation} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Contribution potentielle aux réflexions et au développement de solutions:</label>
            <textarea name="contributionPotential" value={formData.contributionPotential} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Présentation d'un projet ou d'une initiative en lien avec le e-commerce (optionnel):</label>
            <textarea name="projectPresentation" value={formData.projectPresentation} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <label>Lettre de recommandation (optionnel):</label>
            <input type="file" name="recommendationLetter" onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <label>Besoins en matière d'hébergement et de transport:</label>
            <textarea name="lodgingNeeds" value={formData.lodgingNeeds} onChange={handleChange} required />
          </div>
          <div className="col-md-3">
            <label>Régime alimentaire (optionnel):</label>
            <textarea name="dietaryNeeds" value={formData.dietaryNeeds} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <label>Besoins spécifiques en accessibilité (optionnel):</label>
            <textarea name="accessibilityNeeds" value={formData.accessibilityNeeds} onChange={handleChange} />
          </div>
          <div className="col-12 text-center">
            <button type="submit">Soumettre</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Inscription;
