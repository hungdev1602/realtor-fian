import Section1 from "../sections/Section1/Section1"
import Section2 from "../sections/Section2/Section2"

const HomePage = () => {
  
  return (
    <>
      <div className="mt-[100px] container mx-auto">
        <Section1 />
      </div>
      <Section2 />
    </>
  )
}

export default HomePage