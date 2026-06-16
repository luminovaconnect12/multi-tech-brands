import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center">
      <div className="shell text-center">
        <span className="font-display text-display-xl font-bold text-gradient">404</span>
        <h1 className="mt-4 font-display text-heading font-semibold text-white">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-silver-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn-primary" data-cursor="hover">
            <span>Back home</span>
          </Link>
          <Link href="/contact" className="btn-ghost" data-cursor="hover">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
