'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function Page() {
  const router = useRouter();

  const navigateToNestedLogin = (basePath) => {
    // Navigating to a nested login route
    router.push(`${basePath}/nastedLogin`);
  };

  return (
    <>
      <div>Page</div>
      <button 
        className='bg-sky-300 p-2 rounded-md' 
        onClick={() => navigateToNestedLogin("/login")}
      >
        Nested Login
      </button>
    </>
  );
}

export default Page;
