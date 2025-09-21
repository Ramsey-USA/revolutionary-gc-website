'use client';

import React from 'react';

interface UniversalHeroSectionProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

const UniversalHeroSection: React.FC<UniversalHeroSectionProps> = ({
  title,
  titleHighlight,
  subtitle,
  primaryButton,
  secondaryButton,
  className = ""
}) => {
  const handleButtonClick = (button: { href?: string; onClick?: () => void }) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      window.location.href = button.href;
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-mh-hunter-green to-mh-leather-tan overflow-hidden pt-24 ${className}`}>
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 text-mh-leather-tan text-2xl animate-pulse">★</div>
        <div className="absolute top-1/3 right-1/3 text-white/30 text-xl animate-pulse delay-300">★</div>
        <div className="absolute bottom-1/4 right-1/4 text-mh-leather-tan text-3xl animate-pulse delay-500">★</div>
        <div className="absolute top-1/2 left-1/6 text-white/20 text-2xl animate-pulse delay-700">★</div>
        <div className="absolute bottom-1/3 left-1/3 text-mh-leather-tan text-xl animate-pulse delay-1000">★</div>
        <div className="absolute top-1/6 right-1/6 text-white/40 text-2xl animate-pulse delay-200">★</div>
        <div className="absolute bottom-1/6 right-1/2 text-mh-leather-tan text-2xl animate-pulse delay-800">★</div>
        <div className="absolute top-3/4 left-1/8 text-white/25 text-xl animate-pulse delay-600">★</div>
        <div className="absolute top-1/8 left-1/2 text-mh-leather-tan text-xl animate-pulse delay-400">★</div>
        <div className="absolute bottom-1/8 left-3/4 text-white/35 text-3xl animate-pulse delay-900">★</div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {title}
            {titleHighlight && (
              <span className="text-mh-leather-tan block mt-4">{titleHighlight}</span>
            )}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {primaryButton && (
                <button 
                  onClick={() => handleButtonClick(primaryButton)}
                  className="btn btn-primary"
                >
                  {primaryButton.text}
                </button>
              )}
              {secondaryButton && (
                <button 
                  onClick={() => handleButtonClick(secondaryButton)}
                  className="btn btn-outline"
                >
                  {secondaryButton.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversalHeroSection;