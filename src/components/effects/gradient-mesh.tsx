"use client";

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary teal orb - top right */}
      <div
        className="absolute w-full h-full pointer-events-none animate-mesh-drift"
        style={{
          background:
            "radial-gradient(600px circle at 70% 20%, rgba(0,212,170,0.07), transparent 70%)",
        }}
      />
      {/* Secondary blue orb - bottom left */}
      <div
        className="absolute w-full h-full pointer-events-none animate-mesh-drift-2"
        style={{
          background:
            "radial-gradient(500px circle at 25% 75%, rgba(14,165,233,0.05), transparent 70%)",
        }}
      />
      {/* Tertiary teal orb - center right */}
      <div
        className="absolute w-full h-full pointer-events-none animate-mesh-drift-3"
        style={{
          background:
            "radial-gradient(400px circle at 65% 55%, rgba(0,212,170,0.04), transparent 70%)",
        }}
      />
    </div>
  );
}
