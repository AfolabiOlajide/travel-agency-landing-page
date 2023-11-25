import BookNextTrip from "@/modules/BookNextTrip";
import Category from "@/modules/Category";
import Destinations from "@/modules/Destinations";
import Footer from "@/modules/Footer";
import Hero from "@/modules/Hero";
import Nav from "@/modules/Nav";
import Sponsors from "@/modules/Sponsors";
import Subscribe from "@/modules/Subscribe";
import Testimonials from "@/modules/Testimonials";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Category />
      <Destinations />
      <BookNextTrip />
      <Testimonials />
      <Sponsors />
      <Subscribe />
      <Footer />
    </main>
  )
}
