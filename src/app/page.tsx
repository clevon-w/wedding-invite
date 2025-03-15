'use client';
import {useState} from 'react';
import Toggle from '../components/Toggle';
import Link from '../components/Link';

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md p-4">
        <p className="body-xs">Hello</p>

        <div className="mt-md">
          <Toggle 
            isToggled={isToggled} 
            onToggle={handleToggle} 
          />
          
          <p className="mt-sm text-sm">
            Current state: <span className="font-medium">{isToggled ? 'On' : 'Off'}</span>
          </p>
        </div>

        <div className="mt-xl space-y-md">
          <Link href="https://www.google.com" variant="primary">Primary</Link>
          <Link href="https://www.google.com" variant="secondary">Secondary</Link>
        </div>

      </div>
    </div>
  );
}
