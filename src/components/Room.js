import MainHeader from './MainHeader';
import ResourceMetadata from './ResourceMetadata';
import RoomCanvasContainer from '../containers/RoomCanvasContainer';
import HoveredObjects from './HoveredObjects';

const Room = ({
  room,
  baseTiles,
  roomgfc,
  hoveredObject,
  setHoveredObject,
  selectedObjects,
  toggleObjectState,
  hoveredBox,
}) => {
  const { width } = room.header;
  const zoom = 2;

  return (
    <>
      <MainHeader title={`Room ${room.metadata.id}`}>
        <ResourceMetadata metadata={room.metadata} />
      </MainHeader>
      <div
        className="relative overflow-hidden"
        style={{ maxWidth: width * 8 * zoom }}>
        <RoomCanvasContainer
          room={room}
          baseTiles={baseTiles}
          roomgfc={roomgfc}
          selectedObjects={selectedObjects}
          hoveredBox={hoveredBox}
          zoom={zoom}
        />
        <HoveredObjects
          width={room.header.width}
          height={room.header.height}
          objects={room.objects}
          hoveredObject={hoveredObject}
          setHoveredObject={setHoveredObject}
          toggleObjectState={toggleObjectState}
        />
      </div>
    </>
  );
};

export default Room;
