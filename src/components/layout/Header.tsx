import { Container, Icon } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Container
      as="header"
      border="1pt solid #27272a"
      padding="4"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="gray.900"
    >
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.68 13.108c2.704-1.883 5.766-2.965 8.853-2.965c5.159 0 9.59 2.49 12.764 6.441m-29.2 6.184a23 23 0 0 1 2.094-3.97m23.601-1.728a.86.86 0 0 0-.877-.877l-4.725.107c-.981 0-1.9.341-2.58 1.022c-1.578 1.577-1.276 4.437.674 6.387s4.81 2.252 6.387.674c.68-.68 1.014-1.601 1.014-2.582z"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m29.763 11.44l-2.888-7.565a.76.76 0 0 0-1.358-.129l-4.034 6.532m14.534 5.952v-3.221c0-.16-.15-.278-.305-.239l-2.586.65m-16.621.398a1.5 1.5 0 0 0-.59-.342l-8.168-2.333a.462.462 0 0 0-.57.57l2.355 8.252c.076.19.174.366.319.507c.477.464 3.304.325 5.142-1.512s2.514-4.14 1.512-5.142m28.689 2.792c-1.057-.113-9.207 0-9.207 0a.7.7 0 0 0-.282.072c-.787.417-.502 2.499.639 4.65c1.14 2.15 2.703 3.553 3.49 3.136c.085-.045.216-.19.216-.19c2.284-2.58 4.572-6.107 5.352-7.21a.29.29 0 0 0-.208-.459M7.646 21.53L5.13 16.8a.41.41 0 0 1 .363-.605H8.45"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M40.432 23.842c.287.301 1.38 6.478-6.272 6.206c-7.18-.256-16.308-5.33-20.106-6.564c-3.208-1.042-7.404-1.851-10.085 1.17c-1.5 1.69-3.232 6.867 2.939 9.17m26.949-19.763l-2.689.763l-9.04-.941l-5.343-2.04"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m22.128 13.883l-1.452 6.965l-5.108 3.202m5.108-3.202l1.376 5.968m10.694-7.731l2.228 6.016l-2.507 4.805m-1.299-15.082l.507 1.369m3.299 8.908l2.093 4.669M10.76 39.088c3.48 4.476 11.633 6.602 18.103 4.992c4.583-1.141 8.903-3.882 9.64-7.959"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M26.322 35.527a3.618 3.618 0 1 1-6.871-2.174"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.44 42.671c1.423.183 3.145-.017 4.662-.98c1.348-.856 2.146-1.845 2.35-3.342m1.144 6.254c2.705-.616 4.65-2.113 5.713-3.56c1.613-2.196 1.735-3.29 1.864-4.499m-21.57-7.056c-.314.699-.501 1.574-.501 2.523c0 2.289 1.086 4.144 2.425 4.144s2.426-1.855 2.426-4.144q0-.433-.05-.84"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.378 28.547a17 17 0 0 0-.473 2.698c-.543 5.569 2.322 8.026 5.186 8.026c2.683 0 4.89-2.733 5.159-7.114"
            strokeWidth="2"
          />
          <path
            fill="none"
            stroke="#22d3ee"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M40.432 23.842c1.228.27 4.484 3.76 3.814 6.62c-.538 2.293-1.517 4.12-6.745 5.98c-5.894 2.095-20.367-4.464-25.974-6.533c-1.77-.653-7.462-3.643-8.114 1.456"
            strokeWidth="2"
          />
        </svg>
      </Icon>
      <Navbar />
    </Container>
  );
};

export default Header;
