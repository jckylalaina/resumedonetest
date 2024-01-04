import DeleteAccount from "./DeleteAccount";
import FeedBack from "./FeedBack";
import PersonalInformationForm from "./Form";

export default function PersonalInformation() {
  return (
    <div style={{ width: "100%" }}>
      <h4 className='h4'>Personal Information</h4>;
      <PersonalInformationForm />
      <DeleteAccount />
      <FeedBack />
    </div>
  );
}
