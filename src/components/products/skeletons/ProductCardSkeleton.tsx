export default function ProductCardSkeleton() {
  return (
    <div className="rounded-box p-4 bg-base-200 border border-base-300 animate-pulse">
      <div className="w-full aspect-square bg-base-300 rounded-field"></div>
      <div className="mt-4 h-4 bg-base-300 rounded-full w-3/4"></div>
      <div className="mt-2 h-3 bg-base-300 rounded-full w-1/2"></div>
      <div className="mt-4 flex justify-between items-center">
        <div className="h-4 bg-base-300 rounded-full w-16"></div>
        <div className="h-6 bg-base-300 rounded-field w-24"></div>
      </div>
    </div>
  );
}
