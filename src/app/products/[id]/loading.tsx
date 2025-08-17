export default function LoadingProduct() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
        <div className="w-full h-[420px] bg-neutral-200 rounded-md"></div>
        <div>
          <div className="h-6 w-1/2 bg-neutral-200 rounded mb-4"></div>
          <div className="h-4 w-3/4 bg-neutral-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-neutral-200 rounded mb-6"></div>
          <div className="h-10 w-40 bg-neutral-200 rounded"></div>
        </div>
      </div>
    </section>
  );
}
