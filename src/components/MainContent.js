"use client";

export default function MainContent() {
  const mainData = {
    name: "Ahmed Alshabeed",
    passport_id: "A1204343",
    nationality: "Egyptian",
    employment_status: "Active",
    mobile_number: "+966 40223 122",
    employer_name: "Firas Almohasen",
    employment_months: "10 months",
    role: "Technician",
    join_date: "27/07/2023",
    work_address: "56, Saudi Arabia",
    work_email: "ahmed@firas.com",
  };
  const travelerInformationForm = [
    { title: "Name", field: "name" },
    { title: "Passport ID", field: "passport_id" },
    { title: "Nationality", field: "nationality" },
    { title: "Employment Status", field: "employment_status" },
    { title: "Mobile Number", field: "mobile_number" },
  ];
  const workProfileForm = [
    { title: "Employer Name", field: "employer_name" },
    { title: "Months of Employment", field: "employment_months" },
    { title: "Job Role", field: "role" },
    { title: "Date of Joining", field: "join_date" },
    { title: "Work Address", field: "work_address" },
    { title: "Work Email", field: "work_email" },
  ];

  return (
    <div className="py-4 flex flex-col space-y-8">
      <div>
        <div className="ibm-plex-mono-bold text-xl mb-4">
          Traveler Information
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-2">
          {travelerInformationForm.map((form) => {
            return (
              <div key={form.field} className="my-1 flex items-center w-full">
                <div className="  min-w-[230px] ">{form.title}</div>
                <div className=" flex-1 ibm-plex-mono-medium">
                  {mainData[form.field]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="ibm-plex-mono-bold text-xl mb-4">Work Profile</div>
        <div class="grid grid-rows-3 grid-flow-col gap-2">
          {workProfileForm.map((form) => {
            return (
              <div key={form.field} className="my-1 flex items-center w-full ">
                <div className="  min-w-[230px] ">{form.title}</div>
                <div className=" flex-1 ibm-plex-mono-medium">
                  {mainData[form.field]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
