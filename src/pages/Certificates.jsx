import React, { useState, useEffect } from 'react';
import Certificate_TreasureHunt from '../assets/Certificate_treasureHunt.webp';
import Certificate_BizQuiz from '../assets/Certificate_Bizquiz.webp';
import Certificate_Ideathon from '../assets/Certificate_Ideathon.webp';
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [certificateReady, setCertificateReady] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  // Dummy data for events and students
  const events = [
    { id: 'treasure-hunt', name: 'Treasure Hunt', certificateTemplate: Certificate_TreasureHunt },
    { id: 'biz-quiz', name: 'Biz Quiz', certificateTemplate: Certificate_BizQuiz },
    { id: 'Ideathon', name: 'Ideathon', certificateTemplate: Certificate_Ideathon }
  ];

  const studentsData = {
    'treasure-hunt': [
      { id: 1, name: 'MUHAMMED RISWAN C' },
      { id: 2, name: 'AMJAD PA' },
      { id: 3, name: 'SHAHEEN C' },
      { id: 4, name: 'FATHIMA JANNAH' },
      { id: 5, name: 'SANOOP KRISHNAN KP' },
      { id: 6, name: 'ALI AMAN T' },
      { id: 7, name: 'RANJITH RAJ AP' },
      { id: 8, name: 'SALIK ROSHAN' },
      { id: 9, name: 'AKASH P' },
      { id: 10, name: 'NAVANEETH M' },
      { id: 11, name: 'PRANAV M' },
      { id: 12, name: 'ASHWAS EMMANUEL K' },
      { id: 13, name: 'AMEEQ' },
      { id: 14, name: 'SAFWAN' },
      { id: 15, name: 'SHAHAS' },
      { id: 16, name: 'MUHSIN' },
      { id: 17, name: 'SINAN SABIC' },
      { id: 18, name: 'MUHAMMED IYAS' },
      { id: 19, name: 'AMEEN BADUSHA' },
      { id: 20, name: 'ZAYID SHIHAB THANGAL' },
      { id: 21, name: 'IBRAHIM BADUSHA' },
      { id: 22, name: 'RIFAN' },
      { id: 23, name: 'SALAH' },
      { id: 24, name: 'SAVAD' },
      { id: 25, name: 'ABDUL MUHSIN PK' },
      { id: 26, name: 'SHAMMAS MUHAMMED PP' },
      { id: 27, name: 'MUHAMMED SAHEER' },
      { id: 28, name: 'NIHAD PT' },
      { id: 29, name: 'MUHAMMED SABEEL KT' },
      { id: 30, name: 'SIBNA SHERIN T' },
      { id: 31, name: 'MISHARI V' },
      { id: 32, name: 'GAYATHRI P' },
      { id: 33, name: 'MEHABOOB AK' },
      { id: 34, name: 'AMEEN AHSAN' },
      { id: 35, name: 'MIDLAL PP' },
      { id: 36, name: 'ANSAF P' },
      { id: 37, name: 'MUHAMMED NISHAD' },
      { id: 38, name: 'FIDHIN P' },
      { id: 39, name: 'AYSHA NIHMA' },
      { id: 40, name: 'MUHAMMED MAZIN EV' },
      { id: 41, name: 'MOHAMMED SANAD' },
      { id: 42, name: 'ANSHIF' },
      { id: 43, name: 'PRANAV' },
      { id: 44, name: 'FADIL' },
      { id: 45, name: 'DHIYAN' },
      { id: 46, name: 'RISHAL' },
      { id: 47, name: 'SWALIH P' },
      { id: 48, name: 'NIDA T' },
      { id: 49, name: 'SHIFANA SHERI C' },
      { id: 50, name: 'MUNSHIDA C' },
      { id: 51, name: 'VININ P' },
      { id: 52, name: 'SHANIBA SHERIN MK' },
      { id: 53, name: 'SHAHMA V' },
      { id: 54, name: 'RISHAN P' },
      { id: 55, name: 'JUNAID T' },
      { id: 56, name: 'RIDHA SHERIN P' },
      { id: 57, name: 'SHAMNA KK' },
      { id: 58, name: 'ADIP PT' },
      { id: 59, name: 'NIHAL NESRUDHEEN' }
    ],
    'biz-quiz': [
      { id: 1, name: 'MUHAMMED RASHID' },
      { id: 2, name: 'RIZWAN' }
    ],
    'ideathon': {
      participation_certificate: [
        { id: 1, name: 'ABHAY DILEEP' },
        { id: 2, name: 'MUHAMMED SAKKARIYA K' },
        { id: 3, name: 'HIBA FARHA K T' },
        { id: 4, name: 'SHAMILA FIDHA K' },
        { id: 5, name: 'LIYANA SIDHEEQ' },
        { id: 6, name: 'AMNA NOURIN T' },
        { id: 7, name: 'DIYA FATHIMA PV' },
        { id: 8, name: 'ABRAAR ALI E' },
        { id: 9, name: 'FATHIMA SHIFA' },
        { id: 10, name: 'FATHIMA SHIYA' },
        { id: 11, name: 'AYESHA RIDHA' },
        { id: 12, name: 'FATHIMA NADHA KT' },
        { id: 13, name: 'NOFA PV' },
        { id: 14, name: 'FATHIMA MIDHA' },
        { id: 15, name: 'MUHAMMED HARSHAD' }
      ]
    }
  };
  


  // Update filtered students when event changes or search term changes
  useEffect(() => {
    if (selectedEvent && studentsData[selectedEvent]) {
      if (searchTerm.trim() === '') {
        setFilteredStudents(studentsData[selectedEvent]);
      } else {
        const filtered = studentsData[selectedEvent].filter(
          student => student.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredStudents(filtered);
      }
    } else {
      setFilteredStudents([]);
    }
  }, [selectedEvent, searchTerm]);

  // Generate certificate with canvas
  const generateCertificate = (student) => {
    setSelectedStudent(student);
    setCertificateReady(true);
  };

  // Download certificate as image
  const downloadCertificate = () => {
    if (!selectedStudent || !selectedEvent) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the certificate template
      ctx.drawImage(img, 0, 0);

      // Add student name
      ctx.font = 'bold 70px Arial ';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      const nameYPosition = canvas.height / 2 + 100;
      ctx.fillText(selectedStudent.name, canvas.width / 2, canvas.height / 2 + 140);

      // Download the certificate
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${selectedEvent}_certificate.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    img.src = events.find(event => event.id === selectedEvent).certificateTemplate;
  };

  return (
    <div ref={parent} className="event-container overflow-x-hidden flex flex-col" style={{ background: 'linear-gradient(to bottom, #8B0000, #000000)', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <h1 className="text-center text-3xl font-bold mb-8">Event Certificates</h1>

      {/* Event Selection Tab Bar */}
      <div className="event-tabs mb-6 flex justify-center">
        {events.map(event => (
          <button
            key={event.id}
            className={`px-6 py-3 mx-2 rounded-t-lg font-semibold transition-all cursor-pointer ${selectedEvent === event.id ? 'bg-red-800 text-white' : 'bg-gray-800 text-gray-300'}`}
            onClick={() => {
              setSelectedEvent(event.id);
              setSelectedStudent(null);
              setCertificateReady(false);
            }}
          >
            {event.name}
          </button>
        ))}
      </div>

      {!selectedEvent && (
        <p className="text-center text-lg">Select an event to view participants</p>
      )}

      {/* Student Search Bar */}
      {selectedEvent && (
        <div className="search-container mb-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by your name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-red-700 focus:border-red-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Certificate Preview */}
      {certificateReady && selectedStudent && (
        <div className="certificate-container max-w-4xl mx-auto mt-8 bg-gray-900 rounded-lg p-6 mb-10">
          <div className='flex justify-between items-center mb-6'>
            <h2 className="text-xl font-semibold mb-4">Certificate Preview</h2>
            <button
              onClick={() => setCertificateReady(false)}
              className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
          <div className="relative mb-4 " style={{ maxWidth: '600px', margin: '0 auto' }}>
            <img
              src={events.find(event => event.id === selectedEvent).certificateTemplate}
              alt="Certificate Template"
              className="w-full h-auto"
            />
            {/* Name placement */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="text-center absolute w-full whitespace-nowrap overflow-hidden text-[5px] sm:text-[10px] md:text-[14px] "
                style={{
                  top: '54%', // Adjust based on certificate design
                  transform: 'translateY(-50%)',
                  fontWeight: 'bold',
                  color: '#000000',
                }}
              >
                {selectedStudent.name}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="px-6 py-3 bg-red-700 hover:bg-red-600 rounded font-semibold transition-colors cursor-pointer"

              onClick={downloadCertificate}
            >
              Download Certificate
            </button>
          </div>
        </div>
      )}

      {/* Students List */}
      {selectedEvent && (
        <div className="students-list mb-6">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-3">{events.find(e => e.id === selectedEvent).name} - Participants</h2>
            {filteredStudents.length > 0 ? (
              <ul className="divide-y divide-gray-700" ref={parent}>
                {filteredStudents.map(student => (
                  <li key={student.id} className="py-3 flex justify-between items-center flex-wrap">
                    <div>
                      <p className="text-lg font-medium">{student.name}</p>
                    </div>
                    <div className='flex items-end justify-end w-full'>
                      <button
                        className="px-4 py-1 sm:py-2 bg-red-700 hover:bg-red-600 rounded transition-colors"
                        onClick={() => generateCertificate(student)}
                      >
                        Show Certificate
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center py-4 text-gray-400">No students found</p>
            )}
          </div>
        </div>
      )}

      <p className='text-center mt-4 flex-1 flex justify-center items-end'>
        &copy; IEDC Tech Team 2k25
      </p>
    </div>
  );
};

export default Event;