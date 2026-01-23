import { useTheme } from '../../hooks/useTheme';

// Default pins with vintage cartography colors
const defaultPins = [
  { top: '22%', left: '28%', color: null },           // Primary green
  { top: '38%', left: '52%', color: '#10B981' },      // Success/Forest green
  { top: '28%', left: '68%', color: '#D4953A' },      // Brass/Gold
  { top: '55%', left: '35%', color: null },           // Primary green
  { top: '48%', left: '75%', color: '#6B7455' },      // Terrain olive
  { top: '65%', left: '55%', color: '#10B981' },      // Success green
];

export default function MapPreview({ height = '380px', customPins, showStreets = true }) {
  const { isDarkMode } = useTheme();

  const activePins = customPins || defaultPins;

  // Vintage cartography map style - parchment/terrain colors
  const mapStyle = {
    width: '100%',
    height,
    background: isDarkMode
      ? 'linear-gradient(145deg, #292524 0%, #1C1917 50%, #292524 100%)'
      : 'linear-gradient(145deg, #ECEEE3 0%, #F5F5F4 50%, #E7E5E4 100%)',
    borderRadius: '16px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: isDarkMode
      ? '0 8px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
      : '0 8px 24px rgba(28, 25, 23, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
    border: isDarkMode
      ? '1px solid rgba(255, 255, 255, 0.08)'
      : '1px solid rgba(231, 229, 228, 0.8)',
  };

  // Subtle terrain texture overlay
  const terrainOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: isDarkMode
      ? 'radial-gradient(ellipse at 30% 30%, rgba(107, 116, 85, 0.1) 0%, transparent 60%)'
      : 'radial-gradient(ellipse at 30% 30%, rgba(107, 116, 85, 0.08) 0%, transparent 60%)',
    pointerEvents: 'none',
  };

  // Street grid overlay - isometric style
  const streetGridStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: isDarkMode
      ? `
        linear-gradient(90deg, rgba(61, 56, 51, 0.4) 1px, transparent 1px),
        linear-gradient(rgba(61, 56, 51, 0.4) 1px, transparent 1px)
      `
      : `
        linear-gradient(90deg, rgba(231, 229, 228, 0.8) 1px, transparent 1px),
        linear-gradient(rgba(231, 229, 228, 0.8) 1px, transparent 1px)
      `,
    backgroundSize: '48px 48px',
    opacity: showStreets ? 1 : 0,
    pointerEvents: 'none',
  };

  // Diagonal street overlay for depth
  const diagonalStreetStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: isDarkMode
      ? 'linear-gradient(45deg, rgba(61, 56, 51, 0.2) 1px, transparent 1px)'
      : 'linear-gradient(45deg, rgba(231, 229, 228, 0.5) 1px, transparent 1px)',
    backgroundSize: '68px 68px',
    opacity: showStreets ? 0.5 : 0,
    pointerEvents: 'none',
  };

  // Compass indicator in corner
  const compassStyle = {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: isDarkMode
      ? '2px solid rgba(212, 149, 58, 0.4)'
      : '2px solid rgba(143, 95, 35, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    fontWeight: 600,
    color: isDarkMode ? 'rgba(212, 149, 58, 0.6)' : 'rgba(143, 95, 35, 0.5)',
    background: isDarkMode
      ? 'rgba(41, 37, 36, 0.5)'
      : 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(4px)',
  };

  // Pin styling
  const pinStyle = (pin) => ({
    position: 'absolute',
    top: pin.top,
    left: pin.left,
    width: '28px',
    height: '35px',
    background: pin.color || 'var(--accent-primary)',
    borderRadius: '50% 50% 50% 0',
    transform: 'rotate(-45deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isDarkMode
      ? '0 4px 12px rgba(0, 0, 0, 0.4)'
      : '0 4px 12px rgba(28, 25, 23, 0.2)',
    transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
  });

  const pinDotStyle = {
    width: '10px',
    height: '10px',
    background: 'white',
    borderRadius: '50%',
    transform: 'rotate(45deg)',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
  };

  // Pin shadow on map
  const pinShadowStyle = (pin) => ({
    position: 'absolute',
    top: `calc(${pin.top} + 30px)`,
    left: `calc(${pin.left} + 4px)`,
    width: '20px',
    height: '8px',
    background: 'rgba(28, 25, 23, 0.1)',
    borderRadius: '50%',
    filter: 'blur(3px)',
  });

  return (
    <div style={mapStyle}>
      {/* Terrain texture */}
      <div style={terrainOverlayStyle} />

      {/* Street grid */}
      <div style={streetGridStyle} />
      <div style={diagonalStreetStyle} />

      {/* Pin shadows */}
      {activePins.map((pin, i) => (
        <div key={`shadow-${i}`} style={pinShadowStyle(pin)} />
      ))}

      {/* Pins */}
      {activePins.map((pin, i) => (
        <div key={i} style={pinStyle(pin)}>
          <div style={pinDotStyle} />
        </div>
      ))}

      {/* Compass */}
      <div style={compassStyle}>N</div>
    </div>
  );
}
