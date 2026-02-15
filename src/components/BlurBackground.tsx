type BlurBackgroundProps = {
  readonly backgroundColor: string;
  readonly opacity?: number;
};

function toRGBA(color: string, alpha: number): string {
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = Math.round(alpha * 255).toString(16).padStart(2, '0');
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function BlurBackground({
  backgroundColor,
  opacity = 0.15,
}: BlurBackgroundProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: toRGBA(backgroundColor, opacity),
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    />
  );
}
