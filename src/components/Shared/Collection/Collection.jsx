import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import CollectionItemLoader from './CollectionItemLoader';
import DefaultCollectionItem from './DefaultCollectionItem';
import CollectionSeeMore from './CollectionSeeMore';

import constants from '../../ReactConstants';

const Ul = styled.ul`
  border-radius: ${constants.borderRadius};

  .see-more {
    text-align: center;
    color: ${constants.proceedFontColor};
    &:hover {
      cursor: pointer;
      background: ${constants.alternateHoverColor};
  }
  }
`;


class Collection extends React.Component {
    state = { }

    render() {
      const { isLoading, hasMoreData, children } = this.props;
      return (
        <Ul className="collection">
          {/* <CollectionItem
            title="Upcoming Reservation"
            primaryContent="July 2, 2019 @ 12:00 PM - 12:30 PM"
            secondaryContent="7860 Buena Park, CA"
            primaryIcon="schedule"
            secondaryIcon="schedule"
            primaryIconBackground={constants.proceedFontColor}
            onClick={() => {}}
          />
          <CollectionGroup name="Today">
            <CollectionItem title="Upcoming Reservation" primaryIcon="grade" onClick={() => {}} />
            <CollectionItem title="New Promo" primaryContent="hahaha" primaryIcon="grade" />
          </CollectionGroup> */}
          {
            children && children.length < 1
              ? children
              : (<DefaultCollectionItem />)
          }

          { isLoading
            ? <CollectionItemLoader />
            : null
          }
          { !isLoading && hasMoreData
            // eslint-disable-next-line no-console
            ? <CollectionSeeMore onClick={() => console.log('Dito yung load logic')} />
            : null
        }
        </Ul>
      );
    }
}

Collection.defaultProps = {
  isLoading: false,
  hasMoreData: false,
  children: null,
};

Collection.propTypes = {
  isLoading: propTypes.bool,
  hasMoreData: propTypes.bool,
  children: propTypes.node,
};

export default Collection;
