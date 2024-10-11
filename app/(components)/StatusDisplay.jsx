const StatusDisplay = ({ state }) => {
  const getColor = (state) => {
    let color = "bg-slate-700";
    switch (state.toLowerCase()) {
      case "finished":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        state
      )}`}
    >
      {state}
    </span>
  );
};

export default StatusDisplay;
