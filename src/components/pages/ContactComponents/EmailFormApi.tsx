import emailJs from "@emailjs/browser";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const EmailFormApi = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleSubmit = (e: any) => {
    const form = {
      firstName: e.target.Name.value,
      lastName: "",
      email: e.target.email.value,
      message: e.target.message.value,
    };
    if (!validateEmail(form.email)) {
      setValidEmail(false);
      console.log("invalid email");
      return;
    }
    setStatus("sending...");
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
        <p className="bold mb-4 border-b pb-1 text-xl sm:mb-12 sm:text-2xl">
          Message me!
        </p>
        <div className="grid grid-cols-2 gap-8">
          <InputField label="Name" id="Name" />
          <InputField
            label="Email"
            id="email"
            isError={!isValidEmail}
            OnClick={() => setValidEmail(true)}
            errorMessage="bad email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            className="max-h-[100px] min-h-[100px] rounded-xl bg-transparent p-2 outline outline-1 sm:max-h-[180px] sm:min-h-[240px]"
            name="message"
            id="message"
            required
          />
        </div>
        <div className="absolute bottom-0 right-0 flex items-center">
          <p className="text-base">{status}&nbsp;</p>
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

const InputField = ({
  label,
  id,
  isError,
  errorMessage,
  OnClick,
}: {
  label: string;
  id: string;
  errorMessage?: string;
  isError?: boolean;
  OnClick?: () => void;
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <motion.input
        type="text"
        name={id}
        id={id}
        required
        className="h-[60px] border-b bg-transparent p-2"
        animate={isError ? { borderColor: "#f00" } : {}}
        onClick={OnClick}
      />
      <motion.p
        className="text-sm text-[#f00]"
        animate={isError ? { opacity: 1 } : { opacity: 0 }}
      >
        {errorMessage}
      </motion.p>
    </div>
  );
};
export default EmailFormApi;
