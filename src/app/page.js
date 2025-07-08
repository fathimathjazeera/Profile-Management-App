import profiles from "@/components/data";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";


export default function Home() {
  return (
    <main >
    <Navbar />
    <ProfileCard profiles={profiles} />

    </main>
  );
}
