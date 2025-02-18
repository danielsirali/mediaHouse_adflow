import "chart.js/auto";

const HeatMap = () => {
  return (
    <>
      <div className="bg-white shadow-lg md:w-1/3 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">
          Total Number of ads per hour
        </h2>

        <div className="grid grid-cols-8 gap-2 space-x-2">
          <div></div>

          <div className="text-sm text-gray-500 text-center">Sun</div>
          <div className="text-sm text-gray-500 text-center">Mon</div>
          <div className="text-sm text-gray-500 text-center">Tue</div>
          <div className="text-sm text-gray-500 text-center">Wed</div>
          <div className="text-sm text-gray-500 text-center">Thu</div>
          <div className="text-sm text-gray-500 text-center">Fri</div>
          <div className="text-sm text-gray-500 text-center">Sat</div>

          <div className="text-sm text-gray-500">11AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

          <div className="text-sm text-gray-500">10AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-red-300 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

          <div className="text-sm text-gray-500">9AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-red-500 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

          <div className="text-sm text-gray-500">8AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-red-500 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

          <div className="text-sm text-gray-500">7AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-red-400 rounded-md"></div>
          <div className="w-8 h-8 bg-red-600 rounded-md relative">
            <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-xs font-bold">
              50
            </span>
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-md"></div>
          <div className="w-8 h-8 bg-red-400 rounded-md"></div>
          <div className="w-8 h-8 bg-red-300 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

          <div className="text-sm text-gray-500">6AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-red-600 rounded-md"></div>
          <div className="w-8 h-8 bg-red-500 rounded-md"></div>
          <div className="w-8 h-8 bg-red-500 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>

          <div className="text-sm text-gray-500">5AM</div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-red-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default HeatMap;
