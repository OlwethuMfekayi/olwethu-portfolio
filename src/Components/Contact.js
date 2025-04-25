import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      details: 'olwethuasande54@gmail.com',
      link: 'mailto:olwethuasande54@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      details: '+27 83 520 7083',
      link: 'tel:+27835207083'
    },
    {
      icon: faLocationDot,
      title: 'Location',
      details: 'Richards Bay, South Africa',
      link: ''
    }
  ];

  return (
    <div className="min-h-screen py-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl  w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Me</h1>

        <div className="space-y-6 ">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-gray-100 text-pink-500 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={item.icon} size="sm" />
              </div>
              <div>
                <h3 className=" font-bold">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-sm font-bold hover:underline">
                    {item.details}
                  </a>
                ) : (
                  <p className="text-sm font-bold ">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;


