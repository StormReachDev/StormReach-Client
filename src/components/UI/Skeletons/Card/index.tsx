export default function CardSkeleton({ basis = '245px' }: { basis?: string }) {
  return (
    <div
      className={`bg-input border border-stroke rounded-xl p-5 flex-1 basis-[${basis}] max-w-full overflow-hidden animate-pulse space-y-2`}
    >
      <div className="w-12 h-12 bg-stroke rounded" />
      <div className="w-3/4 h-5 bg-stroke rounded" />
      <div className="w-16 h-12 bg-stroke rounded" />
    </div>
  );
}
