import { AntDesign, Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export const icons = {
    home: (props)=> <AntDesign name="home" size={26} {...props} />,
    explore: (props)=> <Feather name="compass" size={26} {...props} />,
    favorite: (props)=> <MaterialIcons name="favorite-border" size={26} {...props} />,
    create: (props)=> <FontAwesome5 name="address-book" size={26} {...props} />,
    profile: (props)=> <AntDesign name="user" size={26} {...props} />,
}