import React from "react";

function AnimatedCircle({ countryCode }) {
  if (!countryCode) return null;

  const normalizedCode = countryCode.toLowerCase();

  const countryElement = document.getElementById(normalizedCode);
  if (!countryElement) {
    console.error(`Country element not found for ID: ${normalizedCode}`);
    return null;
  }

  const bbox = countryElement.getBBox();
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;

  return <circle cx={centerX} cy={centerY} r="100" className="reveal-circle" />;
}

export default AnimatedCircle;
