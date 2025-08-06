'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SymptomForm from '../components/Symptomform';

const DashboardClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const username = searchParams.get('username');
    const email = searchParams.get('email');
    // const password = searchParams.get('password');

 if (username && email) {
  setCurrentUser({ username, email });

    } else {
      router.push('/');
    }
  }, [router, searchParams]);

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="dashboard-container ">
      {currentUser && (
        <>
          <div className="dashboard-box bg-gradient-to-r from-[#4729FF] via-[#A042FF] to-[#FF4FB6]">
            <h1>Welcome, {currentUser.username}</h1>
            <p>Username: {currentUser.username}</p>
            <p>Email: {currentUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="form-wrapper">
            <SymptomForm />
          </div>
        </>
      )}

      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: black;
          padding: 10px;
          box-sizing: border-box;
        }

        .dashboard-box {
           
          margin-bottom: 20px;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: black;
          box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 100%;
          max-width: 100%;
        }

        .dashboard-box h1 {
          margin-bottom: 0.2rem;
          font-size: 1rem;
          color: #2563eb;
        }

        .dashboard-box p {
          font-size: 0.8rem;
          color: white;
          margin-bottom: 0.2rem;
        }

        .dashboard-box button {
          padding: 4px 8px;
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .dashboard-box button:hover {
          background-color: #121cea;
        }

        .form-wrapper {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default DashboardClient;
