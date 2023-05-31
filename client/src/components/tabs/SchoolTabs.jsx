import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabCard from "../Cards/TabCard";

function SchoolTabs() {
  return (
    <Tabs
      defaultActiveKey="daySchool"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="daySchool" title="Day School">
        <TabCard
          src={"./assets/schoolImg/dps2.jpg"}
          title={"Day Schools"}
          desc={
            "A day school is a school where the students go home every evening and do not live at the school."
          }
        />
      </Tab>
      <Tab eventKey="playSchool" title="Play School">
        <TabCard
          src={"assets/schoolImg/sumati.jpg"}
          title={"Play Schools"}
          desc={
            "In a playschool there is play based learning and positive stimulation through toys and activities that pique a child's interest and helps in developing his social skills and sensory-motor development"
          }
        />
      </Tab>
      <Tab eventKey="boardingSchool" title="Boarding School">
        <TabCard
          src={"assets/boardingSchools/ssg.jpg"}
          title={'Boarding Schools'}
          desc={`A boarding school is a school where pupils live within premises while being given formal instruction. The word "boarding" is used in the sense of "room and board", i.e. lodging and meals. As they have existed for many centuries, and now extend across many countries, their functioning, codes of conduct and ethos vary greatly. Children in boarding schools study and live during the school year with their fellow students and possibly teachers or administrators. Some boarding schools also have day students who attend the institution by day and return off-campus to their families in the evenings.`}
        />
      </Tab>
      <Tab eventKey="university" title="University">
        <TabCard
          src={"assets/CollegeUniversities/sku.jpg"}
          title={'University'}
          desc={`A university is an institution of higher (or tertiary) education and research which awards academic degrees in several academic disciplines. Universities typically offer both undergraduate and postgraduate programs. In the United States, the designation is reserved for colleges that have a graduate school.`}
        />
      </Tab>
    </Tabs>
  );
}

export default SchoolTabs;
