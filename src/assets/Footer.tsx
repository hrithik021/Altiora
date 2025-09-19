import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto px-8 py-6 border-t border-white/10 text-sm text-gray-500 flex justify-between bg-black">
      <p>© {new Date().getFullYear()} Altiora. All rights reserved.</p>
      <div className="flex gap-4">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
