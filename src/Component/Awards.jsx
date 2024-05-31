const Awards = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 mb-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Awards</h2>
        <h1 className="mb-5 mt-3  text-white">
          Gather relevant artifacts and examples of your skills, values,
          abilities, work, and achievements.
        </h1>
      </div>
      <div className="bg-black p-8">
        <div className="flex justify-between">
          <div className="w-[70%]">
            <h1 className="text-white font-bold mb-3">
              Best Mobile App Design (2023)
            </h1>
            <h1>
            Awarded by [Name of Awarding Body] for my design of the "Fitness+ App". The app's intuitive interface and user-friendly features were praised for promoting a healthy lifestyle.
            </h1>
          </div>
          <h1 className="text-white font-bold text-center">
            Product Design 2023
          </h1>
        </div>
      </div>
      <div className="bg-black p-8 mt-3">
        <div className="flex justify-between">
          <div className="w-[70%]">
            <h1 className="text-white font-bold mb-3">
            UI/UX Design Competition (2022)
            </h1>
            <h1>
            My design concept for a sustainable e-commerce platform was selected as a finalist in the [Name of Competition]. The judges commended the design's focus on user experience and eco-friendly features.
            </h1>
          </div>
          <h1 className="text-white font-bold text-center">
            Product Design 2022
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Awards;
