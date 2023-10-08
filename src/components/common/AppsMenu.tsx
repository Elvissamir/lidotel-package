import { Grid } from "@chakra-ui/react"
import { ExternalAppData } from "../../core"
import AppsMenuItem from "./AppsMenuItem"

interface AppMenuProps {
    items: ExternalAppData[]
}

const AppsMenu = ({ items }: AppMenuProps) => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={3}>
            {items.map((item, key) => 
                <AppsMenuItem key={key} data={item} />
            )}
        </Grid>
    )
}

export default AppsMenu