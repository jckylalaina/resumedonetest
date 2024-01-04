import Card from "@/app/components/ui/Core/Card/Card";
import CardContent from "@/app/components/ui/Core/Card/CardContent";
import Title from "@/app/components/ui/Core/Card/Title";
import Link from "next/link";

export default function DeleteAccount() {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Card color='white'>
        <CardContent>
          <Title>Delete account</Title>
          <p className='text-medium'>
            If you delete your account you’ll be permanently removing it from
            our systems - you can’t undo it.
          </p>
          <Link href={"#"} className='text-gray text-bold'>
            Yes, Delete my account
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
