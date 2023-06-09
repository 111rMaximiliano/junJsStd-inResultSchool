const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel() {
  if (peopleWaiting[0] === "Кристина") {
    alert(`${peopleWaiting[0]} получил(ла) посылку.`);
    peopleWaiting.shift();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
  if (peopleWaiting[0] === "Олег") {
    alert(`${peopleWaiting[0]} получил(ла) посылку.`);
    peopleWaiting.shift();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
  if (peopleWaiting[0] === "Кирилл") {
    alert(`${peopleWaiting[0]} получил(ла) посылку.`);
    peopleWaiting.shift();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);

    alert(`Внимание ! Обеденный перерыв!`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
}
giveParcel();

function leaveQueueWithoutParcel() {
  if (peopleWaiting[0] !== "Кирилл") {
    alert(
      `${peopleWaiting.at(-1)} не получил(ла) посылку и ушёл(ла) из очереди.`
    );
    peopleWaiting.pop();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
  if (peopleWaiting[0] !== "Кирилл") {
    alert(
      `${peopleWaiting.at(-1)} не получил(ла) посылку и ушёл(ла) из очереди.`
    );
    peopleWaiting.pop();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
  if (peopleWaiting[0] !== "Кирилл") {
    alert(
      `${peopleWaiting.at(-1)} не получил(ла) посылку и ушёл(ла) из очереди.`
    );
    peopleWaiting.pop();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
  if (peopleWaiting[0] !== "Кирилл") {
    alert(
      `${peopleWaiting.at(-1)} не получил(ла) посылку и ушёл(ла) из очереди.`
    );
    peopleWaiting.pop();
    alert(`В очереди осталось ${peopleWaiting.length} человек`);
  } else {
    alert(`Обрати внимание что-то не так с кодом!`);
  }
  alert("Очередь свободна");
}

leaveQueueWithoutParcel();
