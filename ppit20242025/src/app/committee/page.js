"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../Components/Header";

export default function CommitteeCarousel() {
  const [menuOpen, setMenuOpen] = useState(false); // Track the state of the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };


  const [activeSection, setActiveSection] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  // Sections and images
  const sections = [
    { id: 0, title: "BPH", description: "Badan\nPengurus\nHarian", image: "/CMT_Assets/Full/BPH.PNG" },
    { id: 1, title: "AKAD", description: "Akademis", image: "/CMT_Assets/Full/Akad.PNG" },
    { id: 2, title: "IT", description: "Informasi\nTeknologi", image: "/CMT_Assets/Full/IT.PNG" },
    { id: 3, title: "WIRUS", description: "Wirausaha ", image: "/CMT_Assets/Full/Wirus.PNG" },
    { id: 4, title: "MEDPUB", description: "Media\nPublikasi", image: "/CMT_Assets/Full/Medpub.PNG" },
    { id: 5, title: "DEPOL", description: "Olahraga\nPemuda", image: "/CMT_Assets/Full/Depol.PNG" },
    { id: 6, title: "SOSBUD", description: "Sosial\nBudaya", image: "/CMT_Assets/Full/Sosbud.PNG" },
  ];

  // Members for the overlay
  const members = [
    { id: 1, cardImage: "/CMT_Assets/BPH/Nicholas.png", department: 0 },
    { id: 2, cardImage: "/CMT_Assets/BPH/Jocelyn.png", department: 0 },
    { id: 3, cardImage: "/CMT_Assets/BPH/Christopher.png", department: 0 },
    { id: 4, cardImage: "/CMT_Assets/BPH/Kallista.png", department: 0 },
    { id: 5, cardImage: "/CMT_Assets/BPH/Christie.png", department: 0 },
    { id: 6, cardImage: "/CMT_Assets/BPH/Richelle.png", department: 0 },
    { id: 7, cardImage: "/CMT_Assets/Akad/Celine.png", department: 1 },
    { id: 8, cardImage: "/CMT_Assets/Akad/Ernest.png", department: 1 },
    { id: 9, cardImage: "/CMT_Assets/Akad/Jeanette.png", department: 1 },
    { id: 10, cardImage: "/CMT_Assets/Akad/Nathan.png", department: 1 },
    { id: 11, cardImage: "/CMT_Assets/Akad/Christopher.png", department: 1 },
    { id: 12, cardImage: "/CMT_Assets/IT/Verdine.png", department: 2 },
    { id: 13, cardImage: "/CMT_Assets/IT/Willie.png", department: 2 },
    { id: 14, cardImage: "/CMT_Assets/IT/Kellen.png", department: 2 },
    { id: 15, cardImage: "/CMT_Assets/IT/Kaylinn.png", department: 2 },
    { id: 16, cardImage: "/CMT_Assets/IT/Melvin.png", department: 2 },
    { id: 17, cardImage: "/CMT_Assets/Wirus/Edward.png", department: 3 },
    { id: 18, cardImage: "/CMT_Assets/Wirus/Dhyfa.png", department: 3 },
    { id: 19, cardImage: "/CMT_Assets/Wirus/Cheryn.png", department: 3 },
    { id: 20, cardImage: "/CMT_Assets/Wirus/Kesya.png", department: 3 },
    { id: 21, cardImage: "/CMT_Assets/Wirus/Carlo.png", department: 3 },
    { id: 22, cardImage: "/CMT_Assets/Wirus/Michelle.png", department: 3 },
    { id: 23, cardImage: "/CMT_Assets/Wirus/Avicienna.png", department: 3 },
    { id: 24, cardImage: "/CMT_Assets/Medpub/Patricia.png", department: 4 },
    { id: 25, cardImage: "/CMT_Assets/Medpub/Catherine.png", department: 4 },
    { id: 26, cardImage: "/CMT_Assets/Medpub/Carlene.png", department: 4 },
    { id: 27, cardImage: "/CMT_Assets/Medpub/Raya.png", department: 4 },
    { id: 28, cardImage: "/CMT_Assets/Medpub/Calvin.png", department: 4 },
    { id: 29, cardImage: "/CMT_Assets/Medpub/Jessica.png", department: 4 },
    { id: 30, cardImage: "/CMT_Assets/Medpub/Bryan.png", department: 4 },
    { id: 31, cardImage: "/CMT_Assets/Medpub/Jade.png", department: 4 },
    { id: 32, cardImage: "/CMT_Assets/Depol/Felix.png", department: 5 },
    { id: 33, cardImage: "/CMT_Assets/Depol/James.png", department: 5 },
    { id: 34, cardImage: "/CMT_Assets/Depol/Nadya.png", department: 5 },
    { id: 35, cardImage: "/CMT_Assets/Depol/Fidel.png", department: 5 },
    { id: 36, cardImage: "/CMT_Assets/Depol/Louie.png", department: 5 },
    { id: 37, cardImage: "/CMT_Assets/Depol/Miselle.png", department: 5 },
    { id: 38, cardImage: "/CMT_Assets/Depol/Vincent.png", department: 5 },
    { id: 39, cardImage: "/CMT_Assets/Sosbud/Felicia.png", department: 6 },
    { id: 40, cardImage: "/CMT_Assets/Sosbud/Brian.png", department: 6 },
    { id: 41, cardImage: "/CMT_Assets/Sosbud/Jessica.png", department: 6 },
    { id: 42, cardImage: "/CMT_Assets/Sosbud/Angelene.png", department: 6 },
    { id: 43, cardImage: "/CMT_Assets/Sosbud/Rionaldi.png", department: 6 },
    { id: 44, cardImage: "/CMT_Assets/Sosbud/Meagan.png", department: 6 },
    { id: 45, cardImage: "/CMT_Assets/Sosbud/Cayleen.png", department: 6 },
  ];

  // Corrected layout configurations
  const departmentLayouts = {
    0: { type: "6" },       // BPH (6 members)
    1: { type: "5" },   // AKAD (5 members)
    2: { type: "5" },   // IT (5 members)
    3: { type: "7" },   // WIRUS (7 members)
    4: { type: "8" },       // MEDPUB (8 members)
    5: { type: "7" },   // DEPOL (7 members)
    6: { type: "7" },   // SOSBUD (7 members)
  };

  // Member card component with responsive design
  function MemberCard({ member }) {
    return (
      <>
      
        <div className="w-full rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 aspect-[3/4] max-w-[200px]">
          <Image
            src={member.cardImage}
            alt={`Card for Member ${member.id}`}
            width={200}
            height={260}
            className="object-cover"
            objectFit="contain"
          />
        </div>
      </>
    );
  }

  // Layout component with custom arrangements
  function Layout({ type, members }) {
    switch(type) {
      case "6":
        if (members.length !== 6) return <div>Invalid member count</div>;
        return (
          <div className="grid grid-rows-2 justify-center gap-2 md:gap-6">
            {/* First row: 3 cards */}
            <div className="gap-0 md:gap-4 flex flex-row justify-center">
              <MemberCard member={members[0]} />
              <MemberCard member={members[1]} />
              <MemberCard member={members[2]} />
            </div>
            {/* Second row: 3 cards */}
            <div className=" gap-0 md:gap-4 flex flex-row justify-center">
              <MemberCard member={members[3]} />
              <MemberCard member={members[4]} />
              <MemberCard member={members[5]} />
            </div>
          </div>
        );
      case "5":
        if (members.length !== 5) return <div>Invalid member count</div>;
        return (
          <div className="grid grid-rows-2 justify-center gap-2 md:gap-8">
            {/* First row: 3 cards */}
            <div className="gap-2 md:gap-8 flex flex-row justify-center">
              <MemberCard member={members[0]} />
              <MemberCard member={members[1]} />
              <MemberCard member={members[2]} />
            </div>
            {/* Second row: 2 cards */}
            <div className="px-14 md:px-0 gap-2 md:gap-8 flex flex-row justify-center">
              <MemberCard member={members[3]} />
              <MemberCard member={members[4]} />
            </div>
          </div>
        );
    
      case "7":
        if (members.length !== 7) return <div>Invalid member count</div>;
        return (
          <div className="grid grid-rows-2 justify-center gap-0 md:gap-4">
            {/* First row: 4 cards */}
            <div className="gap-0 md:gap-8 flex flex-row justify-center">
              <MemberCard member={members[0]} />
              <MemberCard member={members[1]} />
              <MemberCard member={members[2]} />
              <MemberCard member={members[3]} />
            </div>
            {/* Second row: 3 cards */}
            <div className=" px-8 md:px:0 gap-0 md:gap-8 flex flex-row justify-center">
              <MemberCard member={members[4]} />
              <MemberCard member={members[5]} />
              <MemberCard member={members[6]} />
            </div>
          </div>
        );
      case "8":
        if (members.length !== 8) return <div>Invalid member count</div>;
        return (
          <div className="grid grid-rows-2 justify-center gap-4">
            {/* First row: 4 cards */}
            <div className="flex-nowrap gap-1 md:gap-8 flex flex-row justify-center">
              <MemberCard member={members[0]} />
              <MemberCard member={members[1]} />
              <MemberCard member={members[2]} />
              <MemberCard member={members[3]} />
            </div>
            {/* Second row: 4 cards */}
            <div className="flex-nowrap gap-1 md:gap-8 flex flex-row justify-center">
              <MemberCard member={members[4]} />
              <MemberCard member={members[5]} />
              <MemberCard member={members[6]} />
              <MemberCard member={members[7]} />
            </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            {members.map((member, index) => (
              <div key={index}><MemberCard member={member} /></div>
            ))}
          </div>
        );
    }
  }

  return (
    <>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <div className="bg-black text-white font-[500] font-montserrat">
        {/* Banner Section */}
        <div className="relative h-[50vh] xl:h-screen w-full overflow-hidden mb-[2%] ">
          <Image
            src="/CMT_Assets/Full/Banner.png"
            alt="Banner Background"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              <span className="block text-4xl md:text-6xl sm:text-4xl -mb-2 md:-mb-4 shadow-md">
                meet the
              </span>
              <span className="block text-6xl md:text-8xl sm:text-6xl -mt-2 md:-mt-4">
                committee
              </span>
            </h1>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className=" flex flex-wrap justify-center space-x-5 md:space-x-4 mt-10 xl:mt-0 mb-0 xl:mb-3 w-full md:px-2 xl:px-0">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(index)}
              className={`px-3 md:px-6 py-1 text-sm rounded-full ${
                activeSection === index
                  ? "bg-black border-white border-[2px]"
                  : "bg-black hover:bg-white hover:text-black"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Main Content */}  
        <div className="flex flex-col md:flex-row items-center justify-center xl:pl-[8%] xl:pr-[2%]  pb-7 md:pb-0 ">
          <div className="relative w-[60vh] h-[40vh] xl:w-[70%] xl:h-[80vh] overflow-hidden rounded-lg shadow-lg">
            {sections.map((section, index) => (
              <Image
                key={section.id}
                src={section.image}
                alt={`Image for ${section.description}`}
                fill
                className={`absolute object-cover transition-opacity duration-400 ease-in-out ${
                  activeSection === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col  items-center md:items-start w-[50%] space-y-4">
            <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold text-center md:text-left leading-tight whitespace-nowrap md:whitespace-pre-line">
              {sections[activeSection].description}
            </h2>
            <button
              onClick={() => setShowOverlay(true)}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-700"
            >
              view members
            </button>
          </div>
        </div>

        {/* Overlay Section */}
        {showOverlay && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={() => setShowOverlay(false)}
          >
            <div className="p-2 max-w-5xl w-full mx-auto">
              {departmentLayouts[activeSection] && (
                <Layout
                  type={departmentLayouts[activeSection].type}
                  members={members
                    .filter((member) => member.department === activeSection)
                    .sort((a, b) => a.id - b.id)
                  }
                />
              )}            
            </div>
          </div>
        )}      
      </div>
    </>
  );
}