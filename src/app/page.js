import Image from "next/image";
import styles from "./globals.css";

export default function Home() {
  return (
    <>
      <main className="bg-green-50 text-center">
        <h1> hello Lokesh kumawat </h1>
        <UserName name="Ganesh Kumawat" />
        <UserName name="Suresh Kumawat" />
      </main>
    </>
  );
}

export const UserName = (props) => {
  return (
    <>
      <h3> {props.name}</h3>
    </>
  )
}
