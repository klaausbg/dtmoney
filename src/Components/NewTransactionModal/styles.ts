import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e7ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-bbody);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
  }
`;
