export default function TableSkeleton({ length = 3 }: { length?: number }) {
  return (
    <div className="overflow-x-auto w-full border border-stroke rounded-xl bg-input">
      <table className="w-full table-auto border-collapse text-left text-ellipsis text-neutral-800">
        <thead>
          <tr>
            <th className="p-3 font-semibold text-xl whitespace-nowrap">
              <div className="h-6 w-[120px] bg-stroke rounded animate-pulse"></div>
            </th>
            <th className="p-3 font-semibold text-xl whitespace-nowrap">
              <div className="h-6 w-[120px] bg-stroke rounded animate-pulse"></div>
            </th>
            <th className="p-3 font-semibold text-xl whitespace-nowrap">
              <div className="h-6 w-[120px] bg-stroke rounded animate-pulse"></div>
            </th>
            <th className="p-3 font-semibold text-xl whitespace-nowrap">
              <div className="h-6 w-[120px] bg-stroke rounded animate-pulse"></div>
            </th>
            <th className="p-3 font-semibold text-xl whitespace-nowrap">
              <div className="h-6 w-[120px] bg-stroke rounded animate-pulse"></div>
            </th>
            <th className="p-3 font-semibold text-xl whitespace-nowrap">
              <div className="h-6 w-[120px] bg-stroke rounded animate-pulse"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length }).map((_, index) => (
            <tr key={index} className="border-t border-stroke">
              <td className="px-3 py-2 whitespace-nowrap text-lg font-medium">
                <div className="h-6 w-20 bg-stroke rounded animate-pulse"></div>
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-lg font-medium">
                <div className="h-6 w-28 bg-stroke rounded animate-pulse"></div>
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-lg font-medium">
                <div className="h-6 w-16 bg-stroke rounded animate-pulse"></div>
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-lg font-medium">
                <div className="h-6 w-12 bg-stroke rounded animate-pulse"></div>
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-lg font-medium">
                <div className="h-6 w-28 bg-stroke rounded animate-pulse"></div>
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-lg font-medium">
                <div className="flex items-center justify-between">
                  <div className="size-8 bg-stroke rounded animate-pulse"></div>
                  <div className="size-8 bg-stroke rounded animate-pulse"></div>
                  <div className="size-8 bg-stroke rounded animate-pulse"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
