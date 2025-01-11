const CalculatorDrawerLogs = () => {
  return (
    <div id="drawer-logs">
      <div
        id="drawer-toggler"
        className="text-center mt-10 opacity-50 hover:opacity-100 cursor-pointer transform transition-transform duration-500 hover:-translate-y-2"
      >
        <div className="w-8 h-[2px] rounded-full bg-slate-400 mb-1 mx-auto"></div>
        <div className="w-12 h-1 rounded-full bg-slate-400 mx-auto"></div>
      </div>
      <div id="logs" className="custom-scroll">
        <div className="log-card p-2 rounded-md bg-gray-800 mb-2">
          <div className="flex justify-between">
            <div className="text-[10px] text-gray-500 mt-b">15+415*5454</div>
            <div className="text-[10px] text-gray-500 mt-b">
              01/11/25 5:30 AM
            </div>
          </div>
          <div className="text-md text-white">455</div>
        </div>
        <div className="log-card p-2 rounded-md bg-gray-800 mb-2">
          <div className="text-[10px] text-gray-500 mt-b">15+415*5454</div>
          <div className="text-md text-white">455</div>
        </div>
        <div className="log-card p-2 rounded-md bg-gray-800 mb-2">
          <div className="text-[10px] text-gray-500 mt-b">15+415*5454</div>
          <div className="text-md text-white">455</div>
        </div>
        <div className="log-card p-2 rounded-md bg-gray-800 mb-2">
          <div className="text-[10px] text-gray-500 mt-b">15+415*5454</div>
          <div className="text-md text-white">455</div>
        </div>
        <div className="log-card p-2 rounded-md bg-gray-800 mb-2">
          <div className="text-[10px] text-gray-500 mt-b">15+415*5454</div>
          <div className="text-md text-white">455</div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDrawerLogs;
