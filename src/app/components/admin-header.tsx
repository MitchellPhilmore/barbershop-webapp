import Link from 'next/link';

interface AdminHeaderProps {
  onSignOut: () => void;
  isAuthenticated: boolean;
}

export function AdminHeader({ onSignOut, isAuthenticated }: AdminHeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <nav className="flex items-center">
          {isAuthenticated && (
            <>
              <Link href="/dashboard" className="mr-4 hover:text-gray-300">Dashboard</Link>
              <Link href="/" className="mr-4 hover:text-gray-300">Main Site</Link>
              <button
                onClick={onSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}