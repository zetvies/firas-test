import Image from "next/image";
import ArabFlag from "./assets/svg/countries/ArabFlag";
import CopyIcon from "./assets/svg/CopyIcon";
import DownloadIcon from "./assets/svg/DownloadIcon";
import VerifiedIcon from "./assets/svg/VerifiedIcon";
import UnverifiedIcon from "./assets/svg/UnverifiedIcon";
import PersonDetails from "./components/PersonDetails";

export default function Home() {
  const personData = {
    refID: "20192398",
    name: "Safder Jaafar",
    countryID: "966",
    timestamp: "05:27 PM 27/05/2024",
    risk_score: "85%",
    risk_label: "Low Risk",
    risk_description:
      "Stable job, stable employer with additional verification.",
    income: "$500.00",
    // Currently the values are hard coded, but during actual development it will most likely use enum.
    financial_profile: "Very Stable",
    assets: "No Recorded Assets",
    employment: "Employed",
    address_tier: "Tier 1",
    contract_signed: "Signed",
    travel_history: "Traveled Before",
    behavior: "Credit Worthy",
  };
  const countryFlags = [
    {
      countryID: "966",
      icon: <ArabFlag className={"h-8"} />,
    },
  ];
  const personForm = [
    { title: "Income", field: "income" },
    { title: "Financial Profile", field: "financial_profile" },
    { title: "Assets", field: "assets" },
    { title: "Employment", field: "employment" },
    { title: "Address", field: "address_tier" },
    { title: "Contract_", field: "contract_signed" },
    { title: "Travel History", field: "travel_history" },
    { title: "Behavior", field: "behavior" },
  ];

  const personFormVerification = {
    income: true,
    financial_profile: true,
    assets: false,
    employment: true,
    address_tier: true,
    contract_signed: true,
    travel_history: true,
    behavior: true,
  };
  return (
    <main className="px-6 py-8 flex flex-col w-full h-full overflow-y-auto">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center bg-[rgb(0,0,0,0.1)] py-1 px-2 w-fit rounded-md text-sm">
            <CopyIcon className={"h-4"} />
            <div>Ref ID: {personData.refID}</div>
          </div>
          <div className="flex items-center font-semibold text-lg mt-2 mb-1">
            {personData.name}
            <div className="ml-1">
              {
                countryFlags.find((x) => x.countryID === personData.countryID)
                  .icon
              }
            </div>
          </div>
          <div className="text-[#78797E] text-sm ibm-plex-mono-regular">
            {personData.timestamp}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button className="border-2 border-black w-12 h-10 flex justify-center items-center p-1 rounded-md">
            <DownloadIcon className={"h-8"} />
          </button>
          <button className="bg-[#E3655B] rounded-md ibm-plex-mono-semibold text-sm text-white h-10 px-4">
            Reject
          </button>
          <button className="bg-[#3B9B7A] rounded-md ibm-plex-mono-semibold text-sm text-white h-10 px-4">
            Accept
          </button>
        </div>
      </div>
      <div className="flex mt-6">
        <div
          className="rounded-lg border border-[#006C35] p-4 flex-[2] flex flex-col justify-center"
          style={{
            background: "linear-gradient(180deg, #D7F4EA 0.01%, #FFF 100%)",
          }}
        >
          <div className="font-bold">Risk Score</div>
          <div className="flex items-center space-x-4">
            <div className="font-bold text-[48px]">{personData.risk_score}</div>
            <div className="font-bold text-[18px] text-[#3B9B7A] py-1 px-3 bg-[#D3F5EA] rounded-2xl">
              {personData.risk_label}
            </div>
          </div>
          <div className="text-[rgb(0,0,0,0.6)] ibm-plex-mono-regular text-sm">
            {personData.risk_description}
          </div>
        </div>
        <div className="flex-[4] pl-10">
          <div class="grid grid-rows-3 grid-flow-col gap-2">
            {personForm.map((form) => {
              return (
                <div key={form.field} className="h-14">
                  <div className="ibm-plex-mono-regular text-sm">
                    {form.title}
                  </div>
                  <div className="font-semibold flex items-center space-x-1">
                    <div>{personData[form.field]}</div>{" "}
                    {personFormVerification[form.field] ? (
                      <VerifiedIcon className={"h-5"} />
                    ) : (
                      <UnverifiedIcon className={"h-5"} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PersonDetails/>
    </main>
  );
}
