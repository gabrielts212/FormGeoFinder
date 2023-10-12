
import Form from "@/components/form/form"
import Header from "./../components/header/header"
import Footer from "./../components/footer/footer"
// import Apipage from "./../components/pageapi/pageapi"
import Map from "./../components/map/map"
export default function Home() {
  return (
    <div>
   <Header />
   {/* <Apipage/> */}
    <Map  />
   <Footer />
    </div>
  )
}
