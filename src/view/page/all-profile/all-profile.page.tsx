import ContainerSectionWrapper from "../../components/layout/container-section-wrapper.comp";
import PageWrapper from "../../components/layout/page-wrapper";
import Card from "./components/card";
import {users} from "../../../constants/data"
export default function () {
  return (
    <PageWrapper>
      <div className="bg-slate-100">
        <ContainerSectionWrapper>
                <h1>All profile </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    users.map((user)=> <Card userData={user} key={user.id}/>)
                }
            </div>
        </ContainerSectionWrapper>
      </div>
    </PageWrapper>
  );
}
