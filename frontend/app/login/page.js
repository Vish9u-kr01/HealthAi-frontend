'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const res = await fetch('https://healthai-backend-3.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });

    const result = await res.json();

    if (res.ok) {
      const { username, email, password } = result.user;
      router.push(`/dashboard?username=${username}&email=${email}&password=${password}`);
    } else {
      alert(result.message || 'Login failed');
    }
  } catch (err) {
    console.error('❌ Login Error:', err);
    alert('Something went wrong!');
  }
};

  return (
    <div className="signup-form">
      <h2 className="text-1xl font-bold gradient-text">Login !</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="gradient-text">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email',
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password" className="gradient-text">Password:</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div>
          <button type="submit" className="gradient-button">Login</button>
        </div>

        <div>
          <p style={{ marginTop: '20px', marginLeft: '20px', color: 'white' }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>

     <style jsx>{`
        .signup-form {
          width: 300px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: black;
          box-sizing: border-box;
        }

        .signup-form h2 {
          text-align: center;
          font-size: 1.5rem;
        }

        .signup-form div {
          margin-bottom: 15px;
          margin-top: 20px;
        }

        .signup-form label {
          display: block;
          margin-bottom: 5px;
        }

        .signup-form input {
          width: 100%;
          padding: 3px;
          border-radius: 4px;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        .error {
          color: red;
          font-size: 12px;
        }

        .gradient-text {
          background: linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1rem;
        }

        .gradient-button {
          width: 100%;
          padding: 10px;
          background: linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }

        .gradient-button:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;




// 'use client';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// const SignupForm = () => {
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const foundUser = users.find(
//       (user) => user.email === data.email && user.password === data.password
//     );

//     if (foundUser) {
//       localStorage.setItem('currentUser', JSON.stringify(foundUser));
//       router.push('/dashboard');
//     } else {
//       alert('Invalid email or password.Please try again.');
//     }
//   };

//   return (
//     <div className="signup-form">
//       <h2 className="text-1xl font-bold gradient-text">Login !</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Email Field */}
//         <div>
//           <label htmlFor="email" className="gradient-text">Email:</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: 'Please enter a valid email',
//               },
//             })}
//           />
//           {errors.email && (
//             <span className="error">{errors.email.message}</span>
//           )}
//         </div>

//         {/* Password Field */}
//         <div>
//           <label htmlFor="password" className="gradient-text">Password:</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password', {
//               required: 'Password is required',
//               pattern: {
//                 value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//                 message:
//                   'Password must be at least 8 characters long, contain at least one letter and one number',
//               },
//             })}
//           />
//           {errors.password && (
//             <span className="error">{errors.password.message}</span>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button type="submit" className="gradient-button">Login</button>
//         </div>

//         {/* Link to Signup */}
//         <div>
//           <p style={{ marginTop: '20px', marginLeft: '20px', color: 'white' }}>
//             Don&apos;t have an account?{' '}
//             <Link href="/signup" style={{ color: '#2563eb', textDecoration: 'none' }}>
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </form>

//       {/* Embedded CSS */}
//       <style jsx>{
//         .signup-form {
//           margin-top: 50px;
//           width: 300px;
//           margin: 0 auto;
//           padding: 20px;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//           background-color: black;
//           box-sizing: border-box;
//         }

//         .signup-form h2 {
//           text-align: center;
//         }

//         .signup-form div {
//           margin-bottom: 15px;
//           margin-top: 20px;
//         }

//         .signup-form label {
//           display: block;
//           margin-bottom: 5px;
//         }

//         .signup-form input {
//           width: 100%;
//           padding: 3px;
//           border-radius: 4px;
//           border: 1px solid #ccc;
//           box-sizing: border-box;
//         }

//         .error {
//           color: red;
//           font-size: 12px;
//         }

//         .gradient-text {
//           background: linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           font-size: 1rem;
//         }

//         .gradient-button {
//           width: 100%;
//           padding: 10px;
//           background: linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6);
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           font-weight: bold;
//         }

//         .gradient-button:hover {
//           opacity: 0.8;
//         }
//       }</style>
//     </div>
//   );
// };

// export default SignupForm;



