import styled from 'styled-components';
import { Checkbox, DatePicker, TimePicker } from 'antd';
import { bgGray, blue, yellow } from '../Color';

const StyledCotanier = styled.div`
  margin-top: 2%;
  padding: 32px;
  background: ${props => (props.isStar ? yellow : bgGray)};
  display: flex;
  align-items: center;
`;
const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    height: 24px;
    width: 24px;
    &:after {
      width: 6px;
      height: 13px;
    }
  }
`;
const StyledInputTitle = styled.input`
  width: 100%;
  margin: 0 16px;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid #ccc;
  color: black;
  background: transparent;
  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${blue};
  }
`;
const StyledTitle = styled.p`
  font-size: 24px;
  margin: 0 16px;
  color: black;
  width: 100%;
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
`;
const StyledEditCotainer = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')};
  background: ${props => (props.isStar ? yellow : bgGray)};
  margin-top: 3px;
`;
const StyledEditContent = styled.div`
  max-width: 514px;
  margin: 0 auto;
  padding: 8px 0;
`;
const StyledDatePicker = styled(DatePicker)`
  width: 49%;
`;
const StyledTimePicker = styled(TimePicker)`
  width: 49%;
`;
const StyledDetilConatiner = styled.div`
  margin: 18px 0;
`;
const StyledDetilHeader = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
  > span {
    margin-left: 8px;
    display: inline-block;
  }
`;
const StyledDetilContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledFlexBox = styled.div`
  display: flex;
`;
export {
  StyledCotanier,
  StyledCheckbox,
  StyledInputTitle,
  StyledEditCotainer,
  StyledEditContent,
  StyledDatePicker,
  StyledTimePicker,
  StyledDetilConatiner,
  StyledDetilHeader,
  StyledDetilContent,
  StyledFlexBox,
  StyledTitle
};
