import Image from 'next/image';
import COPA from '../../../../../public/COPA/COPA.png';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

// Set up Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Set up Legend font (assuming it's a local font)
const legend = localFont({
  src: '../../../../../public/FONT/Legend_Bold.otf',
  variable: '--font-legend',
  display: 'swap',
});

export default async function ParticipantPage({ params }) {
  const { id: participantId } = params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SCRIPT_URL}?id=${participantId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data)

    if (data.error) {
      return (
        <div className={`min-h-screen bg-gray-100 flex items-center justify-center p-4 ${montserrat.variable}`}>
          <div className="bg-black text-white p-6 rounded-lg shadow-md max-w-md w-full font-sans">
            <h2 className="text-xl font-bold mb-4 text-red-500">Error</h2>
            <p className="text-red-400">{data.error}</p>
          </div>
        </div>
      );
    }

    return (
      <div className={`min-h-screen bg-gray-100 flex items-center justify-center p-4 ${montserrat.variable} ${legend.variable}`}>
        <div className="bg-black text-white max-w-md w-full rounded-lg overflow-hidden shadow-xl font-sans">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="text-xl font-bold font-montserrat">DISTRICT | {data.cabang?.toUpperCase()}</div>
            <Image src={COPA} alt="COPA Logo" width={100} height={40} />
          </div>
          
          {/* Athlete Image */}
          <div className="relative">
            <div className="w-full aspect-[3/4] bg-gray-300">
              {/* Replace with actual athlete image */}
              {data.image ? (
                <Image 
                  src={data.image} 
                  alt={data.name} 
                  layout="fill" 
                  objectFit="cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 font-montserrat">No image available</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Athlete Name */}
          <div className="p-6 pt-4">
            <h1 className="text-5xl font-extrabold tracking-wider leading-tight font-legend">
              {data.name?.split(' ').map((word, index) => (
                <div key={index}>{word.toUpperCase()}</div>
              ))}
            </h1>
            
            {/* Sport Category */}
            <div className="mt-6 mb-8">
              <div className="bg-red-600 text-white py-2 px-4 inline-block">
                <span className="font-medium font-montserrat">{data.cabang} | {data.category}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4 mt-4">
              <div className="mb-4">
                <p className="text-gray-400 font-montserrat">Next Match:</p>
                <p className="text-xl font-montserrat">{data.nextMatch}</p>
              </div>
              
              <div>
                <p className="text-gray-400 font-montserrat">Bracket Status:</p>
                <p className="text-xl font-montserrat">{data.bracketStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className={`min-h-screen bg-gray-100 flex items-center justify-center p-4 ${montserrat.variable}`}>
        <div className="bg-black text-white p-6 rounded-lg shadow-md max-w-md w-full font-sans">
          <h2 className="text-xl font-bold mb-4 text-red-500">Error</h2>
          <p className="text-red-400">
            An error occurred while loading the participant data. Please try again later.
          </p>
          <p className="text-sm text-gray-500 mt-2">Error: {error.message}</p>
        </div>
      </div>
    );
  }
}