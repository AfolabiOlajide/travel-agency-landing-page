import Category from "@/modules/Category";
import Destinations from "@/modules/Destinations";
import Hero from "@/modules/Hero";
import Nav from "@/modules/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Category />
      <Destinations />
      <main className="">
        <h1 className="text-[3rem] font-bold">Hello Travel</h1>
      </main>
    </>
  )
}
