import Products from "@/components/Products";
import ProgramOne from "@/components/ProgramOne";
import ProgramTwo from "@/components/ProgramTwo";
import { Suspense } from "react";

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
  } catch (error) {}
  return [];
}

export default async function Home() {
  const heroData = await getData();
  return (
    <>
      <Suspense>
        <Products heroContent={heroData} />
        <ProgramOne />
        <ProgramTwo />
      </Suspense>
    </>
  );
}
