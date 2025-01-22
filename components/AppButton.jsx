export default function ButtonIcon({onClick,icon}) {

  return (
    
    <button onClick={onClick} className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
      {icon}
    </button>
  );
}
