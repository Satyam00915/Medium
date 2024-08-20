const Quote = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="flex flex-col gap-5 p-20">
      <div className="font-semibold text-4xl ">
        {type == "signin"
          ? "The assistance I received was prompt and insightful. The team made suremy experience was seamless and stress-free."
          : "The customer service I received was exceptional. The support team wentabove and beyond to address my concerns."}
      </div>
      <div>
        <div className="font-semibold">
          {type == "signup" ? "Jules Winnfield" : "Vincent Vega"}
        </div>
        <div className="text-gray-500">
          CEO, {type == "signup" ? "Acme Inc" : "VegaTech"}{" "}
        </div>
      </div>
    </div>
  );
};

export default Quote;
