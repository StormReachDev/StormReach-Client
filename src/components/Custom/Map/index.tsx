// Imports:
import { useMap } from '@vis.gl/react-google-maps';
import { useRef } from 'react';

export default function Map() {
  const map = useMap();
  const drawingManagerRef = useRef();

  return <p>this is a map</p>;
}
