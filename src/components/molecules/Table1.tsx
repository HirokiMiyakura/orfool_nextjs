type Plan = {
  label: string;
  light: string;
  standard: string;
  premium: string;
  competitor: string;
};

const plans: Plan[] = [
  {
    label: "ページ数",
    light: "5P程度",
    standard: "8P程度",
    premium: "10P~",
    competitor: "?",
  },
  {
    label: "デザイン",
    light: "オリジナル",
    standard: "オリジナル",
    premium: "オリジナル",
    competitor: "テンプレート",
  },
  {
    label: "納品速度",
    light: "最短1週間",
    standard: "1ヶ月程度",
    premium: "2ヶ月~",
    competitor: "最短2週間",
  },
  {
    label: "WordPress設置・更新",
    light: "◎",
    standard: "◎",
    premium: "◎",
    competitor: "◎",
  },
  {
    label: "お問い合わせ窓口設置",
    light: "◎",
    standard: "◎",
    premium: "◎",
    competitor: "◎",
  },
  {
    label: "レスポンシブデザイン",
    light: "◎",
    standard: "◎",
    premium: "◎",
    competitor: "◎",
  },
  {
    label: "サーバー利用料",
    light: "◎",
    standard: "◎",
    premium: "◎",
    competitor: "別途費用発生",
  },
  {
    label: "ドメイン費用",
    light: "◎",
    standard: "◎",
    premium: "◎",
    competitor: "別途費用発生",
  },
  {
    label: "SSL対応",
    light: "◎",
    standard: "◎",
    premium: "◎",
    competitor: "別途費用発生",
  },
  {
    label: "ライティング代行",
    light: "別途費用発生",
    standard: "別途費用発生",
    premium: "◎",
    competitor: "別途費用発生",
  },
  {
    label: "初期費用",
    light: "200,000",
    standard: "400,000",
    premium: "800,000~",
    competitor: "200,000",
  },
];

export const TableOne = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="mt-14 w-full table-auto border-collapse border-spacing-0 text-sm">
        <thead>
          <tr>
            <th className="bg-green-400 px-1 py-6"></th>
            <th className="bg-green-400 px-1 py-6 text-center font-extrabold text-white">
              ライトプラン
            </th>
            <th className="bg-green-400 px-1 py-6 text-center font-extrabold text-white">
              スタンダードプラン
            </th>
            <th className="bg-green-400 px-1 py-6 text-center font-extrabold text-white">
              プレミアプラン
            </th>
            <th className="bg-gray-300 px-1 py-6">競合A社（納品型制作）</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.label} className="border-b-2">
              <td className="px-1 py-4 text-xs font-bold sm:text-base">
                {plan.label}
              </td>
              <td className="px-1 py-4 text-center text-xs sm:text-base">
                {plan.light}
              </td>
              <td className="px-1 py-4 text-center text-xs sm:text-base">
                {plan.standard}
              </td>
              <td className="px-1 py-4 text-center text-xs sm:text-base">
                {plan.premium}
              </td>
              <td className="px-1 py-4 text-center text-xs sm:text-base">
                {plan.competitor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
