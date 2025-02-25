// app/page.tsx
import Head from "next/head";
import HideoutRequirements from "../components/HideoutRequirements";
import AllModulesComponent from "@/components/AllModulesComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>EFT Hideout Tracker</title>
        <meta name="description" content="Track EFT hideout barter items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-white text-3xl text-center py-6">
          EFT Hideout Tracker
        </h1>
        <AllModulesComponent />
        <HideoutRequirements />
      </main>
    </>
  );
}