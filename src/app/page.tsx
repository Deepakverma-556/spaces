import Products from "@/components/Products";
import ProgramOne from "@/components/ProgramOne";
import ProgramTwo from "@/components/ProgramTwo";

async function getData() {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?name=middle",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
  }
  return [];
}

export default async function Home() {
  const heroData = await getData();
  return (
    <>
      <Products heroContent={heroData} />
      <ProgramOne />
      <ProgramTwo/>
    </>
  );
}
