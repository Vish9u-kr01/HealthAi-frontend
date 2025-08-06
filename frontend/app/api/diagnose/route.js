// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     const { primarySymptom, additionalSymptoms } = await req.json();

//     const symptomsList = [primarySymptom, ...(additionalSymptoms ? additionalSymptoms.split(',') : [])];
//     const symptoms = symptomsList.map(s => s.trim()).join(', ');

//     const response = await fetch('https://human-disease-detector.p.rapidapi.com/human_disease/predict', {
//       method: 'POST',
//       headers: {
//         'x-rapidapi-key': '6f562366b0msh15ce51b29c0c171p1be393jsn81d12f13cb4f',
//         'x-rapidapi-host': 'human-disease-detector.p.rapidapi.com',
//         'Content-Type': 'application/json',
//         'x-token': 'Makshad Nai Bhoolna @ 2025'
//       },
//       body: JSON.stringify({ symptoms })
//     });

//     const result = await response.text(); // API returns plain text
//     return NextResponse.json({ diagnosis: result });

//   } catch (error) {
//     console.error('[Server ERROR]', error.stack || error.message || error);
//     return NextResponse.json({ error: 'Diagnosis failed' }, { status: 500 });
//   }
// }

// export const dynamic = 'force-dynamic';


import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.json();

    const {
      name, age, gender, location,duration, severity, temperature,
      primarySymptom, additionalSymptoms
    } = formData;

    const symptomsList = [primarySymptom, ...(additionalSymptoms ? additionalSymptoms.split(',') : [])];
    const symptoms = symptomsList.map(s => s.trim()).join(', ');

    const response = await fetch('https://human-disease-detector.p.rapidapi.com/human_disease/predict', {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '6f562366b0msh15ce51b29c0c171p1be393jsn81d12f13cb4f',
        'x-rapidapi-host': 'human-disease-detector.p.rapidapi.com',
        'Content-Type': 'application/json',
        'x-token': 'Makshad Nai Bhoolna @ 2025'
      },
      body: JSON.stringify({ symptoms })
    });

    const predictedDisease = await response.text();

    return NextResponse.json({
      disease: predictedDisease,
      patientInfo: {
        name,
        age,
        gender,
        location,
        duration,
        severity,
        temperature,
        symptoms,
      }
    });

  } catch (error) {
    console.error('[Server ERROR]', error.stack || error.message || error);
    return NextResponse.json({ error: 'Diagnosis failed' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';




