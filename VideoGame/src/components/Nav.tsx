import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

export const Nav = () => {
  return (
    <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Navbar</Text>
    </HStack>
  )
}
