import CampConclusion from "@/components/CampConclusion";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Startup Ambassadors Camp - 7-Day Personal Growth Experience</title>
        <meta 
          name="description" 
          content="A journey that began in Oltiariq — a 7-day camp experience. An inspiring story about turning ideas into reality, teamwork, and personal growth." 
        />
        <meta name="keywords" content="camp experience, 7 days, personal growth, startup ambassadors, yoshlar ventures" />
      </Helmet>
      <main className="min-h-screen bg-background">
        <CampConclusion />
      </main>
    </>
  );
};

export default Index;
