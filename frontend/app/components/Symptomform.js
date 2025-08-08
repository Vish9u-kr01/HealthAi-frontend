'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SymptomForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    primarySymptom: '',
    additionalSymptoms: '',
    onsetDate: '',
    duration: '',
    severity: '',
    trigger: '',
    experiencedBefore: '',
    onsetType: '',
    fever: '',
    temperature: '',
    painScale: 0,
    affectedArea: '',
    chronicConditions: '',
    medications: '',
    allergies: '',
    travel: '',
    contactWithSick: '',
    hospitalVisit: '',
    sleepQuality: '',
    stressLevel: '',
    dietChange: '',
    substanceUse: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' || name === 'painScale' ? parseInt(value) : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    localStorage.setItem('symptomFormData', JSON.stringify(formData));

    const response = await fetch('/api/diagnose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.disease) {
      alert('Diagnosis failed. Please try again.');
      return;
    }

    localStorage.setItem('diagnosisResult', JSON.stringify(result));
    router.push('/Resultantpage');
  } catch (error) {
    console.error('Diagnosis error:', error);
    alert('Something went wrong.');
  }
};




  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-black border border-white rounded-2xl shadow md space-y-6">
      <h2 className="text-2xl font-bold text-center text-white">🩺 Symptom Intake Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input bg-black text-white" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input className="input bg-black text-white" name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <select className="input bg-black text-white" name="gender" onChange={handleChange} required>
          <option value="" >Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
          <option>Prefer not to say</option>
        </select>
        <input className="input bg-black text-white" name="location" placeholder="Location (optional)" onChange={handleChange} />
      </div>

      <textarea className="input bg-black text-white" name="primarySymptom" placeholder="Primary Symptom" onChange={handleChange} required />
      <textarea className="input bg-black text-white" name="additionalSymptoms" placeholder="Additional Symptoms (comma separated)" onChange={handleChange}  required/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input className="input bg-black text-white" type="date" placeholder="Date" name="onsetDate" onChange={handleChange} />
        <input className="input bg-black text-white" name="duration" placeholder="Duration (e.g., 3 days)" onChange={handleChange} />
        <select className="input bg-black text-white" name="severity" onChange={handleChange} required>
          <option value="">Severity</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>
      </div>

      <textarea className="input w-70 bg-black text-white" name="trigger" placeholder="Any known triggers(like foods,lack of sleep or stress,allergens etc)" onChange={handleChange} />
      <select className="input bg-black text-white" name="experiencedBefore" onChange={handleChange}>
        <option value="">Experienced before?</option>
        <option>Yes</option>
        <option>No</option>
      </select>
      <select className="input bg-black text-white" name="onsetType" onChange={handleChange}>
        <option value="">Onset Type</option>
        <option>Sudden</option>
        <option>Gradual</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="input bg-black text-white" name="fever" onChange={handleChange}>
          <option value="" required>Do you have a fever?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input className="input bg-black text-white" name="temperature" placeholder="Temperature (if known)" onChange={handleChange} required />
      </div>

      <label className="block font-medium mt-2 bg-black text-white">Pain Scale (0-10): {formData.painScale}</label>
      <input type="range" name="painScale" min="0" max="10" value={formData.painScale} onChange={handleChange} className="w-full bg-black text-white" />

      <input className="input bg-black text-white" name="affectedArea" placeholder="Affected Body Area(s)" onChange={handleChange} />

      <textarea className="input w-70 bg-black text-white" name="chronicConditions" placeholder="Chronic Conditions (like asthma,diabetes,heart disease etc)" onChange={handleChange} />
      <textarea className="input bg-black text-white" name="medications" placeholder="Current Medications (if any)" onChange={handleChange} />
      <textarea className="input bg-black text-white" name="allergies" placeholder="Allergies (if any)" onChange={handleChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="input bg-black text-white" name="travel" onChange={handleChange}>
          <option value="">Recent Travel?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select className="input bg-black text-white" name="contactWithSick" onChange={handleChange}>
          <option value="">Contact with Sick Individuals?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select className="input bg-black text-white" name="hospitalVisit" onChange={handleChange}>
          <option value="">Recent Hospital Visit?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="input bg-black text-white" name="sleepQuality" onChange={handleChange}>
          <option value="">Sleep Quality</option>
          <option>Good</option>
          <option>Fair</option>
          <option>Poor</option>
        </select>
        <select className="input bg-black text-white" name="stressLevel" onChange={handleChange}>
          <option value="">Stress Level</option>
          <option>Low</option>
          <option>Moderate</option>
          <option>High</option>
        </select>
        <textarea className="input bg-black text-white" name="dietChange" placeholder="Recent Diet Changes" onChange={handleChange} />
      </div>

      <textarea className="input bg-black text-white" name="substanceUse" placeholder="Substance Use (e.g., alcohol, smoking)" onChange={handleChange} />

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
        Submit
      </button>
    </form>
  );
};

export default SymptomForm;




