import { db } from "@/lib/prisma";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["TAKEAWAY", "DINE_IN"].includes(consumptionMethod);
};
const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  return (
    <div>
      <h1>
        {slug} {consumptionMethod}
      </h1>
    </div>
  );
};

export default RestaurantMenuPage;
