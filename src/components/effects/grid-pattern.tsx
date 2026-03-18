export function GridPattern() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='1' fill='rgba(255,255,255,0.02)'/%3E%3C/svg%3E")`,
        backgroundSize: "32px 32px",
      }}
    />
  );
}
