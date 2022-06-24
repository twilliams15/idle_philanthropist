export function LockedBuilding() {
  return (
    <div>
      <button
        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2  focus:outline-none focus:shadow-outline w-48 opacity-50 cursor-not-allowed"
        disabled={true}
      >
        ???
      </button>
    </div>
  );
}
