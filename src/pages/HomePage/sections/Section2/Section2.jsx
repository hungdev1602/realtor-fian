import Slider from "../../../../components/Slider/Slider"
import Title from "../../../../components/Title/Title"

const Section2 = () => {
  return (
    <div className="mt-[120px]">
      <div className="container mx-auto">
        <Title title="Партнеры" />
      </div>

      <div className="h-[150px] bg-[#A2999E] flex items-center">
        <Slider />
      </div>
    </div>
  )
}

export default Section2