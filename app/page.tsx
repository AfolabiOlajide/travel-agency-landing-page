import Hero from "@/modules/Hero";
import Nav from "@/modules/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="">
        <h1 className="text-[3rem] font-bold">Hello Travel</h1>
      </main>
    </>
  )
}
