import React from "react";
import "react-popper-tooltip/dist/styles.css";
import { format } from "../helpers";
import { LockedBuilding } from "./locked";
import { useCounter } from "../counter";
import { usePopperTooltip } from "react-popper-tooltip";
import classNames from "classnames";

export function Building({
  name,
  desc,
  initialCost,
  incAmount,
  locked,
  unlock
}) {
  const { counter, decrementCounter, increaseIncAmount } = useCounter();
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({ delayShow: 1500, followCursor: true });
  const [cost, setCost] = React.useState(initialCost);
  const [buildingCount, setBuildingCount] = React.useState(0);
  const disabled = counter < cost ? true : false;

  React.useEffect(() => {
    if (buildingCount === 1) {
      unlock(name);
    }
  }, [buildingCount, name, unlock]);

  const onClick = () => {
    decrementCounter(cost);
    increaseIncAmount(incAmount);
    setBuildingCount(buildingCount + 1);
    setCost(initialCost * Math.pow(1.15, buildingCount + 1));
  };

  return locked ? (
    <LockedBuilding />
  ) : (
    <div>
      <button
        onClick={onClick}
        className={classNames(
          "border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2  focus:outline-none focus:shadow-outline w-48",
          disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
        )}
        disabled={disabled}
      >
        <div ref={setTriggerRef}>
          {name}
          <br />
          {format(cost)}
        </div>
      </button>
      <span
        className="absolute text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full"
        style={{ marginLeft: "-30px" }}
      >
        {buildingCount}
      </span>
      {visible && (
        <Tooltip
          setTooltipRef={setTooltipRef}
          getTooltipProps={getTooltipProps}
          getArrowProps={getArrowProps}
          desc={desc}
          incAmount={incAmount}
          buildingCount={buildingCount}
          name={name}
        />
      )}
    </div>
  );
}

function Tooltip({
  setTooltipRef,
  getTooltipProps,
  getArrowProps,
  desc,
  incAmount,
  buildingCount,
  name
}) {
  return (
    <div
      ref={setTooltipRef}
      {...getTooltipProps({
        className: "tooltip-container"
      })}
    >
      <div {...getArrowProps({ className: "tooltip-arrow" })} />
      <p className="text-sm text-gray-800">{desc}</p>
      <p className="text-xs text-gray-400">Gives {format(incAmount)}/sec</p>
      <p className="text-xs text-gray-400">
        {buildingCount} {name}s giving {format(incAmount * buildingCount)}
        /sec
      </p>
    </div>
  );
}
