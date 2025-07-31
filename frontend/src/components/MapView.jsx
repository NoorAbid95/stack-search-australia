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

// Component to center the map when job list changes
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
    <div className="h-[500px] w-full">
      <MapContainer
        center={[-25.2744, 133.7751]} // Default Australia center
        zoom={4}
        minZoom={4}
        maxZoom={10}
        scrollWheelZoom={true}
        maxBounds={[
          [-45, 110], // Southwest bound (WA bottom left)
          [-8, 155], // Northeast bound (QLD top right)
        ]}
        maxBoundsViscosity={1.0}
        zoomSnap={0.25}
        className="h-full w-full z-10 rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToState jobs={jobs} />

        {jobs
          .filter(
            (job) => job.latitude !== undefined && job.longitude !== undefined
          )
          .map((job, index) => (
            <Marker
              key={index}
              position={[job.latitude, job.longitude]}
              eventHandlers={{
                click: () => setSelectedJob(job),
              }}
            >
              <Popup>
                <div>
                  <h3 className="font-semibold">{job.jobTitle}</h3>
                  <p className="text-sm text-gray-600">
                    {job.companyName || "Unknown Company"}
                  </p>
                  <p>{job.description}</p>
                  <a href={job.redirectUrl} target="_blank">
                    Apply
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
