import React from 'react';

export default function Map() {
  return (
    <div className="w-full px-4 py-16">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Our Location</h2>

      <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.6816825196913!2d-114.01138242394416!3d51.080503643106874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165e930b9ecab%3A0x83ec140ea79b9309!2s2115%2027%20Ave%20NE%2C%20Calgary%2C%20AB%20T2E%207E4%2C%20Canada!5e0!3m2!1sen!2sca!4v1717078965107!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
