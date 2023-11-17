type CourseCard = {
  imgSrc: string;
  name: string;
  description: string;
};

function CourseCard(cardInfo: CourseCard) {
  return (
    <>
      <div className="w-[350px] h-[110px] bg-gray-200 rounded-lg flex justify-evenly items-center cursor-pointer hover:bg-gray-300">
        <img
          src={cardInfo.imgSrc}
          alt="course icon"
          className="h-[90px] w-[90px] rounded-sm"
        />
        <div className="flex flex-col justify-start w-[60%] h-[90px]">
          <div className="font-medium text-lg">{cardInfo.name}</div>
          <div className="font-thin">{cardInfo.description}</div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
