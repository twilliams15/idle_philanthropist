import { useCounter } from "../counter";
import React from "react";
import $ from "jquery";
import { format } from "../helpers";
window.jquery = window.$ = $;

export function Donate() {
  const {
    counter,
    increment,
    increaseAmountDonated,
    decrementCounter
  } = useCounter();

  const [donateAmount, setDonateAmount] = React.useState(1);
  const [upgradeTreshold, setUpgradeTreshold] = React.useState(100);
  const [cost, setCost] = React.useState(10);
  const [upgradeCount, setUpgradeCount] = React.useState(0);

  const onUpgrade = () => {
    decrementCounter(cost);
    setDonateAmount(donateAmount * 2);
    setUpgradeTreshold(upgradeTreshold * 10);
    setCost(cost * Math.pow(1.15, upgradeCount));
    setUpgradeCount(upgradeCount + 1);
  };

  const onClick = () => {
    increaseAmountDonated(donateAmount);
    increment(donateAmount);
  };

  React.useEffect(() => {
    let x = 0;
    $("#donate").click(function (e) {
      x++;
      $("#donate").append('<div id="x' + x + '" hidden>+$</div>');
      $("#x" + x).css("top", e.clientY);
      $("#x" + x).css("left", e.clientX - 10);
      $("#x" + x).css("position", "absolute");
      $("#x" + x).css("width", "25px");
      $("#x" + x).css("height", "25px");
      $("#x" + x).css("color", "#fdb72f");
      $("#x" + x).css("font-weight", "bold");
      $("#x" + x).css("animation", "GoUp 2s forwards linear");
      $("#x" + x).show();
    });
  });

  return (
    <div>
      <button
        id="donate"
        type="button"
        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 hover:bg-green-600 focus:outline-none focus:shadow-outline w-48"
        onClick={onClick}
      >
        Donate {format(donateAmount)}
      </button>
      {counter >= upgradeTreshold && (
        <span
          className="absolute text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
          style={{ marginLeft: "-30px" }}
        >
          <button id="upgrade" type="button" onClick={onUpgrade}>
            Upgrade
          </button>
        </span>
      )}
    </div>
  );
}
