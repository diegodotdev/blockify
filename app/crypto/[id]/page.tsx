import { fetchCoin } from "@/lib/functions";

export default async function Page({ params }: { params: { id: string } }) {
  const coin = await fetchCoin(params?.id);

  return <div>Page</div>;
}
