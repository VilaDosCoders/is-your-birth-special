import styled from 'styled-components'

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const EventsContainerTitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`

export const EventsContainerWikiLink = styled.a`
  font-size: 2rem;
  color: #fff;
`

export const EventsContainerList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const EventsContainerListItem = styled.li`
  list-style: none;
  text-align: left;
`

export const EventsContainerListItemLink = styled.a`
  color: #000;
  text-decoration: none;

  background: #fff;
  color: #000;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.5rem;

  width: 15%;
  min-height: 150px;

  opacity: 0.9;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`

export const EventsContainerListItemDate = styled.strong`
  font-size: 1.5rem;
`

export const EventsContainerListItemDescription = styled.p`
  font-size: 1.2rem;
`

export const LoadMoreButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;

  font-weight: bold;
  cursor: pointer;

  margin: 1rem auto 0;
`
