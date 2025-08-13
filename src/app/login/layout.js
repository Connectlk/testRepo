import Link from "next/link";
import "./login.css"
export default function Layout({ children }) {
  return (
    <>
      {/* <h1>Comman Layout For Login Screen </h1> */}
      <ul className="login-menu">
        <li>
            <h4 className="">Login Navbar</h4>
        </li>
        <li>
            <Link href="/login">Login Main</Link>
        </li>
        <li>
            <Link href="/login/loginstudent">Student Login</Link>
        </li>
        <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
