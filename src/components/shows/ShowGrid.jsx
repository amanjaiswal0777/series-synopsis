import { FlexGrid } from '../common/FlexGrid';
import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from '../shows/ShowCard';
import NotFound from '../../no-image.png';

const ShowGrid = ({ shows }) => {

  const [starredShows, dispatchStarred] = useStarredShows();
  //console.log(starredShows);
  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map(data => (
        
        <ShowCard  // sending props to ShowCard  
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : NotFound}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
