"use client";
export function StaticMap() {
  const mapUrl =
    "https://maps.wikimedia.org/img/osm-intl,16,-23.5263,-46.5283,600x300.png";

  return (
    <img
      src={mapUrl}
      alt="Mapa da localização"
      className="w-full rounded-lg border"
    />
  );
}
