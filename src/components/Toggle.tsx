import React from 'react';

interface ToggleProps {
  isToggled: boolean;
  onToggle: () => void;
  id?: string;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  isToggled,
  onToggle,
  id,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-xs ${className}`}>
      <button
        id={id}
        type="button"
        onClick={onToggle}
        className={`
          relative inline-flex items-center h-[38px] w-[54px] shrink-0 cursor-pointer rounded-2xs 
          border-2 border-transparent transition-colors duration-200 ease-in-out 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-700
          ${isToggled 
            ? 'bg-positive-700 hover:bg-positive-800'
            : 'bg-destructive-700 hover:bg-destructive-800' 
          }
        `}
        aria-pressed={isToggled}
      >
        <span
            className={`
                pointer-events-none inline-flex justify-center h-[30px] w-[30px] rounded-3xs 
                bg-primary-000 transition duration-200 ease-in-out [box-shadow:inset_0px_-6px_0px_#EEEBE7,0_2px_4px_rgba(0,0,0,0.1)]
                ${isToggled ? 'translate-x-[18px]' : 'translate-x-[2px]'}
            `}
        >
            <span 
                className={`
                button-md
                duration-200
                ${isToggled 
                    ? 'text-positive-700 hover:text-positive-800' // Green text when toggled ON
                    : 'text-destructive-700 hover:text-destructive-800'  // Red text when toggled OFF
                }
                `}
            >
            {isToggled ? 'Y' : 'N'}
            </span>
        </span>
       
      </button>
    </div>
  );
};

export default Toggle;

