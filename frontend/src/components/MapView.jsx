import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function FlyToState({ jobs }) {
  const map = useMap();

  React.useEffect(() => {
    if (jobs.length > 0) {
      const firstJob = jobs[0];
      map.flyTo([firstJob.latitude, firstJob.longitude], 6);
    }
  }, [jobs, map]);

  return null;
}

const MapView = ({ jobs, setSelectedJob }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center p-6">
        <div className="h-160 w-215">
          <MapContainer
            center={[-25.2744, 133.7751]} // Default Australia center
            zoom={4.5}
            minZoom={4}
            maxZoom={40}
            scrollWheelZoom={true}
            maxBounds={[
              [-60, 95], // Further southwest (south and west)
              [5, 170], // Northeast bound (QLD top right)
            ]}
            zoomSnap={0.25}
            className=" flex h-full w-full z-10 rounded-xl"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FlyToState jobs={jobs} />

            {jobs
              .filter(
                (job) =>
                  job.latitude !== undefined && job.longitude !== undefined
              )
              .map((job, index) => (
                <Marker key={index} position={[job.latitude, job.longitude]}>
                  <Popup>
                    <div>
                      <h3 className="font-semibold">{job.jobTitle}</h3>
                      <p className="text-sm text-gray-600">
                        {job.companyName || "Unknown Company"}
                      </p>
                      <p>{job.description}</p>
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="mt-2 text-blue-600 underline cursor-pointer"
                      >
                        See More
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapView;
