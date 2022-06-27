import useBudget from "../stores/useBudget";

export default function Budget() {
  const { income, expenses, changeIncome, changeExpenses } = useBudget(
    (state) => state,
  );

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value) {
            changeIncome(parseInt(e.target.value));
          } else {
            changeIncome(0);
          }
        }}
        value={income || ""}
        placeholder="Income"
      />
      <h1>Income: {income}</h1>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value) {
            changeExpenses(parseInt(e.target.value));
          } else {
            changeExpenses(0);
          }
        }}
        value={expenses || ""}
        placeholder="Expenses"
      />
      <h1>Expenses: {expenses}</h1>
    </div>
  );
}
