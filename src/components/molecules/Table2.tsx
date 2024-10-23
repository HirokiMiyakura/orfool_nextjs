type Plan = {
  label: string;
  minimum: string;
  partner: string;
  business: string;
  competitor: string;
};

const plans: Plan[] = [
  {
    label: "WordPress更新",
    minimum: "◎",
    partner: "◎",
    business: "◎",
    competitor: "◎",
  },
  {
    label: "メールサポート",
    minimum: "◎",
    partner: "◎",
    business: "◎",
    competitor: "◎",
  },
  {
    label: "サーバー・ドメイン費用",
    minimum: "◎",
    partner: "◎",
    business: "◎",
    competitor: "◎",
  },
  {
    label: "ページの修正",
    minimum: "◎",
    partner: "◎",
    business: "◎",
    competitor: "✖️",
  },
  {
    label: "電話サポート",
    minimum: "◎",
    partner: "◎",
    business: "◎",
    competitor: "✖️",
  },
  {
    label: "SEO対策",
    minimum: "◎",
    partner: "◎",
    business: "◎",
    competitor: "✖️",
  },
  {
    label: "ページの追加",
    minimum: "✖️",
    partner: "◎",
    business: "◎",
    competitor: "✖️",
  },
  {
    label: "リスティング広告",
    minimum: "✖️",
    partner: "◎\n※1 ※2",
    business: "◎",
    competitor: "✖️",
  },
  {
    label: "オフィス訪問",
    minimum: "✖️",
    partner: "✖️",
    business: "◎",
    competitor: "✖️",
  },
  {
    label: "月額費用",
    minimum: "10,000",
    partner: "20,000",
    business: "50,000",
    competitor: "8,800",
  },
  {
    label: "24ヶ月契約",
    minimum: "10%OFF\n220,000",
    partner: "10%OFF\n360,000",
    business: "10%OFF\n1,100,000",
    competitor: "211,200",
  },
];

export const TableTwo = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="mt-14 w-full table-auto border-collapse border-spacing-0 text-sm">
        <thead>
          <tr className="border-b-2">
            <th className="bg-green-400 px-1 py-6"></th>
            <th className="bg-green-400 px-1 py-6 text-center text-xs font-extrabold text-white sm:text-base">
              ミニマムプラン
            </th>
            <th className="bg-green-400 px-1 py-6 text-center text-xs font-extrabold text-white sm:text-base">
              パートナープラン
            </th>
            <th className="bg-green-400 px-1 py-6 text-center text-xs font-extrabold text-white sm:text-base">
              ビジネスプラン
            </th>
            <th className="bg-gray-300 px-1 py-6 text-xs sm:text-base">
              競合A社（格安保守）
            </th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.label} className="border-b-2">
              <td className="px-1 py-4 text-xs font-bold sm:text-base">
                {plan.label}
              </td>
              <td className="whitespace-pre-line px-1 py-4 text-center text-xs sm:text-base">
                {plan.minimum}
              </td>
              <td className="whitespace-pre-line px-1 py-4 text-center text-xs sm:text-base">
                {plan.partner}
              </td>
              <td className="whitespace-pre-line px-1 py-4 text-center text-xs sm:text-base">
                {plan.business}
              </td>
              <td className="whitespace-pre-line px-1 py-4 text-center text-xs sm:text-base">
                {plan.competitor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
