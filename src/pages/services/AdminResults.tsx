import { useEffect } from "react";

export default function AdminResults() {
  useEffect(() => {
    window.location.href = "https://snug-settings.lovable.app";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Redirecting to Admin Dashboard...</p>
    </div>
  );
}
