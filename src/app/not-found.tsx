import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5">
      <div className="text-center">
        <h1 className="text-display-xl font-bold gradient-text">404</h1>
        <p className="text-body-lg text-text-secondary mt-4">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="btn-gradient inline-block px-6 py-3 rounded-lg mt-8 text-base font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
