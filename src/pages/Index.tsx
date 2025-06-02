import TheaterHero from "@/components/TheaterHero";
import ShowsGrid from "@/components/ShowsGrid";
import TheaterLayout from "@/components/TheaterLayout";

const Index = () => {
  return (
    <TheaterLayout>
      <TheaterHero />
      <ShowsGrid />
    </TheaterLayout>
  );
};

export default Index;
