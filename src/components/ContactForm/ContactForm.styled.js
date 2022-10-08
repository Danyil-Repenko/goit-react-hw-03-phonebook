import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
width: 300px;
border: 2px solid #000000;
 box-shadow: 9px 9px 5px -1px #838383;
padding: 10px;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`

export const InputWrapper = styled.label`
display: flex;
flex-wrap: wrap;
margin-bottom: 10px;
width: 250px;`

export const Label = styled.span`
width: 100%;
`

export const Input = styled.input`
  width: 100%;
  padding: 9px 15px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;`

export const SubmitBtn = styled.button`
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1), border 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;

&:hover {
  background-color: #F3F4F6;
    border: 1px solid #000000;
  text-decoration: none;
  transition-duration: 0.1s;
}

&:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

&:focus {
  outline: 1px transparent;
}`