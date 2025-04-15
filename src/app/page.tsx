import Products from "@/components/Products";

async function getData() {
  try {
    const response = await fetch(
      " http://universities.hipolabs.com/search?name=middle"
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Page() {
  const products = await getData();
  return (
    <>
      <Products />
    </>
  );
}
