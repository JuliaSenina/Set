import Team from "../index";
import Character from "../character";

test("Добавление персонажа", () => {
  const team = new Team();
  team.add("Alex");
  expect(() => team.add("Alex")).toThrow("Такой игрок уже существует");
});
  
test("Добавление нескольких персонажей", () => {
  const players = new Team();
  const FirstPlayer = new Character("Alex");
  const SecondPlayer = new Character("Artur");
  const ThirdPlayer = new Character("Andrey");
  players.addAll(FirstPlayer, SecondPlayer, ThirdPlayer);
  expect(players.members.size).toEqual(3);
});
  
test("Конвертиция в массив", () => {
  const team = new Team();
  team.addAll("Alex", "Artur", "Andrey", "Artur");
  team.toArray();
  expect(team.members).toEqual(["Alex", "Artur", "Andrey"]);
});