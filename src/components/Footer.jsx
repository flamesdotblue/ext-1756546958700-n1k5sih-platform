export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-white">Matrix</span>
            <span className="text-sm text-gray-400">for Developers</span>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Matrix Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
