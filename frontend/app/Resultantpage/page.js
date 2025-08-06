// 'use client';
// import { useEffect, useState } from 'react';

// const Resultantpage = () => {
//   const [diagnosis, setDiagnosis] = useState('');

//   useEffect(() => {
//     const stored = localStorage.getItem('diagnosisResult');
//     if (stored) setDiagnosis(stored);
//   }, []);

//   const handleDownload = () => {
//     if (!diagnosis) return;

//     const blob = new Blob(
//       [`🧠 AI Disease Prediction Report\n\nDiagnosis:\n${diagnosis}`],
//       { type: 'text/plain' }
//     );

//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'disease_report.txt';
//     link.click();
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">🧠 AI Diagnosis Result</h1>

//       {!diagnosis ? (
//         <p>Loading or no result found.</p>
//       ) : (
//         <div className="bg-black text-white p-4 border border-gray-300 rounded shadow space-y-4">
//           <p><strong>Predicted Disease:</strong> {diagnosis}</p>

//           <button
//             onClick={handleDownload}
//             className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             📄 Download Report
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Resultantpage;


'use client';
import { useEffect, useState } from 'react';

const Resultantpage = () => {
  const [diagnosisData, setDiagnosisData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('diagnosisResult');
    if (stored) setDiagnosisData(JSON.parse(stored));
  }, []);

  const handleDownload = () => {
    if (!diagnosisData) return;

    const { patientInfo, disease } = diagnosisData;
    const lines = [];

    lines.push('🧠 AI Medical Diagnosis Report\n');
    lines.push('👤 Patient Details:');
    lines.push(`Name: ${patientInfo.name}`);
    lines.push(`Age: ${patientInfo.age}`);
    lines.push(`Gender: ${patientInfo.gender}`);
    lines.push(`Location: ${patientInfo.location}`);
    lines.push(`Duration: ${patientInfo.duration}`);
    lines.push(`Severity: ${patientInfo.severity}`);
    lines.push(`Temperature: ${patientInfo.temperature}`);
    lines.push(`Symptoms: ${patientInfo.symptoms}`);
    lines.push('\n🧬 Diagnosis:');
    lines.push(`Predicted Disease: ${disease}`);
    lines.push('\n💊 Suggested Medication:');
    lines.push(`(This is a placeholder. Please consult a medical professional.)`);

    const content = lines.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'medical_diagnosis_report.txt';
    link.click();
  };

  if (!diagnosisData) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <p>Loading diagnosis...</p>
      </div>
    );
  }

  const { patientInfo, disease } = diagnosisData;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🧠 AI Diagnosis Result</h1>

      <div className="bg-black text-white p-4 border border-gray-300 rounded shadow space-y-4">
        <p><strong>Name:</strong> {patientInfo.name}</p>
        <p><strong>Age:</strong> {patientInfo.age}</p>
        <p><strong>Gender:</strong> {patientInfo.gender}</p>
        <p><strong>Location:</strong> {patientInfo.location}</p>
        <p><strong>Duration:</strong> {patientInfo.duration}</p>
        <p><strong>Severity:</strong> {patientInfo.severity}</p>
        <p><strong>Temperature:</strong> {patientInfo.temperature}</p>
        <p><strong>Symptoms:</strong> {patientInfo.symptoms}</p>
        <p><strong>Predicted Disease:</strong> {disease}</p>
        <p><strong>Suggested Medication:</strong> <i>Please consult a doctor.</i></p>

        <button
          onClick={handleDownload}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📄 Download Report
        </button>
      </div>
    </div>
  );
};

export default Resultantpage;



