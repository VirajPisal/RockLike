import React from "react";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function BrandStrategyIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" strokeDasharray="3 3"/>
      <path d="M12 3V12L18.5 18.5" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2.5" fill={color}/>
    </svg>
  );
}

export function ExperienceDesignIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 8V5C4 4.44772 4.44772 4 5 4H8" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M16 4H19C19.5523 4 20 4.44772 20 5V8" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M20 16V19C20 19.5523 19.5523 20 19 20H16" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M8 20H5C4.44772 20 4 19.5523 4 19V16" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3.5" stroke={color} strokeWidth="1.5"/>
      <path d="M12 9V15M9 12H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function TechEngineeringIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="5" width="14" height="14" rx="2.5" stroke={color} strokeWidth="1.75"/>
      <rect x="9" y="9" width="6" height="6" rx="1" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.25"/>
      <path d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function GrowthMarketingIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 19H21" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M5 15L10 10L14 13L20 6" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 6H20V10" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="6" r="1.5" fill={color}/>
    </svg>
  );
}

export function BrandBuildingIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3.5" stroke={color} strokeWidth="1.75"/>
      <circle cx="12" cy="4" r="1.5" fill={color}/>
      <circle cx="20" cy="12" r="1.5" fill={color}/>
      <circle cx="12" cy="20" r="1.5" fill={color}/>
      <circle cx="4" cy="12" r="1.5" fill={color}/>
      <path d="M12 5.5V8.5M18.5 12H15.5M12 18.5V15.5M5.5 12H8.5" stroke={color} strokeWidth="1.25" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="7.5" stroke={color} strokeWidth="1.25" strokeDasharray="2 3"/>
    </svg>
  );
}

export function VideoProductionIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.75"/>
      <path d="M3 9H21" stroke={color} strokeWidth="1.5"/>
      <path d="M7 5L5 9M12 5L10 9M17 5L15 9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 12L15 14.5L10 17V12Z" fill={color}/>
    </svg>
  );
}

export function EventDesigningIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="12" rx="2" stroke={color} strokeWidth="1.75"/>
      <path d="M12 16V20M8 20H16" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M7 10L10 12L14 8L17 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="8" r="1" fill={color}/>
    </svg>
  );
}

export function FranchiseDevIcon({ className = "", size = 28, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="7" r="3" stroke={color} strokeWidth="1.75"/>
      <path d="M12 10V14" stroke={color} strokeWidth="1.5"/>
      <path d="M5 19C5 16.5 8 14 12 14C16 14 19 16.5 19 19" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="12" cy="7" r="1" fill={color}/>
      <path d="M18 6L21 8L18 10" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
