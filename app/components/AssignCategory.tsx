import { User } from "@prisma/client";
import { useFetcher, useLoaderData } from "@remix-run/react";
interface AssignCategoryProps {
  user: User;
}

function AssignCategory({ user }: AssignCategoryProps) {
  const { categories } = useLoaderData();
  let fetcher = useFetcher();
  let id = user.id;
  function handleClick(category: any) {
    fetcher.submit(
      {
        id,
        category,
        action: "change_categories",
      },
      {
        method: "POST",
        action: "/api/user",
      }
    );
  }
  return (
    <div className="w-40 flex gap-2">
      {categories.map((c) => (
        <span
          key={c + "-options"}
          onClick={() => handleClick(c)}
          className={`bg-gray-200 shadow-sm px-2 rounded  cursor-pointer ${
            user?.categories?.includes(c) && "bg-green-200"
          }`}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export default AssignCategory;
