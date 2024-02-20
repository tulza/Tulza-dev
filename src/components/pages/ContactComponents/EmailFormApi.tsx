import emailJs from "@emailjs/browser";
import clsx from "clsx";
import { useState } from "react";

const EmailFormApi = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState("");
  const handleSubmit = (e: any) => {
    setStatus("sending...");
    const form = {
      firstName: e.target.fName.value,
      lastName: e.target.lName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log(form);
    emailJs
      .send("service_1ky3x8k", "template_o64krx7", form, "uGbBWlRG9lo-8cow6")
      .then((res) => {
        return res;
      })
      .then((data) => {
        console.log("data from response ", JSON.stringify(data));
        if (data.status < 299) {
          console.log("successfully sent");
          e.target.fName.value = "";
          e.target.lName.value = "";
          e.target.email.value = "";
          e.target.message.value = "";
          setStatus("Thank you!");
        }
      })
      .catch((error) => {
        console.warn("ERROR: \n", JSON.stringify(error));
        setStatus("Error");
      });
  };

  return (
    <div
      className={clsx(
        "h-[400px] w-[300px] rounded-xl outline outline-1 sm:h-[700px] sm:w-[600px] lg:w-[1000px]",
        `${className}`,
      )}
    >
      <form
        className="relative flex h-full flex-col gap-2 sm:gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (!status) handleSubmit(e);
        }}
      >
        <p className="bold border-b pb-1 text-xl sm:mb-16 sm:text-2xl">
          Message me!
        </p>
        <div className="grid grid-cols-2 gap-8">
          <InputField label="First Name" id="fName" />
          <InputField label="Last Name" id="lName" />
        </div>
        <InputField label="Email" id="email" />
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            className="max-h-[100px] rounded-xl bg-transparent p-2 outline outline-1 sm:max-h-[180px]"
            name="message"
            id="message"
            required
          />
        </div>
        <div className="absolute bottom-0 right-0 flex items-center">
          <p className="text-base">{status}</p>
          <button
            type="submit"
            className="m-2 w-min rounded-xl bg-black px-8 py-2 outline outline-1"
          >
            {status ? (status == "Thank you!" ? ":)" : "...") : "send"}
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, id }: { label: string; id: string }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        required
        className="h-[40px] border-b bg-transparent p-2"
      />
    </div>
  );
};
export default EmailFormApi;
