import Nav from "../Home/Nav";
import RequestForm from "./RequestForm";

function Request() {
  return (
    <div>
      <Nav />
      {/* <h1 className="text-center mt-10 mb-5 text-4xl font-semibold"> */}
      <h1 className="font-semibold text-lg lg:text-4xl text-[#3f3d56] text-center mt-10 mb-5 ">
        Submit Request
      </h1>
      <RequestForm />
    </div>
  );
}

export default Request;
