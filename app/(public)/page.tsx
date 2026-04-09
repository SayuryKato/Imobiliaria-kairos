import AboutUs from "../_components/ui/about";
import AboutLocalization from "../_components/ui/about-localization";
import HeroHome from "../_components/ui/hero-home";
import SectionHomeInfor from "../_components/ui/section-home-infor";
import SectionHomeMessage from "../_components/ui/section-home-message";
import SectionProperty from "../_components/ui/section-property";
import Statistic from "../_components/ui/statistc";
import { prisma } from "../_lib/prisma";

const HomePage = async () => {
  const properties = await prisma.property.findMany({
    take: 8,
    include: {
      images: true,
    },
  });

  return (
    <div>
      <HeroHome />
      <Statistic />
      <SectionHomeInfor />

      <div className="flex flex-col p-6">
        <div>
          <p className="text-primary text-sm">PRÉ-LANÇAMENTOS</p>
          <h1 className="font-title font-light text-4xl leading-[1.1] tracking-wide text-black">
            Alta tecnologia,
            <br />
            <span className="text-primary italic">grande contato humano</span>
          </h1>
        </div>
        <SectionProperty properties={properties} />
      </div>

      <AboutUs />
      <AboutLocalization />
      <SectionHomeMessage />
    </div>
  );
};

export default HomePage;
