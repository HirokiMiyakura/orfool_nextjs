import { policies } from "@/data/policyData";

export default function PolicyDetails() {
  return (
    <div className="w-full sm:w-3/5">
      {policies.map((policy, index) => (
        <div key={index} className="mt-16 first:mt-0">
          <h3 className="shippori-mincho mb-5 text-2xl font-extrabold sm:mb-8 sm:text-3xl">
            {policy.title}
          </h3>
          <p className="font-thin">{policy.description}</p>
        </div>
      ))}
    </div>
  );
}
