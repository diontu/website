import Maintenance from '@/components/maintenance/maintenance'
import BlankPage from '@/page-templates/blank-page/blank-page'

// TODO: make the story an accordion, everything else should be fully visible
const Recipe = (): JSX.Element => {
    return (
        <BlankPage>
            <Maintenance />
        </BlankPage>
    )
}

export default Recipe
