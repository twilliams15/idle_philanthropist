import React from "react";

export function Credits() {
  return (
    <div className="mt-6 text-gray-900">
      <ul>
        <u>Developers</u>
        <li>Mustafa Taha Demirci</li>
        <li>Shruti Satish</li>
        <li>Todd Williams</li>
      </ul>
      <p className="mt-6 mb-3 text-sm">
        This was fun, but you didn't actually make any real donations. To do
        some real good, head to{" "}
        <a className="text-green-700 underline" href="https://www.gofundme.com">
          GoFundMe.com
        </a>
      </p>
    </div>
  );
}
