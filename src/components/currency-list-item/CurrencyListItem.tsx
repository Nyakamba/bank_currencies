import React from "react";

interface CurrencyListItemProps {
  countryCode: string;
  countryName: string;
  currencyName: string;
  currencyCode: string;
  exchangeRate: number;
}

const CurrencyListItem = ({
  countryCode,
  countryName,
  currencyName,
  currencyCode,
  exchangeRate,
}: CurrencyListItemProps) => {
  const country_name = countryName ? countryName : "-";
  return (
    <li className="flex flex-row  items-center  bg-white p-4 rounded shadow m-3 text-[20px] font-medium space-x-4 min-w-[200px]">
      <div className="w-[15vmin] min-w-[35px] flex items-center">
        <img
          src={`/flags/${countryCode.toLowerCase()}.png`}
          alt={`${countryCode} flag`}
          className=" w-10  h-7 object-cover shadow rounded-[4px] "
        />
      </div>
      <div
        className="w-[20vmin]"
        title={currencyName ? currencyName : currencyCode}
      >
        {currencyCode}
      </div>
      <div
        className="w-fit grow overflow-hidden whitespace-nowrap text-ellipsis"
        title={country_name}
      >
        {country_name}
      </div>
      <div className="">{exchangeRate ? exchangeRate.toFixed(4) : "-"}</div>
      <div className="w-[40px]">KES</div>
    </li>
  );
};

export default CurrencyListItem;
