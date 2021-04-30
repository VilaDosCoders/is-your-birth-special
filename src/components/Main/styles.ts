import styled from 'styled-components'

export const Wrapper = styled.main`
  background: #161616;
  color: #fff;
  width: 100%;
  padding: 3rem;
  display: block;
  text-align: center;
  align-items: center;
`
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`
export const FormSelectWrapper = styled.div`
  margin: 2rem;
`
export const Select = styled.select`
  font-size: 16px;
  border: 3px solid #7f6df2;
  height: 34px;
  width: 150px;
  padding: 5px 35px 5px 5px;
  appearance: none;
`
export const SubmitButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #7f6df2;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  &:hover {
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color: #e9e9e9;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`
export const HeaderTitle = styled.h1`
  font-size: 6rem;
`

export const HeaderDescription = styled.p`
  font-size: 2rem;
  color: #dcddde;
`
export const ContentTitle = styled.h3`
  font-size: 2rem;
  color: #dcddde;
  border-bottom: 1px solid #7f6df2;
  position: sticky;
  background-color: #161616;
  top: 0;
`
export const Label = styled.label`
  font-size: 2rem;
  color: #dcddde;
  margin: 0px 10px;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const ContentDescription = styled.span`
  font-size: 1.5rem;
  color: #dcddde;
`

export const ContentWrapper = styled.div`
  max-width: 600px;
  padding: 2rem;
`

export const Ilustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
