import { useEffect, useState } from "react";

import { CourseCard } from "../components/index";

const imagesURL = "http://localhost:8000/images/";

type CoursesData = {
  id: string;
  imageName: string;
  name: string;
  description: string;
  isActive: boolean;
}[];

function Courses() {
  const [coursesData, setCoursesData] = useState<CoursesData>();

  const getData = () => {
    fetch("http://localhost:8000/courses/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCoursesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="text-3xl text-center my-3">
        Curses that are currently available
      </h2>

      <div className="grid grid-cols-4 gap-y-10 py-3 justify-items-center">
        {coursesData === undefined ? (
          <div>No courses are currently available</div>
        ) : (
          coursesData.map(
            (item) =>
              item.isActive && (
                <CourseCard
                  key={item.id}
                  imgSrc={imagesURL + item.imageName}
                  name={item.name}
                  description={item.description}
                />
              )
          )
        )}
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Courses;
