import Slider from "../../../../components/Slider/Slider"
import Title from "../../../../components/Title/Title"

const Section2 = () => {
  return (
    <div className="mt-[80px] sm:mt-[120px]">
      <div className="container mx-auto">
        <Title title="Партнеры" />
      </div>

      <div className="h-[70px] sm:h-[120px] lg:h-[150px] bg-[#A2999E] rounded-[10px] sm:rounded-[20px] flex items-center">
        <Slider />
      </div>
    </div>
  )
}

export default Section2