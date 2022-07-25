import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 80%;
  text-transform: uppercase;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};

  :before,
  :after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }

  :not(:empty)::before {
    margin-right: 15px;
  }

  :not(:empty)::after {
    margin-left: 15px;
  }
`
