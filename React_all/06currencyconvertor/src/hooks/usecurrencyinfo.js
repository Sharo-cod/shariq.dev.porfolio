import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        if (isMounted) {
          setData(res[currency] || {});
        }
      })
      .catch((err) => console.error("Currency API error:", err));

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
