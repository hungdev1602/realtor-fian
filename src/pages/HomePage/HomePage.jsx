import FormEmail from "../../components/FormEmail/FormEmail"
import Section1 from "./sections/Section1/Section1"
import Section2 from "./sections/Section2/Section2"
import Section3 from "./sections/Section3/Section3"
import Section4 from "./sections/Section4/Section4"
import Section5 from "./sections/Section5/Section5"
import Section6 from "./sections/Section6/Section6"

const HomePage = () => {
  
  return (
    <>
      <div className="mt-[40px] sm:mt-[60px] lg:mt-[100px] container mx-auto">
        <Section1 />
      </div>
      <Section2 />
      <div className="container mx-auto">
        <Section3 />
      </div>
      <Section4 />
      <div className="container mx-auto">
        <Section5 />
        <Section6 />
        <FormEmail />
      </div>
      
    </>
  )
}

export default HomePage