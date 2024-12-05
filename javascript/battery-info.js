function batteryInfo(arr) {
  let batteryValue = 50;
  const resultBatteryInfo = {
    battery_fully_charged: 0,
    battery_low: 0,
    battery_empty: 0,
    last_battery_percent: 0
  };

  for (const arrValue of arr) {
    batteryValue += arrValue < 0 ? arrValue : arrValue * 2;
    batteryValue = Math.max(0, Math.min(batteryValue, 100));

    if (batteryValue >= 100) {
      console.log('Battery Fully Charged');
      resultBatteryInfo.battery_fully_charged++;
    } else if (batteryValue <= 0) {
      console.log('Battery is Empty, Please Charge');
      resultBatteryInfo.battery_empty++;
    } else if (batteryValue <= 30) {
      console.log('Battery Low');
      resultBatteryInfo.battery_low++;
    }
  }

  resultBatteryInfo.last_battery_percent = batteryValue;

  return resultBatteryInfo;
}

const arr = [25, -30, -70, -10, 20];
const arr1 = [-20, 30, 30, -60, -40];

console.log(batteryInfo(arr));
console.log(batteryInfo(arr1));
