export default function FlowIndicator({
  parent,
  child,
}: {
  parent: string;
  child: string;
}) {
  return (
    <div className="flex items-center gap-[13px] w-full justify-start">
      <h1 className="text-neutral-600 text-xl font-medium">{parent}</h1>
      <div className="w-2 h-2 rounded-full bg-red-200 border border-red-600 aspect-square opacity-40"></div>
      <h2 className="text-neutral-600 text-xl font-medium">{child}</h2>
    </div>
  );
}
