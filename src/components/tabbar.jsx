function TabBar() {
  return (
    <div className="h-10 bg-neutral-800 flex items-center px-2 gap-2 text-sm">
      <div className="bg-neutral-700 px-3 py-1 rounded-md">
        terminal
      </div>
      <button className="text-gray-400 hover:text-white">+</button>
    </div>
  );
}

export default TabBar;