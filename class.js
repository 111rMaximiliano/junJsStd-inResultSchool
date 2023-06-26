class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }
  repairCar(carName) {
    if (carName == undefined || carName == NaN) {
      console.error(
        ` Вам необходимо указать название машины, чтобы ее отремонтировать `
      );
    }
    let workMode = new Date().getHours();
    let from = this.workingHours.from.split(":")[0],
      till = this.workingHours.till.split(":")[0];
    if (workMode < from || workMode >= till) {
      alert(`"К сожалению, мы сейчас закрыты. Приходите завтра"`);
    } else {
      alert(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`
      );
    }
  }
}
const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService.repairCar("BMW");
