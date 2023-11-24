import { fetchAllCoins } from "@/lib/functions";
import ClientSideCryptoPage from "@/components/client-side-crypto-page";

export default async function Page() {
  const coins = await fetchAllCoins();

  return <ClientSideCryptoPage coins={coins} />;
}
