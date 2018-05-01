"use strict";

module.exports = prettyJapaneseYen;

function prettyJapaneseYen(number, unit = "円") {
  if (Math.abs(number) >= 0 && Math.abs(number) <= 999) {
    return number + unit;
  } else if (Math.abs(number) >= 1000 && Math.abs(number) <= 9999) {
    return toJapaneseCurrencyInSen(number, unit);
  } else if (Math.abs(number) >= 10000 && Math.abs(number) <= 99999999) {
    return toJapaneseCurrencyInMan(number, unit);
  } else if (Math.abs(number) >= 100000000 && Math.abs(number) <= 9999999999) {
    return toJapaneseCurrencyInOku(number, unit);
  } else {
    return Math.trunc(number / 100000000) + "億" + unit;
  }
}

function toJapaneseCurrencyInSen(number, unit) {
  var result = divmod(number, 1000);
  var units = result.units;
  var remainder = result.remainder;
  var decimals = divmod(remainder, 100).units;
  return decimals === 0
    ? units + "千" + unit
    : units + "." + decimals + "千" + unit;
}

function toJapaneseCurrencyInMan(number, unit) {
  var result = divmod(number, 10000);
  var units = result.units;
  var remainder = result.remainder;
  var decimals = divmod(remainder, 1000).units;
  return decimals === 0
    ? units + "万" + unit
    : units + "." + decimals + "万" + unit;
}

function toJapaneseCurrencyInOku(number, unit) {
  var result = divmod(number, 100000000);
  var units = result.units;
  var remainder = result.remainder;
  var decimals = divmod(remainder, 10000000).units;
  return decimals === 0
    ? units + "億" + unit
    : units + "." + decimals + "億" + unit;
}

function divmod(number, by) {
  var units = Math.trunc(number / by);
  var remainder = number % by;

  return {
    units: units,
    remainder: remainder
  };
}
