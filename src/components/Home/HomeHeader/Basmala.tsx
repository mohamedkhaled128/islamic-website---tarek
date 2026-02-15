import BasmalaSVG from '../../SVGs/Basmala';

const CREAM = '#f8f4ed';

export default function Basmala() {
  return (
    <BasmalaSVG
      color={CREAM}
      style={{
        height: 'auto',
        maxWidth: '100%',
        display: 'block',
        width: 'min(420px, 90vw)',
        margin: '0 auto',
      }}
    />
  );
}
