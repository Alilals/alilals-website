import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactInfo = () => {
  const offices = [
    {
      name: "Head Office",
      address:
        "56 Murad House, Pine Lane-8, Kursk Rajbagh, Srinagar-190008, Jammu & Kashmir",
      phone: "0194-796-1490",
      email: "info@alilals.com",
    },
    {
      name: "Sub Office",
      address: "Aash Office Circular Road, Tahab Crossing, Pulwama",
      phone: "8899-888-983",
      email: "info@alilals.com",
    },
    {
      name: "Soil Testing Lab",
      address: "Alamdar Road, Chadoora, near Khyber Girls School",
      phone: "0195-146-4419",
      email: "info@alilals.com",
    },
  ];

  return (
    <div className="md:py-12 px-6 bg-[#F6F4EC] md:px-20">
      <div className="grid gap-8">
        {offices.map((office, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#44A05B] mb-4">
              {office.name}
            </h3>
            <div className="flex items-start mb-4">
              <MapPinIcon className="h-6 w-6 text-[#44A05B] mr-3" />
              <p className="text-[#202221]">{office.address}</p>
            </div>
            <div className="flex items-start mb-4">
              <PhoneIcon className="h-6 w-6 text-[#44A05B] mr-3" />
              <p className="text-[#202221]">{office.phone}</p>
            </div>
            <div className="flex items-start">
              <EnvelopeIcon className="h-6 w-6 text-[#44A05B] mr-3" />
              <p className="text-[#202221]">{office.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
