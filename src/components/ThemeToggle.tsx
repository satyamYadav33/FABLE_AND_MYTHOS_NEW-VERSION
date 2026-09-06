import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  showLabels = false 
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="clay-theme-toggle-btn"
      onClick={toggleTheme}
      type="button"
      className={`relative flex items-center p-1.5 rounded-full clay-toggle-track transition-all duration-300 focus:outline-none ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Light Icon */}
      <div 
        className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 z-10 ${
          !isDark ? 'text-amber-500 font-bold' : 'text-gray-400 opacity-60'
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </div>

      {/* Dark Icon */}
      <div 
        className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 z-10 ${
          isDark ? 'text-indigo-400 font-bold' : 'text-gray-400 opacity-60'
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </div>

      {/* Sliding Tactile Clay Pill Thumb */}
      <div
        className={`absolute top-1 bottom-1 w-6 h-6 rounded-full clay-toggle-thumb transition-all duration-300 ease-out transform ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      />

      {showLabels && (
        <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[var(--clay-text-secondary)] pr-1">
          {isDark ? 'Dark Clay' : 'Light Clay'}
        </span>
      )}
    </button>
  );
};
