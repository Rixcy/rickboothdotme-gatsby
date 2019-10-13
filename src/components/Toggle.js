import React from 'react'
import styled from 'styled-components'

const DarkModeToggle = styled.div`
  display: flex;
  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: #ffe600;
    cursor: pointer;
    transition: color 0.3s ease;
    &:last-child {
      color: #666;
    }
    &:focus {
      outline: none;
    }
    .dark-mode & {
      color: #999;
      &:last-child {
        color: #ffffff;
      }
    }
  }
`

const ToggleControl = styled.span`
  position: relative;
  padding: 0 8px;
  display: flex;
  align-items: center;
`

const DarkModeCheck = styled.input`
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;
  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }
`

const Toggle = ({ darkMode, setDarkMode }) => (
  <DarkModeToggle>
    <button type="button" onClick={() => setDarkMode(false)}>
      ☀
    </button>
    <ToggleControl>
      <DarkModeCheck
        id="dmcheck"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label htmlFor="dmcheck" />
    </ToggleControl>
    <button type="button" onClick={() => setDarkMode(true)}>
      ☾
    </button>
  </DarkModeToggle>
)

export default Toggle
