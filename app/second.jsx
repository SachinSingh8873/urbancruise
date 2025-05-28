import React from "react";

const Second = () => {
  return (
    <div
      id="about_us"
      className="container mx-auto px-4 min-h-[50vh] md:min-h-[60vh] flex items-center justify-center
       -translate-y-20"
    >
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2">
            <h2
              className="text-left shadow-lg mb-2"
              data-wow-offset="200"
              data-wow-delay="100ms"
              style={{
                backgroundColor: "#ffad0054",
                display: "inline-block",
                fontFamily: "Roboto Condensed",
                color: "#FA8C0A",
                padding: "4px 10px",
                borderRadius: "7px",
                textTransform: "uppercase",
                fontSize: "28px",
                lineHeight: "40px",
              }}
            >
              <strong className="block text-orange-500 text-base md:text-lg">
                Hire Tempo Traveller in Delhi
              </strong>
            </h2>

            <h1
              className="text-xl md:text-3xl font-bold text-black"
              style={{
                fontFamily: "'Abril Fatface', serif",
              }}
            >
              Tempo Traveller on Rent in Delhi
            </h1>

            <div className="text-gray-800 text-justify mt-4 space-y-4">
              <p>
                A <strong>Tempo Traveller (or Force Traveller)</strong> is the
                most convenient option for travelling with Friends or Family
                members. Manufactured by <strong>Force Motors</strong>, it can
                accommodate <strong>9 to 26 passengers</strong> & take them from
                one destination to another comfortably. We provide Custom
                Designed <strong>Travellers Bus</strong> with Best-in-Class
                Amenities required for a Comfortable Journey. Find us in{" "}
                <strong>
                  7 Cities of India - Mumbai, Thane, Pune, Delhi, Noida,
                  Gurugram, Ghaziabad.
                </strong>
              </p>
              <p>
                <strong>Urban Cruise</strong> is the Most Preferred{" "}
                <strong>Traveller Service</strong> in <strong>Delhiabad.</strong>{" "}
                Our fleet consists of the latest models of{" "}
                <strong>
                  seater Tempo Traveller with 9, 12, 13, 14, 17, 20, and 26
                  seating capacity
                </strong>{" "}
                and equipped with all Safety & Sanitisation measures, driven by
                Trained & Experienced drivers (with a smartphone for Google
                Maps).
              </p>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 py-4 rounded-lg shadow-lg bg-white flex items-center justify-center">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
            >
              <iframe
                title="Urban Cruise - Bus Rental Services | Innova, Tempo Traveller, Mini Bus, Luxury Bus"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/yrUUVpiBL_Y?feature=oembed"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
