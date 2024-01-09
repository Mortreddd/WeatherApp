function WeatherHeader({ current, location }) {
  const { code, condition, icon } = current.condition;
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth();
  const day = new Date(Date.now()).getDay();
  const today = new Date(year, month, day).toDateString();
  return (
    <>
      <section className="w-full rounded-xl h-fit p-4 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 bg-gray-400 border-gray-100">
        <div className="w-full flex md:justify-evenly justify-between items-center py-2">
          <h1 className="text-white font-serif text-2xl md:text-5xl font-semibold">
            {location.region}, {location.country}
          </h1>
          <div className="px-2 w-fit flex gap-4">
            <h6 className="text-xl font-sans text-white font-thin">
              {current.temp_c}&#8728;C
            </h6>
            <h6 className="text-xl font-sans text-white font-thin">
              {current.temp_f}&#8728;F
            </h6>
          </div>
        </div>
        <div className="w-full flex md:justify-evenly justify-between items-center py-2">
          <div className="w-fit flex flex-col gap-2 justify-start items-start">
            <h3 className="text-white font-thin font-serif text-2xl">MONDAY</h3>
            <h4 className="text-white font-thin font-serif text-xl">{today}</h4>
            <h6 className="text-justify font-thin text-white text-xl fontserif">
              Wind {current.wind_kph} kph
            </h6>
          </div>

          <div className="w-fit">
            <img src={icon} alt="weather" className="w-32 h-32" />
          </div>
          <div className="w-fit">
            <h1 className="text-6xl text-start text-white font-serif font-bold">
              22&#8728;
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default WeatherHeader;
