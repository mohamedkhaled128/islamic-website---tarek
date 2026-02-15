import { Helmet } from "react-helmet-async";
import ProgramsBody from "../components/Programs/ProgramsBody";
import ContainerWrap from "../components/ContainerWrap";

function ProgramsPage() {
    return (
        <>
            <Helmet>
                <title>{'برامجك'}</title>
            </Helmet>
            <ProgramsBody />
        </>
    )
}

export default ContainerWrap(ProgramsPage, {})
