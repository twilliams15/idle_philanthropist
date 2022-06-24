import { useCounter } from "../counter";
import { format } from "../helpers";

export function Display() {
  const { counter, incAmount, amountDonated } = useCounter();
  return (
    <div className="h-100">
      <h2 className="text-gray-900 text-4xl font-medium mb-2">
        {format(counter)}
      </h2>
      {incAmount > 0 && <p>Donating {format(incAmount)}/sec</p>}
      {amountDonated > 0 && (
        <p className="text-sm text-gray-500">
          Single Donations {format(amountDonated)}{" "}
        </p>
      )}
    </div>
  );
}
