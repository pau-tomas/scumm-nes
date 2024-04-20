import ColumnListItem from './ColumnListItem';

const RoomsList = ({ rooms, currentId }) => {
  return rooms.map(({ metadata }) => {
    const selected = metadata.id === currentId;
    const path = `/rooms/${metadata.id}`;
    const label = `Room ${metadata.id}`;

    return (
      <ColumnListItem
        key={metadata.id}
        path={selected ? null : path}>
        {label}
      </ColumnListItem>
    );
  });
};

export default RoomsList;
