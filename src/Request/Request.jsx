import Nav from "../Home/Nav";
import RequestForm from "./RequestForm";

function Request() {
  return (
    <div>
      <Nav />
      <h1 className="font-semibold text-lg text-[2rem] lg:text-4xl text-[#3f3d56] text-center mt-10 mb-5 sm:text-3xl ">
        Submit Request
      </h1>
      <RequestForm />
    </div>
  );
}

export default Request;
