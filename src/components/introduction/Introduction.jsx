import person from "../../assets/images/person.png";
import "./introduction.css";
import { useParams } from "react-router-dom";

import users from "../../users.json"


const Introduction = () => {

  const { slug } = useParams();
  const user = users.find((u) => u.slug === slug);
  if (!user) return <p>User not found</p>;

  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              {user.profile.name}
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            {/* I'm a Freelance <span className="bg-highlight">UI/UX Designer</span>{" "}
            and <span className="bg-highlight"> Developer</span> based in
            London, England. I strives to build immersive and beautiful web
            applications through carefully crafted code and user-centric design. */}
            {user.profile.summary}
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
                href={`mailto:${user.profile.email}`}
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
             {/* <div className="flex flex-col sm:flex-row gap-4 mt-10"> */}
      
      <div className="flex-1 bg-purple-100 py-4 text-center rounded-md">
        <h2 className="text-4xl font-semibold text-gray-800">{user.profile.yearsofexperience} Y.</h2>
        <p className="mt-2 text-gray-600 text-lg">Experience</p>
      </div>

      <div className="flex-1 bg-purple-100 py-4 text-center rounded-md">
        <h2 className="text-4xl font-semibold text-gray-800">{user.profile.noOfProjects} +</h2>
        <p className="mt-2 text-gray-600 text-lg">Projects Completed</p>
      </div>

      <div className="flex-1 bg-purple-100 py-4 text-center rounded-md">
        <h2 className="text-4xl font-semibold text-gray-800">{user.profile.happyClients} </h2>
        <p className="mt-2 text-gray-600 text-lg">Happy Clients</p>
      </div>

    {/* </div> */}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
