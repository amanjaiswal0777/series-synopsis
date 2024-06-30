import styled from 'styled-components';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { SearchImgWrapper, SearchCard } from '../common/SearchCard';  // used for CSS 
import { StarIcon } from '../common/StarIcon';
import NotFound from '../../no-image.png';

const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No-Description';

  const starBtnRef = useRef();

  const handleStarClick = () => {
    onStarMeClick(id);

    const starbtnEle = starBtnRef.current;

    if (!starbtnEle) return;

    if (isStarred) {
      starbtnEle.classList.remove('animate');
    } else {
      starbtnEle.classList.add('animate');
    }
  };
  return (
    <SearchCard>
      <SearchImgWrapper>
      <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          
        <img src={image ? image : NotFound} alt={name} />
        </Link>
      </SearchImgWrapper>
      <h1>{name}</h1>
      {console.log(name)}
      <p className='sum'>{summaryStripped}</p>

      <ActionSection>
        <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </Link>
        <StarBtn ref={starBtnRef} type="button" onClick={handleStarClick}>
          <StarIcon $active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  a {
    color:white;
    text-decoration-color: #000;
    // color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
