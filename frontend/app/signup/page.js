'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const SignupForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://healthai-backend-3.onrender.com/signup', data);
      alert('Signup successful');
      router.push('/login');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Email might already be registered.');
    }
  };

  return (
    <div className="signup-form">
      <h2 className="text-1xl font-bold gradient-text">Signup !</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label className="gradient-text">Name:</label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div>
          <label className="gradient-text">Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        {/* Password */}
        <div>
          <label className="gradient-text">Password:</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'Minimum 8 characters with letters and numbers',
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="gradient-button">Signup</button>

        <p style={{ marginTop: '20px', color: 'white' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#2563eb' }}>
            Login
          </Link>
        </p>
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

export default SignupForm;




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
//     watch,
//   } = useForm();

//   const onSubmit = (data) => {
//     const newUser = {
//       username: data.username,
//       email: data.email,
//       password: data.password,
//     };

//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     alert('Signed Up successfully');
//     router.push('/login');
//     console.log(data);
//   };

//   const password = watch('password');

//   return (
//     <div className="signup-form">
//       <h2 className=" text-1xl font-bold gradient-text">Signup</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Username Field */}
//         <div>
//           <label htmlFor="username" className="gradient-text">Username:</label>
//           <input
//             id="username"
//             type="text"
//             {...register('username', { required: 'Username is required' })}
//           />
//           {errors.username && <span className="error">{errors.username.message}</span>}
//         </div>

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
//           {errors.email && <span className="error">{errors.email.message}</span>}
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
//                 message: 'Password must be at least 8 characters long, contain at least one letter and one number',
//               },
//             })}
//           />
//           {errors.password && <span className="error">{errors.password.message}</span>}
//         </div>

//         {/* Confirm Password Field */}
//         <div>
//           <label htmlFor="confirmPassword" className="gradient-text">Confirm Password:</label>
//           <input
//             id="confirmPassword"
//             type="password"
//             {...register('confirmPassword', {
//               required: 'Please confirm your password',
//               validate: (value) => value === password || 'Passwords do not match',
//             })}
//           />
//           {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button type="submit" className="gradient-button">Sign Up</button>
//         </div>

//         {/* Login Link */}
//         <div>
//           <p style={{ marginTop: '20px', marginLeft: '20px', color: 'white' }}>
//             Already have an account?{' '}
//             <Link href="/login" style={{ color: '#2563eb', textDecoration: 'none' }}>
//               Login
//             </Link>
//           </p>
//         </div>
//       </form>

//       {/* Embedded CSS */}
//       <style jsx>{
//         .signup-form {
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
//           font-size: 1.5rem;
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

