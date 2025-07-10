import React from 'react'
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="flex items-center w-full justify-center h-screen">
      <SignIn/>
    </main>
    );
};

 
export default SignInPage; 
