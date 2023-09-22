import { LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json(
    { status: "ok" },
    {
      status: 200,
    }
  );
};
