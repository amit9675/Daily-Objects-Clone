import { ReactNode } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { name: "CASES & SLEEVES", to: "/cases" },
  { name: "NEW ARRIVAL", to: "/newarrivalspage" },
  { name: "ACCESSORIES", to: "/accesories" },
  { name: "SALE", to: "/sale" },
  { name: "BAGS & WALLETS", to: "/wallets" },
  { name: "HOME & OFFICE", to: "/newarrivalspage" },
];
// const Urls =[
//    "",
//    "",
//    "/accesories",
//    "",
//    ""
// ]
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="main">
      <Box
        
        bg={useColorModeValue("gray.100", "gray.900")}
        px={6}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
            <Link to="/">
              <img
                src="https://i.ibb.co/3TjW0sM/logo.png"
                alt=""
              />
            </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <Link to={link.to} key={link.name}>
                  {" "}
                  {link.name}{" "}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex>
            <div className="navbar__icons">
              <div>
                <Link to={"/cart"}>
                  <FaShoppingCart />
                </Link>
              </div>
              <div>
                <Link to={"/account/"}>
                  <FaUser />
                </Link>
              </div>
              <div>
                <Link to={"/searchproduct"}>
                  <FaSearch />
                </Link>
              </div>
            </div>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
              {/* worthy-marble-5256 */}
                {/* <Link to={'/cart'}>
          <FaShoppingCart />
          </Link> */}
                {/* <Avatar
                  size={"sm"}
                  src={
                    "https://images.usplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link>Link 1</Link>
                </MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
                {/* <MenuItem>Link 4</MenuItem> */}
                {/* <MenuItem>Link 5`</MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <Link to={link.to} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </div>
  );
}
