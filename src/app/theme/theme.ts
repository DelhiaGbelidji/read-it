"useClient"
import { createTheme} from "@mui/material/styles"

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary:{
            main: "#1F6FFF"
        }
    }
})

export const ligthTeme = createTheme({
    palette: {
        mode: "light",
        primary:{
            main: "#1F6FFF"
        }
    }
})
