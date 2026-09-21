export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] w-full max-w-[460px] flex-col items-center justify-center bg-white px-8 text-center shadow-invitation">
      <p className="font-serif text-6xl font-light tracking-[0.2em] text-olive">
        404
      </p>
      <div aria-hidden="true" className="my-6 h-px w-16 bg-sage/50" />
      <p className="font-serif text-base italic text-stone">Էջը չի գտնվել</p>
      <p className="mt-2 font-sans text-[10px] uppercase tracking-widest2 text-stone/70">
        Page not found
      </p>
    </main>
  );
}
