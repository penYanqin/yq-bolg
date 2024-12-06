"use client"; // 这行代码告诉 Next.js 该文件是客户端组件
import { ReactNode, FC, memo, useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useTheme } from "next-themes";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useSearchParams } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { dark, light } from "@clerk/themes";

// 定义组件的Props类型
interface IProps {
  children?: ReactNode;
}

const Header: FC<IProps> = () => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  //   const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();

  const handleSubmit = () => {
    console.log(searchParams);
  };

  return (
    <div className="Header">
      <Navbar className="border-b-2">
        <Link
          href="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Sahand&apos;
          </span>
          Blog
        </Link>
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === "light" ? light : dark,
              }}
              userProfileUrl="/dashboard?tab=profile"
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          </SignedOut>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link href="/">
            <Navbar.Link active={path === "/"} as={"div"}>
              Home
            </Navbar.Link>
          </Link>
          <Link href="/about">
            <Navbar.Link active={path === "/about"} as={"div"}>
              About
            </Navbar.Link>
          </Link>
          <Link href="/projects">
            <Navbar.Link active={path === "/projects"} as={"div"}>
              Projects
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default memo(Header);
